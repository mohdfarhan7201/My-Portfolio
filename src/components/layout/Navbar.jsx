import { useEffect, useState } from "react";

function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
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
            className={`fixed left-1/2 top-4 md:top-8 z-[1000] -translate-x-1/2 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${scrolled
                    ? "bg-black/80 backdrop-blur-2xl border border-white/10 py-2.5 md:py-3 px-5 md:px-6 shadow-2xl"
                    : "bg-transparent py-4 px-8"
                } rounded-full whitespace-nowrap`}
        >
            <ul className="flex items-center gap-5 md:gap-10">
                {navLinks.map((link) => (
                    <li key={link.name}>
                        <a
                            href={link.href}
                            className="text-[10px] md:text-sm font-medium text-zinc-400 transition-all duration-300 hover:text-white"
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


