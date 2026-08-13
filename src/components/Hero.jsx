import React, { useRef } from "react";
import { motion, useMotionValue, useMotionTemplate } from "framer-motion";
import { ArrowRight, PlayCircle } from "lucide-react";
import { Container, Button, Eyebrow } from "./ui.jsx";
import EquilibriumLine from "./EquilibriumLine.jsx";
import HeroVisual from "./HeroVisual.jsx";
import WhatsAppIcon from "./WhatsAppIcon.jsx";
import Photo from "./Photo.jsx";
import VideoPlaceholder from "./VideoPlaceholder.jsx";
import { brand, ctaPrincipal } from "../data/brand.js";
import { fadeUp, stagger } from "../lib/motion.js";

export default function Hero() {
  const glowX = useMotionValue(50);
  const glowY = useMotionValue(35);
  const glowBackground = useMotionTemplate`radial-gradient(600px circle at ${glowX}% ${glowY}%, rgba(212,175,55,0.14), transparent 60%)`;
  const sectionRef = useRef(null);

  function handleMouseMove(e) {
    const rect = sectionRef.current.getBoundingClientRect();
    glowX.set(((e.clientX - rect.left) / rect.width) * 100);
    glowY.set(((e.clientY - rect.top) / rect.height) * 100);
  }

  return (
    <section
      id="hero"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative overflow-hidden bg-navy-gradient pb-24 pt-36 md:pb-32 md:pt-48"
    >
      {/* Glow ambiente que segue o cursor — profundidade sutil, sem ruído visual */}
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{ background: glowBackground }}
      />
      <div
        className="pointer-events-none absolute -bottom-1/3 left-0 h-[420px] w-[420px] rounded-full opacity-10 blur-3xl"
        style={{ background: "radial-gradient(circle, #1F4E79 0%, transparent 70%)" }}
      />

      <Container className="relative grid items-center gap-16 md:grid-cols-[1.05fr_0.95fr] md:gap-10">
        <motion.div
          variants={stagger(0.14)}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center gap-7 text-center md:items-start md:text-left"
        >
          <motion.div variants={fadeUp}>
            <Eyebrow tone="light">{brand.profissao}</Eyebrow>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-5xl font-semibold leading-[1.05] tracking-tightest text-white md:text-7xl"
          >
            Clareza que
            <br />
            transforma.
          </motion.h1>

          <motion.p variants={fadeUp} className="max-w-xl text-lg leading-relaxed text-white/70 md:text-xl">
            Emagrecimento definitivo não é sobre força de vontade. É sobre direção certa, sem dietas da moda e sem enrolação.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-2 flex flex-col items-center gap-4 sm:flex-row">
            <Button href={brand.whatsappUrl} variant="primary" icon={WhatsAppIcon}>
              {ctaPrincipal}
            </Button>
            <Button href="#metodo" variant="ghost" icon={PlayCircle}>
              Conhecer o método
            </Button>
          </motion.div>
        </motion.div>

        {/* Visual de destaque: vídeo ilustrativo espiando atrás + mockup de painel em primeiro plano */}
        <div className="relative pt-8 sm:pt-14">
          <motion.div
            initial={{ opacity: 0, y: -10, rotate: -3 }}
            animate={{ opacity: 1, y: 0, rotate: -4 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="absolute -top-2 right-2 z-0 hidden w-[62%] overflow-hidden rounded-[24px] opacity-90 sm:block md:right-6 md:w-[56%]"
          >
            <VideoPlaceholder
              poster={<Photo slot="heroVideoPoster" className="h-full w-full object-cover" alt="Vídeo demonstrativo — como funciona o método" />}
              label="Como funciona o método"
              href={brand.whatsappUrl}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 sm:mt-16"
          >
            <HeroVisual />
          </motion.div>
        </div>
      </Container>

      {/* Elemento de assinatura: caos -> clareza */}
      <Container className="relative mt-20 md:mt-28">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto w-full max-w-3xl"
        >
          <EquilibriumLine />
          <div className="mt-2 flex justify-between text-xs uppercase tracking-[0.2em] text-white/35">
            <span>Confusão</span>
            <span className="text-gold/70">Equilíbrio</span>
          </div>
        </motion.div>
      </Container>

      {/* Indicador sutil de rolagem */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="relative mt-16 hidden justify-center md:flex"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="h-9 w-5 rounded-full border border-white/25 p-1"
          aria-hidden="true"
        >
          <div className="h-1.5 w-1.5 rounded-full bg-gold" />
        </motion.div>
      </motion.div>
    </section>
  );
}