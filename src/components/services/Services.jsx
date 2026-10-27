import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import {
  SiNextdotjs,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiTailwindcss,
  SiGreensock,
  SiGooglesearchconsole,
} from "react-icons/si";
import {
  FaBolt,
  FaMagnifyingGlass,
  FaLaptopCode,
  FaGlobe,
  FaServer,
  FaLocationDot,
  FaCheck,
  FaArrowRight,
} from "react-icons/fa6";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    badge: "Specialized Stack",
    title: "Next.js & React Web Development",
    subtitle: "App Router • SSR & SSG • High Performance",
    desc: "Developing ultra-fast, search-dominant web applications using Next.js App Router, React.js, Server Side Rendering (SSR), and Static Site Generation (SSG). Built for flawless user retention and Core Web Vitals excellence.",
    icon: <SiNextdotjs className="text-white text-2xl" />,
    features: [
      "Next.js App Router & Server Components (RSC)",
      "Server Side Rendering (SSR) & Static Site Generation (SSG)",
      "SEO Friendly Architecture & Dynamic Metadata",
      "Next.js Business Websites & High-Converting Landing Pages",
      "Next.js Performance Optimization & Bundle Splitting",
    ],
    tags: ["Next.js Developer", "React JS", "SSR / SSG", "App Router", "Performance"],
  },
  {
    badge: "End-to-End Solutions",
    title: "Full Stack & MERN Development",
    subtitle: "Node.js • Express • MongoDB • REST APIs",
    desc: "Designing and scaling full stack web applications with modern architectures. From secure RESTful API integrations and database management with MongoDB to dynamic admin dashboards and robust backend services.",
    icon: <SiNodedotjs className="text-[#5FA04E] text-2xl" />,
    features: [
      "Custom Full Stack Web Application Development",
      "Node.js & Express.js REST API Architecture",
      "MongoDB Database Design, Modeling & CRUD APIs",
      "Interactive Admin Dashboard & Control Panel Development",
      "Third-party API Integration & Webhooks",
    ],
    tags: ["MERN Stack", "Node.js", "Express.js", "MongoDB", "REST APIs"],
  },
  {
    badge: "Organic Search Growth",
    title: "Technical SEO & Core Web Vitals",
    subtitle: "On-Page • Technical Audits • Google Indexing",
    desc: "Comprehensive search engine optimization services engineered to rank your website at the top of Google. Solving indexing issues, optimizing Core Web Vitals (LCP, INP, CLS), and executing structured Schema markup.",
    icon: <SiGooglesearchconsole className="text-[#4285F4] text-2xl" />,
    features: [
      "Deep Technical SEO Audits & On-Page SEO Optimization",
      "Google Search Console & Website Indexing Fixes",
      "Core Web Vitals Speed & Page Experience Optimization",
      "Keyword Research, Semantic Headings & Content Architecture",
      "JSON-LD Schema Markup, XML Sitemaps & Robots.txt",
    ],
    tags: ["Technical SEO", "SEO Specialist", "Core Web Vitals", "GSC", "Indexing"],
  },
  {
    badge: "Interactive Frontend",
    title: "Modern UI/UX & GSAP Motion Design",
    subtitle: "Tailwind CSS • GSAP • Framer Motion",
    desc: "Crafting modern, immersive website experiences where responsive fluid typography meets silky-smooth animations. Engaging micro-interactions that captivate users without compromising page load speeds.",
    icon: <SiGreensock className="text-[#88CE02] text-2xl" />,
    features: [
      "Custom Website Development & Responsive Mobile-First UI",
      "GSAP ScrollTrigger & Micro-Interactions",
      "Framer Motion Transitions & Layout Animations",
      "Modern Tailwind CSS Utility Architecture",
      "Cross-Browser Compatibility & Accessibility (WCAG)",
    ],
    tags: ["Tailwind CSS", "GSAP Motion", "Framer Motion", "Interactive UI"],
  },
  {
    badge: "Local & Global Reach",
    title: "Local SEO & Freelance Web Development",
    subtitle: "Gorakhpur • Lucknow • Delhi NCR • Global",
    desc: "Providing bespoke website development and local SEO services for businesses, startups, and international clients. Targeted local search optimization to dominate Google searches in regional markets.",
    icon: <FaLocationDot className="text-[#EF4444] text-2xl" />,
    features: [
      "Web Developer & Local SEO Services in Gorakhpur",
      "Website Development & SEO in Lucknow & Delhi NCR",
      "Freelance Web Developer for Startups & Small Businesses",
      "Hire Next.js & React Developer for Contract / Remote Roles",
      "International Freelance Web Development & Support",
    ],
    tags: ["Gorakhpur", "Lucknow", "Delhi NCR", "Freelance India", "Hire Developer"],
  },
  {
    badge: "Conversion-Focused",
    title: "Business Websites & Landing Pages",
    subtitle: "Lead Gen • Portfolio • Brand Identity",
    desc: "Strategic landing page development and high-converting corporate websites tailored to turn visitors into paying clients. Optimized for lightning-fast first contentful paint and frictionless conversion flows.",
    icon: <FaGlobe className="text-[#38BDF8] text-2xl" />,
    features: [
      "Conversion-Optimized Landing Page Development",
      "Custom Business Website Development for Growth",
      "Portfolio Website Development for Creatives & Founders",
      "Website Speed Optimization & Asset Compression",
      "Analytics & Conversion Tracking Setup (GA4 / GSC)",
    ],
    tags: ["Business Websites", "Landing Pages", "Speed Optimization", "Conversion"],
  },
];

function Services() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
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

      gsap.fromTo(
        cardsRef.current,
        { opacity: 0, y: 45 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.12,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 78%",
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="py-16 sm:py-24 md:py-28 px-4 sm:px-10 md:px-20 lg:px-28 bg-black relative w-full overflow-hidden border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <div ref={headerRef} className="max-w-3xl mb-12 sm:mb-16">
          <p className="text-zinc-400 tracking-[3px] sm:tracking-[6px] uppercase text-[10px] sm:text-xs mb-3 font-accent font-medium">
            Services & Expertise
          </p>

          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gradient font-heading leading-tight mb-4 break-words">
            Web Development & SEO Services.
          </h2>

          <p className="text-zinc-400 text-xs sm:text-sm md:text-base leading-relaxed">
            From modern <span className="text-white font-medium">Next.js & React web applications</span> to deep <span className="text-white font-medium">Technical SEO & Core Web Vitals optimization</span>, discover full-cycle digital development tailored to rank, scale, and convert.
          </p>
        </div>

        {/* Services Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              ref={(el) => (cardsRef.current[index] = el)}
              className="group relative rounded-3xl border border-white/5 bg-zinc-900/25 backdrop-blur-xl p-6 sm:p-8 flex flex-col justify-between hover:border-white/20 transition-all duration-300 shadow-2xl hover:bg-zinc-900/40"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-5">
                  <div className="p-3 rounded-2xl bg-white/5 border border-white/10 group-hover:border-white/25 transition-colors">
                    {service.icon}
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider px-3 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-300">
                    {service.badge}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white font-heading group-hover:text-zinc-100 transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs font-mono text-zinc-400 mt-1 mb-3">
                  {service.subtitle}
                </p>

                <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                  {service.desc}
                </p>

                {/* Feature Bullet Points */}
                <div className="space-y-2.5 mb-6 border-t border-white/5 pt-4">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-zinc-300 text-xs sm:text-[13px] leading-relaxed">
                      <FaCheck className="text-emerald-400 text-[11px] mt-0.5 shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tag Cloud */}
              <div className="border-t border-white/5 pt-4 flex flex-wrap gap-1.5 mt-auto">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-mono text-zinc-400 bg-white/[0.03] px-2 py-0.5 rounded border border-white/5"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Local SEO & Regional Coverage Banner */}
        <div className="mt-12 sm:mt-16 p-6 sm:p-10 rounded-3xl border border-white/10 bg-gradient-to-r from-zinc-900/60 via-zinc-900/30 to-black backdrop-blur-xl flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-mono uppercase tracking-[2px] text-emerald-400 mb-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Regional & Remote Availability
            </span>
            <h4 className="text-xl sm:text-2xl font-bold text-white font-heading">
              Serving Businesses in Gorakhpur, Lucknow, Delhi NCR & Globally
            </h4>
            <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mt-2">
              Looking to hire a <strong className="text-zinc-200">Next.js developer</strong>, build a high-performance <strong className="text-zinc-200">custom business website</strong>, or rank your brand with <strong className="text-zinc-200">Local SEO</strong> in Uttar Pradesh or Delhi NCR? Let’s collaborate on your next growth milestone.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-6 py-3.5 sm:px-8 sm:py-4 rounded-full border border-white/20 bg-white text-black hover:bg-zinc-200 text-xs sm:text-sm font-bold uppercase tracking-wider font-accent transition-all duration-300 shadow-xl whitespace-nowrap"
          >
            <span>Hire Web Developer</span>
            <FaArrowRight className="text-xs" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Services;
