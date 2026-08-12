import React from "react";
import SEO from "./SEO.jsx";
import Loader from "./components/Loader.jsx";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import BeliefBreak from "./components/BeliefBreak.jsx";
import Method from "./components/Method.jsx";
import SocialProof from "./components/SocialProof.jsx";
import Authority from "./components/Authority.jsx";
import About from "./components/About.jsx";
import Services from "./components/Services.jsx";
import Objections from "./components/Objections.jsx";
import FinalCTA from "./components/FinalCTA.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <div className="font-body">
      <SEO />
      <Loader />
      <Header />
      <main>
        {/* 1. Hero */}
        <Hero />
        {/* 2. Quebra de crença */}
        <BeliefBreak />
        {/* 3. Método */}
        <Method />
        {/* 4. Prova social */}
        <SocialProof />
        {/* 5. Educação / Autoridade */}
        <Authority />
        {/* 6. Sobre o profissional */}
        <About />
        {/* 7. Serviço */}
        <Services />
        {/* 8. Objeções */}
        <Objections />
        {/* 9. CTA final */}
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
