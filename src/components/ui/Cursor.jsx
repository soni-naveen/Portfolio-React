import React, { useState, useEffect } from "react";

export default function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className="hidden sm:block fixed w-4 h-4 border border-white/10 bg-white/30 shadow-md z-50 rounded-full pointer-events-none z-50 transition-transform duration-75"
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
    />
  );
}
