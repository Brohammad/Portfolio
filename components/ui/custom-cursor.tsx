"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);
  const isVisible = useRef(false);

  const springConfig = { damping: 25, stiffness: 250 };
  const dotSpringConfig = { damping: 40, stiffness: 400 };

  const springX = useSpring(cursorX, springConfig);
  const springY = useSpring(cursorY, springConfig);
  const dotSpringX = useSpring(dotX, dotSpringConfig);
  const dotSpringY = useSpring(dotY, dotSpringConfig);

  useEffect(() => {
    const isMobile =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      ) || window.matchMedia("(pointer: coarse)").matches;

    if (isMobile) return;

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
      dotX.set(e.clientX - 4);
      dotY.set(e.clientY - 4);
      isVisible.current = true;
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [cursorX, cursorY, dotX, dotY]);

  return (
    <>
      <motion.div
        className="fixed z-[9997] pointer-events-none rounded-full border border-primary/20 w-8 h-8 hidden xl:block"
        style={{ x: springX, y: springY }}
      />
      <motion.div
        className="fixed z-[9997] pointer-events-none rounded-full bg-white w-2 h-2 hidden xl:block"
        style={{ x: dotSpringX, y: dotSpringY }}
      />
    </>
  );
}
