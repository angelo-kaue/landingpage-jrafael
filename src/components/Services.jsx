import React from "react";
import { motion } from "framer-motion";
import { Stethoscope, CalendarClock, ArrowUpRight } from "lucide-react";
import { Container, SectionHeading } from "./ui.jsx";
import Photo from "./Photo.jsx";
import { servicos, ctaPrincipal, brand } from "../data/brand.js";
import { fadeUp, stagger, viewportOnce } from "../lib/motion.js";

const icons = [Stethoscope, CalendarClock];
const photoSlots = ["serviceConsulta", "serviceAcompanhamento"];

export default function Services() {
  return (
    <section id="servicos" className="bg-mist py-24 md:py-32">
      <Container className="flex flex-col gap-16">
        <SectionHeading
          eyebrow="Como posso te ajudar"
          title="Serviços"
          description="Dois formatos, um único objetivo: resultado sustentável e definitivo."
        />

        <motion.div
          variants={stagger(0.14)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid gap-6 md:grid-cols-2"
        >
          {servicos.map((servico, i) => {
            const Icon = icons[i];
            return (
              <motion.a
                key={servico.titulo}
                href={brand.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                variants={fadeUp}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.25 }}
                className="group flex flex-col overflow-hidden rounded-3xl border border-navy-deep/8 bg-white shadow-soft"
              >
                <div className="relative aspect-[16/9] w-full overflow-hidden">
                  <Photo
                    slot={photoSlots[i]}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    alt={servico.titulo}
                  />
                  <div className="absolute -bottom-6 left-6 z-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-navy-gradient shadow-soft">
                    <Icon size={24} className="text-gold" aria-hidden="true" />
                  </div>
                </div>
                <div className="flex flex-col gap-3 p-9 pt-10">
                  <h3 className="text-xl font-semibold text-navy-deep">{servico.titulo}</h3>
                  <p className="text-sm leading-relaxed text-navy-deep/60">{servico.descricao}</p>
                  <span className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-navy-mid">
                    {ctaPrincipal}
                    <ArrowUpRight
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </span>
                </div>
              </motion.a>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
