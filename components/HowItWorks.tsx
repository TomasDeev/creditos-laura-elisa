import Image from "next/image";
import Link from "next/link";
import { Reveal } from "./Reveal";

const STEPS = [
  {
    n: "01",
    title: "Solicita / Cotiza",
    body: "Completa el formulario o escríbenos por WhatsApp. Un asesor te contacta rápido.",
  },
  {
    n: "02",
    title: "Evaluamos",
    body: "Revisamos tu vehículo y documentación. Te explicamos monto y condiciones sin letras pequeñas.",
  },
  {
    n: "03",
    title: "Recibe y sigue manejando",
    body: "Con todo en orden, desembolsamos. Tú te quedas con las llaves y tu rutina.",
  },
];

export function HowItWorks() {
  return (
    <section
      id="como-funciona"
      className="scroll-mt-24 bg-white py-14 md:py-16 lg:py-20"
    >
      <div className="container-narrow">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-magenta">
              Cómo funciona
            </p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-charcoal sm:text-4xl">
              Tres pasos. Sin vueltas.
            </h2>
            <p className="mt-3 max-w-md text-base text-charcoal-muted">
              Cotiza → Aprobación rápida → Recibe y sigue manejando. Claridad
              con el respaldo de tu vehículo.
            </p>

            <ol className="mt-8 space-y-4">
              {STEPS.map((step) => (
                <li
                  key={step.n}
                  className="flex gap-4 rounded-3xl border border-border bg-surface-alt/70 p-4"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-magenta text-sm font-bold text-white">
                    {step.n}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-charcoal">
                      {step.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-charcoal-muted">
                      {step.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>

            <Link
              href="/#contacto"
              className="focus-ring mt-8 inline-flex h-12 w-full items-center justify-center rounded-full bg-orange px-7 text-base font-bold text-white transition hover:bg-orange-dark sm:w-auto"
            >
              Solicitar ahora
            </Link>
          </Reveal>

          <Reveal delay={0.08} className="relative">
            <div className="relative mx-auto aspect-[5/4] max-w-md overflow-hidden rounded-[1.75rem] border border-border bg-magenta-soft lg:max-w-none">
              <Image
                src="/le-keys.png"
                alt="Conservas las llaves — Laura Elisa"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-3 right-2 w-40 overflow-hidden rounded-2xl border-4 border-white bg-white shadow-xl sm:-bottom-4 sm:right-6 sm:w-48">
              <div className="relative h-28 w-full sm:h-32">
                <Image
                  src="/le-product.png"
                  alt=""
                  fill
                  className="object-cover"
                  sizes="192px"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
