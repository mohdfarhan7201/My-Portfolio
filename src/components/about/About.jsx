import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { FaBolt, FaMagnifyingGlass, FaLaptopCode, FaCheck } from "react-icons/fa6";

gsap.registerPlugin(ScrollTrigger);

function About() {
  const sectionRef = useRef(null);
  const leftColRef = useRef(null);
  const rightColRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Scroll-based reveal with scrub & stagger
      gsap.fromTo(
        leftColRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        rightColRef.current,
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const coreFocus = [
    {
      icon: <FaLaptopCode className="text-white text-base" />,
      title: "Interactive Web Interfaces",
      desc: "Architecting responsive, reusable React & Next.js components with fluid GSAP micro-animations.",
    },
    {
      icon: <FaMagnifyingGlass className="text-white text-base" />,
      title: "Search Engine Optimization",
      desc: "Deep Technical & On-Page SEO, structured data, schema markup, and Google Search Console audits.",
    },
    {
      icon: <FaBolt className="text-white text-base" />,
      title: "Core Web Vitals & Speed",
      desc: "Optimizing bundle size, page rendering, image pipelines, and layout stability for top Lighthouse scores.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-16 md:py-24 px-6 md:px-20 lg:px-28 bg-black overflow-hidden relative"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Narrative */}
        <div ref={leftColRef} className="lg:col-span-7 flex flex-col items-start">
          <p className="text-zinc-500 tracking-[5px] md:tracking-[8px] uppercase text-[10px] md:text-xs mb-4 font-accent font-medium">
            Core Philosophy
          </p>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-[1.12] text-gradient font-heading">
            Where frontend craftsmanship meets search visibility.
          </h2>

          <p className="mt-6 text-zinc-400 text-base sm:text-lg leading-relaxed font-normal">
            A beautiful website that no one visits is a wasted asset. And a high-ranking page that fails to engage loses customers immediately.
          </p>

          <p className="mt-3 text-zinc-400 text-sm sm:text-base leading-relaxed font-normal">
            I solve both sides of this equation: engineering pixel-perfect, responsive web experiences with modern tools like <span className="text-white font-medium">React, Next.js, and GSAP</span>, while ensuring every page structure is tuned to rank organically on search engines.
          </p>

          {/* Core Strengths Bento */}
          <div className="mt-8 grid sm:grid-cols-3 gap-4 w-full">
            {coreFocus.map((item, i) => (
              <div
                key={i}
                className="group p-5 rounded-2xl border border-white/5 bg-zinc-900/30 hover:border-white/20 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="p-2.5 w-fit rounded-xl bg-white/5 border border-white/10 mb-3">
                    {item.icon}
                  </div>
                  <h3 className="text-sm font-semibold text-white mb-1.5 font-heading">
                    {item.title}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-normal">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Code & Specs Matrix */}
        <div ref={rightColRef} className="lg:col-span-5">
          <div className="relative group rounded-3xl border border-white/10 bg-zinc-900/40 backdrop-blur-2xl p-6 sm:p-8 shadow-2xl transition-all duration-500 hover:border-white/25">
            {/* Header pill */}
            <div className="flex items-center justify-between pb-4 border-b border-white/5">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
              </div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500">
                farhan.config.js
              </span>
            </div>

            {/* Code */}
            <pre className="text-xs sm:text-sm text-zinc-400 font-mono leading-relaxed mt-4 overflow-x-auto">
              <code>{`const developer = {
  name: "Mohd Farhan",
  focus: ["Web Dev", "Technical SEO"],
  stack: [
    "HTML5 / CSS3", "JavaScript",
    "React.js", "Next.js", "TypeScript",
    "Tailwind CSS", "GSAP Motion"
  ],
  capabilities: {
    responsiveUI: "Fluid & Cross-Device",
    motion: "GSAP / Framer Motion",
    seoAudits: "Indexing & Core Vitals"
  },
  status: "Available for high-impact projects"
};`}</code>
            </pre>

            {/* Subtle credential note at bottom - not taking over */}
            <div className="mt-6 pt-4 border-t border-white/5 flex flex-wrap items-center justify-between gap-2 text-[11px] text-zinc-500 font-mono">
              <span className="flex items-center gap-1.5 text-zinc-400">
                <FaCheck className="text-emerald-400 text-xs" /> Shine Infosolutions Intern
              </span>
              <span>BCA Graduate (DDU)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
