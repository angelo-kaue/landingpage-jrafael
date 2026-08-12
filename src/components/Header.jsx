import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "./ui.jsx";
import Logo from "./Logo.jsx";
import WhatsAppIcon from "./WhatsAppIcon.jsx";
import { brand, ctaPrincipal } from "../data/brand.js";

const links = [
  { label: "Método", href: "#metodo" },
  { label: "Resultados", href: "#resultados" },
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Sobre fundo transparente (hero navy) a logo é branca; ao rolar, o header
  // vira um vidro claro e a logo passa para a versão navy — mesma lógica
  // usada no menu mobile aberto.
  const logoVariant = scrolled || open ? "navy" : "white";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open ? "glass-light shadow-soft" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10">
        <a href="#hero" className="flex items-center" aria-label="Jorge Rafael — início">
          <Logo variant={logoVariant} className="h-8 w-auto transition-opacity duration-300 md:h-9" />
        </a>

        <nav className="hidden items-center gap-9 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                scrolled ? "text-navy-deep/70 hover:text-navy-deep" : "text-white/75 hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button href={brand.whatsappUrl} variant={scrolled ? "dark" : "ghost"} icon={WhatsAppIcon} className="!px-6 !py-2.5 !text-sm">
            {ctaPrincipal}
          </Button>
        </div>

        <button
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((v) => !v)}
          className={`rounded-full p-2 md:hidden ${scrolled || open ? "text-navy-deep" : "text-white"}`}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden glass-light md:hidden"
          >
            <div className="flex flex-col gap-1 px-6 pb-6 pt-2">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-3 text-base font-medium text-navy-deep/80 hover:bg-navy-deep/5"
                >
                  {link.label}
                </a>
              ))}
              <Button href={brand.whatsappUrl} variant="dark" icon={WhatsAppIcon} className="mt-2 w-full">
                {ctaPrincipal}
              </Button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
