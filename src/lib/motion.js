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

// Padrão de viewport usado em quase todas as seções: anima uma vez.
// Margem final positiva e generosa (em vez de negativa) — o elemento começa
// a animar assim que encosta na borda de baixo da tela, garantindo que ele
// sempre "acenda" mesmo em rolagem rápida no celular. Com margem negativa
// (configuração antiga), uma rolagem rápida podia pular o elemento direto
// pela zona de disparo sem nunca disparar a animação, deixando o conteúdo
// invisível (opacity: 0) para sempre — o "espaço em branco" reportado.
export const viewportOnce = { once: true, margin: "0px 0px 120px 0px", amount: 0 };