"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);
  const spotlightX = useMotionValue(-100);
  const spotlightY = useMotionValue(-100);
  const isVisible = useRef(false);

  const springConfig = { damping: 28, stiffness: 220, mass: 0.6 };
  const dotSpringConfig = { damping: 38, stiffness: 380, mass: 0.4 };
  const spotlightConfig = { damping: 40, stiffness: 60, mass: 1.2 };

  const springX = useSpring(cursorX, springConfig);
  const springY = useSpring(cursorY, springConfig);
  const dotSpringX = useSpring(dotX, dotSpringConfig);
  const dotSpringY = useSpring(dotY, dotSpringConfig);
  const spotlightSpringX = useSpring(spotlightX, spotlightConfig);
  const spotlightSpringY = useSpring(spotlightY, spotlightConfig);

  useEffect(() => {
    const isMobile =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      ) || window.matchMedia("(pointer: coarse)").matches;

    if (isMobile) return;

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
      dotX.set(e.clientX - 3);
      dotY.set(e.clientY - 3);
      spotlightX.set(e.clientX);
      spotlightY.set(e.clientY);
      isVisible.current = true;
    };

    window.addEventListener("mousemove", moveCursor, { passive: true });
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [cursorX, cursorY, dotX, dotY, spotlightX, spotlightY]);

  return (
    <>
      <motion.div
        className="cursor-spotlight hidden xl:block"
        style={{ x: spotlightSpringX, y: spotlightSpringY }}
        aria-hidden
      />
      <motion.div
        className="fixed z-[9997] pointer-events-none rounded-full cursor-ring w-8 h-8 hidden xl:block"
        style={{ x: springX, y: springY }}
        aria-hidden
      />
      <motion.div
        className="fixed z-[9997] pointer-events-none rounded-full cursor-dot w-1.5 h-1.5 hidden xl:block"
        style={{ x: dotSpringX, y: dotSpringY }}
        aria-hidden
      />
    </>
  );
}
