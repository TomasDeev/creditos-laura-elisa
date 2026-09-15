import Image from "next/image";
import Link from "next/link";
import { PRODUCTS } from "@/lib/products";
import { Reveal } from "./Reveal";

export function ProductTeaser() {
  return (
    <section
      id="productos-teaser"
      className="scroll-mt-24 bg-magenta-soft/50 py-16 md:py-20 lg:py-24"
    >
      <div className="container-narrow">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-magenta">
            Productos
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.025em] text-charcoal sm:text-4xl lg:text-[2.75rem]">
            El financiamiento que se ajusta a ti
          </h2>
          <p className="mt-4 text-base text-charcoal-muted sm:text-lg">
            Automotriz, garantía vehicular, hipotecas y préstamos personales — con claridad y cercanía.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:gap-7">
          {PRODUCTS.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.05}>
              <article className="flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-border bg-white shadow-[0_12px_40px_rgba(0,59,142,0.08)] transition hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,59,142,0.12)]">
                <div className="relative h-36 w-full bg-magenta-soft sm:h-40">
                  <Image
                    src={p.icon}
                    alt=""
                    fill
                    className="object-cover p-4"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                </div>
                <div className="flex flex-1 flex-col p-7 sm:p-8">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-xl font-extrabold tracking-tight text-charcoal sm:text-2xl">
                      {p.title}
                    </h3>
                    {p.badge && (
                      <span className="shrink-0 rounded-full bg-orange px-3 py-1 text-[0.65rem] font-bold uppercase tracking-wide text-white">
                        {p.badge}
                      </span>
                    )}
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-charcoal-muted sm:text-[0.95rem]">
                    {p.description}
                  </p>
                  <ul className="mt-5 space-y-2.5">
                    {p.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2.5 text-sm font-medium text-charcoal">
                        <span
                          className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-magenta-soft text-magenta"
                          aria-hidden
                        >
                          <svg className="h-3 w-3" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2.2">
                            <path d="M2 6l3 3 5-5" />
                          </svg>
                        </span>
                        {h}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-7 flex flex-col gap-2.5 sm:flex-row sm:items-center">
                    <Link
                      href={p.href}
                      className="focus-ring inline-flex h-12 w-full items-center justify-center rounded-full bg-orange px-6 text-sm font-bold text-white transition hover:bg-orange-dark sm:w-auto"
                    >
                      {p.cta}
                    </Link>
                    <Link
                      href="/productos"
                      className="focus-ring inline-flex h-12 w-full items-center justify-center rounded-full border-2 border-magenta px-6 text-sm font-semibold text-magenta transition hover:bg-magenta-soft sm:w-auto"
                    >
                      Ver detalle
                    </Link>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
