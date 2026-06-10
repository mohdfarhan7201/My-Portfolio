import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Contact() {
  const ref = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      ref.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section
      id="contact"
      className="min-h-[70vh] flex items-center px-6 md:px-24 lg:px-32 py-16 md:py-24 bg-black"
    >
      <div ref={ref} className="max-w-5xl mx-auto text-center w-full">
        <p className="text-zinc-500 tracking-[5px] md:tracking-[10px] uppercase text-[10px] md:text-xs mb-4 md:mb-6 font-accent">
          Contact
        </p>

        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gradient leading-[1.1] font-heading">
          Let’s start <br /> a project.
        </h2>

        <p className="mt-8 md:mt-10 text-zinc-400 text-sm md:text-lg lg:text-xl max-w-2xl mx-auto font-normal leading-relaxed px-4">
          I’m currently available for freelance work and full-time opportunities.
          Let's create something extraordinary together.
        </p>

        <div className="mt-10 md:mt-16 flex flex-col items-center gap-6 md:gap-10">
          <a
            href="mailto:mohdfarhan.dev@gmail.com"
            className="group relative px-10 py-5 md:px-14 md:py-6 overflow-hidden rounded-full border border-white/10 text-[10px] md:text-sm font-bold uppercase tracking-[4px] transition-all hover:border-white font-accent"
          >
            <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
              Get in touch
            </span>
            <div className="absolute inset-0 -translate-x-full bg-white transition-transform duration-500 group-hover:translate-x-0" />
          </a>

          <div className="text-zinc-600 hover:text-zinc-400 transition-colors cursor-pointer font-mono text-[9px] md:text-xs tracking-[3px] font-accent">
            farhan.dev@portfolio.com
          </div>
        </div>
      </div>
    </section>

  );
}

export default Contact;
