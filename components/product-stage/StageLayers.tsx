"use client";

import { motion, useReducedMotion } from "framer-motion";
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
  /** Optional mock PNG — kept for API compat; CSS atmosphere preferred */
  texture?: string;
  loan?: LoanStageData;
  advance?: AdvanceStageData;
};

function clamp(n: number, min: number, max: number) {
  return Math.min(max, Math.max(min, n));
}

function parseColor(c: string): [number, number, number, number] {
  const hex = c.trim();
  if (hex.startsWith("#")) {
    const h = hex.slice(1);
    const full =
      h.length === 3
        ? h
            .split("")
            .map((ch) => ch + ch)
            .join("")
        : h;
    const n = parseInt(full, 16);
    return [(n >> 16) & 255, (n >> 8) & 255, n & 255, 1];
  }
  const m = hex.match(/rgba?\(\s*([^\)]+)\s*\)/i);
  if (m) {
    const parts = m[1].split(",").map((s) => parseFloat(s.trim()));
    return [parts[0] || 0, parts[1] || 0, parts[2] || 0, parts[3] ?? 1];
  }
  return [247, 241, 232, 1];
}

/** Lerp hex / rgb / rgba colors for cream + ring atmospheres */
export function lerpColor(a: string, b: string, t: number): string {
  const T = clamp(t, 0, 1);
  const A = parseColor(a);
  const B = parseColor(b);
  const r = Math.round(A[0] + (B[0] - A[0]) * T);
  const g = Math.round(A[1] + (B[1] - A[1]) * T);
  const bl = Math.round(A[2] + (B[2] - A[2]) * T);
  const alpha = A[3] + (B[3] - A[3]) * T;
  if (alpha < 0.999) {
    return `rgba(${r},${g},${bl},${Number(alpha.toFixed(4))})`;
  }
  return `rgb(${r},${g},${bl})`;
}

function lerpStageAtmosphere(layers: StageContent[], progress: number) {
  if (layers.length === 0) {
    return { cream: "#F7F1E8", ring: "rgba(245,130,32,0.18)" };
  }
  if (layers.length === 1) {
    return { cream: layers[0].cream, ring: layers[0].ring };
  }
  const max = layers.length - 1;
  const p = clamp(progress, 0, max);
  const i0 = Math.floor(p);
  const i1 = Math.min(i0 + 1, max);
  const t = p - i0;
  return {
    cream: lerpColor(layers[i0].cream, layers[i1].cream, t),
    ring: lerpColor(layers[i0].ring, layers[i1].ring, t),
  };
}

/** Soft multi-stop concentric rings */
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

/** Subtle CSS noise via SVG fractalNoise data-URI */
const NOISE_URI =
  "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.55'/%3E%3C/svg%3E\")";

function StageBackdrop({ cream, ring }: { cream: string; ring: string }) {
  return (
    <>
      <div
        className="absolute inset-0"
        style={{ backgroundImage: creamAtmosphere(cream) }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.85]"
        style={{ backgroundImage: ringBackground(ring) }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035] mix-blend-multiply"
        style={{
          backgroundImage: NOISE_URI,
          backgroundSize: "180px 180px",
        }}
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

function LoanLayer({
  toast,
  loan,
  framed = false,
  parallax = 0,
}: {
  toast: string;
  loan?: LoanStageData;
  framed?: boolean;
  /** Extra slide-local offset for toast parallax (scroll scrub) */
  parallax?: number;
}) {
  const reduce = useReducedMotion();

  const card = (
    <UpcomingPaymentsCard
      paidLabel={loan?.paidLabel}
      progress={loan?.progress}
      history={loan?.history}
    />
  );

  return (
    <div className="relative flex h-full w-full items-center justify-center">
      <motion.div
        className={`absolute z-20 ${
          framed
            ? "left-[4%] top-[4%] sm:left-[6%] sm:top-[6%]"
            : "left-[4%] top-[8%] sm:left-[7%] sm:top-[10%]"
        }`}
        style={
          reduce
            ? undefined
            : { y: parallax * -28, x: parallax * -8 }
        }
        initial={reduce ? false : { opacity: 0, y: 10 }}
        animate={reduce ? { opacity: 1 } : { opacity: 1 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          animate={reduce ? undefined : { y: [0, -5, 0] }}
          transition={
            reduce
              ? undefined
              : { duration: 4.2, repeat: Infinity, ease: "easeInOut" }
          }
        >
          <DepositToast text={toast} />
        </motion.div>
      </motion.div>

      <div
        className={`relative z-10 ${
          framed
            ? "w-full max-w-none"
            : "w-[88%] max-w-[min(100%,340px)] sm:max-w-[360px]"
        }`}
        style={
          reduce
            ? undefined
            : { transform: `translateY(${parallax * 12}px)` }
        }
      >
        {framed ? <PhoneFrame>{card}</PhoneFrame> : card}
      </div>
    </div>
  );
}

function AdvanceLayer({
  toast,
  advance,
  framed = false,
  parallax = 0,
}: {
  toast: string;
  advance?: AdvanceStageData;
  framed?: boolean;
  parallax?: number;
}) {
  const reduce = useReducedMotion();

  const balance = (
    <BalanceCard
      balance={advance?.balance}
      paidAmount={advance?.paidAmount}
      history={advance?.history}
    />
  );

  return (
    <div className="relative flex h-full w-full items-center justify-center">
      <motion.div
        className={`absolute z-30 ${
          framed
            ? "right-[3%] top-[3%] sm:right-[5%] sm:top-[5%]"
            : "right-[3%] top-[6%] sm:right-[7%] sm:top-[8%]"
        }`}
        style={
          reduce
            ? undefined
            : { y: parallax * -32, x: parallax * 10 }
        }
        initial={reduce ? false : { opacity: 0, y: 10 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          animate={reduce ? undefined : { y: [0, -5, 0] }}
          transition={
            reduce
              ? undefined
              : {
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.2,
                }
          }
        >
          <DepositToast text={toast} />
        </motion.div>
      </motion.div>

      <div
        className={`relative z-10 ${
          framed
            ? "w-full max-w-none"
            : "w-[84%] max-w-[min(100%,320px)] sm:max-w-[340px]"
        }`}
        style={
          reduce
            ? undefined
            : { transform: `translateY(${parallax * 10}px)` }
        }
      >
        {framed ? <PhoneFrame>{balance}</PhoneFrame> : balance}
      </div>

      {!framed ? (
        <motion.div
          className="absolute bottom-[5%] left-[3%] z-20 w-[56%] max-w-[min(100%,220px)] sm:left-[5%] sm:max-w-[240px]"
          style={
            reduce
              ? undefined
              : { y: parallax * 36, x: parallax * -6 }
          }
          initial={reduce ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            animate={reduce ? undefined : { y: [0, -4, 0] }}
            transition={
              reduce
                ? undefined
                : {
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.6,
                  }
            }
            className="relative"
            style={{
              filter: "drop-shadow(0 16px 32px rgba(28,28,28,0.12))",
            }}
          >
            <div
              className="pointer-events-none absolute -bottom-2 -right-2 -z-10 h-full w-full rounded-[1.4rem] bg-white/40 backdrop-blur-sm"
              aria-hidden
            />
            <UpcomingMiniCard />
          </motion.div>
        </motion.div>
      ) : (
        <motion.div
          className="absolute bottom-[6%] left-[4%] z-20 w-[52%] max-w-[180px]"
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <UpcomingMiniCard />
        </motion.div>
      )}
    </div>
  );
}

function SlideContent({
  content,
  framed = false,
  parallax = 0,
}: {
  content: StageContent;
  framed?: boolean;
  parallax?: number;
}) {
  return content.kind === "loan" ? (
    <LoanLayer
      toast={content.toast}
      loan={content.loan}
      framed={framed}
      parallax={parallax}
    />
  ) : (
    <AdvanceLayer
      toast={content.toast}
      advance={content.advance}
      framed={framed}
      parallax={parallax}
    />
  );
}

/**
 * Discrete layer (mobile / reduced-motion fallback).
 * Desktop slideshow uses SlideDeck instead.
 */
export function StageLayer({
  content,
  active,
  framed = false,
}: {
  content: StageContent;
  active: boolean;
  framed?: boolean;
}) {
  const reduce = useReducedMotion();

  return (
    <div
      className="absolute inset-0"
      style={{
        opacity: active ? 1 : 0,
        pointerEvents: active ? "auto" : "none",
        zIndex: active ? 2 : 0,
        transition: reduce ? "none" : "opacity 0.35s ease",
      }}
      aria-hidden={!active}
    >
      <StageBackdrop cream={content.cream} ring={content.ring} />
      <div
        className={`relative h-full w-full ${
          framed
            ? "px-3 py-6 sm:px-5 sm:py-8"
            : "px-3 py-8 sm:px-6 sm:py-10 md:py-12 lg:px-10 lg:py-14"
        }`}
      >
        <SlideContent content={content} framed={framed} />
      </div>
    </div>
  );
}

/**
 * Scroll-scrubbed slideshow: each product slide translates / scales / fades
 * based on continuous progress (0 → n-1), not opacity-only swaps.
 */
function SlideDeck({
  layers,
  progress,
  framed = false,
}: {
  layers: StageContent[];
  progress: number;
  framed?: boolean;
}) {
  const reduce = useReducedMotion();
  const atmosphere = lerpStageAtmosphere(layers, progress);

  return (
    <>
      <StageBackdrop cream={atmosphere.cream} ring={atmosphere.ring} />

      <div
        className="absolute inset-0"
        style={{
          perspective: reduce ? undefined : "1400px",
          perspectiveOrigin: "50% 45%",
        }}
      >
        {layers.map((layer, i) => {
          const d = progress - i;
          const abs = Math.abs(d);
          const visible = abs < 1.05;

          if (reduce) {
            // Reduced motion: soft crossfade only
            const opacity = clamp(1 - abs * 1.15, 0, 1);
            return (
              <div
                key={i}
                className="absolute inset-0"
                style={{
                  opacity,
                  pointerEvents: abs < 0.5 ? "auto" : "none",
                  zIndex: Math.round((1 - abs) * 10),
                }}
                aria-hidden={abs >= 0.5}
              >
                <div
                  className={`relative h-full w-full ${
                    framed
                      ? "px-3 py-6 sm:px-5 sm:py-8"
                      : "px-3 py-8 sm:px-6 sm:py-10 md:py-12 lg:px-10 lg:py-14"
                  }`}
                >
                  <SlideContent content={layer} framed={framed} />
                </div>
              </div>
            );
          }

          // Diapositiva: current exits upward as next enters from below
          const yPct = d * -58;
          const scale = 1 - Math.min(abs, 1) * 0.07;
          const opacity = clamp(1 - abs * 0.92, 0, 1);
          const rotateX = clamp(d * 9, -10, 10);
          const blur = abs > 0.55 ? (abs - 0.55) * 6 : 0;

          return (
            <div
              key={i}
              className="absolute inset-0 will-change-transform"
              style={{
                opacity: visible ? opacity : 0,
                transform: visible
                  ? `translate3d(0, ${yPct}%, 0) scale(${scale}) rotateX(${rotateX}deg)`
                  : undefined,
                transformOrigin: "50% 50%",
                transformStyle: "preserve-3d",
                filter: blur > 0.1 ? `blur(${blur.toFixed(2)}px)` : undefined,
                pointerEvents: abs < 0.45 ? "auto" : "none",
                zIndex: Math.round((1 - abs) * 10) + 1,
              }}
              aria-hidden={abs >= 0.5}
            >
              <div
                className={`relative h-full w-full ${
                  framed
                    ? "px-3 py-6 sm:px-5 sm:py-8"
                    : "px-3 py-8 sm:px-6 sm:py-10 md:py-12 lg:px-10 lg:py-14"
                }`}
              >
                <SlideContent
                  content={layer}
                  framed={framed}
                  parallax={clamp(d, -1, 1)}
                />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export function StageFrame({
  layers,
  activeIndex = 0,
  progress,
  framed = false,
  className = "",
}: {
  layers: StageContent[];
  activeIndex?: number;
  /** Continuous scroll progress across slides (0 → n-1). Prefer over activeIndex on desktop. */
  progress?: number;
  framed?: boolean;
  className?: string;
}) {
  const p = progress ?? activeIndex;
  const useSlideshow = layers.length > 1 && !framed;

  return (
    <div
      className={`relative h-full w-full overflow-hidden ${
        framed
          ? "min-h-[28rem] sm:min-h-[30rem]"
          : "min-h-[22rem] sm:min-h-[26rem] lg:min-h-full"
      } ${className}`}
    >
      {useSlideshow ? (
        <SlideDeck layers={layers} progress={p} framed={framed} />
      ) : (
        layers.map((layer, i) => (
          <StageLayer
            key={i}
            content={layer}
            active={i === Math.round(p)}
            framed={framed}
          />
        ))
      )}
    </div>
  );
}
