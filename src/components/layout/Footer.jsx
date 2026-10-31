import { FaGithub, FaLinkedinIn, FaEnvelope, FaPhone } from "react-icons/fa6";

function Footer() {
  const socials = [
    { name: "GitHub", icon: <FaGithub />, url: "https://github.com/mohdfarhan7201", label: "Visit Mohd Farhan's GitHub Profile" },
    { name: "LinkedIn", icon: <FaLinkedinIn />, url: "https://www.linkedin.com/in/mohd-farhan-4721a4295/", label: "Connect with Mohd Farhan on LinkedIn" },
    { name: "Email", icon: <FaEnvelope />, url: "mailto:mohd.farhan.7201@gmail.com", label: "Send email to mohd.farhan.7201@gmail.com" },
    { name: "Phone", icon: <FaPhone />, url: "tel:+918303877102", label: "Call Mohd Farhan at +91 83038 77102" },
  ];

  const footerNavLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="py-12 sm:py-20 px-4 bg-black flex flex-col items-center gap-8 sm:gap-10 border-t border-white/5 w-full">
      {/* Site Internal Navigation Links */}
      <nav aria-label="Footer Navigation" className="w-full max-w-4xl mx-auto">
        <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2.5 text-xs sm:text-sm text-zinc-400 font-medium">
          {footerNavLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="hover:text-white transition-colors duration-200 px-1 py-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Social Profiles */}
      <div className="flex gap-6 sm:gap-10">
        {socials.map((social) => (
          <a
            key={social.name}
            href={social.url}
            target={social.url.startsWith("http") ? "_blank" : undefined}
            rel={social.url.startsWith("http") ? "noopener noreferrer" : undefined}
            className="group relative flex flex-col items-center gap-2 text-zinc-400 hover:text-white transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
            aria-label={social.label}
          >
            <span className="text-2xl md:text-3xl transform transition-transform duration-300 group-hover:-translate-y-2 group-hover:scale-110">
              {social.icon}
            </span>
            <span className="text-[10px] uppercase tracking-[3px] opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 text-zinc-300">
              {social.name}
            </span>
          </a>
        ))}
      </div>

      {/* Crawl Resources & SEO Links */}
      <div className="flex items-center gap-4 text-[11px] font-mono text-zinc-400">
        <a
          href="/sitemap.xml"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-zinc-200 underline underline-offset-2 transition-colors"
        >
          XML Sitemap
        </a>
        <span>•</span>
        <a
          href="/robots.txt"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-zinc-200 underline underline-offset-2 transition-colors"
        >
          Robots.txt
        </a>
        <span>•</span>
        <a
          href="/llms.txt"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-zinc-200 underline underline-offset-2 transition-colors"
        >
          llms.txt
        </a>
      </div>

      <div className="flex flex-col items-center gap-2 text-center">
        <p className="text-zinc-300 text-[10px] md:text-xs tracking-[4px] uppercase font-light">
          © {new Date().getFullYear()} MOHD FARHAN • ALL RIGHTS RESERVED
        </p>
        <div className="h-px w-10 bg-white/10" />
        <p className="text-zinc-400 text-[9px] md:text-[11px] tracking-[3px] uppercase font-accent">
          Full Stack Next.js Web Developer &amp; Technical SEO Specialist • Gorakhpur, UP, India
        </p>
      </div>
    </footer>
  );
}

export default Footer;
