"use client";

import type { ReactNode } from "react";
import {
  BalanceCard,
  DepositToast,
  UpcomingMiniCard,
  UpcomingPaymentsCard,
} from "./MockCards";

export type StageKind = "loan" | "advance";

export type LoanStageData = {
  paidLabel: string;
  progress: number;
  history: Array<{ label: string; amount: string; tone: "blue" | "dark" }>;
};

export type AdvanceStageData = {
  balance: string;
  paidAmount: string;
  history: Array<{ label: string; amount: string; tone: "blue" | "dark" }>;
};

export type StageContent = {
  cream: string;
  ring: string;
  kind: StageKind;
  toast: string;
  texture?: string;
  loan?: LoanStageData;
  advance?: AdvanceStageData;
};

/** Soft multi-stop concentric rings (static CSS; scale animated on wrapper) */
function ringBackground(ring: string) {
  return [
    `radial-gradient(circle at 55% 48%, transparent 0, transparent 14%, ${ring} 14.5%, transparent 15.5%)`,
    `radial-gradient(circle at 55% 48%, transparent 0, transparent 24%, ${ring} 24.5%, transparent 26%)`,
    `radial-gradient(circle at 55% 48%, transparent 0, transparent 35%, ${ring} 35.5%, transparent 37%)`,
    `radial-gradient(circle at 55% 48%, transparent 0, transparent 47%, ${ring} 47.5%, transparent 49%)`,
    `radial-gradient(circle at 55% 48%, transparent 0, transparent 60%, ${ring} 60.5%, transparent 62.5%)`,
    `radial-gradient(circle at 55% 48%, transparent 0, transparent 74%, ${ring} 74.5%, transparent 77%)`,
  ].join(", ");
}

function creamAtmosphere(cream: string) {
  return [
    `radial-gradient(ellipse 90% 70% at 30% 20%, rgba(255,255,255,0.72) 0%, transparent 55%)`,
    `radial-gradient(ellipse 80% 60% at 78% 78%, rgba(0,59,142,0.06) 0%, transparent 50%)`,
    `radial-gradient(ellipse 70% 50% at 50% 100%, rgba(245,130,32,0.05) 0%, transparent 45%)`,
    `linear-gradient(165deg, ${cream} 0%, color-mix(in srgb, ${cream} 88%, #fff) 42%, color-mix(in srgb, ${cream} 92%, #003B8E) 100%)`,
  ].join(", ");
}

const NOISE_URI =
  "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.55'/%3E%3C/svg%3E\")";

function FloatingChips({ prefix }: { prefix: string }) {
  return (
    <>
      <span
        data-gsap={`${prefix}-chip`}
        data-chip="1"
        className="pointer-events-none absolute left-[8%] top-[22%] z-[5] h-3 w-3 rounded-full bg-[#F58220]/70 shadow-[0_0_18px_rgba(245,130,32,0.55)]"
        aria-hidden
      />
      <span
        data-gsap={`${prefix}-chip`}
        data-chip="2"
        className="pointer-events-none absolute right-[12%] top-[38%] z-[5] h-2.5 w-2.5 rounded-full bg-[#0577FF]/55 shadow-[0_0_14px_rgba(5,119,255,0.45)]"
        aria-hidden
      />
      <span
        data-gsap={`${prefix}-chip`}
        data-chip="3"
        className="pointer-events-none absolute bottom-[28%] left-[14%] z-[5] h-2 w-2 rounded-full bg-[#003B8E]/40"
        aria-hidden
      />
    </>
  );
}

/** Optional iPhone-like bezel for mobile fidelity */
export function PhoneFrame({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`relative mx-auto w-full max-w-[340px] ${className}`}
      style={{
        filter:
          "drop-shadow(0 18px 40px rgba(28,28,28,0.18)) drop-shadow(0 4px 12px rgba(0,59,142,0.08))",
      }}
    >
      <div className="relative overflow-hidden rounded-[2.35rem] border-[3px] border-[#1c1c1c] bg-[#1c1c1c] p-[3px] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.12)]">
        <span
          className="pointer-events-none absolute -left-[5px] top-[18%] h-8 w-[3px] rounded-l-sm bg-[#2a2a2a]"
          aria-hidden
        />
        <span
          className="pointer-events-none absolute -left-[5px] top-[28%] h-12 w-[3px] rounded-l-sm bg-[#2a2a2a]"
          aria-hidden
        />
        <span
          className="pointer-events-none absolute -right-[5px] top-[24%] h-14 w-[3px] rounded-r-sm bg-[#2a2a2a]"
          aria-hidden
        />

        <div className="relative overflow-hidden rounded-[2.05rem] bg-white">
          <div className="relative z-20 flex h-7 items-center justify-between bg-white/90 px-5 backdrop-blur-sm">
            <span className="text-[0.58rem] font-semibold tabular-nums text-[#1c1c1c]/70">
              9:41
            </span>
            <span
              className="absolute left-1/2 top-1.5 h-4 w-[5.5rem] -translate-x-1/2 rounded-full bg-[#1c1c1c]"
              aria-hidden
            />
            <span className="flex items-center gap-1" aria-hidden>
              <svg width="14" height="10" viewBox="0 0 16 12" fill="none">
                <rect x="0" y="3" width="3" height="6" rx="0.5" fill="#1c1c1c" opacity=".45" />
                <rect x="4" y="2" width="3" height="8" rx="0.5" fill="#1c1c1c" opacity=".65" />
                <rect x="8" y="0.5" width="3" height="11" rx="0.5" fill="#1c1c1c" opacity=".85" />
                <rect x="12" y="0" width="3.5" height="12" rx="0.5" fill="#1c1c1c" />
              </svg>
              <svg width="18" height="10" viewBox="0 0 22 12" fill="none">
                <rect
                  x="0.5"
                  y="0.5"
                  width="18"
                  height="11"
                  rx="2.5"
                  stroke="#1c1c1c"
                  strokeOpacity=".45"
                />
                <rect x="2" y="2" width="12" height="8" rx="1.2" fill="#1c1c1c" />
                <path d="M20 4v4a2 2 0 0 0 0-4Z" fill="#1c1c1c" opacity=".45" />
              </svg>
            </span>
          </div>

          <div className="relative bg-gradient-to-b from-white to-[#f7f8fb] px-3 pb-4 pt-1">
            {children}
          </div>

          <div className="flex justify-center bg-[#f7f8fb] pb-2 pt-1" aria-hidden>
            <span className="h-1 w-24 rounded-full bg-[#1c1c1c]/20" />
          </div>
        </div>
      </div>
    </div>
  );
}

function LoanScene({
  id,
  toast,
  loan,
  framed = false,
}: {
  id: string;
  toast: string;
  loan?: LoanStageData;
  framed?: boolean;
}) {
  const card = (
    <UpcomingPaymentsCard
      paidLabel={loan?.paidLabel}
      progress={loan?.progress}
      history={loan?.history}
    />
  );

  return (
    <div
      data-gsap-scene={id}
      className="absolute inset-0 flex items-center justify-center"
      style={{ perspective: "1400px" }}
    >
      <FloatingChips prefix={id} />

      <div
        data-gsap="toast"
        className={`absolute z-20 ${
          framed
            ? "left-[4%] top-[4%] sm:left-[6%] sm:top-[6%]"
            : "left-[4%] top-[8%] sm:left-[7%] sm:top-[10%]"
        }`}
        style={{ willChange: "transform, opacity" }}
      >
        <DepositToast text={toast} />
      </div>

      <div
        data-gsap="main-card"
        className={`relative z-10 ${
          framed
            ? "w-full max-w-none"
            : "w-[88%] max-w-[min(100%,340px)] sm:max-w-[360px]"
        }`}
        style={{ willChange: "transform, opacity, filter", transformStyle: "preserve-3d" }}
      >
        {framed ? <PhoneFrame>{card}</PhoneFrame> : card}
      </div>
    </div>
  );
}

function AdvanceScene({
  id,
  toast,
  advance,
  framed = false,
}: {
  id: string;
  toast: string;
  advance?: AdvanceStageData;
  framed?: boolean;
}) {
  const balance = (
    <BalanceCard
      balance={advance?.balance}
      paidAmount={advance?.paidAmount}
      history={advance?.history}
    />
  );

  return (
    <div
      data-gsap-scene={id}
      className="absolute inset-0 flex items-center justify-center"
      style={{ perspective: "1400px" }}
    >
      <FloatingChips prefix={id} />

      <div
        data-gsap="toast"
        className={`absolute z-30 ${
          framed
            ? "right-[3%] top-[3%] sm:right-[5%] sm:top-[5%]"
            : "right-[3%] top-[6%] sm:right-[7%] sm:top-[8%]"
        }`}
        style={{ willChange: "transform, opacity" }}
      >
        <DepositToast text={toast} />
      </div>

      <div
        data-gsap="main-card"
        className={`relative z-10 ${
          framed
            ? "w-full max-w-none"
            : "w-[84%] max-w-[min(100%,320px)] sm:max-w-[340px]"
        }`}
        style={{ willChange: "transform, opacity, filter", transformStyle: "preserve-3d" }}
      >
        {framed ? <PhoneFrame>{balance}</PhoneFrame> : balance}
      </div>

      <div
        data-gsap="mini"
        className={
          framed
            ? "absolute bottom-[6%] left-[4%] z-20 w-[52%] max-w-[180px]"
            : "absolute bottom-[5%] left-[3%] z-20 w-[56%] max-w-[min(100%,220px)] sm:left-[5%] sm:max-w-[240px]"
        }
        style={{
          willChange: "transform, opacity",
          filter: framed
            ? undefined
            : "drop-shadow(0 16px 32px rgba(28,28,28,0.12))",
        }}
      >
        {!framed ? (
          <div
            className="pointer-events-none absolute -bottom-2 -right-2 -z-10 h-full w-full rounded-[1.4rem] bg-white/40 backdrop-blur-sm"
            aria-hidden
          />
        ) : null}
        <UpcomingMiniCard />
      </div>
    </div>
  );
}

function SceneForContent({
  id,
  content,
  framed = false,
}: {
  id: string;
  content: StageContent;
  framed?: boolean;
}) {
  return content.kind === "loan" ? (
    <LoanScene id={id} toast={content.toast} loan={content.loan} framed={framed} />
  ) : (
    <AdvanceScene
      id={id}
      toast={content.toast}
      advance={content.advance}
      framed={framed}
    />
  );
}

/**
 * Shared product stage: all product scenes stacked; GSAP choreographs
 * individual nodes (toast, cards, progress, rings, bg) — not opacity slides.
 */
export function ProductStage({
  layers,
  ids,
  framed = false,
  className = "",
  initialCream,
  initialRing,
}: {
  layers: StageContent[];
  /** Stable scene ids matching product ids (automotriz, garantia, hipotecas) */
  ids: string[];
  framed?: boolean;
  className?: string;
  initialCream?: string;
  initialRing?: string;
}) {
  const cream = initialCream ?? layers[0]?.cream ?? "#F7F1E8";
  const ring = initialRing ?? layers[0]?.ring ?? "rgba(245,130,32,0.18)";

  return (
    <div
      data-gsap="stage-root"
      className={`relative h-full w-full overflow-hidden ${
        framed
          ? "min-h-[28rem] sm:min-h-[30rem]"
          : "min-h-[22rem] sm:min-h-[26rem] lg:min-h-full"
      } ${className}`}
    >
      {/* Cream backdrop — color tweened by GSAP */}
      <div
        data-gsap="stage-bg"
        className="absolute inset-0"
        style={{ backgroundImage: creamAtmosphere(cream), backgroundColor: cream }}
        aria-hidden
      />

      {/* Concentric rings — scale/pulse via GSAP */}
      <div
        data-gsap="stage-rings"
        className="pointer-events-none absolute inset-0 origin-center opacity-[0.85]"
        style={{ backgroundImage: ringBackground(ring) }}
        aria-hidden
      />

      <div
        data-gsap="stage-rings-inner"
        className="pointer-events-none absolute inset-[8%] origin-center rounded-full opacity-40"
        style={{
          backgroundImage: ringBackground(ring),
          backgroundSize: "100% 100%",
        }}
        aria-hidden
      />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035] mix-blend-multiply"
        style={{ backgroundImage: NOISE_URI, backgroundSize: "180px 180px" }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 75% 70% at 50% 45%, transparent 40%, rgba(28,28,28,0.07) 100%)",
        }}
        aria-hidden
      />

      <div
        className={`relative h-full w-full ${
          framed
            ? "px-3 py-6 sm:px-5 sm:py-8"
            : "px-3 py-8 sm:px-6 sm:py-10 md:py-12 lg:px-10 lg:py-14"
        }`}
      >
        {layers.map((layer, i) => (
          <SceneForContent
            key={ids[i] ?? i}
            id={ids[i] ?? `scene-${i}`}
            content={layer}
            framed={framed}
          />
        ))}
      </div>
    </div>
  );
}

/** Mobile single-product stage (one layer, lighter GSAP reveal) */
export function MobileProductStage({
  content,
  id,
  className = "",
}: {
  content: StageContent;
  id: string;
  className?: string;
}) {
  return (
    <ProductStage
      layers={[content]}
      ids={[id]}
      framed
      className={className}
      initialCream={content.cream}
      initialRing={content.ring}
    />
  );
}

/** @deprecated Prefer ProductStage — kept for any external imports */
export function StageFrame({
  layers,
  framed = false,
  className = "",
}: {
  layers: StageContent[];
  activeIndex?: number;
  progress?: number;
  framed?: boolean;
  className?: string;
}) {
  const ids = layers.map((_, i) => `legacy-${i}`);
  return (
    <ProductStage
      layers={layers}
      ids={ids}
      framed={framed}
      className={className}
    />
  );
}
