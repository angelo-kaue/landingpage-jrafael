import React, { useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import Photo from "./Photo.jsx";

// Nenhum depoimento real foi fornecido no JSON da marca. Os três "slots"
// abaixo usam retrato ilustrativo + nome genérico para que a seção já
// pareça finalizada em apresentação — troque por depoimentos reais
// (foto, nome, avaliação e relato) assim que o cliente os enviar.
const slots = [
  {
    id: 1,
    nome: "Cliente 1",
    photo: "testimonial1",
    texto:
      "Eu sempre começava uma dieta e desistia depois de algumas semanas. Com o acompanhamento, finalmente consegui adaptar a alimentação à minha rotina. Hoje me sinto muito mais disposto e confiante com meu corpo.",
  },
  {
    id: 2,
    nome: "Cliente 2",
    photo: "testimonial2",
    texto:
      "O que mais gostei foi entender que não precisava viver de restrição. Aprendi a me alimentar melhor sem deixar de aproveitar minha rotina. Foi uma mudança que consegui manter de verdade.",
  },
  {
    id: 3,
    nome: "Cliente 3",
    photo: "testimonial3",
    texto:
      "Eu treinava bastante, mas sentia que minha alimentação não acompanhava meus objetivos. Depois que comecei o acompanhamento, passei a ter muito mais clareza sobre o que precisava fazer e comecei a perceber evolução nos treinos e no físico.",
  },
];

function Stars() {
  return (
    <div className="flex gap-1" aria-label="Avaliação ilustrativa de 5 estrelas">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={15} className="fill-gold text-gold" aria-hidden="true" />
      ))}
    </div>
  );
}

export default function TestimonialCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => setIndex((i) => (i + 1) % slots.length), []);
  const prev = useCallback(() => setIndex((i) => (i - 1 + slots.length) % slots.length), []);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(next, 5000);
    return () => clearInterval(t);
  }, [paused, next]);

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/*
        Técnica de empilhamento via CSS Grid: os 3 depoimentos ficam TODOS no
        DOM ao mesmo tempo, sobrepostos na mesma célula (col-start-1
        row-start-1). Isso faz a altura da linha do grid se ajustar
        automaticamente ao MAIOR depoimento entre os três — o card nunca
        muda de altura ao trocar de slide, então o conteúdo abaixo dele
        nunca é empurrado (é isso que causava o "pulo" a cada 5s).
        Só o depoimento atual fica visível/clicável; os outros ficam
        presentes (reservando espaço) mas invisíveis e fora da navegação.
      */}
      <div className="relative grid overflow-hidden rounded-3xl border border-navy-deep/8 bg-mist">
        {slots.map((slot, i) => {
          const isCurrent = i === index;
          return (
            <motion.div
              key={slot.id}
              animate={{ opacity: isCurrent ? 1 : 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              aria-hidden={!isCurrent}
              className={`col-start-1 row-start-1 flex flex-col gap-6 p-8 md:flex-row md:items-center md:gap-10 md:p-12 ${
                isCurrent ? "pointer-events-auto" : "pointer-events-none select-none"
              }`}
            >
              <div className="relative flex shrink-0 flex-col items-center gap-2 md:w-40">
                <div className="relative h-24 w-24 overflow-hidden rounded-full shadow-soft ring-4 ring-white">
                  <Photo slot={slot.photo} className="h-full w-full object-cover" alt={slot.nome} tag={false} />
                </div>
                <span className="text-sm font-semibold text-navy-deep">{slot.nome}</span>
                <span className="text-[10px] uppercase tracking-wide text-navy-deep/35">Foto ilustrativa</span>
              </div>

              <div className="flex flex-1 flex-col gap-4">
                <Quote size={26} className="text-gold" aria-hidden="true" />
                <Stars />
                <p className="text-base italic leading-relaxed text-navy-deep/70 md:text-lg">"{slot.texto}"</p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Navegação manual */}
      <div className="mt-6 flex items-center justify-between">
        <div className="flex gap-2">
          {slots.map((s, i) => (
            <button
              key={s.id}
              onClick={() => setIndex(i)}
              aria-label={`Ver depoimento ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === index ? "w-6 bg-gold" : "w-2 bg-navy-deep/15"
              }`}
            />
          ))}
        </div>
        <div className="flex gap-2">
          <button
            onClick={prev}
            aria-label="Depoimento anterior"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-navy-deep/10 text-navy-deep/60 transition-colors hover:border-navy-deep/30 hover:text-navy-deep"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={next}
            aria-label="Próximo depoimento"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-navy-deep/10 text-navy-deep/60 transition-colors hover:border-navy-deep/30 hover:text-navy-deep"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}