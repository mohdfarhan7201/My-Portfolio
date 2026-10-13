import { useState, useEffect } from "react";
import Home from "./pages/Home";
import Loader from "./components/ui/Loader";
import PageTransition from "./components/ui/PageTransition";
import Navbar from "./components/layout/Navbar";
import CustomCursor from "./components/cursor/CustomCursor";
import useSound from "./hooks/useSound";
import Lenis from "lenis";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [loading, setLoading] = useState(true);

  useSound();

  useEffect(() => {
    if (loading) return;

    // Initialize smooth scrolling with Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
    });

    lenis.on("scroll", ScrollTrigger.update);

    const updateTicker = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateTicker);
    gsap.ticker.lagSmoothing(0);

    // Refresh ScrollTrigger once DOM layout stabilizes
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 200);

    return () => {
      clearTimeout(timer);
      gsap.ticker.remove(updateTicker);
      lenis.destroy();
    };
  }, [loading]);

  if (loading) {
    return <Loader onFinish={() => setLoading(false)} />;
  }

  return (
    <>
      <CustomCursor />
      <Navbar />
      <PageTransition>
        <Home />
      </PageTransition>
    </>
  );
}

export default App;