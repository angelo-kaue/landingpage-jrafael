import React from "react";
import { motion } from "framer-motion";
import { Container, SectionHeading } from "./ui.jsx";
import TestimonialCarousel from "./TestimonialCarousel.jsx";
import Gallery from "./Gallery.jsx";
import BeforeAfterSlider from "./BeforeAfterSlider.jsx";
import CountUp from "./CountUp.jsx";
import { autoridade } from "../data/brand.js";
import { fadeUp, scaleIn, viewportOnce } from "../lib/motion.js";

const galeriaItens = [
  { label: "Refeições equilibradas", slot: "galleryNutricao" },
  { label: "Rotina de treino", slot: "galleryTreino" },
  { label: "Consulta nutricional", slot: "galleryConsulta" },
  { label: "Evolução acompanhada", slot: "galleryResultado" },
];

export default function SocialProof() {
  const pacientes = autoridade.numeros[0];
  const [valor, sufixo] = [parseInt(pacientes.valor, 10), pacientes.valor.replace(/[0-9]/g, "")];

  return (
    <section id="resultados" className="bg-white py-24 md:py-32">
      <Container className="flex flex-col gap-16">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Resultados reais"
            title="Histórias de transformação"
            description="O acompanhamento já resultou em centenas de mudanças reais. Cada uma com o próprio contexto e ritmo."
          />

          <motion.div
            variants={scaleIn}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="flex shrink-0 flex-col items-start rounded-3xl bg-navy-gradient px-8 py-6 shadow-soft"
          >
            <span className="text-4xl font-semibold text-gold md:text-5xl">
              <CountUp value={valor} suffix={sufixo} />
            </span>
            <span className="text-sm text-white/70">{pacientes.label}</span>
          </motion.div>
        </div>

        {/* Carrossel de depoimentos premium */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={viewportOnce}>
          <TestimonialCarousel />
        </motion.div>

        {/* Comparativo Antes / Depois */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid gap-8 md:grid-cols-2 md:items-center"
        >
          <div className="flex flex-col gap-3">
            <span className="text-xs font-medium uppercase tracking-wider text-navy-deep/40">
              Antes e depois
            </span>
            <h3 className="text-2xl font-semibold text-navy-deep md:text-3xl">
              Transformação real, ritmo real.
            </h3>
            <p className="text-sm leading-relaxed text-navy-deep/60 md:text-base">
              Cada acompanhamento tem seu próprio ponto de partida — o comparativo ao lado é
              ilustrativo e será substituído por um caso real assim que disponível.
            </p>
          </div>
          <BeforeAfterSlider />
        </motion.div>

        {/* Galeria — carrossel de cenas do dia a dia */}
        <div className="flex flex-col gap-5">
          <span className="text-xs font-medium uppercase tracking-wider text-navy-deep/40">
            Galeria
          </span>
          <Gallery items={galeriaItens} />
        </div>
      </Container>
    </section>
  );
}
