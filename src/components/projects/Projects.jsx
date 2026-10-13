import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { motion, AnimatePresence } from "framer-motion";
import projects from "../../data/projects";
import ProjectCard from "./ProjectCard";

gsap.registerPlugin(ScrollTrigger);

const categories = ["All", "Featured", "Advance", "Standard"];

function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const gridRef = useRef(null);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter(
          (p) =>
            p.category === activeCategory ||
            p.categories?.includes(activeCategory)
        );

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header scroll animation
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            once: true,
          },
        }
      );

      // Grid items scroll stagger
      gsap.fromTo(
        ".project-card-wrap",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 90%",
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [filteredProjects]);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="py-12 sm:py-20 md:py-24 px-4 sm:px-10 md:px-20 lg:px-28 bg-black relative w-full overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <div ref={headerRef} className="max-w-3xl mb-8 sm:mb-14">
          <p className="text-zinc-500 tracking-[3px] sm:tracking-[6px] uppercase text-[10px] sm:text-xs mb-3 font-accent font-medium">
            Featured Creations
          </p>

          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gradient font-heading leading-tight mb-3 break-words">
            Selected Work.
          </h2>

          <p className="text-zinc-400 text-xs sm:text-sm md:text-base leading-relaxed">
            Real-world applications crafted with a focus on responsive UI architectures, fluid GSAP animation, and performance optimization.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 sm:gap-3 mt-6 sm:mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                aria-label={`Filter projects by ${cat}`}
                className={`relative px-3.5 py-1.5 sm:px-5 sm:py-2 text-xs sm:text-sm font-medium transition-all duration-300 rounded-full border ${
                  activeCategory === cat
                    ? "text-white border-white/40 bg-white/10 shadow-[0_0_15px_rgba(255,255,255,0.15)]"
                    : "text-zinc-300 border-white/10 hover:text-white hover:border-white/20"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div
          ref={gridRef}
          layout
          className="grid gap-5 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3 w-full"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3 }}
                className="project-card-wrap h-full"
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
