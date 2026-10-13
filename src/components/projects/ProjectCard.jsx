import { useState } from "react";
import { FaGithub, FaArrowUpRightFromSquare } from "react-icons/fa6";

function ProjectCard({ project }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative overflow-hidden rounded-2xl sm:rounded-3xl border border-white/10 bg-zinc-900/40 backdrop-blur-xl transition-all duration-300 hover:border-white/25 shadow-2xl h-full flex flex-col w-full"
    >
      {/* Media Window */}
      <div className="relative h-[200px] sm:h-[230px] md:h-[250px] overflow-hidden flex-shrink-0 bg-zinc-950">
        <img
          src={project.image}
          alt={`${project.title} developed by Mohd Farhan - Web Developer and SEO Executive`}
          loading="lazy"
          decoding="async"
          className={`h-full w-full object-cover transition-all duration-500 ease-out ${
            hovered ? "scale-105 opacity-100" : "scale-100 opacity-90 sm:opacity-85"
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

        {/* Top Floating Badge */}
        <div className="absolute top-3 sm:top-4 left-3 sm:left-4 flex items-center gap-2">
          <span className="px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/15 text-white text-[9px] sm:text-[10px] font-mono uppercase tracking-wider">
            {project.category}
          </span>
        </div>

        {/* Action Links */}
        <div className="absolute top-3 sm:top-4 right-3 sm:top-4 flex items-center gap-2 z-10">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Repository"
              className="p-1.5 sm:p-2 rounded-full bg-black/75 backdrop-blur-md border border-white/15 text-zinc-300 hover:text-white hover:border-white/40 transition-all"
            >
              <FaGithub className="text-xs sm:text-sm" />
            </a>
          )}
          {project.liveUrl && project.liveUrl !== "#" && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Live Demo"
              className="p-1.5 sm:p-2 rounded-full bg-white text-black hover:bg-zinc-200 transition-all"
            >
              <FaArrowUpRightFromSquare className="text-[10px] sm:text-xs" />
            </a>
          )}
        </div>
      </div>

      {/* Content Details */}
      <div className="p-4 sm:p-6 md:p-8 flex flex-col flex-grow text-left">
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold font-heading text-white group-hover:text-zinc-200 transition-colors">
          {project.title}
        </h3>

        <p className="mt-2 sm:mt-2.5 text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal mb-4 sm:mb-6 flex-grow">
          {project.description}
        </p>

        {/* Tech Stack Pills */}
        <div className="mt-auto pt-3 sm:pt-4 border-t border-white/5 flex flex-wrap gap-1.5 sm:gap-2 items-center">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-lg border border-white/5 bg-white/5 px-2 py-0.5 sm:px-2.5 sm:py-1 text-[9px] sm:text-[10px] text-zinc-300 font-mono tracking-wider"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Hover Ambient Glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br from-white/5 to-transparent blur-2xl" />
    </div>
  );
}

export default ProjectCard;