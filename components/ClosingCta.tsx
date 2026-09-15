"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { SITE, WHATSAPP_URL } from "@/lib/constants";
import { Reveal } from "./Reveal";

type ClosingCtaProps = {
  title?: string;
  subtitle?: string;
  showPhones?: boolean;
};

export function ClosingCta({
  title = "Una mejor forma de financiar tu sueño es posible.",
  subtitle = "Déjanos tu correo o solicita ahora. Un asesor Laura Elisa te guía.",
  showPhones = false,
}: ClosingCtaProps) {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSent(true);
  };

  return (
    <section className="bg-white py-12 md:py-16">
      <div className="container-narrow">
        <Reveal className="overflow-hidden rounded-[2rem] bg-magenta px-6 py-14 text-center text-white shadow-2xl shadow-magenta/30 sm:px-12 md:py-16">
          <h2 className="text-2xl font-extrabold tracking-[-0.03em] sm:text-3xl md:text-4xl lg:text-[2.75rem]">
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-white/90 sm:text-base">
            {subtitle}
          </p>
          {showPhones && (
            <p className="mx-auto mt-5 max-w-lg text-sm font-medium text-white/95 sm:text-base">
              <a href={`tel:+${SITE.whatsappE164}`} className="hover:underline">
                {SITE.whatsappDisplay}
              </a>
              {" · "}
              <a href={`tel:${SITE.phoneTel}`} className="hover:underline">
                {SITE.phoneDisplay}
              </a>
              {" · "}
              <a href={`mailto:${SITE.email}`} className="hover:underline">
                {SITE.email}
              </a>
            </p>
          )}

          <form
            onSubmit={onSubmit}
            className="mx-auto mt-8 flex w-full max-w-lg flex-col gap-3 sm:flex-row"
          >
            <label className="sr-only" htmlFor="closing-email">
              Correo electrónico
            </label>
            <input
              id="closing-email"
              type="email"
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setSent(false);
              }}
              placeholder="Tu correo"
              className="focus-ring h-14 flex-1 rounded-full border-0 bg-white px-6 text-base text-charcoal placeholder:text-charcoal-muted"
            />
            <button
              type="submit"
              className="focus-ring inline-flex h-14 items-center justify-center rounded-full bg-orange px-8 text-base font-bold text-white transition hover:bg-orange-dark"
            >
              {sent ? "¡Listo!" : "Enviar"}
            </button>
          </form>
          {sent && (
            <p className="mt-3 text-sm text-white/85">
              Gracias. También puedes{" "}
              <Link href="/#contacto" className="font-bold underline">
                completar el formulario
              </Link>{" "}
              o escribirnos por WhatsApp.
            </p>
          )}

          <div className="mt-8 flex w-full flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <Link
              href="/#contacto"
              className="focus-ring inline-flex h-14 w-full items-center justify-center gap-2 rounded-full bg-white px-8 text-base font-bold text-magenta transition hover:bg-softblue sm:w-auto sm:min-w-[13rem]"
            >
              Solicitar ahora <span aria-hidden>↗</span>
            </Link>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring inline-flex h-14 w-full items-center justify-center rounded-full border-2 border-white/60 px-8 text-base font-semibold text-white transition hover:bg-white/10 sm:w-auto sm:min-w-[13rem]"
            >
              WhatsApp
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
