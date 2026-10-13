import { FaGithub, FaLinkedinIn, FaEnvelope, FaPhone } from "react-icons/fa6";

function Footer() {
  const socials = [
    { name: "Github", icon: <FaGithub />, url: "https://github.com/mohdfarhan7201" },
    { name: "LinkedIn", icon: <FaLinkedinIn />, url: "https://www.linkedin.com/in/mohd-farhan-4721a4295/" },
    { name: "Email", icon: <FaEnvelope />, url: "mailto:mohd.farhan.7201@gmail.com" },
    { name: "Phone", icon: <FaPhone />, url: "tel:+918303877102" },
  ];

  return (
    <footer className="py-12 sm:py-20 px-4 bg-black flex flex-col items-center gap-8 sm:gap-10 border-t border-white/5 w-full">
      <div className="flex gap-6 sm:gap-10">
        {socials.map((social) => (
          <a
            key={social.name}
            href={social.url}
            target={social.url.startsWith("http") ? "_blank" : undefined}
            rel={social.url.startsWith("http") ? "noopener noreferrer" : undefined}
            className="group relative flex flex-col items-center gap-2 text-zinc-500 hover:text-white transition-all duration-300"
            aria-label={social.name}
          >
            <span className="text-2xl md:text-3xl transform transition-transform duration-300 group-hover:-translate-y-2 group-hover:scale-110">
              {social.icon}
            </span>
            <span className="text-[10px] uppercase tracking-[3px] opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
              {social.name}
            </span>
          </a>
        ))}
      </div>

      <div className="flex flex-col items-center gap-2 text-center">
        <p className="text-zinc-500 text-[10px] md:text-xs tracking-[4px] uppercase font-light">
          © {new Date().getFullYear()} MOHD FARHAN
        </p>
        <div className="h-px w-10 bg-white/10" />
        <p className="text-zinc-600 text-[9px] md:text-[11px] tracking-[3px] uppercase font-accent">
          Web Developer & SEO Executive • Gorakhpur, UP
        </p>
      </div>
    </footer>
  );
}

export default Footer;
