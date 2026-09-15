import { Reveal } from "./Reveal";

const ITEMS = [
  { label: "Automotriz", detail: "Nuevo o usado" },
  { label: "Hipotecas", detail: "Tu casa, tu sueño" },
  { label: "Sin letras chicas", detail: "Condiciones claras" },
  { label: "Atención local", detail: "Santo Domingo, República Dominicana" },
];

export function TrustStrip() {
  return (
    <section className="border-y border-border bg-magenta-soft/55 py-9 md:py-11">
      <div className="container-narrow">
        <Reveal>
          <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-center sm:gap-4">
            <div className="flex items-center gap-1 text-orange" aria-hidden>
              {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-sm font-semibold text-charcoal sm:text-base">
              Clientes en República Dominicana confían en{" "}
              <strong className="font-extrabold text-magenta">Créditos Laura Elisa</strong>
            </p>
          </div>
          <ul className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-5">
            {ITEMS.map((item) => (
              <li
                key={item.label}
                className="rounded-2xl border border-border/80 bg-white px-4 py-5 text-center shadow-sm"
              >
                <p className="text-sm font-extrabold text-charcoal">{item.label}</p>
                <p className="mt-1 text-xs text-charcoal-muted">{item.detail}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
