"use client";

import { useEffect, useRef } from "react";

function hash(n: number) {
  const x = Math.sin(n * 127.1) * 43758.5453;
  return x - Math.floor(x);
}

export function FieldArt() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frameRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isCoarse = window.matchMedia("(pointer: coarse)").matches;
    const animate = !reduceMotion && !isCoarse;

    const colors = [
      getComputedStyle(document.documentElement).getPropertyValue("--accent-field-a").trim() || "#e8e4dc",
      getComputedStyle(document.documentElement).getPropertyValue("--accent-field-b").trim() || "#7a9e9a",
      getComputedStyle(document.documentElement).getPropertyValue("--accent-field-c").trim() || "#c4a574",
    ];

    let width = 0;
    let height = 0;
    let cell = 10;
    let cols = 0;
    let rows = 0;
    let seed = 42;
    let t = 0;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      cell = width < 480 ? 11 : 9;
      cols = Math.ceil(width / cell) + 1;
      rows = Math.ceil(height / cell) + 1;
      seed = Math.floor(hash(width * 0.13 + height * 0.71) * 10_000);
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      ctx.strokeStyle = "rgba(232,228,220,0.035)";
      ctx.lineWidth = 1;
      for (let x = 0; x <= width; x += cell * 4) {
        ctx.beginPath();
        ctx.moveTo(x + 0.5, 0);
        ctx.lineTo(x + 0.5, height);
        ctx.stroke();
      }
      for (let y = 0; y <= height; y += cell * 4) {
        ctx.beginPath();
        ctx.moveTo(0, y + 0.5);
        ctx.lineTo(width, y + 0.5);
        ctx.stroke();
      }

      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          const n = hash(x * 17.3 + y * 29.1 + seed);
          const edge = x / cols;
          const density = 0.08 + edge * 0.42;
          const pulse = animate ? 0.04 * Math.sin(t * 0.018 + x * 0.15 + y * 0.11) : 0;
          if (n > density + pulse) continue;

          const size = 1.5 + hash(n * 91) * 2.4;
          const colorIndex = Math.floor(hash(n * 53 + seed) * colors.length);
          ctx.fillStyle = colors[colorIndex];
          ctx.globalAlpha = 0.35 + hash(n * 11) * 0.55;
          ctx.fillRect(x * cell, y * cell, size, size);
        }
      }
      ctx.globalAlpha = 1;
    };

    const loop = () => {
      t += 1;
      draw();
      if (animate) frameRef.current = window.requestAnimationFrame(loop);
    };

    resize();
    draw();
    if (animate) frameRef.current = window.requestAnimationFrame(loop);

    const onResize = () => {
      resize();
      draw();
    };
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      if (frameRef.current) window.cancelAnimationFrame(frameRef.current);
    };
  }, []);

  return (
    <div className="field-panel" aria-hidden>
      <canvas ref={canvasRef} className="field-canvas" />
      <p className="field-caption">seeded for this deploy · animated only when idle allows</p>
    </div>
  );
}
