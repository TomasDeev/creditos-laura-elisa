"use client";

/** HTML/CSS app mockups inspired by Possible Finance Loan/Advance stage UI */

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
        className={`inline-flex ${dim} items-center justify-center rounded-full bg-[#0577FF] text-white shadow-[0_2px_8px_rgba(5,119,255,0.35)]`}
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
        className={`inline-flex ${dim} items-center justify-center rounded-full bg-[#1c1c1c] text-white`}
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
        className={`inline-flex ${dim} flex-col items-center justify-center rounded-full border-[1.5px] border-[#0577FF]/55 bg-white text-[0.58rem] font-bold leading-tight text-[#1c1c1c] sm:text-[0.62rem]`}
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
          ? "border-[1.5px] border-[#0577FF]/55 text-[#1c1c1c]"
          : "border border-black/12 text-black/45"
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
        <p className="text-[0.8rem] font-medium text-[#1c1c1c]/88">{label}</p>
        {showLine ? (
          <div className="mt-1.5 h-px w-[72%] bg-black/8" aria-hidden />
        ) : null}
      </div>
      <span className="shrink-0 text-[0.85rem] font-semibold tabular-nums text-[#1c1c1c]">
        {amount}
      </span>
    </div>
  );
}

export function DepositToast({ text }: { text: string }) {
  return (
    <div className="inline-flex max-w-[16.5rem] items-center gap-2.5 rounded-2xl border border-black/6 bg-white px-3.5 py-2.5 shadow-[0_12px_32px_rgba(28,28,28,0.14)]">
      <span
        className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#0577FF] text-white"
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
      <p className="text-[0.72rem] font-semibold leading-snug tracking-[-0.01em] text-[#1c1c1c]">
        {text}
      </p>
    </div>
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
  ] as Array<
    | { done: true }
    | { d1: string; d2: string; active?: boolean }
  >,
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

  return (
    <div className="w-full overflow-hidden rounded-[1.65rem] border border-black/6 bg-white shadow-[0_28px_70px_rgba(28,28,28,0.16)]">
      <div className="px-5 pb-2 pt-5 sm:px-6 sm:pt-6">
        <p className="text-[0.95rem] font-semibold tracking-[-0.02em] text-[#1c1c1c]">
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
          className="mt-5 flex h-11 w-full items-center justify-center rounded-full bg-[#1c1c1c] text-sm font-semibold text-white"
        >
          {rescheduleLabel}
        </button>
      </div>

      <div className="border-t border-black/6 px-5 py-4 sm:px-6">
        <p className="text-[0.9rem] font-semibold tracking-[-0.015em] text-[#1c1c1c]">
          {paidLabel}
        </p>
        <div className="relative mt-3 h-1.5 w-full rounded-full bg-black/8">
          <div
            className="absolute inset-y-0 left-0 rounded-full bg-[#0577FF]"
            style={{ width: `${pct}%` }}
          />
          <span
            className="absolute top-1/2 flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full bg-[#0577FF] text-white shadow-[0_2px_8px_rgba(5,119,255,0.4)]"
            style={{ left: `calc(${pct}% - 12px)` }}
            aria-hidden
          >
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
              <path
                d="M6.5 12.5 10.2 16 17.5 8"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </div>
      </div>

      <div className="border-t border-black/6 px-5 pb-5 pt-3 sm:px-6">
        <p className="mb-1 text-[0.8rem] font-semibold text-[#1c1c1c]/75">
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
    </div>
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
  return (
    <div className="w-full overflow-hidden rounded-[1.65rem] border border-black/6 bg-white shadow-[0_28px_70px_rgba(28,28,28,0.16)]">
      <div className="px-5 pb-1 pt-5 sm:px-6 sm:pt-6">
        <p className="text-[0.8rem] font-medium text-[#1c1c1c]/55">
          {balanceLabel}
        </p>
        <p className="mt-1 text-[2.35rem] font-extrabold leading-none tracking-[-0.04em] text-[#1c1c1c] sm:text-[2.6rem]">
          {balance}
        </p>
        <div className="mt-4 flex items-center justify-between gap-3">
          <span className="text-[0.78rem] font-medium text-[#1c1c1c]/55">
            {paidLabel}
          </span>
          <span className="text-[0.85rem] font-semibold tabular-nums text-[#1c1c1c]">
            {paidAmount}
          </span>
        </div>
        <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-black/8">
          <div className="h-full w-[28%] rounded-full bg-[#1c1c1c]/55" />
        </div>
        <button
          type="button"
          tabIndex={-1}
          className="mt-5 flex h-11 w-full items-center justify-center rounded-full bg-[#1c1c1c] text-sm font-semibold text-white"
        >
          {payLabel}
        </button>
      </div>

      <div className="mt-4 border-t border-black/6 px-5 pb-5 pt-3 sm:px-6">
        <p className="mb-1 text-[0.8rem] font-semibold text-[#1c1c1c]/75">
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
    </div>
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
  return (
    <div className="w-full overflow-hidden rounded-[1.35rem] border border-black/6 bg-white px-4 py-4 shadow-[0_18px_48px_rgba(28,28,28,0.14)] sm:px-5">
      <p className="text-[0.85rem] font-semibold tracking-[-0.02em] text-[#1c1c1c]">
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
        className="mt-4 flex h-10 w-full items-center justify-center rounded-full bg-[#1c1c1c] text-sm font-semibold text-white"
      >
        {rescheduleLabel}
      </button>
    </div>
  );
}
