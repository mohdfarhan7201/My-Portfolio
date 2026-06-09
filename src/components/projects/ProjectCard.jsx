import { useState } from "react";

function ProjectCard({ project }) {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="group relative overflow-hidden rounded-3xl border border-white/5 bg-zinc-900/10 transition-all duration-700 hover:scale-[1.03] hover:bg-zinc-900/30 shadow-2xl"
        >
            {/* IMAGE */}
            <div className="h-[250px] md:h-[350px] overflow-hidden">

                <img
                    src={project.image}
                    className={`h-full w-full object-cover transition duration-1000 ease-out ${hovered ? "scale-110 grayscale-0" : "grayscale opacity-70"
                        }`}
                />
            </div>

            <div className="p-8 md:p-12 text-left bg-gradient-to-t from-black via-black/90 to-transparent">
                <h3 className="text-2xl md:text-4xl font-bold font-heading">{project.title}</h3>

                <p className="mt-4 text-sm md:text-lg text-zinc-400 leading-relaxed font-normal max-w-lg">
                    {project.description}
                </p>



                {/* CATEGORY & TECH */}
                <div className="mt-6 md:mt-10 flex flex-wrap gap-3 items-center">
                    <span className="rounded-md bg-white text-black px-3 py-1 text-[10px] md:text-xs font-bold uppercase tracking-widest shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                        {project.category}
                    </span>
                    {project.tech.map((t) => (
                        <span
                            key={t}
                            className="rounded-full border border-white/5 bg-white/5 px-4 py-1.5 md:px-6 md:py-2 text-[10px] md:text-xs text-zinc-400 font-accent uppercase tracking-widest group-hover:border-white/20 transition-colors"
                        >
                            {t}
                        </span>
                    ))}
                </div>

            </div>

            {/* GLOW EFFECT */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-gradient-to-br from-white/5 to-transparent blur-3xl" />
        </div>
    );
}

export default ProjectCard;