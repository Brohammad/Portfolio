"use client";

import { useScrollProgress } from "@/hooks/use-scroll";

export function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <div
      id="scroll-progress"
      style={{ width: `${progress}%` }}
      className="fixed top-0 left-0 h-[1.5px] bg-primary z-[9999] transition-[width] duration-75"
    />
  );
}
