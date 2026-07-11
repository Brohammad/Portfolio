export const sectionReveal = {
  initial: { opacity: 0, y: 14 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-48px" as const },
  transition: { type: "spring" as const, stiffness: 110, damping: 24, mass: 0.85 },
};

export const sectionRevealStagger = (index: number, base = 0.06) => ({
  ...sectionReveal,
  transition: {
    ...sectionReveal.transition,
    delay: index * base,
  },
});
