"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const STORAGE_KEY = "le-promo-dismissed";

export function PromoBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (sessionStorage.getItem(STORAGE_KEY) !== "1") setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  if (!visible) return null;

  return (
    <div className="relative z-50 bg-[#1c1c1c] text-white">
      <div className="container-narrow flex items-center gap-3 py-2.5 text-sm">
        <span className="hidden shrink-0 rounded-full bg-[#F5D000] px-3 py-0.5 text-[0.7rem] font-extrabold uppercase tracking-wide text-[#1c1c1c] sm:inline-block">
          Nuevo
        </span>
        <p className="min-w-0 flex-1 text-center text-[0.8125rem] font-medium leading-snug sm:text-left sm:text-sm">
          Financiamiento automotriz, hipotecas y liquidez — cotiza hoy.{" "}
          <Link
            href="/#contacto"
            className="font-bold text-orange underline-offset-2 hover:underline"
          >
            Solicitar ahora →
          </Link>
        </p>
        <button
          type="button"
          aria-label="Cerrar aviso"
          className="focus-ring ml-auto shrink-0 rounded-md p-1.5 text-white/70 transition hover:bg-white/10 hover:text-white"
          onClick={() => {
            setVisible(false);
            try {
              sessionStorage.setItem(STORAGE_KEY, "1");
            } catch {
              /* ignore */
            }
          }}
        >
          <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 4l8 8M12 4l-8 8" />
          </svg>
        </button>
      </div>
    </div>
  );
}
