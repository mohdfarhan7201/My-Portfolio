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
