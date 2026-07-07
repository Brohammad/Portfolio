export const sectionReveal = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" as const },
  transition: { type: "spring" as const, stiffness: 100, damping: 22, mass: 0.9 },
};

export const sectionRevealStagger = (index: number, base = 0.06) => ({
  ...sectionReveal,
  transition: {
    ...sectionReveal.transition,
    delay: index * base,
  },
});
