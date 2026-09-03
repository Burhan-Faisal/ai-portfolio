import { Github, ExternalLink, ArrowRight, Clock } from "lucide-react";

const ProjectCard = ({ project }) => {
  const isComingSoon = project.status === "coming-soon";

  return (
    <article className="group relative flex flex-col h-full p-6 md:p-7 rounded-xl bg-slate-800/40 border border-slate-700/50 hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/5">
      {/* Coming Soon Badge */}
      {isComingSoon && (
        <div className="absolute top-4 right-4 flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium text-amber-400 bg-amber-500/10 border border-amber-500/20 rounded-full">
          <Clock className="w-3 h-3" />
          Coming Soon
        </div>
      )}

      {/* Title */}
      <h3 className="text-xl font-semibold text-white mb-2 pr-24">
        {project.title}
      </h3>

      {/* Description */}
      <p className="text-slate-400 text-sm leading-relaxed mb-4">
        {project.description}
      </p>

      {/* Approach */}
      {!isComingSoon && (
        <div className="mb-4">
          <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5">
            Approach
          </h4>
          <p className="text-slate-400 text-sm leading-relaxed">
            {project.approach}
          </p>
        </div>
      )}

      {/* Mini Pipeline */}
      {project.pipeline && (
        <div className="mb-4">
          <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
            Pipeline
          </h4>
          <div className="flex flex-wrap items-center gap-1.5 text-xs">
            {project.pipeline.map((step, i, arr) => (
              <span key={step} className="flex items-center gap-1.5">
                <span className="px-2 py-1 bg-slate-700/60 border border-slate-600/30 rounded text-slate-300">
                  {step}
                </span>
                {i < arr.length - 1 && (
                  <ArrowRight className="w-3 h-3 text-blue-500/50" />
                )}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Metrics */}
      {project.metrics && project.metrics.length > 0 && (
        <div className="mb-4">
          <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
            Results
          </h4>
          <div className="flex gap-4">
            {project.metrics.map((metric) => (
              <div key={metric.label}>
                <p className="text-lg font-bold text-blue-400">
                  {metric.value}
                </p>
                <p className="text-xs text-slate-500">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Technologies */}
      <div className="mt-auto pt-4">
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 text-xs font-medium text-blue-300 bg-blue-500/10 border border-blue-500/15 rounded"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-3">
          {!isComingSoon && project.github && project.github !== "#" && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-white transition-colors"
              aria-label={`View ${project.title} on GitHub`}
            >
              <Github className="w-4 h-4" />
              Code
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-white transition-colors"
              aria-label={`View ${project.title} live demo`}
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
