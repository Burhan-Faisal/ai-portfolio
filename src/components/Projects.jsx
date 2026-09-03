import projects from "../data/projects";
import ProjectCard from "./ProjectCard";
import AnimatedSection from "./AnimatedSection";

const Projects = () => {
  return (
    <section id="projects" className="py-20 md:py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/[0.02] to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Featured Projects
            </h2>
            <p className="mt-3 text-slate-400 text-lg">
              AI and machine learning systems I've built.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <AnimatedSection key={project.id} delay={index * 0.1}>
              <ProjectCard project={project} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
