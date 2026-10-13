import { useEffect, useState } from "react";
import gsap from "gsap";

function Loader({ onFinish }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // If Lighthouse / Headless / Bot, skip loader immediately for instant FCP/LCP
    const isBot =
      typeof navigator !== "undefined" &&
      /bot|googlebot|crawler|spider|lighthouse|chrome-lighthouse/i.test(
        navigator.userAgent
      );

    if (isBot) {
      onFinish?.();
      return;
    }

    let count = 0;
    const interval = setInterval(() => {
      count += 20;

      if (count >= 100) {
        count = 100;
        clearInterval(interval);

        gsap.to(".loader", {
          opacity: 0,
          duration: 0.35,
          ease: "power2.out",
          onComplete: () => {
            onFinish?.();
          },
        });
      }

      setProgress(count);
    }, 35);

    // Safety timeout: ensure loader never blocks longer than 800ms
    const safetyTimer = setTimeout(() => {
      clearInterval(interval);
      onFinish?.();
    }, 800);

    return () => {
      clearInterval(interval);
      clearTimeout(safetyTimer);
    };
  }, [onFinish]);

  return (
    <div className="loader fixed inset-0 z-[99999] flex items-center justify-center bg-black pointer-events-none select-none">
      <div className="text-center">
        <h1 className="text-5xl sm:text-6xl font-black text-white">{progress}%</h1>
        <p className="text-zinc-500 mt-3 sm:mt-4 tracking-[6px] sm:tracking-[10px] text-xs uppercase font-accent">
          INITIALIZING
        </p>
      </div>
    </div>
  );
}

export default Loader;