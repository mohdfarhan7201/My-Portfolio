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
      className="py-16 md:py-24 px-6 md:px-20 lg:px-28 bg-black relative"
    >
      <div ref={contentRef} className="max-w-5xl mx-auto text-center w-full">
        <p className="text-zinc-500 tracking-[5px] md:tracking-[8px] uppercase text-[10px] md:text-xs mb-4 font-accent font-medium">
          Get In Touch
        </p>

        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-gradient font-heading leading-tight">
          Let’s build <br /> something iconic.
        </h2>

        <p className="mt-6 text-zinc-400 text-sm sm:text-lg max-w-xl mx-auto font-normal leading-relaxed">
          Available for frontend engineering, full-stack projects, and search engine optimization consulting.
        </p>

        {/* Primary Action Button */}
        <div className="mt-10 sm:mt-12 flex flex-wrap items-center justify-center gap-4">
          <a
            href="mailto:mohd.farhan.7201@gmail.com"
            className="group relative px-9 py-4 sm:px-12 sm:py-5 overflow-hidden rounded-full border border-white/20 text-xs sm:text-sm font-bold uppercase tracking-[3px] transition-all hover:border-white font-accent shadow-2xl"
          >
            <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
              Send an Email
            </span>
            <div className="absolute inset-0 -translate-x-full bg-white transition-transform duration-400 group-hover:translate-x-0" />
          </a>

          <button
            onClick={handleCopyEmail}
            className="flex items-center gap-2 px-6 py-4 sm:px-8 sm:py-5 rounded-full border border-white/10 text-zinc-300 hover:text-white hover:border-white/25 text-xs sm:text-sm font-mono transition-all"
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
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
          <div className="p-5 rounded-2xl border border-white/5 bg-zinc-900/20 backdrop-blur-md flex flex-col items-center gap-2">
            <div className="p-2.5 rounded-xl bg-white/5 text-white">
              <FaEnvelope />
            </div>
            <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-accent">
              Email
            </span>
            <span className="text-xs font-mono text-zinc-300">
              mohd.farhan.7201@gmail.com
            </span>
          </div>

          <a
            href="tel:+918303877102"
            className="p-5 rounded-2xl border border-white/5 bg-zinc-900/20 backdrop-blur-md hover:border-white/20 transition-all flex flex-col items-center gap-2"
          >
            <div className="p-2.5 rounded-xl bg-white/5 text-white">
              <FaPhone />
            </div>
            <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-accent">
              Direct Phone
            </span>
            <span className="text-xs font-mono text-zinc-300 hover:text-white transition-colors">
              +91 83038 77102
            </span>
          </a>

          <div className="p-5 rounded-2xl border border-white/5 bg-zinc-900/20 backdrop-blur-md flex flex-col items-center gap-2">
            <div className="p-2.5 rounded-xl bg-white/5 text-white">
              <FaLocationDot />
            </div>
            <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-accent">
              Location
            </span>
            <span className="text-xs font-mono text-zinc-300">
              Gorakhpur, UP, India
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
