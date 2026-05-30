import { useRef } from "react";

function MagneticButton({ children }) {
  const ref = useRef(null);

  const handleMove = (e) => {
    const { left, top, width, height } =
      ref.current.getBoundingClientRect();

    const x = (e.clientX - (left + width / 2)) * 0.3;
    const y = (e.clientY - (top + height / 2)) * 0.3;

    ref.current.style.transform = `translate(${x}px, ${y}px)`;
  };

  const reset = () => {
    ref.current.style.transform = `translate(0px, 0px)`;
  };

  return (
    <button
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className="transition-transform duration-200"
    >
      {children}
    </button>
  );
}

export default MagneticButton;