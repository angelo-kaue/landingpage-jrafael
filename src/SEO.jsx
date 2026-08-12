import { useEffect } from "react";
import { brand } from "./data/brand.js";

/**
 * SEO básico sem dependências externas (react-helmet etc.), mantendo o bundle
 * enxuto — alinhado ao requisito de "carregamento rápido".
 * Título e meta description já vêm do index.html; aqui garantimos que fiquem
 * sincronizados com os dados da marca e injetamos o JSON-LD (schema.org/Person).
 */
export default function SEO() {
  useEffect(() => {
    document.title = `${brand.nome} | ${brand.profissao}`;

    const ensureMeta = (name, content) => {
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("name", name);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };

    ensureMeta("description", brand.propostaDeValor);

    const scriptId = "ld-json-person";
    let script = document.getElementById(scriptId);
    if (!script) {
      script = document.createElement("script");
      script.id = scriptId;
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      name: brand.nome,
      jobTitle: brand.profissao,
      image: "/brand/logo-navy.png",
      sameAs: [brand.instagramUrl],
      description: brand.propostaDeValor,
      hasCredential: brand.crn,
    });
  }, []);

  return null;
}
