import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, RotateCcw, Utensils, ShieldCheck } from "lucide-react";
import { Container, SectionHeading } from "./ui.jsx";
import { objecoes } from "../data/brand.js";
import { fadeUp, viewportOnce } from "../lib/motion.js";

const icons = [RotateCcw, Utensils, ShieldCheck];

function Item({ item, icon: Icon, isOpen, onToggle }) {
  return (
    <div className="border-b border-navy-deep/10">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-6 py-6 text-left transition-colors hover:text-navy-mid"
        aria-expanded={isOpen}
      >
        <span className="flex items-center gap-4">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-navy-deep/5">
            <Icon size={16} className="text-navy-mid" aria-hidden="true" />
          </span>
          <span className="text-base font-medium text-navy-deep md:text-lg">{item.pergunta}</span>
        </span>
        <motion.span animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }} className="shrink-0">
          <ChevronDown size={20} className="text-navy-mid" aria-hidden="true" />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-6 pl-13 text-sm leading-relaxed text-navy-deep/60 md:text-base">{item.resposta}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Objections() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-white py-24 md:py-32">
      <Container className="flex flex-col gap-14">
        <SectionHeading
          eyebrow="Antes de decidir"
          title="Dúvidas que você provavelmente tem"
          description="Respostas diretas. Sem enrolação, do mesmo jeito que o método funciona."
        />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="max-w-3xl"
        >
          {objecoes.map((item, i) => (
            <Item
              key={item.pergunta}
              item={item}
              icon={icons[i]}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
