import Image from "next/image";
import { SITE, WHATSAPP_URL } from "@/lib/constants";
import { Reveal } from "./Reveal";

type SucursalProps = {
  className?: string;
};

export function Sucursal({ className = "" }: SucursalProps) {
  return (
    <section
      id="sucursal"
      className={`scroll-mt-24 bg-surface-alt py-16 md:py-20 lg:py-24 ${className}`}
    >
      <div className="container-narrow">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <Reveal>
            <figure className="overflow-hidden rounded-[2rem] border border-border bg-white shadow-[0_16px_50px_rgba(0,59,142,0.12)]">
              <div className="relative aspect-[4/3] w-full sm:aspect-[16/11]">
                <Image
                  src="/sucursal.jpg"
                  alt={`Sucursal ${SITE.name} — Plaza Nica`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority={false}
                />
              </div>
              <figcaption className="border-t border-border bg-white px-5 py-4 sm:px-6">
                <p className="text-sm font-extrabold text-magenta">{SITE.slogan}</p>
                <p className="mt-1 text-sm text-charcoal-muted">
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="font-semibold text-charcoal hover:text-orange">
                    WhatsApp {SITE.whatsappDisplay}
                  </a>
                  {" · "}
                  <a href={`tel:${SITE.phoneTel}`} className="font-semibold text-charcoal hover:text-orange">
                    {SITE.phoneDisplay}
                  </a>
                </p>
              </figcaption>
            </figure>
          </Reveal>

          <Reveal delay={0.06}>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-magenta">
              Sucursal
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.025em] text-charcoal sm:text-4xl">
              Visítanos. Te atendemos de frente.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-charcoal-muted sm:text-lg">
              Estamos en {SITE.address}. Cotizamos financiamiento automotriz,
              hipotecas y préstamos personales de frente.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-charcoal">
              <li className="flex gap-3">
                <span className="mt-0.5 font-bold text-orange">WhatsApp</span>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="font-semibold hover:text-magenta">
                  {SITE.whatsappDisplay}
                </a>
              </li>
              <li className="flex gap-3">
                <span className="mt-0.5 font-bold text-orange">Teléfono</span>
                <a href={`tel:${SITE.phoneTel}`} className="font-semibold hover:text-magenta">
                  {SITE.phoneDisplay}
                </a>
              </li>
              <li className="flex gap-3">
                <span className="mt-0.5 font-bold text-orange">Horario</span>
                <span>{SITE.hours}</span>
              </li>
            </ul>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring mt-8 inline-flex h-12 w-full items-center justify-center rounded-full bg-orange px-7 text-sm font-bold text-white transition hover:bg-orange-dark sm:w-auto"
            >
              WhatsApp — {SITE.whatsappDisplay}
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
