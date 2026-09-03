import { useState, useEffect } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import portfolioConfig from "../data/config";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Scroll detection for blur background
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Active section tracking via IntersectionObserver
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (href) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-900/80 backdrop-blur-md shadow-lg shadow-slate-900/20"
          : "bg-transparent"
      }`}
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Left — Name & Badge */}
          <button
            onClick={() => scrollTo("#home")}
            className="flex items-center gap-3 group"
            aria-label="Scroll to top"
          >
            <span className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
              {portfolioConfig.name}
            </span>
            <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 text-[10px] font-semibold tracking-widest text-blue-400 bg-blue-500/10 border border-blue-500/20 rounded-full uppercase">
              <Sparkles className="w-3 h-3" />
              {portfolioConfig.role}
            </span>
          </button>

          {/* Center — Desktop Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  activeSection === link.href.slice(1)
                    ? "text-blue-400 bg-blue-500/10"
                    : "text-slate-400 hover:text-white hover:bg-slate-800/50"
                }`}
                aria-current={activeSection === link.href.slice(1) ? "page" : undefined}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Right — CTA + Hamburger */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => scrollTo("#contact")}
              className="hidden md:inline-flex px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-all hover:scale-105"
            >
              Let's Connect
            </button>

            {/* Mobile hamburger */}
            <button
              className="md:hidden p-2 text-slate-400 hover:text-white"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-slate-900/95 backdrop-blur-lg border-t border-slate-800">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className={`block w-full text-left px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                  activeSection === link.href.slice(1)
                    ? "text-blue-400 bg-blue-500/10"
                    : "text-slate-400 hover:text-white hover:bg-slate-800/50"
                }`}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo("#contact")}
              className="block w-full text-left px-4 py-3 text-sm font-medium text-blue-400 hover:text-blue-300"
            >
              Let's Connect →
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
