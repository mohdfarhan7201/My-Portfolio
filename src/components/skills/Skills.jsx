import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import {
  SiReact, SiNextdotjs, SiThreedotjs, SiTailwindcss,
  SiNodedotjs, SiMongodb, SiFramer, SiPostgresql,
  SiTypescript, SiGit, SiFigma,
  SiGreensock
} from "react-icons/si";
import { FaPalette } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

function Skills() {
  const ref = useRef(null);

  const skills = [
    { name: "React", icon: <SiReact className="text-[#61DAFB]" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
    { name: "Three.js", icon: <SiThreedotjs className="text-white" /> },
    { name: "GSAP", icon: <SiGreensock className="text-[#88CE02]" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
    { name: "Node.js", icon: <SiNodedotjs className="text-[#339933]" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
    { name: "Framer Motion", icon: <SiFramer className="text-white" /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-[#4169E1]" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" /> },
    { name: "Git", icon: <SiGit className="text-[#F05032]" /> },
    { name: "UI/UX", icon: <SiFigma className="text-[#F24E1E]" /> }
  ];

  useEffect(() => {
    gsap.fromTo(
      ".skill-tag",
      { opacity: 0, scale: 0.8, y: 20 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.05,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section
      id="skills"
      className="min-h-screen flex items-center px-6 md:px-24 lg:px-32 py-12 md:py-32 bg-black"
    >
      <div ref={ref} className="max-w-7xl mx-auto w-full">
        <p className="text-zinc-500 tracking-[5px] md:tracking-[10px] uppercase text-[10px] md:text-sm mb-4 md:mb-8 font-accent">
          Stack
        </p>

        <h2 className="text-4xl md:text-6xl lg:text-6xl font-bold text-gradient font-heading leading-tight">
          Tech I master.
        </h2>


        <div className="mt-12 md:mt-20 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-8">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="skill-tag group relative flex flex-col items-center justify-center gap-4 px-6 py-8 md:px-10 md:py-12 rounded-2xl md:rounded-3xl border border-white/5 bg-zinc-900/20 transition-all duration-500 hover:bg-zinc-900/40 hover:border-white/20 cursor-pointer shadow-xl overflow-hidden"
            >
              {/* Icon Container */}
              <div className="text-4xl md:text-6xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                {skill.icon}
              </div>

              {/* Skill Name */}
              <span className="text-zinc-400 group-hover:text-white transition-colors duration-300 text-sm md:text-lg font-medium font-accent uppercase tracking-widest">
                {skill.name}
              </span>

              {/* Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Bottom Border Accent */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-white/20 transition-all duration-500 group-hover:w-full" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;

