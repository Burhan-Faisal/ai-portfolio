import { ArrowRight } from "lucide-react";
import portfolioConfig from "../data/config";
import AnimatedSection from "./AnimatedSection";

const About = () => {
  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/[0.02] to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              About Me
            </h2>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-5 gap-8 md:gap-12 items-start">
          {/* Bio — spans 3 cols */}
          <AnimatedSection className="md:col-span-3 space-y-4">
            {portfolioConfig.aboutParagraphs.map((paragraph, i) => (
              <p key={i} className="text-slate-400 text-lg leading-relaxed">
                {paragraph}
              </p>
            ))}

            {/* Pipeline visual */}
            <div className="pt-4">
              <div className="flex flex-wrap items-center gap-2 text-sm">
                {["Data", "Features", "Model", "Evaluation", "Deployment"].map(
                  (step, i, arr) => (
                    <span key={step} className="flex items-center gap-2">
                      <span className="px-3 py-1.5 bg-slate-800 border border-slate-700 rounded-lg text-slate-300 font-medium">
                        {step}
                      </span>
                      {i < arr.length - 1 && (
                        <ArrowRight className="w-4 h-4 text-blue-500/60" />
                      )}
                    </span>
                  )
                )}
              </div>
            </div>
          </AnimatedSection>

          {/* Focus card — spans 2 cols */}
          <AnimatedSection className="md:col-span-2" delay={0.15}>
            <div className="p-6 rounded-xl bg-slate-800/50 border border-slate-700/50">
              <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">
                Currently Focused On
              </h3>
              <div className="flex flex-wrap gap-2">
                {portfolioConfig.currentFocus.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 text-sm font-medium text-blue-300 bg-blue-500/10 border border-blue-500/20 rounded-lg"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default About;
