import { useEffect, useState } from "react";
import { FaBars, FaXmark, FaGithub, FaLinkedinIn, FaEnvelope, FaArrowRight } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const navLinks = [
    { name: "Home", href: "#home", num: "01" },
    { name: "About", href: "#about", num: "02" },
    { name: "Services", href: "#services", num: "03" },
    { name: "Skills", href: "#skills", num: "04" },
    { name: "Projects", href: "#projects", num: "05" },
    { name: "Experience", href: "#experience", num: "06" },
    { name: "FAQ", href: "#faq", num: "07" },
    { name: "Contact", href: "#contact", num: "08" },
  ];

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-[1000] px-3 sm:px-6 pt-3 sm:pt-4 pointer-events-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Mobile Header Bar (< md) */}
        <div className="w-full flex md:hidden items-center justify-between pointer-events-auto">
          {/* Logo Badge */}
          <a
            href="#home"
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/85 backdrop-blur-xl border border-white/10 text-white font-heading font-bold text-xs tracking-wider shadow-lg active:scale-95 transition-transform"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>MOHD FARHAN</span>
          </a>

          {/* Hamburger Menu Toggle Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-black/85 backdrop-blur-xl border border-white/15 text-white shadow-xl hover:border-white/30 active:scale-90 transition-all"
          >
            {menuOpen ? <FaXmark className="text-base" /> : <FaBars className="text-base" />}
          </button>
        </div>

        {/* Desktop Floating Pill Navbar (>= md) */}
        <nav
          aria-label="Desktop Navigation"
          className={`hidden md:flex mx-auto pointer-events-auto transition-all duration-300 ease-out ${
            scrolled
              ? "bg-black/90 backdrop-blur-xl border border-white/10 py-2.5 px-7 shadow-2xl"
              : "bg-black/55 backdrop-blur-md border border-white/5 py-2 px-6"
          } rounded-full whitespace-nowrap`}
        >
          <ul className="flex items-center gap-5 lg:gap-7">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-xs lg:text-sm font-medium text-zinc-400 transition-colors duration-200 hover:text-white px-1.5 py-0.5"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Zero-Scroll Alternating Zig-Zag Mobile Menu Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed inset-0 top-[56px] z-[999] pointer-events-auto md:hidden bg-black/95 backdrop-blur-2xl border-t border-white/10 flex flex-col justify-between px-4 py-4 overflow-hidden h-[calc(100dvh-56px)] max-h-[calc(100dvh-56px)] select-none"
          >
            {/* Header tag */}
            <div className="flex items-center justify-between pb-2 border-b border-white/5 shrink-0">
              <span className="text-[10px] font-mono uppercase tracking-[2.5px] text-zinc-400 font-accent">
                Navigation
              </span>
              <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Tap to explore
              </span>
            </div>

            {/* Alternating Zig-Zag List: Larger Cards, Wide Left-Right Shift */}
            <div className="flex flex-col justify-center gap-2 xs:gap-2.5 w-full my-auto py-1">
              {navLinks.map((link, idx) => {
                const isLeft = idx % 2 === 0;
                return (
                  <div
                    key={link.name}
                    className={`w-full flex ${isLeft ? "justify-start" : "justify-end"}`}
                  >
                    <a
                      href={link.href}
                      onClick={handleLinkClick}
                      className={`group w-[74%] xs:w-[70%] flex items-center justify-between px-4 py-2.5 xs:py-3 rounded-2xl ${
                        isLeft
                          ? "rounded-tl-md border-l-[3px] border-l-emerald-400 border-y border-r border-white/10"
                          : "rounded-tr-md border-r-[3px] border-r-emerald-400 border-y border-l border-white/10"
                      } bg-zinc-900/70 hover:bg-zinc-800/90 hover:border-white/30 active:scale-[0.97] transition-all shadow-xl`}
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <span className="text-[11px] font-mono text-emerald-400 shrink-0 font-bold px-1.5 py-0.5 rounded bg-emerald-400/10">
                          {link.num}
                        </span>
                        <span className="text-sm xs:text-[15px] font-bold font-heading text-white tracking-wide truncate">
                          {link.name}
                        </span>
                      </div>
                      <FaArrowRight className="text-xs text-zinc-400 group-hover:text-white group-hover:translate-x-1 transition-all shrink-0 ml-1.5 opacity-60 group-hover:opacity-100" />
                    </a>
                  </div>
                );
              })}
            </div>

            {/* Bottom Section: CTA & Socials */}
            <div className="pt-3 border-t border-white/10 flex flex-col gap-2.5 shrink-0">
              <a
                href="#contact"
                onClick={handleLinkClick}
                className="w-full py-3 rounded-xl bg-white text-black font-heading font-bold text-xs uppercase tracking-wider text-center shadow-xl active:scale-[0.98] transition-transform"
              >
                Let’s Connect
              </a>

              <div className="flex items-center justify-between text-zinc-400 text-xs font-mono pt-1">
                <span>Gorakhpur, UP</span>
                <div className="flex items-center gap-3.5 text-base">
                  <a
                    href="https://github.com/mohdfarhan7201"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Profile"
                    className="hover:text-white p-0.5 transition-colors"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/mohd-farhan-4721a4295/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Profile"
                    className="hover:text-white p-0.5 transition-colors"
                  >
                    <FaLinkedinIn />
                  </a>
                  <a
                    href="mailto:mohd.farhan.7201@gmail.com"
                    aria-label="Send Email"
                    className="hover:text-white p-0.5 transition-colors"
                  >
                    <FaEnvelope />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
