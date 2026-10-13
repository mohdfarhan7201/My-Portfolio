import Hero from "../components/hero/Hero";
import TechTicker from "../components/ui/TechTicker";
import About from "../components/about/About";
import Skills from "../components/skills/Skills";
import Projects from "../components/projects/Projects";
import Contact from "../components/contact/Contact";
import Footer from "../components/layout/Footer";

function Home() {
  return (
    <div className="bg-black text-white min-h-screen">
      <main>
        <Hero />
        <TechTicker />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default Home;
