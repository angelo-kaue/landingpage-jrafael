import React from "react";
import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "../lib/motion.js";

/* Grid consistente, respiro amplo (briefing, seção 9) */
export function Container({ children, className = "" }) {
  return <div className={`mx-auto w-full max-w-6xl px-6 md:px-10 ${className}`}>{children}</div>;
}

/* Rótulo pequeno acima dos títulos — reforça a ordem psicológica da narrativa */
export function Eyebrow({ children, tone = "dark" }) {
  const toneClass = tone === "light" ? "text-white/60" : "text-navy-mid/70";
  return (
    <span className={`block text-xs md:text-sm font-semibold uppercase tracking-[0.2em] ${toneClass}`}>
      {children}
    </span>
  );
}

export function SectionHeading({ eyebrow, title, description, tone = "dark", align = "left" }) {
  const alignClass = align === "center" ? "text-center items-center mx-auto" : "text-left items-start";
  const titleTone = tone === "light" ? "text-white" : "text-navy-deep";
  const descTone = tone === "light" ? "text-white/70" : "text-navy-deep/60";

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className={`flex flex-col gap-4 max-w-2xl ${alignClass}`}
    >
      {eyebrow && <Eyebrow tone={tone}>{eyebrow}</Eyebrow>}
      <h2 className={`text-3xl md:text-5xl font-semibold tracking-tight leading-[1.1] ${titleTone}`}>{title}</h2>
      {description && <p className={`text-base md:text-lg leading-relaxed ${descTone}`}>{description}</p>}
    </motion.div>
  );
}

/* Botão com microinterações: hover suave + leve compressão no clique (briefing, seção 6) */
export function Button({ children, href, onClick, variant = "primary", icon: Icon, className = "", type = "button" }) {
  const base =
    "group inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm md:text-base font-semibold transition-colors duration-300 select-none";

  const variants = {
    primary: "bg-gold text-navy-deep hover:bg-white shadow-gold",
    dark: "bg-navy-deep text-white hover:bg-navy-mid",
    ghost: "bg-white/10 text-white border border-white/25 hover:bg-white/20 backdrop-blur",
    outline: "border border-navy-deep/15 text-navy-deep hover:border-navy-deep/40",
  };

  const Comp = href ? motion.a : motion.button;
  const extraProps = href ? { href, target: href.startsWith("http") ? "_blank" : undefined, rel: "noreferrer" } : { onClick, type };

  return (
    <Comp
      {...extraProps}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.96 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
      {Icon && (
        <Icon
          size={18}
          className="transition-transform duration-300 group-hover:translate-x-0.5"
          aria-hidden="true"
        />
      )}
    </Comp>
  );
}

/* Cartão elegante e neutro, base para diversas seções */
export function Card({ children, className = "" }) {
  return (
    <motion.div
      variants={fadeUp}
      className={`rounded-3xl border border-navy-deep/8 bg-white p-8 shadow-soft ${className}`}
    >
      {children}
    </motion.div>
  );
}

/* Placeholder visual honesto — usado quando a marca não forneceu a informação real
   (fotos, depoimentos etc.), em vez de inventar conteúdo. */
export function PlaceholderBlock({ label, className = "", icon: Icon }) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-3 rounded-3xl border border-dashed border-navy-mid/25 bg-mist text-center p-8 ${className}`}
    >
      {Icon && <Icon size={26} className="text-navy-mid/40" aria-hidden="true" />}
      <span className="text-xs font-medium uppercase tracking-wider text-navy-mid/50">{label}</span>
    </div>
  );
}
