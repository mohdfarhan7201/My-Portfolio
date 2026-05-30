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
      className="min-h-[80vh] flex items-center px-6 py-32 bg-black overflow-hidden"
    >
      <div ref={ref} className="max-w-4xl mx-auto text-center w-full">
        <p className="text-zinc-500 tracking-[8px] uppercase text-xs mb-8">
          Contact
        </p>

        <h2 className="text-6xl md:text-8xl font-black text-gradient leading-none">
          Let’s start <br /> a project.
        </h2>

        <p className="mt-12 text-zinc-400 text-lg md:text-xl max-w-xl mx-auto font-light leading-relaxed">
          I’m currently available for freelance work and full-time opportunities.
          Let's create something extraordinary together.
        </p>

        <div className="mt-16 flex flex-col items-center gap-8">
          <a
            href="mailto:mohdfarhan.dev@gmail.com"
            className="group relative px-12 py-5 overflow-hidden rounded-full border border-white/20 text-sm font-bold uppercase tracking-widest transition-all hover:border-white"
          >
            <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
              Get in touch
            </span>
            <div className="absolute inset-0 -translate-x-full bg-white transition-transform duration-300 group-hover:translate-x-0" />
          </a>

          <div className="text-zinc-600 font-mono text-sm tracking-widest">
            farhan.dev@portfolio.com
          </div>

        </div>
      </div>


    </section>
  );
}

export default Contact;
