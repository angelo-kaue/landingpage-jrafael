import React, { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import Photo from "./Photo.jsx";

// Nenhum depoimento real foi fornecido no JSON da marca. Os três "slots"
// abaixo usam retrato ilustrativo + nome genérico para que a seção já
// pareça finalizada em apresentação — troque por depoimentos reais
// (foto, nome, avaliação e relato) assim que o cliente os enviar.
const slots = [
  {
    id: 1,
    nome: "Felipe S.",
    photo: "testimonial1",
    texto:
      "Eu sempre começava uma dieta e desistia depois de algumas semanas. Com o acompanhamento, finalmente consegui adaptar a alimentação à minha rotina. Hoje me sinto muito mais disposto e confiante com meu corpo. sempre começava uma dieta e desistia depois de algumas semanas. Com o acompanhamento, finalmente consegui adaptar a alimentação à minha rotina. Hoje me sinto muito mais disposto e confiante com meu corpo.",
  },
  {
    id: 2,
    nome: "Juliana P.",
    photo: "testimonial2",
    texto:
      "O que mais gostei foi entender que não precisava viver de restrição. Aprendi a me alimentar melhor sem deixar de aproveitar minha rotina. Foi uma mudança que consegui manter de verdade.",
  },
  {
    id: 3,
    nome: "Gabriela A.",
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

  const current = slots[index];

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="overflow-hidden rounded-3xl border border-navy-deep/8 bg-mist">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -24 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-6 p-8 md:flex-row md:items-center md:gap-10 md:p-12"
          >
            <div className="relative flex shrink-0 flex-col items-center gap-2 md:w-40">
              <div className="relative h-24 w-24 overflow-hidden rounded-full shadow-soft ring-4 ring-white">
                <Photo slot={current.photo} className="h-full w-full object-cover" alt={current.nome} tag={false} />
              </div>
              <span className="text-sm font-semibold text-navy-deep">{current.nome}</span>
            
            </div>

            <div className="flex flex-1 flex-col gap-4">
              <Quote size={26} className="text-gold" aria-hidden="true" />
              <Stars />
              <p className="text-base italic leading-relaxed text-navy-deep/70 md:text-lg">"{current.texto}"</p>
            </div>
          </motion.div>
        </AnimatePresence>
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
