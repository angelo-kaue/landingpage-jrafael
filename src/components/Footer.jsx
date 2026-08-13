import React from "react";
import { Instagram, ArrowUpRight } from "lucide-react";
import { Container } from "./ui.jsx";
import Logo from "./Logo.jsx";
import WhatsAppIcon from "./WhatsAppIcon.jsx";
import { brand } from "../data/brand.js";

const links = [
  { label: "Método", href: "#metodo" },
  { label: "Resultados", href: "#resultados" },
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy-deep pt-20">
      <Logo
        variant="white"
        iconOnly
        className="pointer-events-none absolute -bottom-16 -left-10 h-64 w-auto opacity-[0.04]"
      />
      <Container className="relative flex flex-col gap-14">
        <div className="grid gap-12 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div className="flex flex-col items-start gap-4">
            <Logo variant="white" className="h-8 w-auto" />
            <p className="max-w-xs text-sm leading-relaxed text-white/50">{brand.propostaDeValor}</p>
            <span className="text-xs font-medium uppercase tracking-wider text-white/30">{brand.crn}</span>
          </div>

          <div className="flex flex-col gap-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-white/40">Navegação</span>
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="w-fit text-sm text-white/60 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-white/40">Contato</span>
            <a
              href={brand.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="group flex w-fit items-center gap-2 text-sm text-white/60 transition-colors hover:text-white"
            >
              <WhatsAppIcon size={15} />
              {brand.whatsappDisplay}
              <ArrowUpRight size={13} className="opacity-0 transition-opacity group-hover:opacity-100" />
            </a>
            <a
              href={brand.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="group flex w-fit items-center gap-2 text-sm text-white/60 transition-colors hover:text-white"
            >
              <Instagram size={15} />
              {brand.instagram}
              <ArrowUpRight size={13} className="opacity-0 transition-opacity group-hover:opacity-100" />
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-8 text-xs text-white/35 md:flex-row">
          <span>
            © {new Date().getFullYear()} {brand.nome} — {brand.profissao}
          </span>
          <span>{brand.crn}</span>
        </div>
      </Container>
    </footer>
  );
}