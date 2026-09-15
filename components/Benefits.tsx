import Image from "next/image";
import Link from "next/link";
import { Reveal } from "./Reveal";

const BENEFITS = [
  {
    title: "Dinero rápido",
    body: "Cotiza hoy y, con documentación en orden, recibe liquidez en un plazo ágil.",
    cta: "Solicitar ahora",
    href: "/#contacto",
    icon: "/icons/benefit-fast.svg",
  },
  {
    title: "Pagos flexibles",
    body: "Cuotas a tu medida según tu flujo. Planes pensados para familias y negocios.",
    cta: "Ver cómo funciona",
    href: "/#como-funciona",
    icon: "/icons/benefit-flexible.svg",
  },
  {
    title: "Sin letras chicas",
    body: "Montos, plazos y requisitos explicados con claridad. Lo que firmamos es lo que pagas.",
    cta: "Leer FAQ",
    href: "/#faq",
    icon: "/icons/benefit-clear.svg",
  },
  {
    title: "Conserva las llaves",
    body: "En préstamos con garantía vehicular no entregas el carro — sigues manejando.",
    cta: "Conocer productos",
    href: "/productos",
    icon: "/icons/benefit-keys.svg",
  },
];

export function Benefits() {
  return (
    <section id="beneficios" className="scroll-mt-24 bg-white py-16 md:py-20 lg:py-24">
      <div className="container-narrow">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-magenta">
            Por qué Laura Elisa
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.025em] text-charcoal sm:text-4xl lg:text-[2.75rem]">
            Diseñado para cuando la vida no espera.
          </h2>
          <p className="mt-4 text-base text-charcoal-muted sm:text-lg">
            Dinero rápido, pagos flexibles, sin letras chicas y — cuando aplica — conservas tus llaves.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {BENEFITS.map((b, i) => (
            <Reveal key={b.title} delay={i * 0.04}>
              <article className="flex h-full flex-col rounded-3xl border border-border bg-surface-alt/90 px-6 py-8 shadow-[0_8px_30px_rgba(0,59,142,0.06)] transition hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,59,142,0.1)]">
                <div className="mb-5 relative h-14 w-14 overflow-hidden rounded-2xl">
                  <Image src={b.icon} alt="" fill className="object-cover" sizes="56px" />
                </div>
                <h3 className="text-xl font-extrabold tracking-tight text-charcoal">{b.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-charcoal-muted">
                  {b.body}
                </p>
                <Link
                  href={b.href}
                  className="focus-ring mt-6 inline-flex text-sm font-bold text-orange underline-offset-2 hover:underline"
                >
                  {b.cta} →
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
