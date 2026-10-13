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
    // Only run on devices that support fine mouse pointers
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let isMoving = false;

    const onMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (!visible) setVisible(true);
      if (!isMoving) {
        isMoving = true;
        requestRef.current = requestAnimationFrame(animate);
      }
    };

    const animate = () => {
      dotPos.current.x += (mousePos.current.x - dotPos.current.x) * 0.25;
      dotPos.current.y += (mousePos.current.y - dotPos.current.y) * 0.25;

      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * 0.12;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * 0.12;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${dotPos.current.x}px, ${dotPos.current.y}px, 0) translate(-50%, -50%)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0) translate(-50%, -50%)`;
      }

      requestRef.current = requestAnimationFrame(animate);
    };

    const onMouseOver = (e) => {
      if (e.target && e.target.closest && e.target.closest("a, button, [role='button'], .skill-tag, .project-card-wrap, input, textarea")) {
        setHovered(true);
      } else {
        setHovered(false);
      }
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    document.addEventListener("mouseover", onMouseOver, { passive: true });
    window.addEventListener("mouseleave", () => setVisible(false));

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseover", onMouseOver);
      window.removeEventListener("mouseleave", () => setVisible(false));
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, []);

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
