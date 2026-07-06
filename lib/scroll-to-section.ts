function getNavbarOffset(): number {
  if (typeof window === "undefined") return 92;

  const root = document.documentElement;
  const raw = getComputedStyle(root).getPropertyValue("--navbar-height").trim();
  const rootSize = parseFloat(getComputedStyle(root).fontSize) || 16;

  if (raw.endsWith("rem")) return parseFloat(raw) * rootSize;
  if (raw.endsWith("px")) return parseFloat(raw);
  return 92;
}

function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

export function scrollToSection(id: string, behavior: ScrollBehavior = "smooth") {
  const el = document.getElementById(id.replace(/^#/, ""));
  if (!el) return;

  const offset = getNavbarOffset();
  const target = el.getBoundingClientRect().top + window.scrollY - offset;
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (prefersReducedMotion || behavior === "auto") {
    window.scrollTo({ top: Math.max(0, target), behavior: "auto" });
    return;
  }

  const start = window.scrollY;
  const distance = target - start;
  if (Math.abs(distance) < 2) return;

  const duration = Math.min(1000, Math.max(550, Math.abs(distance) * 0.55));
  let startTime: number | null = null;

  const step = (time: number) => {
    if (startTime === null) startTime = time;
    const elapsed = time - startTime;
    const progress = Math.min(elapsed / duration, 1);
    window.scrollTo(0, start + distance * easeOutCubic(progress));
    if (progress < 1) requestAnimationFrame(step);
  };

  requestAnimationFrame(step);
}
