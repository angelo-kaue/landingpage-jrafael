import React from "react";
import { motion } from "framer-motion";
import { X, Check, TrendingDown, TrendingUp } from "lucide-react";
import { Container, SectionHeading } from "./ui.jsx";
import { dores } from "../data/brand.js";
import { fadeUp, stagger, viewportOnce } from "../lib/motion.js";

const caminhoCaos = [
  "Dieta da moda copiada da internet",
  "Restrição extrema por poucas semanas",
  "Resultado rápido — e igualmente rápido para voltar",
  "Efeito sanfona se repetindo",
];

const caminhoEquilibrio = [
  "Estratégia personalizada para a sua rotina",
  "Equilíbrio alimentar, sem proibições absolutas",
  "Consistência sustentada ao longo do tempo",
  "Resultado definitivo, sem volta ao ponto zero",
];

export default function BeliefBreak() {
  return (
    <section className="bg-white py-24 md:py-32">
      <Container className="flex flex-col gap-16">
        <SectionHeading
          eyebrow="O problema não é você"
          title="Você já tentou de tudo. E o peso sempre volta."
          description={`${dores[0]}. ${dores[1]}. ${dores[2]}. O resultado é sempre o mesmo: ${dores[3].toLowerCase()}.`}
        />

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="max-w-2xl text-xl font-medium text-navy-deep md:text-2xl"
        >
          O problema nunca foi falta de esforço.{" "}
          <span className="text-navy-mid">Foi a falta de um método.</span>
        </motion.p>

        <motion.div
          variants={stagger(0.15)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid gap-6 md:grid-cols-2"
        >
          <motion.div
            variants={fadeUp}
            whileHover={{ y: -3 }}
            transition={{ duration: 0.25 }}
            className="relative overflow-hidden rounded-3xl border border-navy-deep/8 bg-mist p-8"
          >
            <div className="mb-6 flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-navy-deep/40">
                O caminho do caos
              </span>
              <TrendingDown size={20} className="text-navy-deep/25" aria-hidden="true" />
            </div>
            <ul className="flex flex-col gap-4">
              {caminhoCaos.map((item) => (
                <li key={item} className="flex items-start gap-3 text-navy-deep/60">
                  <X size={18} className="mt-0.5 shrink-0 text-navy-deep/30" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            {/* mini-gráfico ilustrativo de instabilidade */}
            <svg viewBox="0 0 200 40" className="mt-7 w-full opacity-40" aria-hidden="true">
              <path
                d="M0,20 C15,5 25,35 40,15 C55,-2 65,30 80,18 C95,8 105,32 120,20 C135,10 145,28 160,16 C175,6 185,26 200,18"
                fill="none"
                stroke="#1F4E79"
                strokeWidth="2"
              />
            </svg>
          </motion.div>

          <motion.div
            variants={fadeUp}
            whileHover={{ y: -3 }}
            transition={{ duration: 0.25 }}
            className="relative overflow-hidden rounded-3xl border border-gold/20 bg-navy-gradient p-8 shadow-soft"
          >
            <div className="mb-6 flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold/80">
                O caminho do equilíbrio
              </span>
              <TrendingUp size={20} className="text-gold/70" aria-hidden="true" />
            </div>
            <ul className="flex flex-col gap-4">
              {caminhoEquilibrio.map((item) => (
                <li key={item} className="flex items-start gap-3 text-white/85">
                  <Check size={18} className="mt-0.5 shrink-0 text-gold" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            {/* mini-gráfico ilustrativo de estabilidade crescente */}
            <svg viewBox="0 0 200 40" className="mt-7 w-full opacity-70" aria-hidden="true">
              <motion.path
                d="M0,32 C30,30 45,20 70,18 C100,16 120,10 150,9 C170,8 185,6 200,4"
                fill="none"
                stroke="#D4AF37"
                strokeWidth="2.5"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={viewportOnce}
                transition={{ duration: 1.2, ease: "easeInOut" }}
              />
            </svg>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
