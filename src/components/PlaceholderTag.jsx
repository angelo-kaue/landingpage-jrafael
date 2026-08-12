import React from "react";
import { ImageIcon } from "lucide-react";

/**
 * Etiqueta minúscula e discreta usada sobre mídias ilustrativas (fotos,
 * ilustrações, vídeo placeholder). Não interfere no visual premium da
 * página — serve para deixar claro, na apresentação ao cliente, quais
 * elementos ainda serão substituídos pela mídia oficial.
 */
export default function PlaceholderTag({ label = "Imagem ilustrativa", className = "" }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full bg-navy-deep/60 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-white/80 backdrop-blur-sm ${className}`}
    >
      <ImageIcon size={11} aria-hidden="true" />
      {label}
    </span>
  );
}
