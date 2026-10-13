import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiGreensock,
  SiFramer,
  SiMongodb,
  SiHtml5,
} from "react-icons/si";
import { FaBolt, FaMagnifyingGlass, FaChartLine, FaCss3Alt } from "react-icons/fa6";

gsap.registerPlugin(ScrollTrigger);

const techItems = [
  { name: "React.js", icon: <SiReact className="text-[#61DAFB]" /> },
  { name: "Next.js 15", icon: <SiNextdotjs className="text-white" /> },
  { name: "HTML5", icon: <SiHtml5 className="text-[#E34F26]" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-[#1572B6]" /> },
  { name: "GSAP Motion", icon: <SiGreensock className="text-[#88CE02]" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" /> },
  { name: "Framer Motion", icon: <SiFramer className="text-white" /> },
  { name: "Technical SEO", icon: <FaMagnifyingGlass className="text-[#F59E0B]" /> },
  { name: "Core Web Vitals", icon: <FaBolt className="text-[#EC4899]" /> },
  { name: "Google Analytics 4", icon: <FaChartLine className="text-[#10B981]" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
];

function TechTicker() {
  const tickerRef = useRef(null);

  useEffect(() => {
    if (!tickerRef.current) return;

    gsap.to(tickerRef.current, {
      xPercent: -15,
      ease: "none",
      scrollTrigger: {
        trigger: tickerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 0.5,
      },
    });
  }, []);

  return (
    <div className="relative w-full max-w-full py-5 sm:py-8 md:py-10 bg-black border-y border-white/5 overflow-hidden select-none">
      <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-28 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-28 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

      <div ref={tickerRef} className="animate-marquee flex items-center whitespace-nowrap gap-8 sm:gap-14">
        {[...techItems, ...techItems].map((item, idx) => (
          <div
            key={idx}
            className="flex items-center gap-2.5 sm:gap-3.5 text-zinc-300 hover:text-white transition-colors duration-300 font-accent uppercase text-[11px] sm:text-xs md:text-sm tracking-[2px] sm:tracking-[3px]"
          >
            <span className="text-lg sm:text-xl md:text-2xl">{item.icon}</span>
            <span className="font-semibold">{item.name}</span>
            <span className="text-zinc-500 text-xs">•</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TechTicker;
