"use client";

import { motion, useReducedMotion } from "framer-motion";

/** HTML/CSS app mockups — premium glass + layered chrome for Laura Elisa */

const EASE = [0.22, 1, 0.36, 1] as const;

function CheckDot({
  tone = "blue",
  size = "md",
}: {
  tone?: "blue" | "dark" | "outline" | "muted";
  size?: "sm" | "md";
}) {
  const dim = size === "sm" ? "h-6 w-6" : "h-11 w-11 sm:h-12 sm:w-12";
  if (tone === "blue") {
    return (
      <span
        className={`inline-flex ${dim} items-center justify-center rounded-full bg-[#0577FF] text-white shadow-[0_4px_14px_rgba(5,119,255,0.45),inset_0_1px_0_rgba(255,255,255,0.35)]`}
        aria-hidden
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
          <path
            d="M6.5 12.5 10.2 16 17.5 8"
            stroke="currentColor"
            strokeWidth="2.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    );
  }
  if (tone === "dark") {
    return (
      <span
        className={`inline-flex ${dim} items-center justify-center rounded-full bg-[#1c1c1c] text-white shadow-[0_3px_10px_rgba(28,28,28,0.35),inset_0_1px_0_rgba(255,255,255,0.12)]`}
        aria-hidden
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
          <path
            d="M6.5 12.5 10.2 16 17.5 8"
            stroke="currentColor"
            strokeWidth="2.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    );
  }
  if (tone === "outline") {
    return (
      <span
        className={`inline-flex ${dim} flex-col items-center justify-center rounded-full border-[1.5px] border-[#0577FF]/55 bg-white text-[0.58rem] font-bold leading-tight text-[#1c1c1c] shadow-[0_2px_8px_rgba(5,119,255,0.12)] sm:text-[0.62rem]`}
      />
    );
  }
  return (
    <span
      className={`inline-flex ${dim} flex-col items-center justify-center rounded-full border border-black/12 bg-white text-[0.58rem] font-semibold leading-tight text-black/45 sm:text-[0.62rem]`}
    />
  );
}

function DateDot({
  line1,
  line2,
  active = false,
}: {
  line1: string;
  line2: string;
  active?: boolean;
}) {
  return (
    <span
      className={`inline-flex h-11 w-11 flex-col items-center justify-center rounded-full bg-white text-center leading-[1.05] sm:h-12 sm:w-12 ${
        active
          ? "border-[1.5px] border-[#0577FF]/60 text-[#1c1c1c] shadow-[0_4px_14px_rgba(5,119,255,0.22)]"
          : "border border-black/10 text-black/45 shadow-[0_1px_3px_rgba(28,28,28,0.06)]"
      }`}
      aria-hidden
    >
      <span className="text-[0.58rem] font-bold sm:text-[0.62rem]">{line1}</span>
      <span className="text-[0.58rem] font-semibold sm:text-[0.62rem]">{line2}</span>
    </span>
  );
}

function HistoryRow({
  label,
  amount,
  tone = "blue",
  showLine = true,
}: {
  label: string;
  amount: string;
  tone?: "blue" | "dark";
  showLine?: boolean;
}) {
  return (
    <div className="relative flex items-center gap-3 py-2.5">
      <CheckDot tone={tone} size="sm" />
      <div className="min-w-0 flex-1">
        <p className="text-[0.8rem] font-medium tracking-[-0.01em] text-[#1c1c1c]/88">
          {label}
        </p>
        {showLine ? (
          <div className="mt-1.5 h-px w-[72%] bg-gradient-to-r from-black/10 to-transparent" aria-hidden />
        ) : null}
      </div>
      <span className="shrink-0 text-[0.85rem] font-semibold tabular-nums tracking-[-0.02em] text-[#1c1c1c]">
        {amount}
      </span>
    </div>
  );
}

const cardShell =
  "relative w-full overflow-hidden rounded-[1.75rem] border border-white/70 bg-white/95 backdrop-blur-md";
const cardShadow =
  "shadow-[0_4px_6px_rgba(28,28,28,0.04),0_22px_50px_rgba(28,28,28,0.14),0_40px_90px_rgba(0,59,142,0.10)]";
const cardInnerGlow =
  "before:pointer-events-none before:absolute before:inset-0 before:rounded-[1.75rem] before:shadow-[inset_0_1px_0_rgba(255,255,255,0.9),inset_0_0_0_1px_rgba(255,255,255,0.35)] before:content-['']";

export function DepositToast({ text }: { text: string }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className="inline-flex max-w-[17rem] items-center gap-2.5 rounded-2xl border border-white/80 bg-white/92 px-3.5 py-2.5 backdrop-blur-md shadow-[0_8px_24px_rgba(28,28,28,0.12),0_20px_48px_rgba(0,59,142,0.10),inset_0_1px_0_rgba(255,255,255,0.9)]"
      initial={reduce ? false : { opacity: 0, y: 8, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.4, ease: EASE }}
    >
      <span
        className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#0577FF] to-[#003B8E] text-white shadow-[0_4px_12px_rgba(5,119,255,0.45),inset_0_1px_0_rgba(255,255,255,0.3)]"
        aria-hidden
      >
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
          <rect
            x="3.5"
            y="6"
            width="17"
            height="12"
            rx="2.5"
            stroke="currentColor"
            strokeWidth="1.8"
          />
          <path
            d="M3.5 10h17"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <circle cx="12" cy="14.5" r="1.4" fill="currentColor" />
        </svg>
      </span>
      <p className="text-[0.72rem] font-semibold leading-snug tracking-[-0.015em] text-[#1c1c1c]">
        {text}
      </p>
    </motion.div>
  );
}

/** Loan-style: Upcoming payments + progress + history */
export function UpcomingPaymentsCard({
  title = "Próximos pagos",
  dates = [
    { done: true },
    { done: true },
    { d1: "22", d2: "Jul", active: true },
    { d1: "5", d2: "Ago" },
  ] as Array<{ done: true } | { d1: string; d2: string; active?: boolean }>,
  rescheduleLabel = "Reprogramar",
  paidLabel = "RD$45,000 pagado del total",
  progress = 0.42,
  history = [
    { label: "Segunda cuota", amount: "RD$22,500", tone: "blue" as const },
    { label: "Primera cuota", amount: "RD$22,500", tone: "blue" as const },
    { label: "Desembolso", amount: "RD$180,000", tone: "dark" as const },
  ],
}: {
  title?: string;
  dates?: Array<{ done: true } | { d1: string; d2: string; active?: boolean }>;
  rescheduleLabel?: string;
  paidLabel?: string;
  progress?: number;
  history?: Array<{ label: string; amount: string; tone: "blue" | "dark" }>;
}) {
  const pct = Math.max(0.08, Math.min(1, progress)) * 100;
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={`${cardShell} ${cardShadow} ${cardInnerGlow}`}
      initial={reduce ? false : { opacity: 0, y: 18, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.45, ease: EASE }}
    >
      {/* Soft top sheen */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[rgba(5,119,255,0.06)] to-transparent"
        aria-hidden
      />

      <div className="relative px-5 pb-2 pt-5 sm:px-6 sm:pt-6">
        <p className="text-[0.7rem] font-semibold uppercase tracking-[0.08em] text-[#003B8E]/55">
          Laura Elisa
        </p>
        <p className="mt-1 text-[1.05rem] font-bold tracking-[-0.03em] text-[#1c1c1c]">
          {title}
        </p>
        <div className="mt-4 flex items-center justify-between gap-2">
          {dates.map((d, i) =>
            "done" in d ? (
              <CheckDot key={i} tone="blue" />
            ) : (
              <DateDot
                key={i}
                line1={d.d1}
                line2={d.d2}
                active={Boolean(d.active)}
              />
            )
          )}
        </div>
        <button
          type="button"
          tabIndex={-1}
          className="mt-5 flex h-11 w-full items-center justify-center rounded-full bg-[#1c1c1c] text-sm font-semibold text-white shadow-[0_6px_16px_rgba(28,28,28,0.28)]"
        >
          {rescheduleLabel}
        </button>
      </div>

      <div className="relative border-t border-black/6 bg-gradient-to-b from-[rgba(248,250,252,0.8)] to-transparent px-5 py-4 sm:px-6">
        <p className="text-[0.9rem] font-semibold tracking-[-0.02em] text-[#1c1c1c]">
          {paidLabel}
        </p>
        <div className="relative mt-3.5 h-2 w-full rounded-full bg-[rgba(0,0,0,0.07)]">
          <motion.div
            className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-[#003B8E] via-[#0577FF] to-[#3D9BFF] shadow-[0_0_12px_rgba(5,119,255,0.55),0_0_24px_rgba(5,119,255,0.25)]"
            initial={reduce ? false : { width: 0 }}
            animate={{ width: `${pct}%` }}
            transition={{ duration: 0.7, delay: 0.15, ease: EASE }}
          />
          <motion.span
            className="absolute top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full bg-gradient-to-br from-[#0577FF] to-[#003B8E] text-white shadow-[0_4px_14px_rgba(5,119,255,0.55),0_0_18px_rgba(5,119,255,0.35),inset_0_1px_0_rgba(255,255,255,0.35)]"
            style={{ left: `calc(${pct}% - 14px)` }}
            initial={reduce ? false : { scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.35, ease: EASE }}
            aria-hidden
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
              <path
                d="M6.5 12.5 10.2 16 17.5 8"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.span>
        </div>
      </div>

      <div className="relative border-t border-black/6 px-5 pb-5 pt-3 sm:px-6">
        <p className="mb-1 text-[0.72rem] font-semibold uppercase tracking-[0.06em] text-[#1c1c1c]/45">
          Historial
        </p>
        <div className="divide-y divide-black/5">
          {history.map((h) => (
            <HistoryRow
              key={h.label}
              label={h.label}
              amount={h.amount}
              tone={h.tone}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

/** Advance-style: Current balance + make payment + history */
export function BalanceCard({
  balanceLabel = "Saldo actual",
  balance = "RD$225,000",
  paidLabel = "Total pagado",
  paidAmount = "RD$75,000",
  payLabel = "Hacer un pago",
  history = [
    { label: "Membresía LE", amount: "RD$1,500", tone: "blue" as const },
    { label: "Primera cuota", amount: "RD$35,000", tone: "blue" as const },
    { label: "Desembolso", amount: "RD$300,000", tone: "dark" as const },
  ],
}: {
  balanceLabel?: string;
  balance?: string;
  paidLabel?: string;
  paidAmount?: string;
  payLabel?: string;
  history?: Array<{ label: string; amount: string; tone: "blue" | "dark" }>;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={`${cardShell} ${cardShadow} ${cardInnerGlow}`}
      initial={reduce ? false : { opacity: 0, y: 18, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.45, ease: EASE }}
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[rgba(0,59,142,0.07)] to-transparent"
        aria-hidden
      />

      <div className="relative px-5 pb-1 pt-5 sm:px-6 sm:pt-6">
        <p className="text-[0.7rem] font-semibold uppercase tracking-[0.08em] text-[#003B8E]/55">
          Laura Elisa
        </p>
        <p className="mt-1.5 text-[0.78rem] font-medium text-[#1c1c1c]/55">
          {balanceLabel}
        </p>
        <p className="mt-1 text-[2.4rem] font-extrabold leading-none tracking-[-0.045em] text-[#1c1c1c] sm:text-[2.65rem]">
          {balance}
        </p>
        <div className="mt-4 flex items-center justify-between gap-3">
          <span className="text-[0.78rem] font-medium text-[#1c1c1c]/55">
            {paidLabel}
          </span>
          <span className="text-[0.85rem] font-semibold tabular-nums tracking-[-0.02em] text-[#1c1c1c]">
            {paidAmount}
          </span>
        </div>
        <div className="relative mt-2.5 h-1.5 w-full overflow-hidden rounded-full bg-[rgba(0,0,0,0.07)]">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-[rgba(28,28,28,0.7)] to-[#003B8E] shadow-[0_0_10px_rgba(0,59,142,0.35)]"
            initial={reduce ? false : { width: 0 }}
            animate={{ width: "28%" }}
            transition={{ duration: 0.65, delay: 0.2, ease: EASE }}
          />
        </div>
        <button
          type="button"
          tabIndex={-1}
          className="mt-5 flex h-11 w-full items-center justify-center rounded-full bg-[#1c1c1c] text-sm font-semibold text-white shadow-[0_6px_16px_rgba(28,28,28,0.28)]"
        >
          {payLabel}
        </button>
      </div>

      <div className="relative mt-4 border-t border-black/6 px-5 pb-5 pt-3 sm:px-6">
        <p className="mb-1 text-[0.72rem] font-semibold uppercase tracking-[0.06em] text-[#1c1c1c]/45">
          Historial
        </p>
        <div className="divide-y divide-black/5">
          {history.map((h) => (
            <HistoryRow
              key={h.label}
              label={h.label}
              amount={h.amount}
              tone={h.tone}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

/** Compact upcoming payments mini-card (Advance overlay) */
export function UpcomingMiniCard({
  title = "Próximos pagos",
  rescheduleLabel = "Reprogramar",
}: {
  title?: string;
  rescheduleLabel?: string;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className="relative w-full overflow-hidden rounded-[1.4rem] border border-white/75 bg-white/92 px-4 py-4 backdrop-blur-md shadow-[0_12px_36px_rgba(28,28,28,0.14),0_28px_64px_rgba(0,59,142,0.10),inset_0_1px_0_rgba(255,255,255,0.9)] sm:px-5"
      initial={reduce ? false : { opacity: 0, y: 14, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.4, delay: 0.1, ease: EASE }}
    >
      <p className="text-[0.88rem] font-bold tracking-[-0.025em] text-[#1c1c1c]">
        {title}
      </p>
      <div className="mt-3.5 flex items-center justify-between gap-2">
        <CheckDot tone="blue" />
        <CheckDot tone="blue" />
        <DateDot line1="22" line2="Jul" active />
        <DateDot line1="5" line2="Ago" />
      </div>
      <button
        type="button"
        tabIndex={-1}
        className="mt-4 flex h-10 w-full items-center justify-center rounded-full bg-[#1c1c1c] text-sm font-semibold text-white shadow-[0_5px_14px_rgba(28,28,28,0.25)]"
      >
        {rescheduleLabel}
      </button>
    </motion.div>
  );
}
