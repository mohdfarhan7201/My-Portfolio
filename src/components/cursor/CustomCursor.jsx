import { useEffect, useState } from "react";

function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    // Detect touch device
    const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouch) return;

    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };


    const handleHover = () => setHovered(true);
    const handleUnhover = () => setHovered(false);

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseleave", () => setVisible(false));

    // Initial check for interactive elements
    const attachListeners = () => {
      const targets = document.querySelectorAll("a, button, [role='button'], .skill-tag");
      targets.forEach((el) => {
        el.addEventListener("mouseenter", handleHover);
        el.addEventListener("mouseleave", handleUnhover);
      });
    };

    attachListeners();
    // Re-check periodically or on scroll to find dynamic elements
    const interval = setInterval(attachListeners, 2000);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseleave", () => setVisible(false));
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      {/* MAIN CURSOR */}
      <div
        className="fixed z-[999999] pointer-events-none mix-blend-difference transition-transform duration-300 ease-out"
        style={{
          left: `${pos.x}px`,
          top: `${pos.y}px`,
          transform: `translate(-50%, -50%) scale(${hovered ? 2.5 : 1})`,
          opacity: visible ? 1 : 0,
        }}
      >
        <div className="h-6 w-6 rounded-full border border-white bg-white/20" />
      </div>

      {/* GLOW */}
      <div
        className="fixed z-[999998] pointer-events-none blur-3xl transition-all duration-500 ease-out"
        style={{
          left: `${pos.x}px`,
          top: `${pos.y}px`,
          transform: "translate(-50%, -50%)",
          width: hovered ? "150px" : "80px",
          height: hovered ? "150px" : "80px",
          borderRadius: "50%",
          background: "rgba(255, 255, 255, 0.15)",
          opacity: visible ? 1 : 0,
        }}
      />
    </>
  );
}

export default CustomCursor;

