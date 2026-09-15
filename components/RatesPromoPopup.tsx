"use client";

import Image from "next/image";
import { useEffect, useId, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { SITE, WHATSAPP_URL } from "@/lib/constants";

const STORAGE_KEY = "laura-elisa-rates-v2";

export function RatesPromoPopup() {
  const titleId = useId();
  const reduce = useReducedMotion();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    try {
      if (sessionStorage.getItem(STORAGE_KEY) === "1") return;
    } catch {
      /* ignore */
    }
    const t = window.setTimeout(() => setOpen(true), 1800);
    return () => window.clearTimeout(t);
  }, []);

  const close = () => {
    setOpen(false);
    try {
      sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {
      /* ignore */
    }
  };

  const whatsappHref = `${WHATSAPP_URL.split("?")[0]}?text=${encodeURIComponent(
    "Hola, vi la oferta de Créditos Laura Elisa y quiero solicitar un financiamiento"
  )}`;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[80] flex items-end justify-center p-3 sm:items-center sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button
            type="button"
            className="absolute inset-0 bg-charcoal/40 backdrop-blur-[1px]"
            aria-label="Cerrar aviso"
            onClick={close}
          />

          <motion.div
            className="relative z-10 w-full max-w-[24.5rem] overflow-hidden rounded-[1.5rem] border border-border bg-white text-charcoal shadow-2xl shadow-charcoal/15"
            initial={reduce ? false : { opacity: 0, y: 22, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduce ? undefined : { opacity: 0, y: 12, scale: 0.99 }}
            transition={{ type: "spring", stiffness: 340, damping: 30 }}
          >
            <div className="h-1.5 w-full bg-gradient-to-r from-magenta to-orange" />

            <button
              type="button"
              onClick={close}
              className="focus-ring absolute right-3 top-4 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-surface-alt text-charcoal/70 transition hover:bg-magenta-soft hover:text-magenta"
              aria-label="Cerrar"
            >
              <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4l8 8M12 4l-8 8" />
              </svg>
            </button>

            <div className="bg-gradient-to-b from-magenta-soft to-white px-4 pb-1 pt-8 sm:px-5">
              <div className="relative mx-auto h-40 w-full max-w-[13rem] overflow-hidden rounded-2xl sm:h-44">
                <Image
                  src="/le-product.png"
                  alt={SITE.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 480px) 90vw, 352px"
                  priority
                />
              </div>
            </div>

            <div className="px-5 pb-5 pt-3 sm:px-6 sm:pb-6">
              <p className="text-center text-[11px] font-bold uppercase tracking-[0.16em] text-orange">
                Especial para ti
              </p>

              <h2
                id={titleId}
                className="mt-2 text-center text-[1.35rem] font-extrabold leading-snug tracking-tight text-charcoal sm:text-2xl"
              >
                Tasas competitivas pensadas para tu préstamo
              </h2>
              <p className="mt-2.5 text-center text-sm leading-relaxed text-charcoal-muted">
                En <strong className="font-semibold text-charcoal">{SITE.name}</strong>{" "}
                te ofrecemos condiciones claras para automotriz, hipotecas y préstamos.
                Cotiza hoy y un asesor te guía.
              </p>

              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={close}
                className="focus-ring mt-5 flex h-12 w-full items-center justify-center gap-2 rounded-full bg-orange text-base font-bold text-white transition hover:bg-orange-dark"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M20.52 3.48A11.86 11.86 0 0 0 12.04 0C5.5 0 .16 5.34.16 11.9c0 2.1.55 4.15 1.6 5.96L0 24l6.3-1.65a11.86 11.86 0 0 0 5.74 1.46h.01c6.54 0 11.88-5.34 11.88-11.9 0-3.18-1.24-6.17-3.41-8.43ZM12.05 21.15h-.01a9.27 9.27 0 0 1-4.72-1.3l-.34-.2-3.74.98 1-3.64-.22-.37a9.28 9.28 0 0 1-1.42-4.92c0-5.13 4.18-9.3 9.32-9.3a9.25 9.25 0 0 1 6.58 2.73 9.25 9.25 0 0 1 2.72 6.58c0 5.13-4.18 9.3-9.31 9.3Zm5.1-6.96c-.28-.14-1.65-.81-1.9-.9-.26-.1-.44-.14-.63.14-.18.27-.72.9-.88 1.08-.16.18-.33.2-.6.07-.28-.14-1.17-.43-2.23-1.37-.82-.73-1.38-1.64-1.54-1.91-.16-.27-.02-.42.12-.55.13-.13.28-.33.42-.5.14-.16.18-.28.28-.46.09-.19.05-.35-.02-.49-.07-.14-.63-1.52-.86-2.08-.23-.55-.46-.47-.63-.48h-.54c-.18 0-.48.07-.73.35-.25.27-.96.94-.96 2.3 0 1.35.98 2.66 1.12 2.84.14.19 1.93 2.95 4.68 4.14.65.28 1.16.45 1.56.57.65.2 1.25.18 1.72.11.52-.08 1.65-.67 1.88-1.32.23-.65.23-1.2.16-1.32-.07-.11-.25-.18-.53-.32Z" />
                </svg>
                Solicitar por WhatsApp
              </a>

              <button
                type="button"
                onClick={close}
                className="mt-3 w-full text-center text-xs font-medium text-charcoal-muted transition hover:text-charcoal"
              >
                Ahora no
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
