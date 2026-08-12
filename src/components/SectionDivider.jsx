import React from "react";
import { motion } from "framer-motion";

/**
 * Divisor de seção discreto: uma linha fina que "acende" no centro em
 * dourado. Usado com moderação (2-3 vezes na página), nunca como padrão
 * repetitivo entre todas as seções.
 */
export default function SectionDivider({ tone = "light" }) {
  const lineColor = tone === "light" ? "rgba(11,31,58,0.1)" : "rgba(255,255,255,0.12)";

  return (
    <div className="relative flex items-center justify-center py-2" aria-hidden="true">
      <div className="h-px w-full" style={{ backgroundColor: lineColor }} />
      <motion.span
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "backOut" }}
        className="absolute h-1.5 w-1.5 rotate-45 bg-gold"
      />
    </div>
  );
}
