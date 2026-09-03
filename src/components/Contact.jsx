import { Mail, Github, Linkedin, ArrowUpRight } from "lucide-react";
import portfolioConfig from "../data/config";
import AnimatedSection from "./AnimatedSection";

const Contact = () => {
  return (
    <section id="contact" className="py-20 md:py-28 relative">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/[0.03] to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <AnimatedSection>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {portfolioConfig.contactHeadline}
            </h2>
            <p className="text-lg text-slate-400 mb-10">
              {portfolioConfig.contactDescription}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={`mailto:${portfolioConfig.email}`}
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-all hover:scale-105 group"
              >
                <Mail className="w-4 h-4" />
                Email Me
                <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </a>
              <a
                href={portfolioConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-slate-300 bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-slate-600 rounded-lg transition-all hover:scale-105"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
              <a
                href={portfolioConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-slate-300 bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-slate-600 rounded-lg transition-all hover:scale-105"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Contact;
