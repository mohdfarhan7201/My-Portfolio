import { useEffect, useState } from "react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="contents">
      <nav
        aria-label="Main Navigation"
        className={`fixed left-1/2 top-3 sm:top-5 z-[1000] -translate-x-1/2 transition-all duration-300 ease-out max-w-[96vw] ${
          scrolled
            ? "bg-black/90 backdrop-blur-xl border border-white/10 py-2 px-3.5 sm:px-6 shadow-2xl"
            : "bg-black/50 backdrop-blur-md border border-white/5 py-2 px-3 sm:px-5"
        } rounded-full whitespace-nowrap overflow-x-auto no-scrollbar`}
      >
        <ul className="flex items-center gap-2.5 sm:gap-6">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="text-[11px] sm:text-xs md:text-sm font-medium text-zinc-400 transition-colors duration-200 hover:text-white px-1 sm:px-1.5 py-0.5"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
