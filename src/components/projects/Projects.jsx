import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import projects from "../../data/projects";
import ProjectCard from "./ProjectCard";

gsap.registerPlugin(ScrollTrigger);

function Projects() {
  const ref = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      ".project-item",
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 70%",
        },
      }
    );
  }, []);

  return (
    <section
      id="projects"
      ref={ref}
      className="min-h-screen px-6 py-20 md:py-32 bg-black"
    >
      <div className="max-w-6xl mx-auto">
        <p className="text-zinc-500 tracking-[6px] md:tracking-[8px] uppercase text-[10px] md:text-xs mb-4 md:mb-6">
          Projects
        </p>

        <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-gradient">
          Selected Work
        </h2>

        <div className="mt-12 md:mt-16 grid gap-6 md:gap-10 sm:grid-cols-2">
          {projects.map((project) => (
            <div key={project.id} className="project-item">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}

export default Projects;