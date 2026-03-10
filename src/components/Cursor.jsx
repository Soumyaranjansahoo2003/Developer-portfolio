import React, { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";
import { useMousePosition } from "../hooks/useMousePosition";

const Cursor = () => {
  const { x, y } = useMousePosition();
  const [isHovering, setIsHovering] = useState(false);

  // Smooth springs for cursor movement
  const springX = useSpring(x, { stiffness: 500, damping: 28, mass: 0.5 });
  const springY = useSpring(y, { stiffness: 500, damping: 28, mass: 0.5 });

  useEffect(() => {
    springX.set(x - 16);
    springY.set(y - 16);
  }, [x, y, springX, springY]);

  useEffect(() => {
    const handleMouseOver = (e) => {
      if (
        e.target.tagName.toLowerCase() === "a" ||
        e.target.tagName.toLowerCase() === "button" ||
        e.target.closest("a") ||
        e.target.closest("button")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mouseover", handleMouseOver);
    return () => window.removeEventListener("mouseover", handleMouseOver);
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-primary/50 pointer-events-none z-[100] mix-blend-difference hidden md:block"
        style={{
          x: springX,
          y: springY,
        }}
        animate={{
          scale: isHovering ? 1.5 : 1,
          backgroundColor: isHovering ? "rgba(139, 92, 246, 0.2)" : "transparent",
        }}
        transition={{ duration: 0.2 }}
      />
      <div
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-primary pointer-events-none z-[100] hidden md:block"
        style={{
          transform: `translate(${x - 3}px, ${y - 3}px)`,
        }}
      />
    </>
  );
};

export default Cursor;
