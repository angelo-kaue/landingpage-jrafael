import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Utensils, Dumbbell, Sparkles } from "lucide-react";

const rings = [
  { label: "Equilíbrio", value: 0.86, color: "#D4AF37" },
  { label: "Consistência", value: 0.74, color: "#8FB4DE" },
  { label: "Energia", value: 0.68, color: "#EAF1FA" },
];

const R = 34;
const CIRC = 2 * Math.PI * R;

function Ring({ value, color, delay }) {
  return (
    <svg viewBox="0 0 84 84" className="h-full w-full -rotate-90">
      <circle cx="42" cy="42" r={R} stroke="rgba(255,255,255,0.12)" strokeWidth="7" fill="none" />
      <motion.circle
        cx="42"
        cy="42"
        r={R}
        stroke={color}
        strokeWidth="7"
        strokeLinecap="round"
        fill="none"
        strokeDasharray={CIRC}
        initial={{ strokeDashoffset: CIRC }}
        whileInView={{ strokeDashoffset: CIRC * (1 - value) }}
        viewport={{ once: true }}
        transition={{ duration: 1.1, delay, ease: [0.16, 1, 0.3, 1] }}
      />
    </svg>
  );
}

/**
 * Mockup de painel de acompanhamento — inspirado na linguagem visual da
 * WHOOP/Apple Health citada no briefing. Substitui, com honestidade visual,
 * a ausência de foto/vídeo reais: em vez de simular uma foto do profissional
 * que não temos, mostramos um artefato de produto (o "método em uso").
 */
export default function HeroVisual() {
  const cardRef = useRef(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useSpring(useTransform(my, [-40, 40], [8, -8]), { stiffness: 150, damping: 20 });
  const rotateY = useSpring(useTransform(mx, [-40, 40], [-8, 8]), { stiffness: 150, damping: 20 });

  function handleMouseMove(e) {
    const rect = cardRef.current.getBoundingClientRect();
    mx.set(e.clientX - rect.left - rect.width / 2);
    my.set(e.clientY - rect.top - rect.height / 2);
  }
  function handleMouseLeave() {
    mx.set(0);
    my.set(0);
  }

  return (
    <div className="relative mx-auto w-full max-w-md" style={{ perspective: 1200 }}>
      {/* Chip flutuante — canto superior */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: [0, -8, 0] }}
        transition={{ opacity: { duration: 0.6, delay: 0.9 }, y: { duration: 4, repeat: Infinity, ease: "easeInOut" } }}
        className="glass absolute -left-4 -top-5 z-10 flex items-center gap-2 rounded-2xl px-4 py-2.5 text-xs font-medium text-white shadow-soft md:-left-10"
      >
        <Utensils size={14} className="text-gold" aria-hidden="true" />
        Sem dieta da moda
      </motion.div>

      {/* Chip flutuante — canto inferior */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ opacity: { duration: 0.6, delay: 1.1 }, y: { duration: 4.5, repeat: Infinity, ease: "easeInOut" } }}
        className="glass absolute -bottom-5 -right-3 z-10 flex items-center gap-2 rounded-2xl px-4 py-2.5 text-xs font-medium text-white shadow-soft md:-right-8"
      >
        <Dumbbell size={14} className="text-gold" aria-hidden="true" />
        Nutrição esportiva
      </motion.div>

      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="glass relative rounded-[28px] p-7 shadow-soft md:p-8"
      >
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-white/60">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold/60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-gold" />
            </span>
            Acompanhamento ativo
          </span>
          <Sparkles size={16} className="text-white/40" aria-hidden="true" />
        </div>

        <div className="mt-7 grid grid-cols-3 gap-3">
          {rings.map((r, i) => (
            <div key={r.label} className="flex flex-col items-center gap-2">
              <div className="h-20 w-20">
                <Ring value={r.value} color={r.color} delay={0.2 + i * 0.15} />
              </div>
              <span className="text-center text-[11px] leading-tight text-white/60">{r.label}</span>
            </div>
          ))}
        </div>

        <div className="mt-8 border-t border-white/10 pt-5">
          <span className="text-[11px] uppercase tracking-wider text-white/40">Trajetória de resultado</span>
          <svg viewBox="0 0 280 60" className="mt-2 w-full overflow-visible">
            <motion.path
              d="M0,45 C30,42 40,20 70,22 C100,24 110,44 140,40 C170,36 180,12 210,14 C240,16 250,28 280,10"
              fill="none"
              stroke="#D4AF37"
              strokeWidth="2.5"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, delay: 0.6, ease: "easeInOut" }}
            />
          </svg>
        </div>
      </motion.div>
    </div>
  );
}
