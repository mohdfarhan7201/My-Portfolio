import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { FaBriefcase, FaGraduationCap, FaCertificate, FaArrowRight } from "react-icons/fa6";

gsap.registerPlugin(ScrollTrigger);

function Experience() {
  const ref = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      ref.current,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  const experiencePoints = [
    "Contribute to responsive website interfaces and reusable UI components using modern web technologies.",
    "Implement interactive elements, fluid animations (GSAP / Framer Motion), and mobile-friendly layouts based on project requirements.",
    "Use Git/GitHub for version control, collaborative workflows, debugging, testing, and cross-device compatibility.",
    "Support website optimization and SEO improvements where applicable, including metadata optimization and clean page structure.",
  ];

  return (
    <section
      id="experience"
      className="py-12 sm:py-20 md:py-24 px-4 sm:px-10 md:px-20 lg:px-28 bg-black relative w-full overflow-hidden border-t border-white/5"
    >
      <div ref={ref} className="max-w-7xl mx-auto w-full">
        <p className="text-zinc-500 tracking-[3px] sm:tracking-[6px] uppercase text-[10px] sm:text-xs mb-3 font-accent font-medium">
          Career Journey
        </p>

        <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gradient font-heading leading-tight mb-3 break-words">
          Experience & Education.
        </h2>

        <p className="max-w-2xl text-zinc-400 text-xs sm:text-sm md:text-base mb-8 sm:mb-14 font-normal leading-relaxed">
          Hands-on professional experience building real-world digital products, backed by academic foundations in computer applications.
        </p>

        <div className="grid lg:grid-cols-12 gap-6 md:gap-12 items-start">
          {/* Work Experience - Takes 7 cols */}
          <div className="lg:col-span-7 group relative rounded-2xl sm:rounded-3xl border border-white/5 bg-zinc-900/20 backdrop-blur-2xl p-5 sm:p-8 md:p-12 hover:border-white/20 transition-all duration-500 shadow-2xl">
            <div className="flex flex-wrap items-center justify-between gap-3 sm:gap-4 mb-5 sm:mb-6">
              <div className="flex items-center gap-3">
                <div className="p-2.5 sm:p-3 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 text-white shrink-0">
                  <FaBriefcase className="text-lg sm:text-xl" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white font-heading">
                    Web Development Intern
                  </h3>
                  <p className="text-zinc-400 text-sm md:text-base font-medium">
                    Shine Infosolutions
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-[11px] font-mono tracking-wider">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                15 July 2026 – Present
              </div>
            </div>

            <div className="border-t border-white/5 pt-6 mt-6">
              <p className="text-xs uppercase tracking-widest text-zinc-500 font-accent mb-4">
                Key Responsibilities & Impact
              </p>
              <ul className="space-y-4">
                {experiencePoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-3 text-zinc-400 text-sm md:text-base leading-relaxed">
                    <span className="mt-1.5 text-zinc-600 group-hover:text-white transition-colors">
                      <FaArrowRight className="text-xs" />
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Shine Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl" />
          </div>

          {/* Education & Certifications - Takes 5 cols */}
          <div className="lg:col-span-5 flex flex-col gap-4 sm:gap-6">
            {/* Education Card */}
            <div className="group relative rounded-2xl sm:rounded-3xl border border-white/5 bg-zinc-900/20 backdrop-blur-2xl p-5 sm:p-8 hover:border-white/20 transition-all duration-500 shadow-2xl">
              <div className="flex items-center gap-3 mb-3 sm:mb-4">
                <div className="p-2.5 sm:p-3 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 text-white shrink-0">
                  <FaGraduationCap className="text-lg sm:text-xl" />
                </div>
                <div>
                  <span className="text-[9px] sm:text-[10px] uppercase tracking-widest text-zinc-400 font-accent">
                    Higher Education
                  </span>
                  <h4 className="text-base sm:text-lg md:text-xl font-bold text-white font-heading">
                    Bachelor of Computer Applications (BCA)
                  </h4>
                </div>
              </div>

              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">
                Deen Dayal Upadhyaya Gorakhpur University (DDU), Gorakhpur
              </p>

              <div className="flex items-center justify-between border-t border-white/5 pt-3 sm:pt-4 text-xs font-mono">
                <span className="text-zinc-500 text-[11px] sm:text-xs">Graduation: 2026</span>
                <span className="text-white font-semibold text-[11px] sm:text-xs px-2.5 py-1 rounded-md bg-white/10 border border-white/10">
                  Aggregate: 73.3%
                </span>
              </div>
            </div>

            {/* Certification Card */}
            <div className="group relative rounded-2xl sm:rounded-3xl border border-white/5 bg-zinc-900/20 backdrop-blur-2xl p-5 sm:p-8 hover:border-white/20 transition-all duration-500 shadow-2xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 sm:p-3 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 text-white shrink-0">
                  <FaCertificate className="text-lg sm:text-xl" />
                </div>
                <div>
                  <span className="text-[9px] sm:text-[10px] uppercase tracking-widest text-zinc-400 font-accent">
                    Certification
                  </span>
                  <h4 className="text-base sm:text-lg md:text-xl font-bold text-white font-heading">
                    Responsive Web Design
                  </h4>
                </div>
              </div>

              <div className="flex items-center justify-between border-t border-white/5 pt-3 sm:pt-4 text-xs font-mono">
                <span className="text-zinc-500 text-[11px] sm:text-xs">Verified Credential</span>
                <span className="text-zinc-400 text-[11px] sm:text-xs">January 2025</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;