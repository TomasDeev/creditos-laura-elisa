"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Reveal } from "./Reveal";
import { Quote } from "./icons";

const TESTIMONIALS = [
  {
    quote: "Necesitaba capital para mi negocio y no quería dejar el carro. En Laura Elisa me explicaron todo claro y seguí manejando desde el primer día.",
    highlight: "seguí manejando",
    name: "María L.",
    role: "Comerciante · Santo Domingo",
    initial: "M",
  },
  {
    quote: "Financiamos el vehículo familiar con cuotas que sí podíamos pagar. El proceso fue rápido y sin sorpresas.",
    highlight: "sin sorpresas",
    name: "José R.",
    role: "Chofer · Santo Domingo",
    initial: "J",
  },
  {
    quote: "Me gustó que no hay letras chicas. Firmé lo que me explicaron y pude cubrir una emergencia sin vender el vehículo.",
    highlight: "no hay letras chicas",
    name: "Yolanda P.",
    role: "Empleada · Boca Chica",
    initial: "Y",
  },
  {
    quote: "Consulté por una hipoteca y me atendieron como de la casa. Condiciones claras y seguimiento real.",
    highlight: "como de la casa",
    name: "Carlos M.",
    role: "Empresario · La Caleta",
    initial: "C",
  },
];

function highlightQuote(quote: string, highlight: string) {
  const idx = quote.toLowerCase().indexOf(highlight.toLowerCase());
  if (idx < 0) return <>{quote}</>;
  const before = quote.slice(0, idx);
  const mid = quote.slice(idx, idx + highlight.length);
  const after = quote.slice(idx + highlight.length);
  return (
    <>
      {before}
      <span className="text-magenta">{mid}</span>
      {after}
    </>
  );
}

export function Testimonials() {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();
  const t = TESTIMONIALS[active];

  useEffect(() => {
    if (reduce) return;
    const id = window.setInterval(() => {
      setActive((a) => (a + 1) % TESTIMONIALS.length);
    }, 7000);
    return () => window.clearInterval(id);
  }, [reduce, active]);

  const prev = () => setActive((a) => (a === 0 ? TESTIMONIALS.length - 1 : a - 1));
  const next = () => setActive((a) => (a + 1) % TESTIMONIALS.length);

  return (
    <section id="testimonios" className="scroll-mt-24 bg-white py-16 md:py-20 lg:py-24">
      <div className="container-narrow">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-magenta">
            Historias reales
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.03em] text-charcoal sm:text-4xl lg:text-[2.85rem]">
            Clientes Laura Elisa confían en nosotros
          </h2>
          <p className="mt-4 text-base text-charcoal-muted">
            Testimonios representativos. Resultados pueden variar.
          </p>
        </Reveal>

        <Reveal className="mx-auto mt-12 max-w-4xl">
          <div className="overflow-hidden rounded-2xl border border-border bg-softblue/60 shadow-[0_16px_50px_rgba(0,59,142,0.08)]">
            <div className="grid md:grid-cols-[1fr_1.2fr]">
              <div className="relative flex min-h-[14rem] items-center justify-center bg-magenta p-8 md:min-h-[22rem]">
                <div className="text-center text-white">
                  <span className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-white/15 text-4xl font-black backdrop-blur-sm">
                    {t.initial}
                  </span>
                  <p className="mt-5 text-lg font-extrabold">{t.name}</p>
                  <p className="mt-1 text-sm text-white/75">{t.role}</p>
                </div>
              </div>

              <div className="relative flex flex-col justify-center bg-white p-8 sm:p-10 md:p-12">
                <span className="mb-5 inline-flex text-magenta" aria-hidden>
                  <Quote size={28} />
                </span>
                <AnimatePresence mode="wait">
                  <motion.blockquote
                    key={t.name}
                    initial={reduce ? false : { opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={reduce ? undefined : { opacity: 0, y: -8 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="text-lg font-bold leading-relaxed text-charcoal sm:text-xl md:text-[1.35rem]">
                      {highlightQuote(t.quote, t.highlight)}
                    </p>
                    <footer className="mt-8">
                      <p className="text-base font-extrabold text-magenta">{t.name}</p>
                      <p className="text-sm text-charcoal-muted">{t.role}</p>
                    </footer>
                  </motion.blockquote>
                </AnimatePresence>

                <div className="mt-8 flex items-center gap-3">
                  <button
                    type="button"
                    onClick={prev}
                    aria-label="Testimonio anterior"
                    className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-white text-charcoal transition hover:border-magenta hover:text-magenta"
                  >
                    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 4l-6 6 6 6" />
                    </svg>
                  </button>
                  <button
                    type="button"
                    onClick={next}
                    aria-label="Siguiente testimonio"
                    className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-full bg-magenta text-white transition hover:bg-magenta-dark"
                  >
                    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M8 4l6 6-6 6" />
                    </svg>
                  </button>
                  <div className="ml-2 flex gap-1.5">
                    {TESTIMONIALS.map((_, i) => (
                      <button
                        key={i}
                        type="button"
                        aria-label={`Ir al testimonio ${i + 1}`}
                        aria-current={i === active}
                        onClick={() => setActive(i)}
                        className={`h-2 rounded-full transition ${
                          i === active ? "w-7 bg-orange" : "w-2 bg-magenta/25 hover:bg-magenta/40"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {TESTIMONIALS.slice(0, 3).map((item) => (
            <button
              key={item.name}
              type="button"
              onClick={() => setActive(TESTIMONIALS.indexOf(item))}
              className="rounded-xl border border-border bg-white p-5 text-left transition hover:border-magenta/30 hover:shadow-md"
            >
              <span className="mb-3 inline-flex text-magenta" aria-hidden>
                <Quote size={18} />
              </span>
              <p className="text-sm font-bold leading-snug text-charcoal line-clamp-3">
                {highlightQuote(item.quote, item.highlight)}
              </p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
