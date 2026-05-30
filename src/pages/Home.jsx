import Hero from "../components/hero/Hero";
import About from "../components/about/About";
import Skills from "../components/skills/Skills";
import Projects from "../components/projects/Projects";
import Contact from "../components/contact/Contact";
import Footer from "../components/layout/Footer";

function Home() {
    return (
        <div className="bg-black text-white overflow-x-hidden">
            <main>
                <Hero />
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
