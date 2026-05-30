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
      className="min-h-screen flex items-center px-6 py-20 md:py-32 bg-black"
    >
      <div ref={ref} className="max-w-6xl mx-auto w-full">
        <p className="text-zinc-500 tracking-[6px] md:tracking-[8px] uppercase text-[10px] md:text-xs mb-4 md:mb-6">
          Stack
        </p>

        <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-gradient">
          Tech I master.
        </h2>


        <div className="mt-12 md:mt-16 flex flex-wrap gap-3 md:gap-6">
          {skills.map((skill) => (
            <div
              key={skill}
              className="skill-tag px-5 py-2.5 md:px-8 md:py-4 rounded-xl md:rounded-2xl border border-white/5 bg-zinc-900/30 text-zinc-400 hover:text-white hover:border-white/20 transition-all duration-300 hover:bg-zinc-900 cursor-pointer text-sm md:text-lg font-medium"
            >
              {skill}
            </div>
          ))}
        </div>

      </div>


    </section>
  );
}

export default Skills;
