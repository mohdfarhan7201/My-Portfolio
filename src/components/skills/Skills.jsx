import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Skills() {
  const ref = useRef(null);

  const skills = [
    "React", "Next.js", "Three.js", "GSAP",
    "Tailwind CSS", "Node.js", "MongoDB", "Framer Motion",
    "PostgreSQL", "TypeScript", "Git", "UI/UX Design"
  ];

  useEffect(() => {
    gsap.fromTo(
      ".skill-tag",
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
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

        <h2 className="text-4xl md:text-6xl lg:text-8xl font-bold text-gradient font-heading leading-tight">
          Tech I master.
        </h2>


        <div className="mt-12 md:mt-20 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
          {skills.map((skill) => (
            <div
              key={skill}
              className="skill-tag px-6 py-4 md:px-10 md:py-8 rounded-2xl md:rounded-3xl border border-white/5 bg-zinc-900/20 text-zinc-400 hover:text-white hover:border-white/20 transition-all duration-500 hover:bg-zinc-900/60 cursor-pointer text-sm md:text-xl font-medium font-accent text-center shadow-lg hover:shadow-white/5 group relative overflow-hidden"
            >
              <span className="relative z-10">{skill}</span>
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;
