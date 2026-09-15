import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ClosingCta } from "@/components/ClosingCta";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { LoopPromoVideo } from "@/components/LoopPromoVideo";
import { PromoBar } from "@/components/PromoBar";
import { Reveal } from "@/components/Reveal";
import { SITE } from "@/lib/constants";
import { PRODUCT_STEPS, PRODUCTS, REQUIREMENTS } from "@/lib/products";

export const metadata: Metadata = {
  title: "Productos",
  description:
    "Financiamiento automotriz, préstamo con garantía vehicular e hipotecas. Claridad, cercanía y desembolso ágil.",
  alternates: { canonical: `${SITE.url}/productos` },
  openGraph: {
    title: `Productos | ${SITE.name}`,
    description:
      "Automotriz, garantía vehicular e hipotecas con Créditos Laura Elisa.",
    url: `${SITE.url}/productos`,
  },
};

export default function ProductosPage() {
  return (
    <>
      <PromoBar />
      <Header />
      <main className="flex-1 overflow-x-hidden">
        <section className="relative overflow-hidden bg-magenta-soft/60">
          <div className="pointer-events-none absolute -right-16 top-0 h-64 w-64 rounded-full bg-orange/10 blur-3xl" />
          <div className="container-narrow py-16 md:py-20 lg:py-24">
            <Reveal className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-magenta">
                Productos
              </p>
              <h1 className="mt-4 text-4xl font-extrabold tracking-[-0.03em] text-charcoal sm:text-5xl lg:text-[3.1rem]">
                Financiamientos e hipotecas a tu medida
              </h1>
              <p className="mt-5 text-base text-charcoal-muted sm:text-lg">
                Automotriz · Garantía vehicular · Hipotecas.
                Sin letras chicas. {SITE.slogan}.
              </p>
              <div className="mt-9 flex w-full flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
                <Link
                  href="/#contacto"
                  className="focus-ring inline-flex h-14 w-full items-center justify-center rounded-full bg-orange px-8 text-base font-bold text-white transition hover:bg-orange-dark sm:w-auto"
                >
                  Solicitar ahora
                </Link>
                <Link
                  href="/#faq"
                  className="focus-ring inline-flex h-14 w-full items-center justify-center rounded-full border-2 border-magenta px-8 text-base font-semibold text-magenta transition hover:bg-white sm:w-auto"
                >
                  Ver FAQ
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="bg-white py-16 md:py-20 lg:py-24">
          <div className="container-narrow grid gap-6 lg:grid-cols-2">
            {PRODUCTS.map((p, i) => (
              <Reveal key={p.id} delay={i * 0.04}>
                <article id={p.id} className="scroll-mt-28 flex h-full flex-col overflow-hidden rounded-[2rem] border border-border bg-surface-alt/40 shadow-[0_12px_40px_rgba(0,59,142,0.08)] transition hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,59,142,0.12)]">
                  <div className="relative h-36 w-full bg-magenta-soft sm:h-40">
                    <Image
                      src={p.icon}
                      alt=""
                      fill
                      className="object-cover p-5"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-7 sm:p-9">
                    <div className="flex items-start justify-between gap-3">
                      <h2 className="text-xl font-extrabold tracking-tight text-charcoal sm:text-2xl">
                        {p.title}
                      </h2>
                      {p.badge && (
                        <span className="shrink-0 rounded-full bg-orange px-3 py-1 text-[0.7rem] font-bold uppercase tracking-wide text-white">
                          {p.badge}
                        </span>
                      )}
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-charcoal-muted sm:text-base">
                      {p.description}
                    </p>
                    <ul className="mt-5 space-y-2.5">
                      {p.highlights.map((h) => (
                        <li
                          key={h}
                          className="flex items-start gap-2.5 text-sm font-medium text-charcoal"
                        >
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
                    <Link
                      href={p.href}
                      className="focus-ring mt-7 inline-flex h-12 w-full items-center justify-center rounded-full bg-orange px-6 text-sm font-bold text-white transition hover:bg-orange-dark sm:w-fit"
                    >
                      {p.cta}
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="bg-magenta-soft/40 py-16 md:py-20">
          <div className="container-narrow">
            <Reveal className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-extrabold tracking-[-0.025em] text-charcoal sm:text-4xl">
                Requisitos
              </h2>
              <p className="mt-3 text-base text-charcoal-muted">
                Cuatro puntos claros para cotizar tu financiamiento Laura Elisa.
              </p>
            </Reveal>
            <div className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {REQUIREMENTS.map((r, i) => (
                <Reveal key={r.title} delay={i * 0.03}>
                  <article className="flex h-full flex-col rounded-3xl border border-border bg-white p-5 text-center shadow-sm">
                    <span className="mx-auto flex h-10 w-10 items-center justify-center rounded-2xl bg-magenta text-sm font-bold text-white">
                      {i + 1}
                    </span>
                    <h3 className="mt-3 text-sm font-bold text-charcoal">
                      {r.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-charcoal-muted">
                      {r.body}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-16 md:py-20">
          <div className="container-narrow">
            <Reveal className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-extrabold tracking-[-0.025em] text-charcoal sm:text-4xl">
                Tres pasos
              </h2>
              <p className="mt-3 text-base text-charcoal-muted">
                Cotiza → Aprobación rápida → Recibe y avanza.
              </p>
            </Reveal>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {PRODUCT_STEPS.map((step, i) => (
                <Reveal key={step.n} delay={i * 0.04}>
                  <article className="flex h-full flex-col rounded-3xl border border-border bg-surface-alt/70 p-7">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-magenta text-sm font-bold text-white">
                      {step.n}
                    </span>
                    <h3 className="mt-5 text-lg font-bold text-charcoal">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-charcoal-muted">
                      {step.body}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <ClosingCta
          title="¿Listo para tu financiamiento Laura Elisa?"
          subtitle="Cotiza automotriz, hipoteca o préstamo. Un asesor te guía hasta el desembolso."
          showPhones
        />
      </main>
      <ContactForm />
      <LoopPromoVideo />
      <Footer />
    </>
  );
}
