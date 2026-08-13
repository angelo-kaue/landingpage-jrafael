import React from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

/**
 * Card de vídeo. Enquanto não há um vídeo real, funciona como um CTA
 * clicável de verdade: `href` leva a pessoa para a conversa no WhatsApp
 * (ou para onde você passar), então o clique nunca "não faz nada".
 *
 * Quando o vídeo real existir, troque este componente por um <video> ou
 * <iframe> (ver README, seção "Como trocar o vídeo do Hero") — ou, se
 * preferir manter este card como abertura, use o vídeo como `poster` de
 * um player que abre em um modal ao clicar.
 */
export default function VideoPlaceholder({
  poster,
  label = "Vídeo demonstrativo",
  duration,
  href,
  target = "_blank",
}) {
  const Comp = href ? motion.a : motion.div;
  const linkProps = href ? { href, target, rel: target === "_blank" ? "noreferrer" : undefined } : {};

  return (
    <Comp
      {...linkProps}
      whileHover={href ? { scale: 1.01 } : undefined}
      transition={{ duration: 0.25 }}
      className={`group relative block aspect-video w-full overflow-hidden rounded-3xl shadow-soft ${
        href ? "cursor-pointer" : ""
      }`}
    >
      {poster}
      <div className="absolute inset-0 bg-navy-deep/35 transition-colors duration-300 group-hover:bg-navy-deep/45" />

      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
        <motion.div
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
          transition={{ duration: 0.2 }}
          className="flex h-16 w-16 items-center justify-center rounded-full bg-white/95 shadow-soft"
        >
          <Play size={24} className="ml-1 text-navy-deep" fill="currentColor" aria-hidden="true" />
        </motion.div>
        <span className="text-sm font-medium text-white">{label}</span>
      </div>

      {duration && (
        <span className="absolute bottom-4 right-4 rounded-md bg-navy-deep/70 px-2 py-1 text-xs font-medium text-white/80">
          {duration}
        </span>
      )}
    </Comp>
  );
}