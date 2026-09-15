"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { SITE } from "@/lib/constants";
import { ArrowUpRight } from "./icons";

const SLIDES = [
  {
    src: "/sucursal.jpg",
    name: "Sucursal Santo Domingo",
    caption: `${SITE.slogan} · ${SITE.phoneDisplay}`,
  },
  {
    src: "/le-hero-v2.png",
    name: "Financiamientos Laura Elisa",
    caption: "Vehículos · Hipotecas · Liquidez",
  },
  {
    src: "/le-keys.png",
    name: "Conservas las llaves",
    caption: "Garantía vehicular sin entregar el carro",
  },
  {
    src: "/le-product.png",
    name: "Tu sueño, nuestro compromiso",
    caption: "Automotriz e hipotecas en República Dominicana",
  },
];

export function Hero() {
  const reduce = useReducedMotion();
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const t = window.setInterval(() => {
      setSlide((s) => (s + 1) % SLIDES.length);
    }, 4800);
    return () => window.clearInterval(t);
  }, [reduce]);

  const current = SLIDES[slide];

  return (
    <section className="border-b border-black bg-[#003B8E]">
      <div className="grid lg:grid-cols-2">
        <div className="relative flex flex-col justify-center border-b border-black px-6 py-14 sm:px-10 md:px-12 md:py-16 lg:border-b-0 lg:border-r lg:border-black lg:px-14 lg:py-20 xl:px-16">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-white/75">
            {SITE.tagline}
          </p>

          <h1 className="max-w-[18ch] text-[2.5rem] font-extrabold leading-[1.05] tracking-[-0.035em] text-white sm:text-5xl md:text-[3.35rem] lg:text-[3.6rem] xl:text-[3.9rem]">
            Financiamiento claro.
            <span className="mt-1 block text-white/95">Decisiones ágiles.</span>
            <span className="mt-2 block text-[#F58220]">Laura Elisa.</span>
          </h1>

          <p className="mt-6 max-w-md text-base leading-relaxed text-white/80 sm:text-lg">
            Automotriz, hipotecas y préstamos con condiciones transparentes en
            República Dominicana.
          </p>

          <div className="mt-9 flex flex-col gap-5 sm:flex-row sm:flex-wrap sm:items-center sm:gap-8">
            <Link
              href="/#contacto"
              className="focus-ring inline-flex h-12 items-center justify-center gap-1.5 rounded-full bg-[#F58220] px-8 text-base font-bold text-[#1c1c1c] transition hover:brightness-95 sm:h-[3.25rem]"
            >
              Empezar <ArrowUpRight size={16} />
            </Link>

            <p className="text-sm font-semibold leading-snug text-white sm:text-[0.95rem]">
              Familias en República Dominicana confían
              <span className="mx-1.5 text-white/50" aria-hidden>
                ·
              </span>
              <span
                className="whitespace-nowrap tracking-wide text-[#F58220]"
                aria-label="5 estrellas"
              >
                ★★★★★
              </span>
            </p>
          </div>
        </div>

        <div className="relative min-h-[22rem] overflow-hidden sm:min-h-[28rem] lg:min-h-[36rem] xl:min-h-[40rem]">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.src}
              className="absolute inset-0"
              initial={reduce ? false : { opacity: 0.35 }}
              animate={{ opacity: 1 }}
              exit={reduce ? undefined : { opacity: 0 }}
              transition={{ duration: 0.45 }}
            >
              <Image
                src={current.src}
                alt={current.name}
                fill
                priority={slide === 0}
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
            </motion.div>
          </AnimatePresence>

          <div className="absolute inset-x-0 bottom-0 z-10 flex items-end justify-between gap-4 p-5 sm:p-7">
            <div className="min-w-0 text-white">
              <p className="text-base font-extrabold sm:text-lg">{current.name}</p>
              <p className="mt-0.5 text-sm text-white/85">{current.caption}</p>
            </div>

            <div
              className="flex shrink-0 items-center gap-1.5 rounded-full bg-black/45 px-3 py-2 backdrop-blur-sm"
              role="tablist"
              aria-label="Carrusel"
            >
              {SLIDES.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  role="tab"
                  aria-selected={i === slide}
                  aria-label={`Imagen ${i + 1}`}
                  onClick={() => setSlide(i)}
                  className={`h-1.5 rounded-full transition-all ${
                    i === slide ? "w-5 bg-white" : "w-1.5 bg-white/45 hover:bg-white/80"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
