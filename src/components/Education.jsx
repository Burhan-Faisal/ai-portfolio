import { GraduationCap, Calendar } from "lucide-react";
import portfolioConfig from "../data/config";
import AnimatedSection from "./AnimatedSection";

const Education = () => {
  return (
    <section id="education" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Education
            </h2>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="max-w-2xl mx-auto">
            <div className="relative p-6 md:p-8 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:border-slate-600/50 transition-colors">
              {/* Icon */}
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-lg bg-blue-500/10 text-blue-400">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {portfolioConfig.degree}
                  </h3>
                  <p className="text-blue-400 font-medium">
                    {portfolioConfig.university}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 text-slate-400 text-sm">
                <Calendar className="w-4 h-4" />
                <span>
                  {portfolioConfig.universityStart} — {portfolioConfig.universityEnd}
                </span>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Education;
