import React from "react";

/**
 * Ícone de WhatsApp desenhado em traço fino (stroke), para manter a mesma
 * linguagem visual dos ícones lucide-react usados no restante da página
 * (briefing, seção 11: "ícones minimalistas, linhas finas").
 */
export default function WhatsAppIcon({ size = 18, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M3.5 20.5l1.28-4.51A8.5 8.5 0 1 1 8.4 19.2L3.5 20.5Z" />
      <path d="M8.3 8.7c-.15.6.06 1.32.5 2.02.65 1.02 2.1 2.46 3.1 3.02.7.4 1.4.53 1.94.3.3-.13.86-.7.99-1.02.1-.24.06-.44-.06-.6-.13-.17-1.16-.9-1.36-1-.2-.1-.36-.05-.5.1-.14.16-.53.62-.65.75-.12.12-.24.14-.44.05-.5-.23-1.1-.62-1.6-1.15-.42-.45-.72-.94-.82-1.15-.1-.2-.02-.32.1-.45.1-.11.24-.28.34-.4.1-.13.13-.22.2-.36.06-.14.03-.27-.02-.38-.06-.12-.5-1.24-.7-1.68-.16-.36-.32-.36-.46-.37h-.4c-.15 0-.38.06-.57.28-.2.22-.75.72-.75 1.74Z" />
    </svg>
  );
}
