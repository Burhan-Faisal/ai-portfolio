import { useState, useEffect, useRef } from "react";
import { Github, Linkedin, Mail, ArrowRight, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import portfolioConfig from "../data/config";

// Terminal typing animation component
const TerminalVisual = () => {
  const [visibleLines, setVisibleLines] = useState(0);
  const lines = portfolioConfig.terminalLines;

  useEffect(() => {
    if (visibleLines < lines.length) {
      const delay = lines[visibleLines]?.type === "command" ? 400 : 250;
      const timer = setTimeout(() => setVisibleLines((v) => v + 1), delay);
      return () => clearTimeout(timer);
    }
  }, [visibleLines, lines.length]);

  return (
    <div className="rounded-xl border border-slate-700/50 bg-slate-800/60 backdrop-blur-sm overflow-hidden shadow-2xl shadow-slate-900/50">
      {/* Terminal header */}
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-slate-700/50 bg-slate-800/80">
        <div className="w-3 h-3 rounded-full bg-red-500/70" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
        <div className="w-3 h-3 rounded-full bg-green-500/70" />
        <span className="ml-2 text-xs text-slate-500 font-mono">train_model.py</span>
      </div>

      {/* Terminal body */}
      <div className="p-4 md:p-5 font-mono text-sm space-y-1 min-h-[200px]">
        {lines.slice(0, visibleLines).map((line, i) => {
          if (line.type === "blank") return <div key={i} className="h-3" />;

          let className = "text-slate-400";
          if (line.type === "command") className = "text-green-400 font-semibold";
          if (line.type === "success") className = "text-blue-400 font-semibold";

          return (
            <div key={i} className={className}>
              {line.text}
            </div>
          );
        })}
        {/* Blinking cursor */}
        {visibleLines < lines.length && (
          <span className="inline-block w-2 h-4 bg-green-400 animate-pulse" />
        )}
      </div>
    </div>
  );
};

// AI Pipeline visualization
const PipelineVisual = () => {
  const steps = portfolioConfig.pipelineSteps;

  return (
    <div className="mt-4 p-4 rounded-xl border border-slate-700/50 bg-slate-800/40">
      <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
        AI Pipeline
      </p>
      <div className="flex flex-col gap-1">
        {steps.map((step, i) => (
          <div key={step} className="flex items-center gap-2">
            {/* Dot with connector */}
            <div className="flex flex-col items-center">
              <div className="w-2.5 h-2.5 rounded-full bg-blue-500 border-2 border-blue-400/30 relative">
                <div className="absolute inset-0 rounded-full bg-blue-500 animate-ping opacity-20" style={{ animationDelay: `${i * 200}ms` }} />
              </div>
              {i < steps.length - 1 && (
                <div className="w-px h-4 bg-gradient-to-b from-blue-500/40 to-slate-700/30" />
              )}
            </div>
            <span className="text-sm text-slate-300">{step}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const Hero = () => {
  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const containerVariants = prefersReducedMotion
    ? {}
    : {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.12, delayChildren: 0.1 },
        },
      };

  const itemVariants = prefersReducedMotion
    ? {}
    : {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
      };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-16 overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900 to-blue-950/30" />
      <div className="absolute top-1/4 -right-1/4 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -left-1/4 w-[400px] h-[400px] bg-violet-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 relative w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Text */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Mobile Profile Photo (Visible on mobile & tablet) */}
            <motion.div variants={itemVariants} className="lg:hidden flex mb-6">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full blur-sm opacity-50" />
                <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-full overflow-hidden border-2 border-blue-400/50 shadow-xl bg-slate-800">
                  <img
                    src={portfolioConfig.profilePhoto}
                    alt={`${portfolioConfig.name} profile photo`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="absolute bottom-1 right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-slate-900 shadow-sm" />
              </div>
            </motion.div>

            {/* Badge */}
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold tracking-wider text-blue-400 bg-blue-500/10 border border-blue-500/20 rounded-full mb-6">
                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" />
                {portfolioConfig.heroBadge}
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1] mb-6"
            >
              {portfolioConfig.heroHeadline}
            </motion.h1>

            {/* Subtext */}
            <motion.p
              variants={itemVariants}
              className="text-lg text-slate-400 leading-relaxed mb-8 max-w-xl"
            >
              {portfolioConfig.heroSubtext}
            </motion.p>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-8">
              <button
                onClick={() =>
                  document
                    .querySelector("#projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-all hover:scale-105 group"
              >
                View My Projects
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
              <button
                onClick={() =>
                  document
                    .querySelector("#contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-slate-300 bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-slate-600 rounded-lg transition-all hover:scale-105"
              >
                Get In Touch
              </button>
            </motion.div>

            {/* Social */}
            <motion.div variants={itemVariants} className="flex items-center gap-3">
              <a
                href={portfolioConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 text-slate-500 hover:text-white hover:bg-slate-800 rounded-lg transition-all"
                aria-label="GitHub profile"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={portfolioConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 text-slate-500 hover:text-white hover:bg-slate-800 rounded-lg transition-all"
                aria-label="LinkedIn profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${portfolioConfig.email}`}
                className="p-2.5 text-slate-500 hover:text-white hover:bg-slate-800 rounded-lg transition-all"
                aria-label="Send email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right — Visual */}
          <motion.div
            initial={prefersReducedMotion ? {} : { opacity: 0, x: 30 }}
            animate={prefersReducedMotion ? {} : { opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="hidden lg:block"
          >
            {/* Profile Photo */}
            <div className="flex justify-center mb-8">
              <div className="relative group">
                {/* Glow ring */}
                <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-400 rounded-full blur-md opacity-40 group-hover:opacity-75 transition duration-500" />
                
                {/* Main photo frame — adjusted to w-48 h-48 (192px) or w-52 h-52 (208px) */}
                <div className="relative w-48 h-48 sm:w-52 sm:h-52 rounded-full overflow-hidden border-2 border-blue-400/50 shadow-2xl shadow-blue-500/20 bg-slate-800">
                  <img
                    src={portfolioConfig.profilePhoto}
                    alt={`${portfolioConfig.name} profile photo`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                {/* Online status indicator */}
                <div className="absolute bottom-2 right-2 w-6 h-6 bg-green-500 rounded-full border-2 border-slate-900 shadow-md flex items-center justify-center">
                  <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                </div>
              </div>
            </div>

            <TerminalVisual />
            <PipelineVisual />
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={prefersReducedMotion ? {} : { opacity: 0 }}
          animate={prefersReducedMotion ? {} : { opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1"
        >
          <span className="text-xs text-slate-600">Scroll</span>
          <ChevronDown className="w-4 h-4 text-slate-600 animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
