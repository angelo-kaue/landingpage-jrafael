import React from "react";
import PlaceholderTag from "./PlaceholderTag.jsx";

/**
 * TODAS as fotos do site passam por aqui. Para trocar qualquer imagem pela
 * foto oficial do cliente, basta substituir o ARQUIVO correspondente dentro
 * de `public/photos/` (mesmo nome, mesma extensão .jpg) — nenhuma linha de
 * código precisa mudar.
 *
 * Tamanho recomendado para cada slot está documentado em README.md
 * ("Como trocar as fotos").
 */
export const PHOTOS = {
  aboutPortrait: "/photos/about-portrait.jpg",
  heroVideoPoster: "/photos/hero-video-poster.jpg",
  serviceConsulta: "/photos/service-consulta.jpg",
  serviceAcompanhamento: "/photos/service-acompanhamento.jpg",
  methodBanner: "/photos/method-banner.jpg",
  testimonial1: "/photos/testimonial-1.jpg",
  testimonial2: "/photos/testimonial-2.jpg",
  testimonial3: "/photos/testimonial-3.jpg",
  before: "/photos/before.jpg",
  after: "/photos/after.jpg",
  galleryNutricao: "/photos/gallery-nutricao.jpg",
  galleryTreino: "/photos/gallery-treino.jpg",
  galleryConsulta: "/photos/gallery-consulta.jpg",
  galleryResultado: "/photos/gallery-resultado.jpg",
};

/**
 * <Photo slot="aboutPortrait" className="h-full w-full object-cover" />
 * `tag`: mostra (ou não) o selinho "imagem ilustrativa" — desligue quando
 * trocar pela foto real (`tag={false}`).
 */
export default function Photo({ slot, className = "", alt = "", tag = true, tagLabel, ...rest }) {
  const src = PHOTOS[slot];
  if (!src) return null;

  return (
    <>
      <img src={src} alt={alt} className={className} loading="lazy" decoding="async" {...rest} />
      {tag && <PlaceholderTag label={tagLabel} className="absolute right-3 top-3 z-10" />}
    </>
  );
}
