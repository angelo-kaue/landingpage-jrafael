// Variantes centralizadas — animações "sutis, fluídas, invisíveis" (briefing, seção 5).
// Nada de exagero: pequenos deslocamentos + fade, sempre com easing suave.

export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.9, ease: "easeOut" } },
};

export const stagger = (staggerChildren = 0.12, delayChildren = 0) => ({
  hidden: {},
  show: {
    transition: { staggerChildren, delayChildren },
  },
});

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.94 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

// Padrão de viewport usado em quase todas as seções: anima uma vez, com
// margem negativa para disparar um pouco antes do elemento ficar 100% visível.
export const viewportOnce = { once: true, margin: "-80px" };
