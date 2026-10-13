import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiTailwindcss,
  SiGreensock,
  SiFramer,
  SiBootstrap,
  SiMongodb,
  SiGit,
  SiGithub,
  SiVercel,
  SiGoogleanalytics,
  SiGooglesearchconsole,
} from "react-icons/si";
import {
  FaBolt,
  FaMagnifyingGlass,
  FaChartLine,
  FaArrowTrendUp,
  FaFileCode,
  FaNetworkWired,
  FaCss3Alt,
} from "react-icons/fa6";
import { VscVscode } from "react-icons/vsc";

gsap.registerPlugin(ScrollTrigger);

function Skills() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardsRef.current,
        { y: 35, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.15,
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

  const frontendSkills = [
    { name: "React.js", icon: <SiReact className="text-[#61DAFB]" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" /> },
    { name: "HTML5", icon: <SiHtml5 className="text-[#E34F26]" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-[#1572B6]" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
    { name: "GSAP", icon: <SiGreensock className="text-[#88CE02]" /> },
    { name: "Framer Motion", icon: <SiFramer className="text-white" /> },
    { name: "Bootstrap", icon: <SiBootstrap className="text-[#7952B3]" /> },
  ];

  const seoSkills = [
    { name: "Technical SEO Audits", icon: <FaMagnifyingGlass className="text-[#F59E0B]" /> },
    { name: "Core Web Vitals", icon: <FaBolt className="text-[#EC4899]" /> },
    { name: "Google Search Console", icon: <SiGooglesearchconsole className="text-[#4285F4]" /> },
    { name: "Google Analytics 4", icon: <SiGoogleanalytics className="text-[#E37400]" /> },
    { name: "On-Page & Off-Page SEO", icon: <FaChartLine className="text-[#10B981]" /> },
    { name: "Keyword & Competitor Analysis", icon: <FaArrowTrendUp className="text-[#38BDF8]" /> },
  ];

  const backendTools = [
    { name: "Next.js Backend", icon: <SiNextdotjs className="text-white" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
    { name: "Git & GitHub", icon: <SiGithub className="text-white" /> },
    { name: "Vercel Deploy", icon: <SiVercel className="text-white" /> },
    { name: "VS Code", icon: <VscVscode className="text-[#007ACC]" /> },
    { name: "REST APIs", icon: <FaNetworkWired className="text-[#A855F7]" /> },
  ];

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="py-12 sm:py-20 md:py-24 px-4 sm:px-10 md:px-20 lg:px-28 bg-black relative w-full overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="max-w-2xl mb-8 sm:mb-14">
          <p className="text-zinc-500 tracking-[3px] sm:tracking-[6px] uppercase text-[10px] sm:text-xs mb-3 font-accent font-medium">
            Core Competencies
          </p>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gradient font-heading leading-tight break-words">
            Capabilities & Stack.
          </h2>
          <p className="text-zinc-400 text-xs sm:text-sm md:text-base mt-2.5 sm:mt-3 leading-relaxed">
            Organized into specialized engineering and search optimization domains.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid lg:grid-cols-12 gap-5 sm:gap-8 items-stretch w-full">
          {/* Card 1: Frontend & Animation */}
          <div
            ref={(el) => (cardsRef.current[0] = el)}
            className="lg:col-span-6 rounded-2xl sm:rounded-3xl border border-white/10 bg-zinc-900/30 backdrop-blur-2xl p-4 sm:p-7 md:p-8 flex flex-col justify-between hover:border-white/20 transition-all duration-300 group shadow-2xl"
          >
            <div>
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <div>
                  <span className="text-[9px] sm:text-[10px] uppercase tracking-widest text-zinc-500 font-accent">
                    Category 01
                  </span>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white font-heading mt-0.5">
                    Frontend & Creative Motion
                  </h3>
                </div>
                <div className="p-2 sm:p-2.5 rounded-xl bg-white/5 border border-white/10 text-white">
                  <FaFileCode className="text-base sm:text-xl" />
                </div>
              </div>

              <p className="text-[11px] sm:text-xs md:text-sm text-zinc-400 leading-relaxed mb-4 sm:mb-6">
                Building responsive, interactive user experiences with modular component architectures and fluid motion.
              </p>

              <div className="grid grid-cols-2 gap-2 sm:gap-2.5">
                {frontendSkills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-2 sm:gap-2.5 p-2 sm:p-2.5 rounded-xl bg-black/50 border border-white/5 hover:border-white/20 transition-all duration-300"
                  >
                    <span className="text-base sm:text-xl flex-shrink-0">{skill.icon}</span>
                    <span className="text-[11px] sm:text-xs font-medium text-zinc-300 font-accent tracking-wide truncate">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-3.5 border-t border-white/5 flex items-center justify-between text-[10px] sm:text-[11px] text-zinc-500 font-mono">
              <span>Modern Standards</span>
              <span className="text-white">ES6+ & Type-Safe</span>
            </div>
          </div>

          {/* Right Column: Stacked Cards */}
          <div className="lg:col-span-6 flex flex-col gap-5 sm:gap-8 w-full">
            {/* Card 2: SEO & Analytics */}
            <div
              ref={(el) => (cardsRef.current[1] = el)}
              className="rounded-2xl sm:rounded-3xl border border-white/10 bg-zinc-900/30 backdrop-blur-2xl p-4 sm:p-7 md:p-8 flex flex-col justify-between hover:border-white/20 transition-all duration-300 group shadow-2xl"
            >
              <div>
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <div>
                    <span className="text-[9px] sm:text-[10px] uppercase tracking-widest text-zinc-500 font-accent">
                      Category 02
                    </span>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white font-heading mt-0.5">
                      Search Engine Optimization
                    </h3>
                  </div>
                  <div className="p-2 sm:p-2.5 rounded-xl bg-white/5 border border-white/10 text-white">
                    <FaArrowTrendUp className="text-base sm:text-xl" />
                  </div>
                </div>

                <p className="text-[11px] sm:text-xs md:text-sm text-zinc-400 leading-relaxed mb-4 sm:mb-6">
                  Technical audits, Core Web Vitals performance tuning, and search visibility optimization.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
                  {seoSkills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center gap-2 sm:gap-2.5 p-2 sm:p-2.5 rounded-xl bg-black/50 border border-white/5 hover:border-white/20 transition-all duration-300"
                    >
                      <span className="text-base sm:text-lg flex-shrink-0">{skill.icon}</span>
                      <span className="text-[11px] sm:text-xs font-medium text-zinc-300 font-accent tracking-wide truncate">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-5 pt-3.5 border-t border-white/5 flex items-center justify-between text-[10px] sm:text-[11px] text-zinc-500 font-mono">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Lighthouse 95+ Ready
                </span>
                <span>Organic Growth</span>
              </div>
            </div>

            {/* Card 3: Backend & Developer Tools */}
            <div
              ref={(el) => (cardsRef.current[2] = el)}
              className="rounded-2xl sm:rounded-3xl border border-white/10 bg-zinc-900/30 backdrop-blur-2xl p-4 sm:p-7 md:p-8 flex flex-col justify-between hover:border-white/20 transition-all duration-300 group shadow-2xl"
            >
              <div>
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <div>
                    <span className="text-[9px] sm:text-[10px] uppercase tracking-widest text-zinc-500 font-accent">
                      Category 03
                    </span>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white font-heading mt-0.5">
                      Backend & Developer Tools
                    </h3>
                  </div>
                  <div className="p-2 sm:p-2.5 rounded-xl bg-white/5 border border-white/10 text-white">
                    <FaNetworkWired className="text-base sm:text-xl" />
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-2.5">
                  {backendTools.map((tool) => (
                    <div
                      key={tool.name}
                      className="flex items-center gap-2 p-2 sm:p-2.5 rounded-xl bg-black/50 border border-white/5 hover:border-white/20 transition-all duration-300"
                    >
                      <span className="text-base sm:text-lg flex-shrink-0">{tool.icon}</span>
                      <span className="text-[11px] sm:text-xs font-medium text-zinc-300 font-accent tracking-wide truncate">
                        {tool.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
