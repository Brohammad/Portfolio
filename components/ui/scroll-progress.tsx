"use client";

import { useScrollProgress } from "@/hooks/use-scroll";

export function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <div
      id="scroll-progress"
      style={{ width: `${progress}%` }}
      className="fixed top-0 left-0 h-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 z-[9999] transition-[width] duration-75"
    />
  );
}
