import { useEffect, useState } from "react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed left-1/2 top-4 md:top-6 z-[1000] -translate-x-1/2 transition-all duration-400 ease-out ${
        scrolled
          ? "bg-black/85 backdrop-blur-xl border border-white/10 py-2.5 px-6 shadow-2xl"
          : "bg-black/30 backdrop-blur-md border border-white/5 py-3 px-7"
      } rounded-full whitespace-nowrap`}
    >
      <ul className="flex items-center gap-6 sm:gap-10">
        {navLinks.map((link) => (
          <li key={link.name}>
            <a
              href={link.href}
              className="text-xs sm:text-sm font-medium text-zinc-400 transition-colors duration-200 hover:text-white"
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
