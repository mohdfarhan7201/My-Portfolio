import { useEffect } from "react";
import Home from "./pages/Home";
import Navbar from "./components/layout/Navbar";
import CustomCursor from "./components/cursor/CustomCursor";
import Lenis from "lenis";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    let lenis;
    let updateTicker;

    // Defer Lenis initialization so initial render and LCP finish instantly
    const timer = setTimeout(() => {
      lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: "vertical",
        gestureOrientation: "vertical",
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 1.2,
      });

      lenis.on("scroll", ScrollTrigger.update);

      updateTicker = (time) => {
        lenis.raf(time * 1000);
      };

      gsap.ticker.add(updateTicker);
      gsap.ticker.lagSmoothing(0);
      ScrollTrigger.refresh();
    }, 120);

    return () => {
      clearTimeout(timer);
      if (updateTicker) gsap.ticker.remove(updateTicker);
      if (lenis) lenis.destroy();
    };
  }, []);

  return (
    <>
      <CustomCursor />
      <Navbar />
      <Home />
    </>
  );
}

export default App;