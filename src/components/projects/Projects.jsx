import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { motion, AnimatePresence } from "framer-motion";
import projects from "../../data/projects";
import ProjectCard from "./ProjectCard";

gsap.registerPlugin(ScrollTrigger);

const categories = ["All", "Basic", "Standard", "Advance"];

function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const ref = useRef(null);

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter(p => p.category === activeCategory);

  useEffect(() => {
    gsap.fromTo(
      ".project-header",
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 70%",
        },
      }
    );
  }, []);

  // Refresh ScrollTrigger when filteredProjects changes to avoid issues with sections below
  useEffect(() => {
    ScrollTrigger.refresh();
  }, [filteredProjects]);

  return (
    <section
      id="projects"
      ref={ref}
      className="min-h-screen px-6 md:px-24 lg:px-32 py-12 md:py-32 bg-black overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="project-header">
          <p className="text-zinc-500 tracking-[5px] md:tracking-[10px] uppercase text-[10px] md:text-sm mb-4 md:mb-8 font-accent">
            Curated Portfolio
          </p>

          <h2 className="text-4xl md:text-6xl lg:text-6xl font-bold text-gradient font-heading leading-tight mb-4">
            Selected Work
          </h2>

          <p className="max-w-2xl text-zinc-500 text-sm md:text-lg mb-12 md:mb-20 font-normal leading-relaxed">
            Exploring the intersection of design and technology through three stages of evolution: from foundational concepts to advanced immersive experiences.
          </p>


          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-4 md:gap-8 mb-12 md:mb-24">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`relative px-4 py-2 text-sm md:text-lg font-medium transition-colors duration-300 ${activeCategory === cat ? "text-white" : "text-zinc-500 hover:text-zinc-300"
                  }`}
              >
                {cat}
                {activeCategory === cat && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-white shadow-[0_0_10px_rgba(255,255,255,0.5)]"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          layout
          className="grid gap-8 md:gap-10 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="project-item h-full"
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>

        </motion.div>
      </div>
    </section>
  );
}

export default Projects;
