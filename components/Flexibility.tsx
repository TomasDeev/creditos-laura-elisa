import Link from "next/link";
import { Reveal, RevealStagger } from "./Reveal";
import { ArrowUpRight, Calendar, Quote } from "./icons";

const CARDS = [
  {
    quote: "Necesitaba más tiempo y me dieron opciones reales.",
    name: "Ana V.",
    role: "Emprendedora · Santo Domingo Este",
  },
  {
    quote: "Tener un poco de flexibilidad marca la diferencia cuando la vida aprieta.",
    name: "Luis G.",
    role: "Transportista · La Caleta",
  },
];

export function Flexibility() {
  return (
    <section
      id="flexibilidad"
      className="scroll-mt-24 bg-[#0E1520] py-16 text-white md:py-20 lg:py-24"
    >
      <div className="container-narrow">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
          <Reveal>
            <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-3.5 py-2">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-magenta text-white">
                <Calendar size={16} />
              </span>
              <span className="text-xs font-semibold uppercase tracking-[0.12em] text-white/85">
                Plan flexible
              </span>
            </div>
            <h2 className="max-w-xl text-[1.75rem] font-extrabold leading-[1.12] tracking-[-0.03em] sm:text-4xl md:text-[2.55rem]">
              Construimos “la vida pasa” dentro del financiamiento.
            </h2>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-white/65 sm:text-lg">
              ¿No puedes pagar exactamente en la fecha? Habla con tu asesor. Evaluamos
              opciones de reestructuración o reprogramación según tu caso — sin
              sorpresas ni letras chicas.
            </p>
            <div className="mt-8 flex flex-col gap-2.5 sm:flex-row">
              <Link
                href="/#contacto"
                className="focus-ring inline-flex h-11 items-center justify-center gap-2 rounded-full bg-orange px-7 text-sm font-bold text-white transition hover:bg-orange-dark"
              >
                Hablar con un asesor
                <ArrowUpRight size={15} />
              </Link>
              <Link
                href="/#faq"
                className="focus-ring inline-flex h-11 items-center justify-center rounded-full border border-white/20 px-6 text-sm font-semibold text-white/90 transition hover:border-white/40 hover:bg-white/5"
              >
                Ver FAQ
              </Link>
            </div>
          </Reveal>

          <RevealStagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2" stagger={0.1}>
            {CARDS.map((c) => (
              <article
                key={c.name}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-6"
              >
                <span className="mb-4 inline-flex text-orange">
                  <Quote size={22} />
                </span>
                <p className="text-base font-semibold leading-snug text-white sm:text-lg">
                  {c.quote}
                </p>
                <footer className="mt-5 border-t border-white/10 pt-4">
                  <p className="text-sm font-bold text-white">{c.name}</p>
                  <p className="mt-0.5 text-xs text-white/55">{c.role}</p>
                </footer>
              </article>
            ))}
          </RevealStagger>
        </div>
      </div>
    </section>
  );
}
