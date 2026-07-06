export const sectionReveal = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" as const },
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
};

export const sectionRevealStagger = (index: number, base = 0.06) => ({
  ...sectionReveal,
  transition: {
    ...sectionReveal.transition,
    delay: index * base,
  },
});
