import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

function Hero() {
  const heroRef = useRef(null);
  const textRef = useRef(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        textRef.current,
        { y: 25, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power2.out", delay: 0.1 }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    if (window.innerWidth < 768) {
      setPos({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
    }

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative min-h-[90vh] sm:min-h-[92vh] w-full max-w-full overflow-hidden bg-black flex items-center px-4 sm:px-10 md:px-20 lg:px-28 pt-24 sm:pt-28 pb-12 sm:pb-16"
    >
      {/* Background Image with Parallax Mask */}
      <div
        className="absolute inset-0 z-0 transition-transform duration-100 ease-out pointer-events-none"
        style={{
          transform: `translate(${(pos.x - window.innerWidth / 2) * 0.012}px, ${(pos.y - window.innerHeight / 2) * 0.012}px)`,
        }}
      >
        <img
          src="/images/toji.webp"
          className="h-full w-full object-cover md:object-center object-[70%_center] opacity-40 sm:opacity-45"
          alt="Mohd Farhan - Web Developer and SEO Executive Portfolio Hero Background"
          loading="eager"
          decoding="async"
        />
      </div>

      {/* Dynamic Radial Spotlight Mask */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          backgroundImage: "url(/images/toji.webp)",
          backgroundSize: "cover",
          backgroundPosition: window.innerWidth < 768 ? "70% center" : "center",
          filter: "grayscale(1) brightness(0.35)",
          maskImage: `radial-gradient(circle 260px at ${pos.x}px ${pos.y}px, transparent 0%, black 100%)`,
          WebkitMaskImage: `radial-gradient(circle 260px at ${pos.x}px ${pos.y}px, transparent 0%, black 100%)`,
        }}
      />

      {/* Main Content */}
      <div
        ref={textRef}
        className="relative z-20 max-w-5xl flex flex-col items-start w-full"
      >
        <div className="inline-flex items-center gap-2.5 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-4 sm:mb-6">
          <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
          <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[2px] sm:tracking-[3px] text-zinc-300 font-accent">
            Web Developer & SEO Executive
          </span>
        </div>

        <h1 className="text-gradient text-[40px] xs:text-[48px] sm:text-[72px] md:text-[86px] lg:text-[96px] font-extrabold tracking-tight leading-[0.95] sm:leading-[0.92] font-heading select-none break-words w-full">
          MOHD FARHAN
        </h1>

        <div className="mt-4 sm:mt-7 max-w-2xl">
          <p className="text-sm sm:text-lg md:text-xl lg:text-2xl text-zinc-400 font-normal leading-relaxed">
            Building <span className="text-white font-semibold">interactive modern web apps</span> and <span className="text-white font-semibold">search-dominant digital experiences</span> where fluid GSAP animations meet high-performance SEO.
          </p>
        </div>

        {/* Action CTAs: Responsive Stack on Mobile */}
        <div className="mt-6 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-5 w-full sm:w-auto">
          <a
            href="#projects"
            className="group relative px-6 py-3.5 sm:px-9 sm:py-4 overflow-hidden rounded-full border border-white/25 text-[11px] sm:text-xs font-bold uppercase tracking-[2.5px] sm:tracking-[3px] transition-all hover:border-white shadow-xl text-center"
          >
            <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
              Explore Featured Work
            </span>
            <div className="absolute inset-0 -translate-x-full bg-white transition-transform duration-300 group-hover:translate-x-0" />
          </a>

          <a
            href="#contact"
            className="px-6 py-3.5 sm:px-8 sm:py-4 rounded-full border border-white/10 text-zinc-400 hover:text-white hover:border-white/30 text-[11px] sm:text-xs font-bold uppercase tracking-[2.5px] sm:tracking-[3px] transition-all text-center"
          >
            Get In Touch
          </a>

          <div className="hidden sm:flex gap-3 items-center opacity-40 ml-2">
            <div className="w-8 h-[1px] bg-white" />
            <span className="text-[10px] uppercase tracking-[3px] font-accent">Gorakhpur, UP</span>
          </div>
        </div>
      </div>

      {/* Scroll Down Cue */}
      <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-10 md:left-24 flex items-center gap-3 opacity-30 pointer-events-none">
        <span className="text-[9px] uppercase tracking-[3px] sm:tracking-[4px] font-accent">Scroll</span>
        <div className="w-6 sm:w-8 h-[1px] bg-white" />
      </div>
    </section>
  );
}

export default Hero;
