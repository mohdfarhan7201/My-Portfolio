import { useEffect, useRef, useState } from "react";

function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);

  const ringRef = useRef(null);
  const dotRef = useRef(null);

  const requestRef = useRef();
  const mousePos = useRef({ x: 0, y: 0 });
  const dotPos = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouch) return;

    const onMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (!visible) setVisible(true);
    };

    const animate = () => {
      // Lerp for smooth trailing
      // Inner dot: very fast (0.2)
      dotPos.current.x += (mousePos.current.x - dotPos.current.x) * 0.2;
      dotPos.current.y += (mousePos.current.y - dotPos.current.y) * 0.2;

      // Outer ring: slower for fluid feel (0.1)
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * 0.1;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * 0.1;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${dotPos.current.x}px, ${dotPos.current.y}px, 0) translate(-50%, -50%)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0) translate(-50%, -50%)`;
      }

      requestRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseenter", () => setVisible(true));
    window.addEventListener("mouseleave", () => setVisible(false));

    requestRef.current = requestAnimationFrame(animate);

    const handleHover = () => setHovered(true);
    const handleUnhover = () => setHovered(false);

    const attachListeners = () => {
      const targets = document.querySelectorAll("a, button, [role='button'], .skill-tag, .project-item");
      targets.forEach((el) => {
        el.addEventListener("mouseenter", handleHover);
        el.addEventListener("mouseleave", handleUnhover);
      });
    };

    attachListeners();
    const interval = setInterval(attachListeners, 2000);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseenter", () => setVisible(true));
      window.removeEventListener("mouseleave", () => setVisible(false));
      cancelAnimationFrame(requestRef.current);
      clearInterval(interval);
    };
  }, [visible]);

  return (
    <div
      className={`fixed inset-0 pointer-events-none z-[1000000] transition-opacity duration-500 ${visible ? "opacity-100" : "opacity-0"}`}
      style={{ mixBlendMode: 'difference' }}
    >
      {/* OUTER RING */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 will-change-transform transition-all duration-300 ease-out"
        style={{
          width: hovered ? "60px" : "30px",
          height: hovered ? "60px" : "30px",
          border: "1.5px solid white",
          borderRadius: "50%",
          backgroundColor: hovered ? "white" : "transparent"
        }}
      />

      {/* INNER DOT */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 will-change-transform"
      >
        <div className="h-1.5 w-1.5 rounded-full bg-white" />
      </div>
    </div>
  );
}

export default CustomCursor;
