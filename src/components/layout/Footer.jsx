function Footer() {
  return (
    <footer className="py-20 bg-black flex flex-col items-center gap-6 border-t border-white/5">
      <div className="flex gap-8">
        <a href="#" className="text-zinc-500 hover:text-white transition-colors text-sm uppercase tracking-widest">Twitter</a>
        <a href="#" className="text-zinc-500 hover:text-white transition-colors text-sm uppercase tracking-widest">Github</a>
        <a href="#" className="text-zinc-500 hover:text-white transition-colors text-sm uppercase tracking-widest">LinkedIn</a>
      </div>
      <p className="text-zinc-600 text-xs tracking-widest uppercase opacity-50">
        © {new Date().getFullYear()} MOHD FARHAN. Built with passion.
      </p>

    </footer>
  );
}

export default Footer;
