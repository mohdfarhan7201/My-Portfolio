import { FaGithub, FaLinkedinIn, FaXTwitter, FaInstagram } from "react-icons/fa6";

function Footer() {
  const socials = [
    { name: "Github", icon: <FaGithub />, url: "https://github.com/mohdfarhan7201" },
    { name: "LinkedIn", icon: <FaLinkedinIn />, url: "https://www.linkedin.com/in/mohd-farhan-4721a4295/" },
    { name: "Instagram", icon: <FaInstagram />, url: "#" },
  ];


  return (
    <footer className="py-20 bg-black flex flex-col items-center gap-10 border-t border-white/5">
      <div className="flex gap-10">
        {socials.map((social) => (
          <a
            key={social.name}
            href={social.url}
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

      <div className="flex flex-col items-center gap-2">
        <p className="text-zinc-600 text-[10px] md:text-sm tracking-[5px] uppercase font-light">
          © {new Date().getFullYear()} MOHD FARHAN
        </p>
        <div className="h-px w-10 bg-white/10" />
        {/* <p className="text-zinc-800 text-[8px] tracking-[4px] uppercase">
          Build with ❤️ & Antigravity
        </p> */}
      </div>
    </footer>
  );
}

export default Footer;

