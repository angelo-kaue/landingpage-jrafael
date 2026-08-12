import React, { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Photo from "./Photo.jsx";
import { fadeUp, stagger, viewportOnce } from "../lib/motion.js";

/**
 * Galeria em carrossel horizontal (scroll-snap + setas). Cada item aponta
 * para um arquivo em `public/photos/` — troque o arquivo pela foto real
 * (mesmo nome) para atualizar.
 */
export default function Gallery({ items }) {
  const trackRef = useRef(null);

  function scrollByCard(dir) {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector("[data-card]");
    const width = card ? card.offsetWidth + 20 : 300;
    track.scrollBy({ left: dir * width, behavior: "smooth" });
  }

  return (
    <div className="relative">
      <motion.div
        ref={trackRef}
        variants={stagger(0.08)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {items.map((item) => (
          <motion.div
            key={item.label}
            data-card
            variants={fadeUp}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.25 }}
            className="relative w-[78%] shrink-0 snap-start overflow-hidden rounded-3xl shadow-soft sm:w-[46%] lg:w-[31%]"
          >
            <div className="relative aspect-[4/3] w-full">
              <Photo slot={item.slot} className="h-full w-full object-cover" alt={item.label} />
            </div>
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-deep/80 to-transparent p-4">
              <span className="text-sm font-medium text-white">{item.label}</span>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <div className="mt-5 flex justify-end gap-2">
        <button
          onClick={() => scrollByCard(-1)}
          aria-label="Anterior"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-navy-deep/10 text-navy-deep/60 transition-colors hover:border-navy-deep/30 hover:text-navy-deep"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          onClick={() => scrollByCard(1)}
          aria-label="Próximo"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-navy-deep/10 text-navy-deep/60 transition-colors hover:border-navy-deep/30 hover:text-navy-deep"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}
