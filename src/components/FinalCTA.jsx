import React from "react";
import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import { Container, Button } from "./ui.jsx";
import WhatsAppIcon from "./WhatsAppIcon.jsx";
import Logo from "./Logo.jsx";
import Photo from "./Photo.jsx";
import { brand, ctaFinalFrase, autoridade } from "../data/brand.js";
import { fadeUp, stagger, viewportOnce } from "../lib/motion.js";

export default function FinalCTA() {
  return (
    <section id="cta-final" className="relative overflow-hidden bg-navy-gradient py-28 md:py-36">
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 opacity-25 blur-3xl"
        style={{ background: "radial-gradient(ellipse, #D4AF37 0%, transparent 70%)" }}
      />

      {/* Marca d'água discreta da logo — reforça identidade sem competir com o CTA */}
      <Logo
        variant="white"
        iconOnly
        className="pointer-events-none absolute -right-10 -top-10 h-56 w-auto opacity-[0.06] md:h-72"
      />

      <Container className="relative flex flex-col items-center gap-9 text-center">
        <motion.div
          variants={stagger(0.14)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="flex max-w-2xl flex-col items-center gap-7"
        >
          <motion.h2
            variants={fadeUp}
            className="text-3xl font-semibold leading-tight tracking-tight text-white md:text-5xl"
          >
            {ctaFinalFrase}
          </motion.h2>
          <motion.p variants={fadeUp} className="text-lg text-white/70">
            Agende sua consulta e comece com clareza.
          </motion.p>

          {/* Prova social compacta: avatares ilustrativos + número real de pacientes */}
          <motion.div variants={fadeUp} className="flex items-center gap-3">
            <div className="flex -space-x-3">
              {["testimonial1", "testimonial2", "testimonial3"].map((slot) => (
                <div key={slot} className="h-9 w-9 overflow-hidden rounded-full ring-2 ring-navy-deep">
                  <Photo slot={slot} className="h-full w-full object-cover" alt="Paciente atendido" tag={false} />
                </div>
              ))}
            </div>
            <span className="text-sm text-white/60">{autoridade.numeros[0].label.toLowerCase()}</span>
          </motion.div>

          <motion.div variants={fadeUp} className="flex flex-col items-center gap-4 sm:flex-row">
            <Button href={brand.whatsappUrl} variant="primary" icon={WhatsAppIcon}>
              Agendar uma consulta
            </Button>
            <Button href={brand.instagramUrl} variant="ghost" icon={Instagram}>
              Falar pelo Instagram
            </Button>
          </motion.div>
          <motion.span variants={fadeUp} className="text-sm text-white/40">
            {brand.whatsappDisplay} · {brand.instagram}
          </motion.span>
        </motion.div>
      </Container>
    </section>
  );
}
