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
      className="min-h-[80vh] flex items-center px-6 md:px-24 lg:px-32 py-12 md:py-32 bg-black"
    >
      <div ref={ref} className="max-w-5xl mx-auto text-center w-full">
        <p className="text-zinc-500 tracking-[5px] md:tracking-[12px] uppercase text-[10px] md:text-sm mb-6 md:mb-10 font-accent">
          Contact
        </p>

        <h2 className="text-5xl md:text-8xl lg:text-[120px] font-bold text-gradient leading-[0.9] font-heading">
          Let’s start <br /> a project.
        </h2>

        <p className="mt-10 md:mt-16 text-zinc-400 text-base md:text-xl lg:text-2xl max-w-2xl mx-auto font-normal leading-relaxed px-4">
          I’m currently available for freelance work and full-time opportunities.
          Let's create something extraordinary together.
        </p>

        <div className="mt-12 md:mt-24 flex flex-col items-center gap-8 md:gap-12">
          <a
            href="mailto:mohdfarhan.dev@gmail.com"
            className="group relative px-12 py-5 md:px-20 md:py-8 overflow-hidden rounded-full border border-white/10 text-[10px] md:text-base font-bold uppercase tracking-[5px] transition-all hover:border-white font-accent"
          >
            <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
              Get in touch
            </span>
            <div className="absolute inset-0 -translate-x-full bg-white transition-transform duration-500 group-hover:translate-x-0" />
          </a>

          <div className="text-zinc-700 hover:text-zinc-400 transition-colors cursor-pointer font-mono text-[10px] md:text-base tracking-[5px] font-accent">
            farhan.dev@portfolio.com
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
