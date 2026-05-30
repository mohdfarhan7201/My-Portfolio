import { useEffect, useState } from "react";
import gsap from "gsap";

function Loader({ onFinish }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let count = 0;

    const interval = setInterval(() => {
      count += Math.floor(Math.random() * 10 + 5);

      if (count >= 100) {
        count = 100;
        clearInterval(interval);

        gsap.to(".loader", {
          opacity: 0,
          duration: 0.8,
          onComplete: onFinish,
        });
      }

      setProgress(count);
    }, 80);

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <div className="loader fixed inset-0 z-[99999] flex items-center justify-center bg-black">
      <div className="text-center">
        <h1 className="text-6xl font-black">{progress}%</h1>
        <p className="text-zinc-500 mt-4 tracking-[10px]">
          LOADING EXPERIENCE
        </p>
      </div>
    </div>
  );
}

export default Loader;