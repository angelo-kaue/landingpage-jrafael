import React from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import PlaceholderTag from "./PlaceholderTag.jsx";

/**
 * Indica claramente um espaço reservado para vídeo (ainda não gravado),
 * usando uma ilustração como "frame de capa" + botão de play. Não reproduz
 * nada ao ser clicado — é só a composição visual, pronta para receber um
 * vídeo real (basta trocar o conteúdo por um <video>/embed no mesmo card).
 */
export default function VideoPlaceholder({ poster, label = "Vídeo demonstrativo", duration = "1:30" }) {
  return (
    <div className="group relative aspect-video w-full overflow-hidden rounded-3xl shadow-soft">
      {poster}
      <div className="absolute inset-0 bg-navy-deep/35 transition-colors duration-300 group-hover:bg-navy-deep/45" />

      <PlaceholderTag label="Vídeo ilustrativo" className="absolute right-4 top-4" />

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

      <span className="absolute bottom-4 right-4 rounded-md bg-navy-deep/70 px-2 py-1 text-xs font-medium text-white/80">
        {duration}
      </span>
    </div>
  );
}
