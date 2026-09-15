"use client";

import { useId, useState, KeyboardEvent } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { FAQ_ITEMS } from "@/lib/faq";
import { SITE } from "@/lib/constants";

export function FaqAccordion() {
  const baseId = useId();
  const [open, setOpen] = useState<number | null>(0);
  const reduce = useReducedMotion();

  const onKeyDown = (e: KeyboardEvent<HTMLButtonElement>, index: number) => {
    const last = FAQ_ITEMS.length - 1;
    let next: number | null = null;
    if (e.key === "ArrowDown") next = index === last ? 0 : index + 1;
    if (e.key === "ArrowUp") next = index === 0 ? last : index - 1;
    if (e.key === "Home") next = 0;
    if (e.key === "End") next = last;
    if (next === null) return;
    e.preventDefault();
    document.getElementById(`${baseId}-btn-${next}`)?.focus();
  };

  return (
    <section id="faq" className="scroll-mt-24 border-t border-black bg-white">
      <div className="border-b border-black px-6 py-12 sm:px-10 md:px-12 md:py-16 lg:px-14">
        <div className="mx-auto max-w-[90rem]">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#003B8E]">
            FAQ
          </p>
          <h2 className="mt-3 max-w-2xl text-3xl font-extrabold tracking-[-0.03em] text-[#1c1c1c] sm:text-4xl lg:text-[2.85rem]">
            Preguntas frecuentes
          </h2>
          <p className="mt-3 max-w-xl text-base text-[#5c5c5c]">
            Respuestas claras sobre financiamientos e hipotecas Laura Elisa. WhatsApp{" "}
            <a href={`tel:+${SITE.whatsappE164}`} className="font-semibold text-[#003B8E] hover:underline">
              {SITE.whatsappDisplay}
            </a>
            {" · "}
            Tel.{" "}
            <a href={`tel:${SITE.phoneTel}`} className="font-semibold text-[#003B8E] hover:underline">
              {SITE.phoneDisplay}
            </a>
            .
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-[90rem]">
        <div className="grid border-black md:grid-cols-2">
          {FAQ_ITEMS.map((item, index) => {
            const expanded = open === index;
            const panelId = `${baseId}-panel-${index}`;
            const btnId = `${baseId}-btn-${index}`;
            const isLeft = index % 2 === 0;
            const isLastRow =
              index >= FAQ_ITEMS.length - (FAQ_ITEMS.length % 2 === 0 ? 2 : 1);

            return (
              <div
                key={item.question}
                className={`border-b border-black bg-white ${
                  isLeft ? "md:border-r md:border-black" : ""
                } ${isLastRow ? "" : ""}`}
              >
                <h3>
                  <button
                    id={btnId}
                    type="button"
                    className="focus-ring flex w-full items-start justify-between gap-4 px-6 py-6 text-left transition hover:bg-[#f0f8ff] sm:px-8 sm:py-7"
                    aria-expanded={expanded}
                    aria-controls={panelId}
                    onClick={() => setOpen(expanded ? null : index)}
                    onKeyDown={(e) => onKeyDown(e, index)}
                  >
                    <span className="text-[1.05rem] font-bold leading-snug text-[#1c1c1c] sm:text-lg">
                      {item.question}
                    </span>
                    <span
                      className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 transition ${
                        expanded
                          ? "rotate-45 border-[#003B8E] bg-[#003B8E] text-white"
                          : "border-[#003B8E] bg-white text-[#003B8E]"
                      }`}
                      aria-hidden
                    >
                      <svg className="h-3.5 w-3.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.4">
                        <path d="M8 3v10M3 8h10" />
                      </svg>
                    </span>
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {expanded && (
                    <motion.div
                      id={panelId}
                      role="region"
                      aria-labelledby={btnId}
                      initial={reduce ? false : { height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={reduce ? undefined : { height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-7 text-sm leading-relaxed text-[#5c5c5c] sm:px-8 sm:text-[0.95rem]">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
