import journeyMilestones from "../data/journey";
import AnimatedSection from "./AnimatedSection";

const Journey = () => {
  return (
    <section id="journey" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Learning & Engineering Journey
            </h2>
            <p className="mt-3 text-slate-400 text-lg">
              My path toward becoming an AI Engineer.
            </p>
          </div>
        </AnimatedSection>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-slate-700/50 md:-translate-x-px" />

          {journeyMilestones.map((milestone, index) => {
            const isLeft = index % 2 === 0;

            return (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div
                  className={`relative flex items-start gap-6 mb-10 md:mb-12 ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-blue-500 rounded-full border-2 border-slate-900 -translate-x-1.5 md:-translate-x-1.5 mt-1.5 z-10">
                    <div className="absolute inset-0 bg-blue-500 rounded-full animate-ping opacity-20" />
                  </div>

                  {/* Content */}
                  <div
                    className={`ml-10 md:ml-0 md:w-[calc(50%-2rem)] ${
                      isLeft ? "md:pr-8 md:text-right" : "md:pl-8 md:text-left"
                    }`}
                  >
                    <span className="inline-block px-2.5 py-0.5 text-xs font-semibold text-blue-400 bg-blue-500/10 border border-blue-500/20 rounded-full mb-2">
                      {milestone.year}
                    </span>
                    <h3 className="text-lg font-semibold text-white mb-1">
                      {milestone.title}
                    </h3>
                    <p className="text-sm text-slate-400 leading-relaxed mb-2">
                      {milestone.description}
                    </p>
                    <div
                      className={`flex flex-wrap gap-1.5 ${
                        isLeft ? "md:justify-end" : "md:justify-start"
                      }`}
                    >
                      {milestone.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-0.5 text-xs text-slate-400 bg-slate-800 border border-slate-700/50 rounded"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Journey;
