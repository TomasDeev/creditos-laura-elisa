import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { LoopPromoVideo } from "@/components/LoopPromoVideo";
import { PromoBar } from "@/components/PromoBar";
import { Reveal } from "@/components/Reveal";
import { StatusIndicators } from "@/components/StatusIndicators";
import { Sucursal } from "@/components/Sucursal";
import { SITE, WHATSAPP_URL } from "@/lib/constants";
import { NOSOTROS } from "@/lib/nosotros";

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "Créditos Laura Elisa: financiamientos e hipotecas en República Dominicana. Misión, visión, valores y sucursal. Tu sueño, nuestro compromiso.",
  alternates: { canonical: `${SITE.url}/nosotros` },
  openGraph: {
    title: `Nosotros | ${SITE.name}`,
    description:
      "Conoce Créditos Laura Elisa: financiamiento automotriz, hipotecas, préstamos y trato humano en Santo Domingo.",
    url: `${SITE.url}/nosotros`,
  },
};

export default function NosotrosPage() {
  return (
    <>
      <PromoBar />
      <Header />
      <main className="flex-1 overflow-x-hidden">
        <section className="relative overflow-hidden bg-white">
          <div className="absolute inset-0">
            <Image
              src="/sucursal.jpg"
              alt=""
              fill
              priority
              className="object-cover opacity-25"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-magenta-soft/85" />
          </div>
          <div className="pointer-events-none absolute -right-16 top-0 h-64 w-64 rounded-full bg-orange/10 blur-3xl" />
          <div className="container-narrow relative z-10 py-16 md:py-20 lg:py-24">
            <Reveal className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-magenta">
                Nosotros
              </p>
              <h1 className="mt-4 text-4xl font-extrabold tracking-[-0.03em] text-charcoal sm:text-5xl lg:text-[3.25rem]">
                {NOSOTROS.whatIs.title}
              </h1>
              <p className="mt-5 text-base leading-relaxed text-charcoal-muted sm:text-lg">
                {NOSOTROS.whatIs.body}
              </p>
              <p className="mt-3 text-base font-semibold text-orange">
                {SITE.slogan}
              </p>
              <div className="mt-9 flex w-full flex-col gap-3 sm:flex-row">
                <Link
                  href="/#contacto"
                  className="focus-ring inline-flex h-14 w-full items-center justify-center rounded-full bg-orange px-8 text-base font-bold text-white transition hover:bg-orange-dark sm:w-auto"
                >
                  Solicitar ahora
                </Link>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-ring inline-flex h-14 w-full items-center justify-center rounded-full border-2 border-magenta px-8 text-base font-semibold text-magenta transition hover:bg-magenta-soft sm:w-auto"
                >
                  WhatsApp
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        <Sucursal />

        <section className="bg-white py-16 md:py-20">
          <div className="container-narrow grid gap-8 lg:grid-cols-2 lg:gap-12">
            <Reveal>
              <div className="rounded-[2rem] border border-border bg-surface-alt/80 p-7 shadow-sm sm:p-9">
                <h2 className="text-2xl font-extrabold tracking-tight text-charcoal">
                  {NOSOTROS.branch.title}
                </h2>
                <p className="mt-3 text-base text-charcoal-muted">
                  {NOSOTROS.branch.address}
                </p>
                <p className="mt-2 text-sm text-charcoal-muted">
                  {NOSOTROS.branch.note}
                </p>
                <p className="mt-4 text-sm font-semibold text-charcoal">
                  Horario: {SITE.hours}
                </p>
                <StatusIndicators variant="light" className="mt-4" />
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-ring mt-6 inline-flex h-12 w-full items-center justify-center rounded-full bg-orange px-6 text-sm font-bold text-white transition hover:bg-orange-dark sm:w-auto"
                >
                  WhatsApp — {SITE.whatsappDisplay}
                </a>
              </div>
            </Reveal>
            <Reveal delay={0.06}>
              <div className="rounded-[2rem] border border-border bg-white p-7 shadow-sm sm:p-9">
                <h2 className="text-2xl font-extrabold tracking-tight text-charcoal">
                  {NOSOTROS.whatWeDo.title}
                </h2>
                <ul className="mt-5 space-y-3">
                  {NOSOTROS.whatWeDo.items.map((item) => (
                    <li key={item.title} className="rounded-2xl bg-magenta-soft/70 p-4">
                      <h3 className="font-bold text-charcoal">{item.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-charcoal-muted">
                        {item.body}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="bg-magenta-soft/35 py-16 md:py-20">
          <div className="container-narrow grid gap-5 md:grid-cols-3">
            {[NOSOTROS.mission, NOSOTROS.vision, NOSOTROS.values].map(
              (block, i) => (
                <Reveal key={block.title} delay={i * 0.04}>
                  <article className="flex h-full flex-col rounded-3xl border border-border bg-white p-7 shadow-[0_8px_30px_rgba(0,59,142,0.06)]">
                    <p className="text-xs font-bold uppercase tracking-[0.14em] text-magenta">
                      {block.title}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-charcoal-muted sm:text-[0.95rem]">
                      {block.body}
                    </p>
                  </article>
                </Reveal>
              )
            )}
          </div>
        </section>

        <section className="bg-white py-16 md:py-20 lg:py-24">
          <div className="container-narrow">
            <Reveal className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-extrabold tracking-[-0.025em] text-charcoal sm:text-4xl">
                Nuestra marca visual
              </h2>
              <p className="mt-3 text-base text-charcoal-muted">
                Liquidez, confianza y tu sueño en movimiento.
              </p>
            </Reveal>
            <div className="mt-10 grid gap-5 sm:grid-cols-3">
              {NOSOTROS.gallery.map((shot, i) => (
                <Reveal key={shot.src} delay={i * 0.04}>
                  <figure className="overflow-hidden rounded-3xl border border-border bg-white shadow-sm">
                    <div className="relative aspect-[4/3]">
                      <Image
                        src={shot.src}
                        alt={shot.caption}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, 33vw"
                      />
                    </div>
                    <figcaption className="px-4 py-3 text-sm font-semibold text-charcoal">
                      {shot.caption}
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
            <Reveal className="mt-10 flex w-full flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring inline-flex h-14 w-full items-center justify-center rounded-full bg-orange px-8 text-base font-bold text-white transition hover:bg-orange-dark sm:w-auto"
              >
                Escríbenos por WhatsApp
              </a>
              <Link
                href="/productos"
                className="focus-ring inline-flex h-14 w-full items-center justify-center rounded-full border-2 border-magenta px-8 text-base font-semibold text-magenta transition hover:bg-magenta-soft sm:w-auto"
              >
                Ver productos
              </Link>
            </Reveal>
          </div>
        </section>

        <ContactForm />
        <LoopPromoVideo />
      </main>
      <Footer />
    </>
  );
}
