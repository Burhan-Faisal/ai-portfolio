import skillCategories from "../data/skills";
import AnimatedSection from "./AnimatedSection";

const Skills = () => {
  return (
    <section id="skills" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Technical Skills
            </h2>
            <p className="mt-3 text-slate-400 text-lg">
              Technologies and tools I work with.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <AnimatedSection key={category.title} delay={index * 0.08}>
                <div className="h-full p-6 rounded-xl bg-slate-800/40 border border-slate-700/50 hover:border-slate-600/50 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-900/40">
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2.5 rounded-lg bg-blue-500/10 text-blue-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-semibold text-white">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 text-xs font-medium text-slate-300 bg-slate-700/50 border border-slate-600/30 rounded-md"
                      >
                        {skill}
                      </span>
                    ))}
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

export default Skills;
