import React from "react";
import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import { Container, SectionHeading, Button } from "./ui.jsx";
import CountUp from "./CountUp.jsx";
import Photo from "./Photo.jsx";
import { autoridade, brand } from "../data/brand.js";
import { fadeUp, stagger, viewportOnce } from "../lib/motion.js";

function parseNumero(valor) {
  const num = parseFloat(valor.replace(/\./g, "").replace(/[^0-9.]/g, ""));
  const sufixo = valor.replace(/[0-9.]/g, "");
  return { num, sufixo };
}

export default function Authority() {
  return (
    <section className="bg-navy-gradient py-24 md:py-32">
      <Container className="flex flex-col gap-16">
        <SectionHeading
          tone="light"
          eyebrow="Autoridade"
          title="Números que sustentam o método"
          description="Conteúdo educativo consistente, publicado com regularidade, e resultado acompanhado de perto."
        />

        <motion.div
          variants={stagger(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid gap-6 sm:grid-cols-3"
        >
          {autoridade.numeros.map((n) => {
            const { num, sufixo } = parseNumero(n.valor);
            return (
              <motion.div
                key={n.label}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25 }}
                className="glass flex flex-col gap-2 rounded-3xl p-8 text-white"
              >
                <span className="text-4xl font-semibold text-gold md:text-5xl">
                  <CountUp value={num} suffix={sufixo} />
                </span>
                <span className="text-sm text-white/70">{n.label}</span>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="flex flex-col gap-6 border-t border-white/10 pt-12"
        >
          <span className="text-sm font-medium text-white/60">
            Temas ensinados todos os dias no Instagram:
          </span>
          <div className="flex flex-wrap gap-3">
            {autoridade.temasFrequentes.map((tema) => (
              <span
                key={tema}
                className="rounded-full border border-white/15 px-4 py-2 text-sm text-white/80 transition-colors duration-300 hover:border-gold/40 hover:text-white"
              >
                {tema}
              </span>
            ))}
          </div>
          <Button href={brand.instagramUrl} variant="ghost" icon={Instagram} className="mt-2 w-fit">
            Seguir {brand.instagram}
          </Button>

          {/* Prévia ilustrativa do feed — pronta para receber prints reais dos posts */}
          <div className="grid grid-cols-3 gap-3 pt-2 sm:max-w-md">
            {["galleryNutricao", "galleryTreino", "galleryResultado"].map((slot) => (
              <div key={slot} className="relative aspect-square overflow-hidden rounded-2xl">
                <Photo slot={slot} className="h-full w-full object-cover" alt="Post do Instagram" tag={false} />
              </div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
