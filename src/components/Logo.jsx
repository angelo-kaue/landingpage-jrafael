import React from "react";

/**
 * Renderiza a logo oficial do profissional (arquivo enviado pelo cliente).
 * variant "white" -> para fundos escuros (navy-gradient)
 * variant "navy"  -> para fundos claros (branco / mist)
 * iconOnly        -> usa apenas o monograma (sem o texto), para espaços reduzidos
 */
export default function Logo({ variant = "navy", className = "h-8 w-auto", iconOnly = false }) {
  const src = iconOnly
    ? variant === "white"
      ? "/brand/icon-white.png"
      : "/brand/icon-navy.png"
    : variant === "white"
    ? "/brand/logo-white.png"
    : "/brand/logo-navy.png";

  return (
    <img
      src={src}
      alt="Jorge Rafael — Nutricionista Clínico e Esportivo"
      className={className}
      loading="eager"
      decoding="async"
    />
  );
}
