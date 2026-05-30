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
      className="min-h-[80vh] flex items-center px-6 py-20 md:py-32 bg-black"
    >
      <div ref={ref} className="max-w-4xl mx-auto text-center w-full">
        <p className="text-zinc-500 tracking-[6px] md:tracking-[8px] uppercase text-[10px] md:text-xs mb-6 md:mb-8">
          Contact
        </p>

        <h2 className="text-4xl md:text-6xl lg:text-8xl font-black text-gradient leading-tight md:leading-none">
          Let’s start <br /> a project.
        </h2>

        <p className="mt-8 md:mt-12 text-zinc-400 text-base md:text-lg lg:text-xl max-w-xl mx-auto font-light leading-relaxed px-4">
          I’m currently available for freelance work and full-time opportunities.
          Let's create something extraordinary together.
        </p>

        <div className="mt-12 md:mt-16 flex flex-col items-center gap-6 md:gap-8">
          <a
            href="mailto:mohdfarhan.dev@gmail.com"
            className="group relative px-10 py-4 md:px-12 md:py-5 overflow-hidden rounded-full border border-white/20 text-[10px] md:text-sm font-bold uppercase tracking-widest transition-all hover:border-white"
          >
            <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
              Get in touch
            </span>
            <div className="absolute inset-0 -translate-x-full bg-white transition-transform duration-300 group-hover:translate-x-0" />
          </a>

          <div className="text-zinc-600 font-mono text-[10px] md:text-sm tracking-widest">
            farhan.dev@portfolio.com
          </div>
        </div>
      </div>



    </section>
  );
}

export default Contact;
