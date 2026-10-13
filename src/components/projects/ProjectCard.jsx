import { useState } from "react";
import { FaGithub, FaArrowUpRightFromSquare } from "react-icons/fa6";

function ProjectCard({ project }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/30 backdrop-blur-xl transition-all duration-500 hover:border-white/25 shadow-2xl h-full flex flex-col"
    >
      {/* Media Window */}
      <div className="relative h-[220px] sm:h-[260px] overflow-hidden flex-shrink-0 bg-zinc-950">
        <img
          src={project.image}
          alt={`${project.title} developed by Mohd Farhan - Web Developer and SEO Executive`}
          loading="lazy"
          decoding="async"
          className={`h-full w-full object-cover transition-all duration-700 ease-out ${
            hovered ? "scale-105 filter-none" : "scale-100 grayscale-[0.8] opacity-75"
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

        {/* Top Floating Badge */}
        <div className="absolute top-4 left-4 flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-white text-[10px] font-mono uppercase tracking-widest">
            {project.category}
          </span>
        </div>

        {/* Action Links */}
        <div className="absolute top-4 right-4 flex items-center gap-2 opacity-80 group-hover:opacity-100 transition-opacity">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Repository"
              className="p-2 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-zinc-300 hover:text-white hover:border-white/30 transition-all"
            >
              <FaGithub className="text-sm" />
            </a>
          )}
          {project.liveUrl && project.liveUrl !== "#" && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Live Demo"
              className="p-2 rounded-full bg-white text-black hover:bg-zinc-200 transition-all"
            >
              <FaArrowUpRightFromSquare className="text-xs" />
            </a>
          )}
        </div>
      </div>

      {/* Content Details */}
      <div className="p-6 sm:p-8 flex flex-col flex-grow text-left">
        <h3 className="text-xl sm:text-2xl font-bold font-heading text-white group-hover:text-zinc-200 transition-colors">
          {project.title}
        </h3>

        <p className="mt-3 text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal mb-6 flex-grow">
          {project.description}
        </p>

        {/* Tech Stack Pills */}
        <div className="mt-auto pt-4 border-t border-white/5 flex flex-wrap gap-2 items-center">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-lg border border-white/5 bg-white/5 px-2.5 py-1 text-[10px] text-zinc-300 font-mono tracking-wider group-hover:border-white/15 transition-colors"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Hover Ambient Glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-gradient-to-br from-white/5 to-transparent blur-2xl" />
    </div>
  );
}

export default ProjectCard;