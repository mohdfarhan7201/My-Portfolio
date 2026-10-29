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
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/80 backdrop-blur-xl border border-white/10 text-white font-heading font-bold text-xs tracking-wider shadow-lg active:scale-95 transition-transform"
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

      {/* Zero-Scroll Compact Mobile Drawer Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed inset-0 top-[56px] z-[999] pointer-events-auto md:hidden bg-black/95 backdrop-blur-2xl border-t border-white/10 flex flex-col justify-between p-4 xs:p-5 overflow-hidden h-[calc(100dvh-56px)] max-h-[calc(100dvh-56px)] select-none"
          >
            {/* Header tag */}
            <div className="flex items-center justify-between pb-2 border-b border-white/5 shrink-0">
              <span className="text-[10px] font-mono uppercase tracking-[2.5px] text-zinc-400 font-accent">
                Quick Menu
              </span>
              <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Tap to navigate
              </span>
            </div>

            {/* 2-Column Responsive Navigation Grid (Fits screen without scrolling) */}
            <div className="grid grid-cols-2 gap-2 xs:gap-2.5 w-full my-auto py-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="group flex items-center justify-between px-3 py-2.5 xs:py-3 rounded-xl border border-white/5 bg-zinc-900/40 hover:border-white/25 hover:bg-zinc-900/70 active:scale-95 transition-all text-left shadow-md"
                >
                  <div className="flex items-center gap-2 min-w-0">
                    <span className="text-[10px] font-mono text-zinc-400 group-hover:text-emerald-400 transition-colors shrink-0">
                      {link.num}
                    </span>
                    <span className="text-xs xs:text-sm font-bold font-heading text-zinc-200 group-hover:text-white transition-colors truncate">
                      {link.name}
                    </span>
                  </div>
                  <FaArrowRight className="text-[10px] text-zinc-400 group-hover:text-white group-hover:translate-x-0.5 transition-all shrink-0 ml-1 opacity-0 group-hover:opacity-100" />
                </a>
              ))}
            </div>

            {/* Compact Bottom Section: CTA & Socials (Never overflows) */}
            <div className="pt-3 border-t border-white/10 flex flex-col gap-2.5 shrink-0">
              <a
                href="#contact"
                onClick={handleLinkClick}
                className="w-full py-2.5 xs:py-3 rounded-xl bg-white text-black font-heading font-bold text-xs uppercase tracking-wider text-center shadow-xl active:scale-[0.98] transition-transform"
              >
                Let’s Connect
              </a>

              <div className="flex items-center justify-between text-zinc-400 text-[11px] font-mono pt-1">
                <span>Gorakhpur, UP</span>
                <div className="flex items-center gap-3.5 text-sm">
                  <a
                    href="https://github.com/mohdfarhan7201"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Profile"
                    className="hover:text-white p-1 transition-colors"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/mohd-farhan-4721a4295/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Profile"
                    className="hover:text-white p-1 transition-colors"
                  >
                    <FaLinkedinIn />
                  </a>
                  <a
                    href="mailto:mohd.farhan.7201@gmail.com"
                    aria-label="Send Email"
                    className="hover:text-white p-1 transition-colors"
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
