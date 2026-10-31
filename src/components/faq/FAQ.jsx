import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { FaPlus, FaMinus, FaRegCircleQuestion } from "react-icons/fa6";

gsap.registerPlugin(ScrollTrigger);

const faqItems = [
  {
    q: "Who is Mohd Farhan?",
    a: "Mohd Farhan is a Full Stack Web Developer and Technical SEO Specialist based in Gorakhpur, Uttar Pradesh, India. He builds responsive web applications with React.js, Next.js, Node.js, and Tailwind CSS while optimizing websites for search engine rankings, Google Search Console indexing, and Core Web Vitals.",
  },
  {
    q: "What web development and SEO services does Mohd Farhan provide?",
    a: "Mohd Farhan provides custom Next.js and React web application development, full-stack MERN engineering, RESTful API architecture, technical SEO audits, Google Search Console indexing fixes, Core Web Vitals speed optimization, and custom business website development.",
  },
  {
    q: "What technologies and frameworks does Mohd Farhan work with?",
    a: "Mohd Farhan specializes in React.js, Next.js (App Router, SSR, SSG), JavaScript (ES6+), TypeScript, Node.js, Express.js, MongoDB, Tailwind CSS, GSAP Motion, Framer Motion, HTML5, CSS3, and Git/GitHub.",
  },
  {
    q: "What is the difference between React and Next.js for web development?",
    a: "React is a client-side JavaScript library for building user interfaces, whereas Next.js is a full-stack React framework that adds Server-Side Rendering (SSR), Static Site Generation (SSG), automatic routing via App Router, and built-in SEO metadata management for faster load speeds and better search engine visibility.",
  },
  {
    q: "How can businesses improve technical SEO and Core Web Vitals?",
    a: "Businesses can improve technical SEO by optimizing Largest Contentful Paint (LCP) with modern image formats like WebP, minimizing Interaction to Next Paint (INP) with efficient JavaScript execution, preventing Cumulative Layout Shift (CLS) with explicit media dimensions, adding valid JSON-LD schema markup, and submitting XML sitemaps to Google Search Console.",
  },
  {
    q: "Do you work with businesses in Gorakhpur, Lucknow, Delhi NCR, and remotely?",
    a: "Yes, Mohd Farhan provides custom website development and local SEO services across Uttar Pradesh (Gorakhpur, Lucknow), Delhi NCR, pan-India, and remotely for international clients worldwide.",
  },
  {
    q: "How can clients and hiring teams contact Mohd Farhan?",
    a: "Clients and hiring teams can contact Mohd Farhan directly via email at mohd.farhan.7201@gmail.com, telephone at +91 83038 77102, or connect via LinkedIn and GitHub for technical projects and full-time engineering roles.",
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
      aria-label="Frequently Asked Questions"
      className="py-16 sm:py-24 md:py-28 px-4 sm:px-10 md:px-20 lg:px-28 bg-black relative w-full overflow-hidden border-t border-white/5"
    >
      <div className="max-w-5xl mx-auto w-full">
        {/* Header */}
        <div ref={headerRef} className="max-w-2xl mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-3">
            <FaRegCircleQuestion className="text-zinc-400 text-xs" />
            <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[2px] text-zinc-300 font-accent">
              Knowledge Base &amp; AEO
            </span>
          </div>

          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-gradient font-heading leading-tight mb-3 break-words">
            Frequently Asked Questions.
          </h2>

          <p className="text-zinc-400 text-xs sm:text-sm md:text-base leading-relaxed">
            Essential answers regarding web development services, Next.js architecture, technical SEO auditing, and hiring. Check my <a href="#services" className="text-white font-medium underline underline-offset-4 hover:text-emerald-400">services</a> or <a href="#contact" className="text-white font-medium underline underline-offset-4 hover:text-emerald-400">reach out directly</a>.
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
                <h3 className="m-0 p-0 text-base">
                  <button
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                    id={`faq-question-${index}`}
                    className="w-full py-4 sm:py-5 px-5 sm:px-6 flex items-center justify-between text-left gap-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
                  >
                    <span className="text-sm sm:text-base md:text-lg font-semibold text-white font-heading">
                      {item.q}
                    </span>
                    <span className="p-2 rounded-full bg-white/5 border border-white/10 text-zinc-300 shrink-0 text-xs">
                      {isOpen ? <FaMinus /> : <FaPlus />}
                    </span>
                  </button>
                </h3>

                {isOpen && (
                  <div
                    id={`faq-answer-${index}`}
                    role="region"
                    aria-labelledby={`faq-question-${index}`}
                    className="px-5 sm:px-6 pb-5 pt-1 text-zinc-300 text-xs sm:text-sm md:text-base leading-relaxed border-t border-white/5"
                  >
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
