import React, { useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { MoveHorizontal } from "lucide-react";
import Photo from "./Photo.jsx";

/**
 * Comparativo visual "Antes / Depois" com divisor arrastável.
 * As fotos vêm de `public/photos/before.jpg` e `public/photos/after.jpg` —
 * troque esses dois arquivos pelas fotos reais do paciente (mesmo nome).
 */
export default function BeforeAfterSlider() {
  const [pos, setPos] = useState(50);
  const containerRef = useRef(null);
  const dragging = useRef(false);

  const updateFromClientX = useCallback((clientX) => {
    const rect = containerRef.current.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(96, Math.max(4, pct)));
  }, []);

  const onPointerDown = (e) => {
    dragging.current = true;
    updateFromClientX(e.clientX ?? e.touches?.[0]?.clientX);
  };
  const onPointerMove = (e) => {
    if (!dragging.current) return;
    updateFromClientX(e.clientX ?? e.touches?.[0]?.clientX);
  };
  const stopDrag = () => {
    dragging.current = false;
  };

  return (
    <div className="flex flex-col gap-3">
      <div
        ref={containerRef}
        onMouseDown={onPointerDown}
        onMouseMove={onPointerMove}
        onMouseUp={stopDrag}
        onMouseLeave={stopDrag}
        onTouchStart={onPointerDown}
        onTouchMove={onPointerMove}
        onTouchEnd={stopDrag}
        className="relative aspect-[3/4] w-full cursor-ew-resize select-none overflow-hidden rounded-3xl shadow-soft sm:aspect-[4/5]"
      >
        <Photo slot="after" className="absolute inset-0 h-full w-full object-cover object-top" alt="Depois" tag={false} />
        <div className="absolute inset-0 overflow-hidden" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
          <Photo slot="before" className="absolute inset-0 h-full w-full object-cover object-top" alt="Antes" tag={false} />
        </div>

        <span className="absolute bottom-4 left-4 z-10 rounded-md bg-navy-deep/70 px-2.5 py-1 text-xs font-semibold tracking-wide text-white">
          ANTES
        </span>
        <span className="absolute bottom-4 right-4 z-10 rounded-md bg-gold/90 px-2.5 py-1 text-xs font-semibold tracking-wide text-navy-deep">
          DEPOIS
        </span>

        {/* linha divisória + alça */}
        <div className="absolute inset-y-0 z-10" style={{ left: `${pos}%` }}>
          <div className="h-full w-0.5 -translate-x-1/2 bg-white/80" />
          <motion.div
            whileHover={{ scale: 1.08 }}
            className="absolute top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-navy-deep shadow-soft"
          >
            <MoveHorizontal size={18} aria-hidden="true" />
          </motion.div>
        </div>
      </div>
      <span className="text-center text-xs text-navy-deep/40 md:text-left">
        Arraste para comparar — layout pronto para receber fotos reais de antes e depois.
      </span>
    </div>
  );
}