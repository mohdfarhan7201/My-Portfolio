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
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Grid items scroll stagger
      gsap.fromTo(
        ".project-card-wrap",
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
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
      className="py-16 md:py-24 px-6 md:px-20 lg:px-28 bg-black relative"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <div ref={headerRef} className="max-w-3xl mb-12 md:mb-16">
          <p className="text-zinc-500 tracking-[5px] md:tracking-[8px] uppercase text-[10px] md:text-xs mb-4 font-accent font-medium">
            Featured Creations
          </p>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-gradient font-heading leading-tight mb-4">
            Selected Work.
          </h2>

          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Real-world applications crafted with a focus on responsive UI architectures, fluid GSAP animation, and performance optimization.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2.5 sm:gap-4 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`relative px-4 py-1.5 sm:px-5 sm:py-2 text-xs sm:text-sm font-medium transition-all duration-300 rounded-full border ${
                  activeCategory === cat
                    ? "text-white border-white/40 bg-white/10 shadow-[0_0_15px_rgba(255,255,255,0.15)]"
                    : "text-zinc-500 border-white/5 hover:text-zinc-300 hover:border-white/10"
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
          className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
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
