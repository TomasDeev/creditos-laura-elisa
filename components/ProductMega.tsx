"use client";

import Link from "next/link";
import {
  useEffect,
  useRef,
  useState,
  type ComponentType,
  type SVGProps,
} from "react";
import {
  ArrowUpRight,
  Bolt,
  Calendar,
  Car,
  Chart,
  Home,
  Key,
  Scale,
  Shield,
} from "./icons";
import {
  BadgeAutomotriz,
  BadgeGarantia,
  BadgeHipotecas,
} from "./product-stage/ProductBadges";
import {
  StageFrame,
  type StageContent,
} from "./product-stage/StageLayers";

type IconComp = ComponentType<SVGProps<SVGSVGElement> & { size?: number }>;

type Benefit = {
  title: string;
  link: string;
  href: string;
  Icon: IconComp;
};

type Block = {
  id: string;
  /** Short product name shown huge (Possible "Loan" / "Advance") */
  name: string;
  title: string;
  sub: string;
  benefits: Benefit[];
  infoHref: string;
  Badge: ComponentType<{ size?: number }>;
  stage: StageContent;
};

const BLOCKS: Block[] = [
  {
    id: "automotriz",
    name: "Automotriz",
    title: "Financia el vehículo que quieres — nuevo o usado.",
    sub: "Cuotas claras, acompañamiento de principio a fin y desembolso ágil para que manejes sin vueltas.",
    benefits: [
      {
        title: "Vehículos nuevos y usados con cuotas a tu medida",
        link: "Ver más",
        href: "/productos#automotriz",
        Icon: Car,
      },
      {
        title: "Plazos flexibles y pagos que se adaptan a ti",
        link: "Cotizar",
        href: "/#contacto",
        Icon: Calendar,
      },
      {
        title: "Proceso transparente, sin letras chicas",
        link: "Cómo funciona",
        href: "/#faq",
        Icon: Scale,
      },
      {
        title: "Desembolso ágil cuando todo está en orden",
        link: "Solicitar",
        href: "/#contacto",
        Icon: Bolt,
      },
    ],
    infoHref: "/productos#automotriz",
    Badge: BadgeAutomotriz,
    stage: {
      cream: "#F7F1E8",
      ring: "rgba(245,130,32,0.18)",
      kind: "loan",
      toast: "Tu financiamiento automotriz fue desembolsado",
      loan: {
        paidLabel: "RD$45,000 pagado del total",
        progress: 0.38,
        history: [
          { label: "Segunda cuota", amount: "RD$22,500", tone: "blue" },
          { label: "Primera cuota", amount: "RD$22,500", tone: "blue" },
          { label: "Desembolso auto", amount: "RD$480,000", tone: "dark" },
        ],
      },
    },
  },
  {
    id: "garantia",
    name: "Garantía",
    title: "Liquidez inmediata. Conservas tus llaves.",
    sub: "Usa tu carro como garantía y sigue manejando. Capital para negocio, emergencia o inversión — sin entregar el vehículo.",
    benefits: [
      {
        title: "Conservas las llaves y sigues manejando",
        link: "Ver más",
        href: "/productos#garantia",
        Icon: Key,
      },
      {
        title: "Sin entregar el vehículo en ningún momento",
        link: "Cotizar",
        href: "/#contacto",
        Icon: Car,
      },
      {
        title: "Liquidez rápida para lo que necesitas hoy",
        link: "Solicitar",
        href: "/#contacto",
        Icon: Bolt,
      },
      {
        title: "Condiciones claras desde el primer día",
        link: "Ver más",
        href: "/#faq",
        Icon: Scale,
      },
    ],
    infoHref: "/productos#garantia",
    Badge: BadgeGarantia,
    stage: {
      cream: "#E8F3EE",
      ring: "rgba(15,122,69,0.14)",
      kind: "advance",
      toast: "Tu financiamiento con garantía fue desembolsado",
      advance: {
        balance: "RD$185,000",
        paidAmount: "RD$65,000",
        history: [
          { label: "Segunda cuota", amount: "RD$32,500", tone: "blue" },
          { label: "Primera cuota", amount: "RD$32,500", tone: "blue" },
          { label: "Desembolso garantía", amount: "RD$250,000", tone: "dark" },
        ],
      },
    },
  },
  {
    id: "hipotecas",
    name: "Hipotecas",
    title: "Tu sueño de hogar, con condiciones claras.",
    sub: "Financiamiento hipotecario para hacer realidad tu casa o consolidar patrimonio — con asesoría cercana en República Dominicana.",
    benefits: [
      {
        title: "Asesoría personalizada en cada paso",
        link: "Ver más",
        href: "/productos#hipotecas",
        Icon: Home,
      },
      {
        title: "Condiciones transparentes, sin sorpresas",
        link: "Cotizar",
        href: "/#contacto",
        Icon: Scale,
      },
      {
        title: "Acompañamiento local y cercano",
        link: "Conócenos",
        href: "/nosotros",
        Icon: Shield,
      },
      {
        title: "Compromiso de largo plazo contigo",
        link: "Consultar",
        href: "/#contacto",
        Icon: Chart,
      },
    ],
    infoHref: "/productos#hipotecas",
    Badge: BadgeHipotecas,
    stage: {
      cream: "#EAF3F0",
      ring: "rgba(0,59,142,0.12)",
      kind: "advance",
      toast: "Tu hipoteca Laura Elisa fue desembolsada",
      advance: {
        balance: "RD$1,850,000",
        paidAmount: "RD$150,000",
        history: [
          { label: "Cuota mensual", amount: "RD$28,500", tone: "blue" },
          { label: "Inicial", amount: "RD$121,500", tone: "blue" },
          { label: "Desembolso hipoteca", amount: "RD$2,000,000", tone: "dark" },
        ],
      },
    },
  },
];

function ProductCopy({ block }: { block: Block }) {
  const Badge = block.Badge;

  return (
    <div className="flex flex-col justify-center bg-[#003B8E] px-6 py-16 text-white sm:px-10 md:px-12 md:py-20 lg:min-h-[85vh] lg:px-14 lg:py-24">
      {/* Product identity: circular icon + HUGE name */}
      <div className="mb-7 flex items-center gap-3.5 sm:gap-4">
        <span className="shrink-0 drop-shadow-[0_8px_24px_rgba(0,0,0,0.28)]">
          <Badge size={58} />
        </span>
        <h2 className="text-[2.65rem] font-extrabold leading-[0.95] tracking-[-0.045em] sm:text-[3.25rem] md:text-[3.75rem] lg:text-[4.15rem]">
          {block.name}
        </h2>
      </div>

      <h3 className="max-w-xl text-[1.55rem] font-semibold leading-[1.12] tracking-[-0.03em] text-white sm:text-[1.85rem] md:text-[2.15rem]">
        {block.title}
      </h3>
      <p className="mt-4 max-w-md text-[0.95rem] leading-relaxed text-white/70 sm:text-base">
        {block.sub}
      </p>

      {/* 2×2 benefit grid */}
      <div className="mt-9 grid grid-cols-1 gap-x-8 gap-y-7 border-t border-white/15 pt-8 sm:grid-cols-2">
        {block.benefits.map((bn) => {
          const BIcon = bn.Icon;
          return (
            <div key={bn.title} className="flex items-start gap-3">
              <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#F58220] text-[#1c1c1c] shadow-[0_2px_12px_rgba(245,130,32,0.45)]">
                <BIcon size={15} />
              </span>
              <div className="min-w-0">
                <p className="text-[0.9rem] font-medium leading-snug text-white/95 sm:text-[0.95rem]">
                  {bn.title}
                </p>
                <Link
                  href={bn.href}
                  className="mt-2 inline-flex items-center gap-1 text-[0.8rem] font-semibold text-[#F58220] transition hover:brightness-110"
                >
                  {bn.link}
                  <ArrowUpRight size={12} />
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      {/* CTAs: Más info (solid orange) + Solicitar ahora (outline) */}
      <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
        <Link
          href={block.infoHref}
          className="focus-ring inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#F58220] px-7 text-sm font-bold text-[#1c1c1c] transition hover:brightness-95"
        >
          Más info
          <ArrowUpRight size={15} />
        </Link>
        <Link
          href="/#contacto"
          className="focus-ring inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/40 px-7 text-sm font-semibold text-white transition hover:border-white/70 hover:bg-white/10"
        >
          Solicitar ahora
          <ArrowUpRight size={15} />
        </Link>
      </div>
    </div>
  );
}

/** Continuous progress 0 → n-1 from panel midpoints vs viewport anchor */
function progressFromPanels(
  panels: (HTMLElement | null)[],
  viewportMid: number,
): number {
  const mids: number[] = [];
  for (const el of panels) {
    if (!el) return 0;
    const rect = el.getBoundingClientRect();
    mids.push(rect.top + rect.height / 2);
  }
  if (mids.length === 0) return 0;
  if (mids.length === 1) return 0;

  if (viewportMid <= mids[0]) return 0;
  const last = mids.length - 1;
  if (viewportMid >= mids[last]) return last;

  for (let i = 0; i < last; i++) {
    const a = mids[i];
    const b = mids[i + 1];
    if (viewportMid >= a && viewportMid <= b) {
      const span = b - a || 1;
      return i + (viewportMid - a) / span;
    }
  }
  return last;
}

export function ProductMega() {
  const [progress, setProgress] = useState(0);
  const panelRefs = useRef<(HTMLElement | null)[]>([]);
  const stages = BLOCKS.map((b) => b.stage);
  const rafRef = useRef(0);

  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 1024) return;
      const viewportMid = window.innerHeight * 0.42;
      const next = progressFromPanels(panelRefs.current, viewportMid);
      setProgress((prev) => (Math.abs(prev - next) < 0.0008 ? prev : next));
    };

    const onScrollOrResize = () => {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);
    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
    };
  }, []);

  return (
    <section id="productos-teaser" className="scroll-mt-24 border-t border-black">
      <div className="border-b border-black lg:grid lg:grid-cols-2">
        <div className="lg:border-r lg:border-black">
          {BLOCKS.map((b, i) => (
            <article
              key={b.id}
              id={b.id}
              ref={(el) => {
                panelRefs.current[i] = el;
              }}
              className={`scroll-mt-24 ${
                i < BLOCKS.length - 1 ? "border-b border-black" : ""
              }`}
            >
              <ProductCopy block={b} />
              {/* Mobile: polished stage under each product (phone frame) */}
              <div className="lg:hidden">
                <div className="relative min-h-[30rem] sm:min-h-[32rem]">
                  <StageFrame
                    layers={[b.stage]}
                    activeIndex={0}
                    framed
                    className="min-h-[30rem] sm:min-h-[32rem]"
                  />
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="relative hidden lg:block">
          <div className="sticky top-[4.75rem] h-[calc(100vh-4.75rem)] overflow-hidden">
            <StageFrame layers={stages} progress={progress} />
          </div>
        </div>
      </div>
    </section>
  );
}
