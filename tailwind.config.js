/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // Paleta oficial da marca (briefing, seção 7)
        navy: {
          deep: "#0B1F3A", // azul profundo — fundo âncora, autoridade
          mid: "#1F4E79", // azul médio — gradientes e acentos
        },
        mist: "#F5F7FA", // cinza claro — respiro entre seções
        gold: "#D4AF37", // dourado — usado com extrema moderação (momento de clareza)
      },
      fontFamily: {
        // Stack "system" = performance máxima + sensação nativa Apple,
        // sem dependência de fontes externas (carregamento rápido).
        display: [
          "-apple-system",
          "BlinkMacSystemFont",
          '"SF Pro Display"',
          '"Segoe UI"',
          "Inter",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
        body: [
          "-apple-system",
          "BlinkMacSystemFont",
          '"SF Pro Text"',
          '"Segoe UI"',
          "Inter",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
      letterSpacing: {
        tightest: "-0.045em",
      },
      boxShadow: {
        soft: "0 20px 60px -20px rgba(11, 31, 58, 0.25)",
        gold: "0 10px 30px -8px rgba(212, 175, 55, 0.45)",
      },
      backgroundImage: {
        "navy-gradient": "linear-gradient(160deg, #0B1F3A 0%, #1F4E79 100%)",
        "mist-gradient": "linear-gradient(180deg, #FFFFFF 0%, #F5F7FA 100%)",
      },
    },
  },
  plugins: [],
};
