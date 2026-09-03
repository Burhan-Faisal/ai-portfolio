import { Github, Linkedin, Mail } from "lucide-react";
import portfolioConfig from "../data/config";

const Footer = () => {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left — Branding */}
          <div className="text-center md:text-left">
            <p className="text-lg font-bold text-white">{portfolioConfig.name}</p>
            <p className="text-sm text-slate-500 mt-1">
              {portfolioConfig.footerTagline}
            </p>
          </div>

          {/* Center — Social */}
          <div className="flex items-center gap-4">
            <a
              href={portfolioConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-500 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
              aria-label="GitHub profile"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={portfolioConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-500 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
              aria-label="LinkedIn profile"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${portfolioConfig.email}`}
              className="p-2 text-slate-500 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
              aria-label="Send email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* Right — Copyright */}
          <p className="text-sm text-slate-600">{portfolioConfig.copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
