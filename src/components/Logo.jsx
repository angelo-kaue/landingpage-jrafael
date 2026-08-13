import React from "react";

// Proporção real do arquivo da logo (largura ÷ altura). Usada para travar o
// formato via CSS aspect-ratio — assim, mesmo que algum elemento ao redor
// tente forçar uma largura diferente, a imagem NUNCA estica/achata: o
// aspect-ratio + object-fit:contain garantem que ela sempre mantenha a
// proporção original, ajustando por dentro da caixa em vez de deformar.
const LOGO_RATIO = 698 / 220; // ≈ 3.17

/**
 * Renderiza a logo oficial do profissional (imagem única).
 *
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
      style={
        iconOnly
          ? { objectFit: "contain" }
          : { aspectRatio: `${LOGO_RATIO}`, objectFit: "contain", maxWidth: "none" }
      }
    />
  );
}