import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { FaPlus, FaMinus, FaRegCircleQuestion } from "react-icons/fa6";

gsap.registerPlugin(ScrollTrigger);

const faqItems = [
  {
    q: "Why hire Mohd Farhan as your Next.js & React Developer?",
    a: "Mohd Farhan specializes in modern Next.js (App Router, Server Components, SSR/SSG) and React.js development with a rare double-advantage: deep frontend engineering coupled with technical SEO expertise. Every website is built for lightning-fast Core Web Vitals, maximum search visibility, and seamless interactive user experience.",
  },
  {
    q: "Do you offer Web Development and SEO services in Gorakhpur, Lucknow & Delhi NCR?",
    a: "Yes. I provide custom website development and local SEO services across Uttar Pradesh (Gorakhpur, Lucknow) and Delhi NCR, as well as remotely for international clients. Whether you need an on-page SEO audit, local Google Search Console optimization, or a complete full-stack web application, I deliver end-to-end solutions.",
  },
  {
    q: "What is your approach to Technical SEO and Core Web Vitals optimization?",
    a: "I conduct in-depth Technical SEO audits analyzing Largest Contentful Paint (LCP), Interaction to Next Paint (INP), and Cumulative Layout Shift (CLS). I implement structured data (JSON-LD schema markup), dynamic XML sitemaps, robots.txt directives, semantic HTML5 hierarchy, asset compression, and mobile-first responsiveness to ensure effortless search engine indexing.",
  },
  {
    q: "What full-stack technologies and databases do you work with?",
    a: "I work with the modern JavaScript & TypeScript ecosystem: React.js, Next.js, Node.js, Express.js, MongoDB (MERN Stack), Tailwind CSS, GSAP, and RESTful API integrations. I also build intuitive admin dashboards, automated data pipelines, and third-party API connections.",
  },
  {
    q: "Can you build custom business websites and high-converting landing pages for startups?",
    a: "Absolutely. I design and engineer custom business websites, startup landing pages, and web applications engineered to convert visitors into clients. All sites include conversion tracking, clean typography, fast load times, and responsive layouts across all mobile, tablet, and desktop screens.",
  },
  {
    q: "How can I hire you for freelance web development or full-time roles?",
    a: "You can reach out directly via email at mohd.farhan.7201@gmail.com, call +91 83038 77102, or connect via LinkedIn and GitHub. I am open to freelance projects, startup consulting, contract roles, and full-time remote or hybrid positions.",
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  const sectionRef = useRef(null);
  const headerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 30 },
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

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section
      ref={sectionRef}
      id="faq"
      className="py-16 sm:py-24 md:py-28 px-4 sm:px-10 md:px-20 lg:px-28 bg-black relative w-full overflow-hidden border-t border-white/5"
    >
      <div className="max-w-5xl mx-auto w-full">
        {/* Header */}
        <div ref={headerRef} className="max-w-2xl mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-3">
            <FaRegCircleQuestion className="text-zinc-400 text-xs" />
            <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[2px] text-zinc-300 font-accent">
              Knowledge Base
            </span>
          </div>

          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-gradient font-heading leading-tight mb-3 break-words">
            Frequently Asked Questions.
          </h2>

          <p className="text-zinc-400 text-xs sm:text-sm md:text-base leading-relaxed">
            Essential answers regarding web development services, Next.js architecture, technical SEO auditing, and hiring.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3 sm:space-y-4">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "border-white/20 bg-zinc-900/40"
                    : "border-white/5 bg-zinc-900/15 hover:border-white/10 hover:bg-zinc-900/25"
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  className="w-full py-4 sm:py-5 px-5 sm:px-6 flex items-center justify-between text-left gap-4"
                >
                  <span className="text-sm sm:text-base md:text-lg font-semibold text-white font-heading">
                    {item.q}
                  </span>
                  <span className="p-2 rounded-full bg-white/5 border border-white/10 text-zinc-300 shrink-0 text-xs">
                    {isOpen ? <FaMinus /> : <FaPlus />}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-zinc-300 text-xs sm:text-sm md:text-base leading-relaxed border-t border-white/5">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
