"use client";

import { useScrollProgress } from "@/hooks/use-scroll";

export function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <div
      id="scroll-progress"
      style={{ width: `${progress}%` }}
      className="h-[2px] bg-primary z-[9999] transition-[width] duration-150"
    />
  );
}
