import { useState } from "react";

function ProjectCard({ project }) {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition-all duration-500 hover:scale-[1.02]"
        >
            {/* IMAGE */}
            <div className="h-[280px] overflow-hidden">
                <img
                    src={project.image}
                    className={`h-full w-full object-cover transition duration-700 ${hovered ? "scale-110 grayscale-0" : "grayscale"
                        }`}
                />
            </div>

            <div className="p-6 text-left">
                <h3 className="text-2xl font-semibold">{project.title}</h3>

                <p className="mt-3 text-sm text-zinc-400 leading-relaxed">
                    {project.description}
                </p>



                {/* TECH */}
                <div className="mt-4 flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                        <span
                            key={t}
                            className="rounded-full border border-white/10 px-3 py-1 text-xs text-zinc-300"
                        >
                            {t}
                        </span>
                    ))}
                </div>
            </div>

            {/* GLOW EFFECT */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-white/5 blur-2xl" />
        </div>
    );
}

export default ProjectCard;