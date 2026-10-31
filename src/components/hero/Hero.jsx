import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

function Hero() {
  const heroRef = useRef(null);
  const textRef = useRef(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(textRef.current, {
        y: 18,
        duration: 0.7,
        ease: "power2.out",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let rafId;
    const move = (e) => {
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        setPos({ x: e.clientX, y: e.clientY });
        rafId = null;
      });
    };

    window.addEventListener("mousemove", move, { passive: true });
    return () => {
      window.removeEventListener("mousemove", move);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section
      ref={heroRef}
      id="home"
      aria-label="Introduction & Overview"
      className="relative min-h-[85vh] sm:min-h-[92vh] w-full max-w-full overflow-hidden bg-black flex items-center px-4 sm:px-8 md:px-12 lg:px-16 pt-20 sm:pt-28 pb-12 sm:pb-16"
    >
      {/* Background Image with Parallax Mask */}
      <div
        className="absolute inset-0 z-0 transition-transform duration-100 ease-out pointer-events-none"
        style={{
          transform: `translate(${(pos.x - window.innerWidth / 2) * 0.012}px, ${(pos.y - window.innerHeight / 2) * 0.012}px)`,
        }}
      >
        <picture>
          <source srcSet="/images/toji.webp" type="image/webp" />
          <img
            src="/images/toji.webp"
            width="1920"
            height="1080"
            className="h-full w-full object-cover md:object-center object-[70%_center] opacity-40 sm:opacity-45"
            alt="Mohd Farhan - Full Stack Next.js Web Developer and Technical SEO Specialist Portfolio Hero"
            loading="eager"
            fetchpriority="high"
            decoding="async"
          />
        </picture>
      </div>

      {/* Dynamic Radial Spotlight Mask (Desktop Only) */}
      <div
        className="absolute inset-0 z-10 pointer-events-none hidden md:block"
        style={{
          backgroundImage: "url(/images/toji.webp)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "grayscale(1) brightness(0.35)",
          maskImage: `radial-gradient(circle 260px at ${pos.x}px ${pos.y}px, transparent 0%, black 100%)`,
          WebkitMaskImage: `radial-gradient(circle 260px at ${pos.x}px ${pos.y}px, transparent 0%, black 100%)`,
        }}
      />

      {/* Main Content Container aligned with site grid */}
      <div className="max-w-7xl mx-auto w-full relative z-20">
        <div
          ref={textRef}
          className="max-w-4xl flex flex-col items-start w-full"
        >
          {/* Availability / Architecture Tag */}
          <div className="inline-flex items-center gap-2 px-2.5 py-1 sm:px-3.5 sm:py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-3 sm:mb-6 max-w-full">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
            <span className="text-[9.5px] xs:text-[11px] sm:text-xs font-mono uppercase tracking-[1.5px] sm:tracking-[2.5px] text-zinc-300 font-accent truncate">
              Modern Web Architecture • Next.js • React • MERN
            </span>
          </div>

          {/* Primary H1 with balanced two-line subtitle on desktop */}
          <h1 className="text-gradient text-[34px] xs:text-[44px] sm:text-[68px] md:text-[84px] lg:text-[96px] font-extrabold tracking-tight leading-[1] sm:leading-[0.92] font-heading select-none break-words w-full">
            MOHD FARHAN
            <span className="block text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-normal text-zinc-300 mt-2.5 sm:mt-4 leading-tight sm:leading-snug">
              Full Stack Web Developer &amp; <br className="hidden sm:inline" />
              Technical SEO Specialist
            </span>
          </h1>

          <div className="mt-3.5 sm:mt-6 max-w-2xl">
            <p className="text-xs xs:text-sm sm:text-lg md:text-xl lg:text-2xl text-zinc-400 font-normal leading-relaxed">
              Building <span className="text-white font-semibold">high-performance Next.js &amp; React web applications</span>, custom business websites, and <span className="text-white font-semibold">search-dominant digital experiences</span> where fluid GSAP animations meet Technical SEO &amp; Core Web Vitals.
            </p>
          </div>

          {/* Action CTAs: Responsive Stack on Mobile */}
          <div className="mt-6 sm:mt-9 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-5 w-full sm:w-auto">
            <a
              href="#projects"
              aria-label="Explore featured web development and SEO projects"
              className="group relative px-6 py-3.5 sm:px-9 sm:py-4 overflow-hidden rounded-full border border-white/25 text-[11px] sm:text-xs font-bold uppercase tracking-[2.5px] sm:tracking-[3px] transition-all hover:border-white shadow-xl text-center active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
            >
              <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
                Explore Featured Work
              </span>
              <div className="absolute inset-0 -translate-x-full bg-white transition-transform duration-300 group-hover:translate-x-0" />
            </a>

            <a
              href="#services"
              aria-label="View web development and technical SEO services"
              className="px-6 py-3.5 sm:px-8 sm:py-4 rounded-full border border-white/10 text-zinc-400 hover:text-white hover:border-white/30 text-[11px] sm:text-xs font-bold uppercase tracking-[2.5px] sm:tracking-[3px] transition-all text-center active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
            >
              Services &amp; Solutions
            </a>

            <div className="hidden sm:flex gap-3 items-center opacity-40 ml-2">
              <div className="w-8 h-[1px] bg-white" />
              <span className="text-[10px] uppercase tracking-[3px] font-accent">Gorakhpur • Lucknow • Delhi NCR</span>
            </div>

            <div className="flex sm:hidden items-center justify-center gap-2 pt-2 opacity-60">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span className="text-[9.5px] uppercase tracking-[2px] font-accent text-zinc-400">Gorakhpur • Lucknow • Delhi NCR</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Cue */}
      <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-8 md:left-12 lg:left-16 flex items-center gap-3 opacity-30 pointer-events-none">
        <span className="text-[9px] uppercase tracking-[3px] sm:tracking-[4px] font-accent">Scroll</span>
        <div className="w-6 sm:w-8 h-[1px] bg-white" />
      </div>
    </section>
  );
}

export default Hero;
