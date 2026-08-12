import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";

/**
 * Anima um número de 0 até o valor final quando entra na tela.
 * Aceita prefixo/sufixo (ex.: "500", "+", "8.248") e formata milhares com ponto.
 * value: número final (ex.: 500, 8248, 570)
 * suffix: string exibida após o número (ex.: "+")
 */
export default function CountUp({ value, suffix = "", duration = 1.6, className = "" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(0, value, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className={className}>
      {display.toLocaleString("pt-BR")}
      {suffix}
    </span>
  );
}
