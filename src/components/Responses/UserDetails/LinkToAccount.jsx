import { useState, useCallback } from "react";
import useUserContext from "../../../hooks/useUserContext";

export default function LinkToAccount() {
  const { url } = useUserContext();
  const [circleProperties, setCircleProperties] = useState({
    x: null,
    y: null,
    display: "none",
  });

  const { x, y, display } = circleProperties;

  const handlePointerEntersLink = useCallback((event) => {
    const { offsetX, offsetY } = event.nativeEvent;
    const x = `${offsetX - 15}px`;
    const y = `${offsetY - 15}px`;
    setCircleProperties((prev) => {
      return { ...prev, x, y, display: "block" };
    });
  }, []);

  const handlePointerLeavesLink = useCallback(() => {
    setCircleProperties((prev) => {
      return { ...prev, display: "none" };
    });
  }, []);
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="w-1/2 py-3 rounded-full text-center tracking-[1.5px] font-semibold font-serif bg-[#ec407a] hover:bg-sky-500 hover:shadow-[0_0_15px_#00e5ff,0_0_15px_#00e5ff,0_0_15px_#00e5ff] relative overflow-hidden z-[1] duration-500"
      onPointerMove={(event) => {
        handlePointerEntersLink(event);
      }}
      onPointerOut={handlePointerLeavesLink}
    >
      <span style={{ zIndex: 1 }}>Visit Github Page</span>
      <span
        style={{
          position: "absolute",
          display,
          top: y,
          left: x,
          height: "60px",
          width: "60px",
          backgroundColor: "#35fd74",
          borderRadius: "50%",
          pointerEvents: "none",
          transition: "all 150ms ease",
          zIndex: -1,
          filter: "blur(12px)",
          mixBlendMode: "overlay",
        }}
      ></span>
    </a>
  );
}
