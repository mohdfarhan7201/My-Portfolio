import Hero from "../components/hero/Hero";
import TechTicker from "../components/ui/TechTicker";
import About from "../components/about/About";
import Services from "../components/services/Services";
import Skills from "../components/skills/Skills";
import Projects from "../components/projects/Projects";
import Experience from "../components/experience/Experience";
import FAQ from "../components/faq/FAQ";
import Contact from "../components/contact/Contact";
import Footer from "../components/layout/Footer";

function Home() {
  return (
    <div className="bg-black text-white min-h-screen">
      <main id="main-content" tabIndex="-1" className="outline-none">
        <Hero />
        <TechTicker />

        {/* Visible Accessible Breadcrumb Navigation */}
        <nav
          aria-label="Breadcrumb Navigation"
          className="px-4 sm:px-10 md:px-20 lg:px-28 py-3 bg-zinc-950/70 border-b border-white/5 text-[11px] sm:text-xs text-zinc-400 font-mono select-none"
        >
          <ol className="max-w-7xl mx-auto flex items-center gap-2 flex-wrap">
            <li>
              <a href="#home" className="hover:text-white transition-colors">
                Home
              </a>
            </li>
            <li aria-hidden="true" className="text-zinc-600">/</li>
            <li>
              <a href="#about" className="hover:text-white transition-colors">
                About
              </a>
            </li>
            <li aria-hidden="true" className="text-zinc-600">/</li>
            <li>
              <a href="#services" className="hover:text-white transition-colors">
                Services
              </a>
            </li>
            <li aria-hidden="true" className="text-zinc-600">/</li>
            <li>
              <a href="#skills" className="hover:text-white transition-colors">
                Skills
              </a>
            </li>
            <li aria-hidden="true" className="text-zinc-600">/</li>
            <li>
              <a href="#projects" className="hover:text-white transition-colors">
                Projects
              </a>
            </li>
            <li aria-hidden="true" className="text-zinc-600">/</li>
            <li>
              <a href="#faq" className="hover:text-white transition-colors">
                FAQ
              </a>
            </li>
            <li aria-hidden="true" className="text-zinc-600">/</li>
            <li className="text-emerald-400 font-semibold" aria-current="page">
              Full Stack Portfolio
            </li>
          </ol>
        </nav>

        <About />
        <Services />
        <Skills />
        <Projects />
        <Experience />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
