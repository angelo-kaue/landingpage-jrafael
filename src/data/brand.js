// Todo o conteúdo abaixo deriva estritamente do JSON da marca fornecido no briefing.
// Onde a informação não existir (fotos reais, depoimentos, anos de experiência,
// certificações, valores de consulta), o componente correspondente exibe um
// placeholder explícito em vez de inventar dado.

// Número e mensagem fornecidos pelo cliente para o botão de WhatsApp.
const WHATSAPP_NUMBER = "5588997230275"; // +55 88 99723-0275
const WHATSAPP_MESSAGE =
  "Olá! Vim pelo seu Instagram e gostaria de agendar uma consulta.";

export const brand = {
  nome: "Jorge Rafael",
  instagram: "@jorgerafael_nutri",
  instagramUrl: "https://instagram.com/jorgerafael_nutri",
  whatsappDisplay: "+55 88 99723-0275",
  whatsappUrl: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`,
  // CRN identificado na logo oficial enviada pelo cliente — único dado de
  // credencial real disponível (o JSON da marca não trazia certificações).
  crn: "CRN11 20140/P",
  profissao: "Nutricionista Clínico e Esportivo",
  especialidades: ["Emagrecimento", "Nutrição esportiva", "Reeducação alimentar"],
  posicionamento:
    "Nutricionista que defende emagrecimento definitivo sem dietas da moda, com foco em equilíbrio e consistência.",
  propostaDeValor:
    "Ajudar pessoas a emagrecer de forma definitiva através de estratégias nutricionais personalizadas e sustentáveis.",
  promessas: ["Emagrecimento definitivo", "Sem dieta da moda", "Sem enrolação", "Equilíbrio alimentar"],
};

export const diferenciais = [
  {
    titulo: "Sem dietas restritivas",
    descricao:
      "O plano se adapta à sua rotina, não o contrário. Nada de listas proibidas ou regras impossíveis de manter.",
  },
  {
    titulo: "Equilíbrio, não perfeição",
    descricao:
      "Resultado definitivo vem de consistência, não de extremos. Equilíbrio alimentar é o centro do método.",
  },
  {
    titulo: "Conteúdo educativo direto",
    descricao: "Você entende o porquê de cada escolha. Sem termos técnicos desnecessários, sem enrolação.",
  },
  {
    titulo: "Comunicação simples e prática",
    descricao: "Orientações claras, aplicáveis no dia a dia real. No trabalho, em casa, no treino.",
  },
];

export const dores = [
  "Não conseguir manter o peso perdido",
  "Efeito sanfona",
  "Confusão sobre o que é alimentação saudável",
  "Seguir dietas da moda sem resultado",
];

export const objecoes = [
  {
    pergunta: "Já tentei emagrecer antes e não deu certo. Por que agora seria diferente?",
    resposta:
      "Porque o problema raramente é falta de esforço, é seguir métodos genéricos ou dietas da moda que não se sustentam na sua rotina. O acompanhamento é construído em torno do seu contexto, com foco em equilíbrio e consistência, não em restrição temporária.",
  },
  {
    pergunta: "Preciso seguir uma dieta super restritiva?",
    resposta:
      "Não. O método se apoia em equilíbrio alimentar, não em restrição extrema. A proposta é justamente sair da lógica de dietas da moda para uma estratégia sustentável a longo prazo.",
  },
  {
    pergunta: "Como sei que esse método realmente funciona?",
    resposta:
      "São mais de 500 pacientes transformados através de estratégias nutricionais personalizadas. O foco sempre foi resultado real e sustentável — não promessa vazia.",
  },
];

export const autoridade = {
  numeros: [
    { valor: "500+", label: "Pacientes transformados" },
    { valor: "8.275", label: "Seguidores no Instagram" },
    { valor: "581", label: "Conteúdos publicados" },
  ],
  temasFrequentes: [
    "Emagrecimento",
    "Alimentação saudável",
    "Equilíbrio alimentar",
    "Mitos da nutrição",
    "Performance física",
  ],
};

export const servicos = [
  {
    titulo: "Consulta nutricional",
    descricao:
      "Ponto de partida do método: avaliação individual para entender rotina, histórico e objetivo — a base de um plano que faz sentido para você.",
  },
  {
    titulo: "Acompanhamento nutricional",
    descricao:
      "Ajustes contínuos ao longo do processo, para que o resultado não dependa de força de vontade isolada, e sim de direção constante.",
  },
];

export const provaSocial = {
  categorias: ["Histórias de transformação", "Feedbacks de pacientes", "Antes e depois", "Comentários positivos"],
};

export const ctaPrincipal = "Agendar uma consulta";
export const ctaFinalFrase = "Você não precisa de mais esforço. Precisa da direção certa.";
