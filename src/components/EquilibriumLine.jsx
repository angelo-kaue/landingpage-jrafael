import React from "react";
import { motion } from "framer-motion";

/**
 * Elemento de assinatura da página.
 *
 * Representa literalmente o conceito central do briefing — "Clareza que
 * transforma" — como uma única linha: começa errática, subindo e descendo
 * sem lógica (efeito sanfona, dietas da moda, confusão alimentar) e, a partir
 * de um ponto de virada, se resolve em uma curva contínua e estável em
 * dourado (equilíbrio, consistência, resultado definitivo).
 *
 * É o único elemento "decorativo" ousado da página — todo o resto do layout
 * é propositalmente quieto para deixar essa linha ser o momento memorável.
 */
export default function EquilibriumLine({ className = "" }) {
  const caosPath =
    "M0,120 C20,60 40,170 60,90 C80,20 100,150 120,70 C140,10 160,140 180,80 C200,30 220,130 240,100 C260,80 280,120 300,100";
  const claridadePath =
    "M300,100 C340,88 380,78 420,72 C470,65 520,62 570,62 C650,62 730,62 800,62";

  return (
    <div className={`relative w-full ${className}`} aria-hidden="true">
      <svg viewBox="0 0 800 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto overflow-visible">
        <defs>
          <linearGradient id="eq-caos" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#1F4E79" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#1F4E79" stopOpacity="0.8" />
          </linearGradient>
          <linearGradient id="eq-clareza" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#D4AF37" />
            <stop offset="100%" stopColor="#F3D77A" />
          </linearGradient>
          <filter id="eq-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Trecho do caos: traço fino, opaco, sem brilho */}
        <motion.path
          d={caosPath}
          stroke="url(#eq-caos)"
          strokeWidth="2.5"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.1, ease: "easeInOut" }}
        />

        {/* Trecho da clareza: traço dourado, contínuo, com leve brilho */}
        <motion.path
          d={claridadePath}
          stroke="url(#eq-clareza)"
          strokeWidth="3"
          strokeLinecap="round"
          filter="url(#eq-glow)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.1, ease: "easeInOut", delay: 0.9 }}
        />

        {/* Ponto de virada — a "quebra de crença" */}
        <motion.circle
          cx="300"
          cy="100"
          r="4"
          fill="#D4AF37"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4, delay: 1.9, ease: "backOut" }}
        />

        {/* Ponto final pulsante — estado presente, estável */}
        <motion.circle
          cx="800"
          cy="62"
          r="5"
          fill="#D4AF37"
          filter="url(#eq-glow)"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: [0, 1.3, 1], opacity: 1 }}
          transition={{ duration: 0.6, delay: 2.05, ease: "backOut" }}
        />
      </svg>
    </div>
  );
}
