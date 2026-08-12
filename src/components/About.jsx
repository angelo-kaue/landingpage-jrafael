import React from "react";
import { motion } from "framer-motion";
import { Instagram, ShieldCheck } from "lucide-react";
import { Container, Eyebrow, Button } from "./ui.jsx";
import Photo from "./Photo.jsx";
import { brand } from "../data/brand.js";
import { fadeUp, viewportOnce } from "../lib/motion.js";

export default function About() {
  return (
    <section id="sobre" className="bg-white py-24 md:py-32">
      <Container className="grid gap-14 md:grid-cols-2 md:items-center md:gap-16">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="relative"
        >
          {/* Forma decorativa assimétrica atrás do retrato — discreta, sem competir com o conteúdo */}
          <div
            className="pointer-events-none absolute -left-6 -top-6 h-full w-full rounded-[32px] opacity-70"
            style={{ background: "linear-gradient(135deg, rgba(31,78,121,0.10), rgba(212,175,55,0.10))" }}
            aria-hidden="true"
          />
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[28px] shadow-soft">
            <Photo
              slot="aboutPortrait"
              className="h-full w-full object-cover"
              alt={`Foto profissional de ${brand.nome}`}
              tagLabel="Foto profissional a substituir"
            />
          </div>

          {/* Selo de credencial real, extraído da logo oficial */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="absolute -bottom-5 left-6 flex items-center gap-2 rounded-2xl bg-navy-deep px-5 py-3 text-white shadow-soft md:left-8"
          >
            <ShieldCheck size={18} className="text-gold" aria-hidden="true" />
            <span className="text-xs font-medium tracking-wide">{brand.crn}</span>
          </motion.div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="flex flex-col gap-6"
        >
          <Eyebrow>Quem te acompanha</Eyebrow>
          <h2 className="text-3xl font-semibold tracking-tight text-navy-deep md:text-5xl">{brand.nome}</h2>
          <p className="text-lg text-navy-mid">{brand.profissao}</p>

          <p className="text-base leading-relaxed text-navy-deep/70 md:text-lg">{brand.posicionamento}</p>
          <p className="text-base leading-relaxed text-navy-deep/70 md:text-lg">{brand.propostaDeValor}</p>

          <div className="flex flex-wrap gap-3 pt-2">
            {brand.especialidades.map((esp) => (
              <span
                key={esp}
                className="rounded-full border border-navy-deep/10 bg-mist px-4 py-2 text-sm font-medium text-navy-deep/70 transition-colors duration-300 hover:border-navy-mid/30"
              >
                {esp}
              </span>
            ))}
          </div>

          <Button href={brand.instagramUrl} variant="outline" icon={Instagram} className="mt-2 w-fit">
            {brand.instagram}
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}
