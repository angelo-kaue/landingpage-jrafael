import React from "react";

/**
 * Biblioteca de ilustrações — todas em SVG inline (sem requisições extras,
 * sem peso de imagem, nítidas em qualquer resolução). Preenchem os espaços
 * de mídia com composições profissionais e coerentes com o nicho
 * (nutrição, treino, consulta, resultado) enquanto fotos oficiais não
 * chegam. Estilo flat/geométrico, sem traços faciais detalhados — deixa
 * claro que é uma ilustração, nunca uma foto real de alguém.
 *
 * Paleta usada: navy-deep (#0B1F3A), navy-mid (#1F4E79), gold (#D4AF37),
 * branco e mist (#F5F7FA) — sempre a mesma da marca.
 */

const GRADIENTS = (id) => (
  <defs>
    <linearGradient id={`${id}-bg`} x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stopColor="#1F4E79" />
      <stop offset="100%" stopColor="#0B1F3A" />
    </linearGradient>
    <linearGradient id={`${id}-skin`} x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stopColor="#F3D9A4" />
      <stop offset="100%" stopColor="#E8C588" />
    </linearGradient>
  </defs>
);

/** Retrato estilizado (busto) — usado em Sobre, avatares de depoimentos etc. */
export function PortraitIllustration({ variant = 1, className = "" }) {
  const id = `portrait-${variant}`;
  const hair = ["#2A2A2A", "#3B2A1E", "#1C1C1C", "#4A3728"][variant % 4];
  const shirt = ["#1F4E79", "#0B1F3A", "#D4AF37", "#1F4E79"][variant % 4];
  const hairStyles = [
    <path key="h1" d="M78,92 C78,58 100,38 140,38 C180,38 202,58 202,92 L202,110 L78,110 Z" fill={hair} />,
    <path key="h2" d="M74,96 C70,58 96,34 140,34 C184,34 210,58 206,96 C206,80 190,66 140,66 C90,66 74,80 74,96Z" fill={hair} />,
    <path key="h3" d="M80,90 C80,54 104,36 140,36 C176,36 200,54 200,90 L196,70 C180,58 100,58 84,70 Z" fill={hair} />,
    <path key="h4" d="M76,94 C76,56 102,36 140,36 C178,36 204,56 204,94 L204,84 C190,96 90,96 76,84 Z" fill={hair} />,
  ];

  return (
    <svg viewBox="0 0 280 280" className={className} role="img" aria-label="Retrato ilustrativo genérico">
      {GRADIENTS(id)}
      <rect width="280" height="280" rx="24" fill={`url(#${id}-bg)`} />
      <circle cx="140" cy="150" r="98" fill="rgba(255,255,255,0.05)" />
      {/* corpo */}
      <path d="M55,280 C55,215 92,192 140,192 C188,192 225,215 225,280 Z" fill={shirt} />
      <path d="M55,280 C55,215 92,192 140,192 C188,192 225,215 225,280 Z" fill="black" opacity="0.08" />
      {/* pescoço */}
      <rect x="122" y="150" width="36" height="46" rx="14" fill={`url(#${id}-skin)`} />
      {/* rosto */}
      <circle cx="140" cy="112" r="54" fill={`url(#${id}-skin)`} />
      {/* cabelo */}
      {hairStyles[variant % 4]}
      {/* traços mínimos, não identificáveis */}
      <circle cx="120" cy="116" r="4.5" fill="#0B1F3A" opacity="0.55" />
      <circle cx="160" cy="116" r="4.5" fill="#0B1F3A" opacity="0.55" />
      <path d="M124,138 Q140,148 156,138" stroke="#0B1F3A" strokeWidth="3.5" strokeLinecap="round" fill="none" opacity="0.4" />
    </svg>
  );
}

/** Prato equilibrado — nutrição / alimentação saudável */
export function NutritionScene({ className = "" }) {
  return (
    <svg viewBox="0 0 400 300" className={className} role="img" aria-label="Ilustração de prato equilibrado">
      {GRADIENTS("nutri")}
      <rect width="400" height="300" fill="url(#nutri-bg)" />
      <ellipse cx="200" cy="220" rx="130" ry="18" fill="rgba(0,0,0,0.18)" />
      <circle cx="200" cy="165" r="108" fill="#F5F7FA" />
      <circle cx="200" cy="165" r="86" fill="#FFFFFF" />
      {/* porções coloridas do prato, representando equilíbrio */}
      <path d="M200,165 L200,79 A86,86 0 0 1 274,203 Z" fill="#D4AF37" opacity="0.85" />
      <path d="M200,165 L274,203 A86,86 0 0 1 138,240 Z" fill="#1F4E79" />
      <path d="M200,165 L138,240 A86,86 0 0 1 200,79 Z" fill="#8FB4DE" />
      <circle cx="200" cy="165" r="30" fill="#FFFFFF" />
      {/* talheres */}
      <rect x="60" y="90" width="8" height="130" rx="4" fill="#0B1F3A" />
      <circle cx="64" cy="82" r="10" fill="#0B1F3A" />
      <rect x="332" y="90" width="8" height="130" rx="4" fill="#0B1F3A" />
      <path d="M328,80 L336,80 L336,110 L328,110 Z M328,80 Q328,70 332,70 Q336,70 336,80" fill="#0B1F3A" />
    </svg>
  );
}

/** Figura em movimento — treino / performance física */
export function TrainingScene({ className = "" }) {
  return (
    <svg viewBox="0 0 400 300" className={className} role="img" aria-label="Ilustração de treino físico">
      {GRADIENTS("train")}
      <rect width="400" height="300" fill="url(#train-bg)" />
      <circle cx="120" cy="90" r="90" fill="rgba(212,175,55,0.12)" />
      <circle cx="320" cy="230" r="70" fill="rgba(255,255,255,0.06)" />
      {/* silhueta correndo */}
      <g transform="translate(120,60)">
        <circle cx="60" cy="18" r="16" fill="#F3D9A4" />
        <path d="M56,32 L64,32 L70,80 L50,110 L38,180" stroke="#1F4E79" strokeWidth="14" strokeLinecap="round" fill="none" />
        <path d="M62,80 L110,60" stroke="#1F4E79" strokeWidth="12" strokeLinecap="round" />
        <path d="M62,80 L24,58" stroke="#D4AF37" strokeWidth="12" strokeLinecap="round" />
        <path d="M50,110 L96,132" stroke="#0B1F3A" strokeWidth="14" strokeLinecap="round" />
        <path d="M38,180 L10,220" stroke="#0B1F3A" strokeWidth="14" strokeLinecap="round" />
      </g>
      {/* linhas de movimento */}
      <path d="M40,230 L120,230" stroke="#D4AF37" strokeWidth="4" strokeLinecap="round" opacity="0.5" />
      <path d="M30,250 L100,250" stroke="#D4AF37" strokeWidth="4" strokeLinecap="round" opacity="0.3" />
    </svg>
  );
}

/** Consulta — profissional e paciente à mesa */
export function ConsultationScene({ className = "" }) {
  return (
    <svg viewBox="0 0 400 300" className={className} role="img" aria-label="Ilustração de consulta nutricional">
      {GRADIENTS("consult")}
      <rect width="400" height="300" fill="url(#consult-bg)" />
      {/* mesa */}
      <rect x="40" y="210" width="320" height="16" rx="8" fill="#0B1F3A" opacity="0.5" />
      <rect x="70" y="226" width="16" height="50" fill="#0B1F3A" opacity="0.35" />
      <rect x="314" y="226" width="16" height="50" fill="#0B1F3A" opacity="0.35" />
      {/* prancheta sobre a mesa */}
      <rect x="172" y="190" width="56" height="40" rx="4" fill="#FFFFFF" opacity="0.9" />
      <rect x="180" y="198" width="40" height="4" fill="#D4AF37" />
      <rect x="180" y="208" width="30" height="4" fill="#8FB4DE" />
      {/* figura 1 (profissional) */}
      <g transform="translate(80,70)">
        <circle cx="40" cy="30" r="26" fill="#F3D9A4" />
        <path d="M18,50 C18,84 26,110 40,110 C54,110 62,84 62,50 Z" fill="#1F4E79" />
        <path d="M18,20 C18,4 62,4 62,20 L60,40 C46,30 34,30 20,40 Z" fill="#2A2A2A" />
      </g>
      {/* figura 2 (paciente) */}
      <g transform="translate(240,70)">
        <circle cx="40" cy="30" r="26" fill="#E8C588" />
        <path d="M18,50 C18,84 26,110 40,110 C54,110 62,84 62,50 Z" fill="#D4AF37" />
        <path d="M14,26 C14,4 66,4 66,26 C66,10 56,44 40,40 C24,44 14,42 14,26Z" fill="#3B2A1E" />
      </g>
    </svg>
  );
}

/** Resultado / evolução — usado em Autoridade e CTA */
export function ResultScene({ className = "" }) {
  return (
    <svg viewBox="0 0 400 300" className={className} role="img" aria-label="Ilustração de evolução de resultado">
      {GRADIENTS("result")}
      <rect width="400" height="300" fill="url(#result-bg)" />
      <polyline
        points="40,220 110,180 170,205 230,120 300,140 360,70"
        fill="none"
        stroke="#D4AF37"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="360" cy="70" r="9" fill="#D4AF37" />
      <g transform="translate(150,150)">
        <circle cx="40" cy="24" r="20" fill="#F3D9A4" />
        <path d="M18,42 C18,74 26,98 40,98 C54,98 62,74 62,42 Z" fill="#1F4E79" />
        <path d="M18,44 L2,20" stroke="#1F4E79" strokeWidth="10" strokeLinecap="round" />
        <path d="M62,44 L80,16" stroke="#1F4E79" strokeWidth="10" strokeLinecap="round" />
      </g>
    </svg>
  );
}

/**
 * Silhueta de transformação (para o comparativo antes/depois).
 * state="before": postura curvada, tons neutros.
 * state="after": postura ereta, mais energia, acento dourado.
 */
export function TransformSilhouette({ state = "before", className = "", ...rest }) {
  const isAfter = state === "after";
  const accent = isAfter ? "#D4AF37" : "#8FA0B8";
  const body = isAfter ? "#1F4E79" : "#5D7690";

  return (
    <svg
      viewBox="0 0 300 400"
      className={className}
      role="img"
      aria-label={`Silhueta ilustrativa — ${isAfter ? "depois" : "antes"}`}
      {...rest}
    >
      <defs>
        <linearGradient id={`ta-${state}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={isAfter ? "#1F4E79" : "#0B1F3A"} />
          <stop offset="100%" stopColor="#0B1F3A" />
        </linearGradient>
      </defs>
      <rect width="300" height="400" fill={`url(#ta-${state})`} />
      <circle cx="150" cy="200" r="150" fill="rgba(255,255,255,0.03)" />
      <g transform={isAfter ? "translate(150,60)" : "translate(150,80) rotate(4)"}>
        <circle cx="0" cy="20" r="26" fill="#E8C588" />
        <path
          d={isAfter ? "M-24,50 C-30,140 -20,230 0,230 C20,230 30,140 24,50 Z" : "M-20,54 C-34,130 -26,210 -4,214 C14,216 28,140 20,54 Z"}
          fill={body}
        />
        <path d={isAfter ? "M-24,70 L-58,110" : "M-20,80 L-46,110"} stroke={body} strokeWidth="14" strokeLinecap="round" />
        <path d={isAfter ? "M24,70 L58,110" : "M20,80 L44,116"} stroke={body} strokeWidth="14" strokeLinecap="round" />
      </g>
      <circle cx="150" cy="360" r="60" fill={accent} opacity="0.12" />
      <text
        x="150"
        y="380"
        textAnchor="middle"
        fontSize="13"
        fontWeight="600"
        letterSpacing="2"
        fill="rgba(255,255,255,0.55)"
      >
        {isAfter ? "DEPOIS" : "ANTES"}
      </text>
    </svg>
  );
}
