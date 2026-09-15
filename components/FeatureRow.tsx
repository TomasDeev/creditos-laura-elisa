import Link from "next/link";
import { RevealStagger } from "./Reveal";
import { Bolt, Calendar, Key, ShieldCheck, ArrowUpRight } from "./icons";

const FEATURES = [
  {
    title: "Dinero en minutos",
    label: "Cotiza y recibe liquidez ágil",
    href: "/#contacto",
    Icon: Bolt,
  },
  {
    title: "Pagos flexibles",
    label: "Cuotas a tu medida",
    href: "/#faq",
    Icon: Calendar,
  },
  {
    title: "Sin letras chicas",
    label: "Condiciones claras",
    href: "/#faq",
    Icon: ShieldCheck,
  },
  {
    title: "Conserva las llaves",
    label: "Garantía sin entregar el carro",
    href: "/productos#garantia",
    Icon: Key,
  },
];

export function FeatureRow() {
  return (
    <section className="border-b border-border bg-white py-12 md:py-16">
      <div className="container-narrow">
        <RevealStagger
          className="grid grid-cols-1 divide-y divide-border sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x"
          stagger={0.06}
        >
          {FEATURES.map((f) => {
            const Icon = f.Icon;
            return (
              <Link
                key={f.title}
                href={f.href}
                className="group flex h-full flex-col gap-4 px-1 py-6 transition sm:px-5 sm:py-2 lg:px-6"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-magenta-soft text-magenta">
                  <Icon size={20} />
                </span>
                <span>
                  <span className="block text-[0.95rem] font-bold tracking-[-0.01em] text-charcoal sm:text-base">
                    {f.title}
                  </span>
                  <span className="mt-1 block text-sm leading-relaxed text-charcoal-muted">
                    {f.label}
                  </span>
                  <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-magenta/80 transition group-hover:text-magenta">
                    Ver más
                    <ArrowUpRight size={13} />
                  </span>
                </span>
              </Link>
            );
          })}
        </RevealStagger>
      </div>
    </section>
  );
}
