import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { FaEnvelope, FaPhone, FaLocationDot, FaCopy, FaCheck } from "react-icons/fa6";

gsap.registerPlugin(ScrollTrigger);

function Contact() {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current,
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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("mohd.farhan.7201@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="py-12 sm:py-20 md:py-24 px-4 sm:px-10 md:px-20 lg:px-28 bg-black relative w-full overflow-hidden"
    >
      <div ref={contentRef} className="max-w-5xl mx-auto text-center w-full">
        <p className="text-zinc-500 tracking-[3px] sm:tracking-[6px] uppercase text-[10px] sm:text-xs mb-3 font-accent font-medium">
          Get In Touch
        </p>

        <h2 className="text-3xl sm:text-5xl lg:text-7xl font-bold text-gradient font-heading leading-tight break-words">
          Let’s build <br className="hidden sm:inline" /> something iconic.
        </h2>

        <p className="mt-4 sm:mt-6 text-zinc-400 text-xs sm:text-base md:text-lg max-w-xl mx-auto font-normal leading-relaxed">
          Available for frontend engineering, full-stack projects, and search engine optimization consulting.
        </p>

        {/* Primary Action Button: Stack on mobile */}
        <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto">
          <a
            href="mailto:mohd.farhan.7201@gmail.com"
            className="group relative px-6 py-3.5 sm:px-11 sm:py-4.5 overflow-hidden rounded-full border border-white/20 text-xs sm:text-sm font-bold uppercase tracking-[2.5px] sm:tracking-[3px] transition-all hover:border-white font-accent shadow-2xl text-center"
          >
            <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
              Send an Email
            </span>
            <div className="absolute inset-0 -translate-x-full bg-white transition-transform duration-300 group-hover:translate-x-0" />
          </a>

          <button
            onClick={handleCopyEmail}
            className="flex items-center justify-center gap-2 px-5 py-3.5 sm:px-7 sm:py-4.5 rounded-full border border-white/10 text-zinc-300 hover:text-white hover:border-white/25 text-xs sm:text-sm font-mono transition-all"
          >
            {copied ? (
              <>
                <FaCheck className="text-emerald-400 text-sm" />
                <span className="text-emerald-400">Email Copied!</span>
              </>
            ) : (
              <>
                <FaCopy className="text-zinc-400 text-sm" />
                <span>Copy Email</span>
              </>
            )}
          </button>
        </div>

        {/* Contact Info Pills */}
        <div className="mt-10 sm:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 max-w-3xl mx-auto w-full">
          <div className="p-4 sm:p-5 rounded-2xl border border-white/5 bg-zinc-900/20 backdrop-blur-md flex flex-col items-center gap-1.5 sm:gap-2">
            <div className="p-2 sm:p-2.5 rounded-xl bg-white/5 text-white">
              <FaEnvelope className="text-sm sm:text-base" />
            </div>
            <span className="text-[9px] sm:text-[10px] uppercase tracking-widest text-zinc-500 font-accent">
              Email
            </span>
            <span className="text-[11px] sm:text-xs font-mono text-zinc-300 break-all">
              mohd.farhan.7201@gmail.com
            </span>
          </div>

          <a
            href="tel:+918303877102"
            className="p-4 sm:p-5 rounded-2xl border border-white/5 bg-zinc-900/20 backdrop-blur-md hover:border-white/20 transition-all flex flex-col items-center gap-1.5 sm:gap-2"
          >
            <div className="p-2 sm:p-2.5 rounded-xl bg-white/5 text-white">
              <FaPhone className="text-sm sm:text-base" />
            </div>
            <span className="text-[9px] sm:text-[10px] uppercase tracking-widest text-zinc-500 font-accent">
              Direct Phone
            </span>
            <span className="text-[11px] sm:text-xs font-mono text-zinc-300 hover:text-white transition-colors">
              +91 83038 77102
            </span>
          </a>

          <div className="p-4 sm:p-5 rounded-2xl border border-white/5 bg-zinc-900/20 backdrop-blur-md flex flex-col items-center gap-1.5 sm:gap-2">
            <div className="p-2 sm:p-2.5 rounded-xl bg-white/5 text-white">
              <FaLocationDot className="text-sm sm:text-base" />
            </div>
            <span className="text-[9px] sm:text-[10px] uppercase tracking-widest text-zinc-500 font-accent">
              Location
            </span>
            <span className="text-[11px] sm:text-xs font-mono text-zinc-300">
              Gorakhpur, UP, India
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
