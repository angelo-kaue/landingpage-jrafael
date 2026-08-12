import React from "react";
import { motion } from "framer-motion";
import { Camera } from "lucide-react";
import { fadeUp, stagger, viewportOnce } from "../lib/motion.js";

/**
 * Mosaico "bento" de espaços reservados para fotografia real (antes/depois,
 * lifestyle, consultório etc.). Em vez de simular fotos de banco de imagens
 * (o que poderia parecer depoimento/imagem real e violar a regra de não
 * inventar conteúdo), cada célula usa um ícone + gradiente de marca e um
 * rótulo explícito do que deve entrar ali — pronto para receber o material
 * oficial do cliente.
 *
 * tiles: [{ label, icon: LucideIcon, span?: "col-span-2 row-span-2" }]
 */
export default function MosaicPlaceholder({ tiles, className = "" }) {
  return (
    <motion.div
      variants={stagger(0.08)}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className={`grid grid-cols-2 gap-4 md:grid-cols-4 ${className}`}
    >
      {tiles.map((tile, i) => {
        const Icon = tile.icon || Camera;
        return (
          <motion.div
            key={tile.label}
            variants={fadeUp}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.25 }}
            className={`group relative flex min-h-[140px] flex-col items-center justify-center gap-3 overflow-hidden rounded-3xl border border-navy-deep/8 bg-navy-gradient p-6 text-center shadow-soft ${
              tile.span || ""
            }`}
          >
            <div
              className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              style={{ background: "radial-gradient(circle at 50% 20%, rgba(212,175,55,0.25), transparent 70%)" }}
            />
            <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
              <Icon size={20} className="text-gold" aria-hidden="true" />
            </div>
            <span className="relative text-xs font-medium leading-snug text-white/70">{tile.label}</span>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
