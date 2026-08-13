import React from "react";
import { motion } from "framer-motion";
import { Scale, Utensils, BookOpen, MessageSquare } from "lucide-react";
import { Container, SectionHeading } from "./ui.jsx";
import SectionDivider from "./SectionDivider.jsx";
import Photo from "./Photo.jsx";
import { diferenciais } from "../data/brand.js";
import { fadeUp, stagger, viewportOnce } from "../lib/motion.js";

const icons = [Scale, Utensils, BookOpen, MessageSquare];

export default function Method() {
  return (
    <>
      <SectionDivider tone="light" />
      <section id="metodo" className="bg-mist py-24 md:py-32">
        <Container className="flex flex-col gap-16">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <SectionHeading
              eyebrow="Como funciona"
              title="Um método. Sem enrolação."
              description="Quatro princípios sustentam cada decisão do acompanhamento, nada de fórmula genérica."
            />
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              className="relative aspect-[16/9] w-full overflow-hidden rounded-3xl shadow-soft lg:aspect-[16/7]"
            >
              <Photo slot="methodBanner" className="h-full w-full object-cover" alt="Alimentação equilibrada" />
            </motion.div>
          </div>

          <motion.div
            variants={stagger(0.12)}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="grid gap-6 sm:grid-cols-2"
          >
            {diferenciais.map((item, i) => {
              const Icon = icons[i];
              return (
                <motion.div
                  key={item.titulo}
                  variants={fadeUp}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.25 }}
                  className="group relative flex flex-col gap-4 overflow-hidden rounded-3xl border border-navy-deep/8 bg-white p-8 shadow-soft"
                >
                  <div
                    className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                    style={{ background: "radial-gradient(circle, rgba(212,175,55,0.25), transparent 70%)" }}
                  />
                  <div className="relative flex h-11 w-11 items-center justify-center rounded-full bg-navy-deep/5 transition-colors duration-300 group-hover:bg-navy-deep/10">
                    <Icon size={20} className="text-navy-mid" aria-hidden="true" />
                  </div>
                  <h3 className="relative text-lg font-semibold text-navy-deep">{item.titulo}</h3>
                  <p className="relative text-sm leading-relaxed text-navy-deep/60">{item.descricao}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </Container>
      </section>
    </>
  );
}
