import Link from "next/link";
import { Reveal, RevealStagger } from "./Reveal";
import {
  ArrowUpRight,
  Bolt,
  Car,
  Chart,
  Check,
  Home,
  Key,
} from "./icons";

const CHIPS = [
  { label: "Financiar tu auto", Icon: Car },
  { label: "Hacer realidad tu casa", Icon: Home },
  { label: "Cubrir una emergencia", Icon: Bolt },
  { label: "Invertir en tu negocio", Icon: Chart },
  { label: "Conservar tus llaves", Icon: Key },
  { label: "Pagar sin letras chicas", Icon: Check },
];

export function LiquidityBanner() {
  return (
    <section className="border-b border-border bg-softblue/40 py-16 md:py-20 lg:py-24">
      <div className="container-narrow">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-magenta/15 bg-white px-4 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-magenta">
            Clientes en toda República Dominicana
          </span>
          <h2 className="mt-7 text-[1.75rem] font-extrabold leading-[1.18] tracking-[-0.03em] text-charcoal sm:text-4xl md:text-[2.55rem]">
            Consigue liquidez en minutos para{" "}
            <span className="text-magenta">financiar tu auto</span>,{" "}
            <span className="text-magenta">hacer realidad tu casa</span> o{" "}
            <span className="text-magenta">impulsar tu negocio</span>.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-charcoal-muted sm:text-lg">
            Automotriz · Garantía vehicular · Hipotecas.
            Claridad, cercanía y desembolso ágil en República Dominicana.
          </p>
        </Reveal>

        <RevealStagger
          className="mx-auto mt-10 flex max-w-4xl flex-wrap items-center justify-center gap-2.5 sm:gap-3"
          stagger={0.05}
          delay={0.08}
        >
          {CHIPS.map((chip) => (
            <span
              key={chip.label}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-3.5 py-2 text-xs font-medium text-charcoal shadow-[0_1px_2px_rgba(0,59,142,0.04)] sm:text-sm"
            >
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-magenta-soft text-magenta">
                <chip.Icon size={15} />
              </span>
              {chip.label}
            </span>
          ))}
        </RevealStagger>

        <Reveal delay={0.12} className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
          <Link
            href="/#contacto"
            className="focus-ring inline-flex h-12 items-center justify-center gap-2 rounded-full bg-orange px-8 text-sm font-bold text-white shadow-md shadow-orange/20 transition hover:bg-orange-dark"
          >
            Solicitar ahora
            <ArrowUpRight size={16} />
          </Link>
          <Link
            href="/productos"
            className="focus-ring inline-flex h-12 items-center justify-center rounded-full border border-magenta/30 bg-white px-7 text-sm font-semibold text-magenta transition hover:border-magenta hover:bg-magenta-soft"
          >
            Ver productos
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
