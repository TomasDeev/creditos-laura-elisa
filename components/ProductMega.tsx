"use client";

import Link from "next/link";
import {
  useEffect,
  useRef,
  type ComponentType,
  type SVGProps,
} from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
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
  MobileProductStage,
  ProductStage,
  type StageContent,
} from "./product-stage/StageLayers";

gsap.registerPlugin(ScrollTrigger);

type IconComp = ComponentType<SVGProps<SVGSVGElement> & { size?: number }>;

type Benefit = {
  title: string;
  link: string;
  href: string;
  Icon: IconComp;
};

type Block = {
  id: string;
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

const HEADER_OFFSET = "4.75rem";

function ProductCopy({ block }: { block: Block }) {
  const Badge = block.Badge;

  return (
    <div className="flex flex-col justify-center bg-[#003B8E] px-6 py-16 text-white sm:px-10 md:px-12 md:py-20 lg:min-h-[85vh] lg:px-14 lg:py-24">
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

function q(root: HTMLElement, sel: string) {
  return root.querySelector(sel) as HTMLElement | null;
}

function qa(root: HTMLElement, sel: string) {
  return Array.from(root.querySelectorAll(sel)) as HTMLElement[];
}

function scene(root: HTMLElement, id: string) {
  return q(root, `[data-gsap-scene="${id}"]`);
}

function sceneEl(root: HTMLElement, id: string, attr: string) {
  const s = scene(root, id);
  return s ? (s.querySelector(`[data-gsap="${attr}"]`) as HTMLElement | null) : null;
}

function sceneEls(root: HTMLElement, id: string, attr: string) {
  const s = scene(root, id);
  return s ? qa(s, `[data-gsap="${attr}"]`) : [];
}

function progressTarget(fill: HTMLElement | null) {
  if (!fill) return "38%";
  const raw = fill.getAttribute("data-progress");
  const n = raw ? parseFloat(raw) : 38;
  return `${Number.isFinite(n) ? n : 38}%`;
}

/** Build master scrubbed motion-graphics timeline across 3 product chapters */
function buildMasterTimeline(stageRoot: HTMLElement, reduceMotion: boolean) {
  const bg = q(stageRoot, '[data-gsap="stage-bg"]');
  const rings = q(stageRoot, '[data-gsap="stage-rings"]');
  const ringsInner = q(stageRoot, '[data-gsap="stage-rings-inner"]');

  const auto = {
    scene: scene(stageRoot, "automotriz"),
    toast: sceneEl(stageRoot, "automotriz", "toast"),
    card: sceneEl(stageRoot, "automotriz", "main-card"),
    fill: sceneEl(stageRoot, "automotriz", "progress-fill"),
    knob: sceneEl(stageRoot, "automotriz", "progress-knob"),
    rows: sceneEls(stageRoot, "automotriz", "history-row"),
    chips: qa(stageRoot, '[data-gsap="automotriz-chip"]'),
    dates: sceneEl(stageRoot, "automotriz", "date-row"),
  };

  const gar = {
    scene: scene(stageRoot, "garantia"),
    toast: sceneEl(stageRoot, "garantia", "toast"),
    card: sceneEl(stageRoot, "garantia", "main-card"),
    mini: sceneEl(stageRoot, "garantia", "mini"),
    fill: sceneEl(stageRoot, "garantia", "progress-fill"),
    rows: sceneEls(stageRoot, "garantia", "history-row"),
    chips: qa(stageRoot, '[data-gsap="garantia-chip"]'),
    balance: sceneEl(stageRoot, "garantia", "balance-amount"),
  };

  const hip = {
    scene: scene(stageRoot, "hipotecas"),
    toast: sceneEl(stageRoot, "hipotecas", "toast"),
    card: sceneEl(stageRoot, "hipotecas", "main-card"),
    mini: sceneEl(stageRoot, "hipotecas", "mini"),
    fill: sceneEl(stageRoot, "hipotecas", "progress-fill"),
    rows: sceneEls(stageRoot, "hipotecas", "history-row"),
    chips: qa(stageRoot, '[data-gsap="hipotecas-chip"]'),
    balance: sceneEl(stageRoot, "hipotecas", "balance-amount"),
  };

  const creamA = BLOCKS[0].stage.cream;
  const creamG = BLOCKS[1].stage.cream;
  const creamH = BLOCKS[2].stage.cream;

  const tl = gsap.timeline({ defaults: { ease: "none" } });

  // --- Initial hidden / 3D setup ---
  const allCards = [auto.card, gar.card, hip.card].filter(Boolean);
  if (allCards.length) {
    gsap.set(allCards, { transformPerspective: 1200, transformOrigin: "50% 50%" });
  }
  gsap.set([gar.scene, hip.scene].filter(Boolean), { autoAlpha: 0 });
  gsap.set(
    [gar.toast, gar.card, gar.mini, hip.toast, hip.card, hip.mini].filter(
      Boolean,
    ),
    { autoAlpha: 0 },
  );
  // Match scrub from-states so stage does not flash fully painted before ST
  gsap.set(
    [auto.toast, auto.card, ...auto.rows, ...auto.chips].filter(Boolean),
    { autoAlpha: 0 },
  );
  if (auto.fill) gsap.set(auto.fill, { width: "0%" });
  if (auto.knob) gsap.set(auto.knob, { autoAlpha: 0, left: "0%" });
  if (auto.dates) gsap.set(auto.dates.children, { autoAlpha: 0 });

  if (reduceMotion) {
    // Instant chapter crossfades only
    tl.set(auto.scene, { autoAlpha: 1 }, 0);
    if (auto.toast) tl.set(auto.toast, { autoAlpha: 1 }, 0);
    if (auto.card) tl.set(auto.card, { autoAlpha: 1 }, 0);
    if (auto.fill) tl.set(auto.fill, { width: progressTarget(auto.fill) }, 0);
    if (auto.knob) {
      tl.set(
        auto.knob,
        {
          autoAlpha: 1,
          left: `calc(${progressTarget(auto.fill)} - 14px)`,
        },
        0,
      );
    }
    if (auto.rows.length) tl.set(auto.rows, { autoAlpha: 1 }, 0);
    tl.to({}, { duration: 1 }, 0);
    tl.addLabel("automotriz", 0);
    tl.addLabel("toGarantia", 1);
    tl.set(auto.scene, { autoAlpha: 0 }, "toGarantia");
    tl.set(gar.scene, { autoAlpha: 1 }, "toGarantia");
    tl.set(
      [gar.toast, gar.card, gar.mini].filter(Boolean),
      { autoAlpha: 1 },
      "toGarantia",
    );
    if (bg) tl.set(bg, { backgroundColor: creamG }, "toGarantia");
    tl.to({}, { duration: 1 }, "toGarantia");
    tl.addLabel("toHipotecas", 2);
    tl.set(gar.scene, { autoAlpha: 0 }, "toHipotecas");
    tl.set(hip.scene, { autoAlpha: 1 }, "toHipotecas");
    tl.set(
      [hip.toast, hip.card, hip.mini].filter(Boolean),
      { autoAlpha: 1 },
      "toHipotecas",
    );
    if (bg) tl.set(bg, { backgroundColor: creamH }, "toHipotecas");
    tl.to({}, { duration: 1 }, "toHipotecas");
    return tl;
  }

  // ========== CHAPTER 1: Automotriz (loan) ==========
  // Scrubbed intro (toast fly-in, card scale/blur, progress fill, staggered rows)
  // then parallax hold while left copy for Automotriz is in view.
  tl.addLabel("automotriz", 0);

  const autoPct = progressTarget(auto.fill);

  if (bg) tl.set(bg, { backgroundColor: creamA }, 0);
  if (auto.scene) tl.set(auto.scene, { autoAlpha: 1 }, 0);

  if (rings) {
    tl.fromTo(
      rings,
      { scale: 0.92, opacity: 0.5 },
      { scale: 1.06, opacity: 0.92, duration: 1.25, ease: "none" },
      0,
    );
  }
  if (ringsInner) {
    tl.fromTo(
      ringsInner,
      { scale: 0.86, opacity: 0.2 },
      { scale: 1.08, opacity: 0.48, duration: 1.25, ease: "none" },
      0,
    );
  }

  if (auto.toast) {
    tl.fromTo(
      auto.toast,
      { autoAlpha: 0, x: -64, y: -80, rotation: -10, scale: 0.9 },
      {
        autoAlpha: 1,
        x: 0,
        y: 0,
        rotation: -2,
        scale: 1,
        duration: 0.5,
        ease: "power2.out",
      },
      0.02,
    );
    tl.to(
      auto.toast,
      { y: 16, x: 10, rotation: 3, duration: 0.75, ease: "none" },
      0.5,
    );
  }

  if (auto.card) {
    tl.fromTo(
      auto.card,
      {
        autoAlpha: 0,
        scale: 0.85,
        y: 40,
        rotateX: 14,
        filter: "blur(10px)",
      },
      {
        autoAlpha: 1,
        scale: 1,
        y: 0,
        rotateX: 0,
        filter: "blur(0px)",
        duration: 0.55,
        ease: "power2.out",
      },
      0.06,
    );
    tl.to(auto.card, { y: -12, duration: 0.7, ease: "none" }, 0.55);
  }

  if (auto.dates) {
    tl.fromTo(
      auto.dates.children,
      { autoAlpha: 0, y: 14, scale: 0.88 },
      { autoAlpha: 1, y: 0, scale: 1, stagger: 0.05, duration: 0.32 },
      0.22,
    );
  }

  if (auto.fill) {
    tl.fromTo(
      auto.fill,
      { width: "0%" },
      { width: autoPct, duration: 0.7, ease: "none" },
      0.22,
    );
  }
  if (auto.knob) {
    tl.fromTo(
      auto.knob,
      { autoAlpha: 0, scale: 0.45, left: "0%" },
      {
        autoAlpha: 1,
        scale: 1,
        left: `calc(${autoPct} - 14px)`,
        duration: 0.7,
        ease: "none",
      },
      0.22,
    );
  }

  if (auto.rows.length) {
    tl.fromTo(
      auto.rows,
      { autoAlpha: 0, y: 20, x: -8 },
      { autoAlpha: 1, y: 0, x: 0, stagger: 0.09, duration: 0.38 },
      0.35,
    );
  }

  if (auto.chips.length) {
    tl.fromTo(
      auto.chips,
      { autoAlpha: 0, scale: 0 },
      { autoAlpha: 1, scale: 1, stagger: 0.07, duration: 0.3 },
      0.18,
    );
    tl.to(
      auto.chips,
      { y: "+=18", x: "+=12", duration: 0.85, stagger: 0.05, ease: "none" },
      0.4,
    );
  }

  tl.to({}, { duration: 0.3 }, 1.15);

    // ========== TRANSITION → Garantía ==========
  tl.addLabel("toGarantia", 1.35);

  if (auto.toast) {
    tl.to(
      auto.toast,
      {
        autoAlpha: 0,
        x: -40,
        y: -90,
        rotation: -14,
        scale: 0.9,
        duration: 0.45,
        ease: "power2.in",
      },
      "toGarantia",
    );
  }
  if (auto.card) {
    tl.to(
      auto.card,
      {
        autoAlpha: 0,
        x: -90,
        y: 20,
        rotation: -11,
        rotateY: 18,
        scale: 0.88,
        filter: "blur(6px)",
        duration: 0.5,
        ease: "power2.in",
      },
      "toGarantia+=0.04",
    );
  }
  if (auto.chips.length) {
    tl.to(
      auto.chips,
      { autoAlpha: 0, scale: 0.4, duration: 0.3, stagger: 0.03 },
      "toGarantia",
    );
  }
  if (auto.scene) {
    tl.set(auto.scene, { autoAlpha: 0 }, "toGarantia+=0.52");
  }

  if (bg) {
    tl.to(
      bg,
      { backgroundColor: creamG, duration: 0.7, ease: "none" },
      "toGarantia",
    );
  }
  if (rings) {
    tl.to(
      rings,
      { scale: 1.12, opacity: 0.75, duration: 0.7 },
      "toGarantia",
    );
  }
  if (ringsInner) {
    tl.to(ringsInner, { scale: 0.95, duration: 0.7 }, "toGarantia");
  }

  if (gar.scene) {
    tl.set(gar.scene, { autoAlpha: 1 }, "toGarantia+=0.2");
  }

  if (gar.card) {
    tl.fromTo(
      gar.card,
      {
        autoAlpha: 0,
        y: 70,
        scale: 0.88,
        rotateY: -16,
        rotateX: 8,
        filter: "blur(8px)",
      },
      {
        autoAlpha: 1,
        y: 0,
        scale: 1,
        rotateY: 0,
        rotateX: 0,
        filter: "blur(0px)",
        duration: 0.6,
        ease: "power2.out",
      },
      "toGarantia+=0.22",
    );
    tl.to(gar.card, { y: -6, duration: 0.45, ease: "none" }, "toGarantia+=0.82");
  }

  if (gar.balance) {
    tl.fromTo(
      gar.balance,
      { autoAlpha: 0.3, scale: 0.94 },
      { autoAlpha: 1, scale: 1, duration: 0.4 },
      "toGarantia+=0.35",
    );
  }

  const garPct = progressTarget(gar.fill);
  if (gar.fill) {
    tl.fromTo(
      gar.fill,
      { width: "0%" },
      { width: garPct, duration: 0.55, ease: "power1.out" },
      "toGarantia+=0.4",
    );
  }

  if (gar.rows.length) {
    tl.fromTo(
      gar.rows,
      { autoAlpha: 0, y: 16 },
      { autoAlpha: 1, y: 0, stagger: 0.08, duration: 0.35 },
      "toGarantia+=0.48",
    );
  }

  if (gar.mini) {
    tl.fromTo(
      gar.mini,
      { autoAlpha: 0, y: 110, x: -36, rotation: -6, scale: 0.9 },
      {
        autoAlpha: 1,
        y: 0,
        x: 0,
        rotation: 0,
        scale: 1,
        duration: 0.55,
        ease: "power2.out",
      },
      "toGarantia+=0.42",
    );
    tl.to(
      gar.mini,
      { y: -12, x: 4, duration: 0.5, ease: "none" },
      "toGarantia+=0.95",
    );
  }

  if (gar.toast) {
    tl.fromTo(
      gar.toast,
      { autoAlpha: 0, x: 50, y: -60, rotation: 8, scale: 0.92 },
      {
        autoAlpha: 1,
        x: 0,
        y: 0,
        rotation: 2,
        scale: 1,
        duration: 0.5,
        ease: "power2.out",
      },
      "toGarantia+=0.38",
    );
    tl.to(
      gar.toast,
      { y: 8, x: -4, duration: 0.45, ease: "none" },
      "toGarantia+=0.9",
    );
  }

  if (gar.chips.length) {
    tl.fromTo(
      gar.chips,
      { autoAlpha: 0, scale: 0 },
      { autoAlpha: 1, scale: 1, stagger: 0.07, duration: 0.3 },
      "toGarantia+=0.4",
    );
    tl.to(
      gar.chips,
      { y: "+=12", duration: 0.7, stagger: 0.04, ease: "none" },
      "toGarantia+=0.7",
    );
  }

  tl.to({}, { duration: 0.3 }, "toGarantia+=1.35");

  // ========== TRANSITION → Hipotecas ==========
  tl.addLabel("toHipotecas", "toGarantia+=1.6");

  if (gar.toast) {
    tl.to(
      gar.toast,
      {
        autoAlpha: 0,
        x: 40,
        y: -80,
        rotation: 12,
        duration: 0.4,
        ease: "power2.in",
      },
      "toHipotecas",
    );
  }
  if (gar.mini) {
    tl.to(
      gar.mini,
      {
        autoAlpha: 0,
        y: 80,
        x: -50,
        rotation: -8,
        scale: 0.88,
        duration: 0.42,
        ease: "power2.in",
      },
      "toHipotecas",
    );
  }
  if (gar.card) {
    tl.to(
      gar.card,
      {
        autoAlpha: 0,
        x: 70,
        y: -20,
        rotation: 9,
        rotateY: -14,
        scale: 0.9,
        filter: "blur(6px)",
        duration: 0.48,
        ease: "power2.in",
      },
      "toHipotecas+=0.04",
    );
  }
  if (gar.chips.length) {
    tl.to(
      gar.chips,
      { autoAlpha: 0, duration: 0.25, stagger: 0.02 },
      "toHipotecas",
    );
  }
  if (gar.scene) {
    tl.set(gar.scene, { autoAlpha: 0 }, "toHipotecas+=0.5");
  }

  if (bg) {
    tl.to(
      bg,
      { backgroundColor: creamH, duration: 0.7, ease: "none" },
      "toHipotecas",
    );
  }
  if (rings) {
    tl.to(
      rings,
      { scale: 1.18, opacity: 0.82, duration: 0.7 },
      "toHipotecas",
    );
  }
  if (ringsInner) {
    tl.to(ringsInner, { scale: 1.05, duration: 0.7 }, "toHipotecas");
  }

  if (hip.scene) {
    tl.set(hip.scene, { autoAlpha: 1 }, "toHipotecas+=0.18");
  }

  if (hip.card) {
    tl.fromTo(
      hip.card,
      {
        autoAlpha: 0,
        y: 64,
        scale: 0.86,
        rotateY: 14,
        rotateX: -6,
        filter: "blur(8px)",
      },
      {
        autoAlpha: 1,
        y: 0,
        scale: 1,
        rotateY: 0,
        rotateX: 0,
        filter: "blur(0px)",
        duration: 0.6,
        ease: "power2.out",
      },
      "toHipotecas+=0.2",
    );
    tl.to(hip.card, { y: -6, duration: 0.45, ease: "none" }, "toHipotecas+=0.8");
  }

  if (hip.balance) {
    tl.fromTo(
      hip.balance,
      { autoAlpha: 0.25, y: 10 },
      { autoAlpha: 1, y: 0, duration: 0.4 },
      "toHipotecas+=0.32",
    );
  }

  const hipPct = progressTarget(hip.fill);
  if (hip.fill) {
    tl.fromTo(
      hip.fill,
      { width: "0%" },
      { width: hipPct, duration: 0.55, ease: "power1.out" },
      "toHipotecas+=0.38",
    );
  }

  if (hip.rows.length) {
    tl.fromTo(
      hip.rows,
      { autoAlpha: 0, y: 16 },
      { autoAlpha: 1, y: 0, stagger: 0.08, duration: 0.35 },
      "toHipotecas+=0.45",
    );
  }

  if (hip.mini) {
    tl.fromTo(
      hip.mini,
      { autoAlpha: 0, y: 100, x: -28, rotation: -5, scale: 0.9 },
      {
        autoAlpha: 1,
        y: 0,
        x: 0,
        rotation: 0,
        scale: 1,
        duration: 0.55,
        ease: "power2.out",
      },
      "toHipotecas+=0.4",
    );
    tl.to(
      hip.mini,
      { y: -10, duration: 0.5, ease: "none" },
      "toHipotecas+=0.95",
    );
  }

  if (hip.toast) {
    tl.fromTo(
      hip.toast,
      { autoAlpha: 0, x: 48, y: -55, rotation: 7, scale: 0.92 },
      {
        autoAlpha: 1,
        x: 0,
        y: 0,
        rotation: 1,
        scale: 1,
        duration: 0.5,
        ease: "power2.out",
      },
      "toHipotecas+=0.36",
    );
    tl.to(
      hip.toast,
      { y: 6, duration: 0.45, ease: "none" },
      "toHipotecas+=0.88",
    );
  }

  if (hip.chips.length) {
    tl.fromTo(
      hip.chips,
      { autoAlpha: 0, scale: 0 },
      { autoAlpha: 1, scale: 1, stagger: 0.07, duration: 0.3 },
      "toHipotecas+=0.38",
    );
    tl.to(
      hip.chips,
      { y: "+=10", x: "-=6", duration: 0.7, stagger: 0.04, ease: "none" },
      "toHipotecas+=0.7",
    );
  }

  // Final hold so last chapter stays readable through end of pin
  tl.to({}, { duration: 0.55 }, "toHipotecas+=1.35");

  return tl;
}

/** Lighter once-reveal for a single mobile product stage */
function revealMobileStage(root: HTMLElement, reduceMotion: boolean) {
  const toast = q(root, '[data-gsap="toast"]');
  const card = q(root, '[data-gsap="main-card"]');
  const mini = q(root, '[data-gsap="mini"]');
  const fill = q(root, '[data-gsap="progress-fill"]');
  const knob = q(root, '[data-gsap="progress-knob"]');
  const rows = qa(root, '[data-gsap="history-row"]');
  const rings = q(root, '[data-gsap="stage-rings"]');

  if (reduceMotion) {
    gsap.set([toast, card, mini].filter(Boolean), { autoAlpha: 1 });
    if (fill) gsap.set(fill, { width: progressTarget(fill) });
    if (knob) {
      gsap.set(knob, {
        autoAlpha: 1,
        left: `calc(${progressTarget(fill)} - 14px)`,
      });
    }
    return;
  }

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: root,
      start: "top 78%",
      once: true,
    },
  });

  if (rings) {
    tl.fromTo(
      rings,
      { scale: 0.9, opacity: 0.4 },
      { scale: 1.05, opacity: 0.85, duration: 0.9, ease: "power2.out" },
      0,
    );
  }
  if (toast) {
    tl.fromTo(
      toast,
      { autoAlpha: 0, y: -28, rotation: -6 },
      { autoAlpha: 1, y: 0, rotation: 0, duration: 0.55, ease: "power2.out" },
      0.05,
    );
  }
  if (card) {
    tl.fromTo(
      card,
      { autoAlpha: 0, y: 28, scale: 0.92 },
      { autoAlpha: 1, y: 0, scale: 1, duration: 0.6, ease: "power2.out" },
      0.1,
    );
  }
  if (fill) {
    tl.fromTo(
      fill,
      { width: "0%" },
      { width: progressTarget(fill), duration: 0.7, ease: "power1.out" },
      0.35,
    );
  }
  if (knob) {
    tl.fromTo(
      knob,
      { autoAlpha: 0, scale: 0.5, left: "0%" },
      {
        autoAlpha: 1,
        scale: 1,
        left: `calc(${progressTarget(fill)} - 14px)`,
        duration: 0.7,
        ease: "power1.out",
      },
      0.35,
    );
  }
  if (rows.length) {
    tl.fromTo(
      rows,
      { autoAlpha: 0, y: 14 },
      { autoAlpha: 1, y: 0, stagger: 0.08, duration: 0.4 },
      0.4,
    );
  }
  if (mini) {
    tl.fromTo(
      mini,
      { autoAlpha: 0, y: 40, scale: 0.94 },
      { autoAlpha: 1, y: 0, scale: 1, duration: 0.5, ease: "power2.out" },
      0.35,
    );
  }
}

export function ProductMega() {
  const sectionRef = useRef<HTMLElement>(null);
  const stagePinRef = useRef<HTMLDivElement>(null);
  const stageRootRef = useRef<HTMLDivElement>(null);
  const mobileStageRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    const pinTarget = stagePinRef.current;
    const stageWrap = stageRootRef.current;
    if (!section || !pinTarget || !stageWrap) return;

    const stageRoot =
      (stageWrap.querySelector('[data-gsap="stage-root"]') as HTMLElement) ||
      stageWrap;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // Desktop: pin stage + scrub master timeline
      mm.add("(min-width: 1024px)", () => {
        const master = buildMasterTimeline(stageRoot, reduceMotion);

        // Pin the visual stage while left copy scrolls (Possible-style).
        // pinSpacing:false — section height comes from the left column.
        ScrollTrigger.create({
          trigger: section,
          start: `top top+=${HEADER_OFFSET}`,
          end: "bottom bottom",
          pin: pinTarget,
          pinSpacing: false,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        });

        // Separate scrub so Automotriz intro begins as the section enters
        ScrollTrigger.create({
          trigger: section,
          start: "top 75%",
          end: "bottom bottom",
          scrub: reduceMotion ? true : 0.6,
          animation: master,
          invalidateOnRefresh: true,
        });

      });

      // Mobile / tablet: no pin; per-product once reveals
      mm.add("(max-width: 1023px)", () => {
        mobileStageRefs.current.forEach((el) => {
          if (!el) return;
          const root =
            (el.querySelector('[data-gsap="stage-root"]') as HTMLElement) ||
            el;
          revealMobileStage(root, reduceMotion);
        });
      });

      return () => mm.revert();
    }, section);

    // Refresh after layout / fonts
    const refresh = () => ScrollTrigger.refresh();
    requestAnimationFrame(refresh);
    window.addEventListener("load", refresh);

    return () => {
      window.removeEventListener("load", refresh);
      ctx.revert();
    };
  }, []);

  const stages = BLOCKS.map((b) => b.stage);
  const ids = BLOCKS.map((b) => b.id);

  return (
    <section
      ref={sectionRef}
      id="productos-teaser"
      className="scroll-mt-24 border-t border-black"
    >
      <div className="border-b border-black lg:grid lg:grid-cols-2">
        <div className="lg:border-r lg:border-black">
          {BLOCKS.map((b, i) => (
            <article
              key={b.id}
              id={b.id}
              className={`scroll-mt-24 ${
                i < BLOCKS.length - 1 ? "border-b border-black" : ""
              }`}
            >
              <ProductCopy block={b} />
              <div className="lg:hidden">
                <div
                  ref={(el) => {
                    mobileStageRefs.current[i] = el;
                  }}
                  className="relative min-h-[30rem] sm:min-h-[32rem]"
                >
                  <MobileProductStage
                    content={b.stage}
                    id={b.id}
                    className="min-h-[30rem] sm:min-h-[32rem]"
                  />
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="relative hidden lg:block">
          <div
            ref={stagePinRef}
            className="h-[calc(100vh-4.75rem)]"
          >
            <div ref={stageRootRef} className="h-full w-full">
              <ProductStage layers={stages} ids={ids} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
