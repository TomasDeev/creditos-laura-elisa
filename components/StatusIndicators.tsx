"use client";

import { useEffect, useState } from "react";
import { WHATSAPP_URL } from "@/lib/constants";
import { getAdvisorStatus, getBranchStatus } from "@/lib/hours";

type Props = {
  variant?: "light" | "dark";
  className?: string;
};

export function StatusIndicators({ variant = "dark", className = "" }: Props) {
  const [advisor, setAdvisor] = useState(() => getAdvisorStatus());
  const [branch, setBranch] = useState(() => getBranchStatus());

  useEffect(() => {
    const tick = () => {
      setAdvisor(getAdvisorStatus());
      setBranch(getBranchStatus());
    };
    tick();
    const id = window.setInterval(tick, 60_000);
    return () => window.clearInterval(id);
  }, []);

  const onDark = variant === "dark";
  const card = onDark
    ? "border-white/25 bg-white/10 text-white backdrop-blur-md"
    : "border-border bg-white text-charcoal shadow-sm";
  const muted = onDark ? "text-white/75" : "text-charcoal-muted";

  return (
    <div
      className={`flex flex-col gap-2 sm:flex-row sm:flex-wrap ${className}`}
      aria-live="polite"
    >
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={`focus-ring flex items-center gap-3 rounded-2xl border px-3.5 py-2.5 transition hover:opacity-95 ${card}`}
      >
        <span className="relative flex h-2.5 w-2.5 shrink-0">
          <span
            className={`absolute inline-flex h-full w-full rounded-full opacity-75 ${
              advisor.isOpen ? "animate-ping bg-emerald-400" : "bg-amber-400/80"
            }`}
          />
          <span
            className={`relative inline-flex h-2.5 w-2.5 rounded-full ${
              advisor.isOpen ? "bg-emerald-400" : "bg-amber-400"
            }`}
          />
        </span>
        <span className="min-w-0 text-left">
          <span className="block text-xs font-bold leading-tight sm:text-sm">
            {advisor.label}
          </span>
          <span className={`block text-[11px] leading-snug sm:text-xs ${muted}`}>
            {advisor.detail}
          </span>
        </span>
      </a>

      <div className={`flex items-center gap-3 rounded-2xl border px-3.5 py-2.5 ${card}`}>
        <span className="relative flex h-2.5 w-2.5 shrink-0">
          <span
            className={`absolute inline-flex h-full w-full rounded-full opacity-75 ${
              branch.isOpen ? "animate-ping bg-emerald-400" : "bg-white/50"
            }`}
          />
          <span
            className={`relative inline-flex h-2.5 w-2.5 rounded-full ${
              branch.isOpen ? "bg-emerald-400" : onDark ? "bg-white/60" : "bg-charcoal/40"
            }`}
          />
        </span>
        <span className="min-w-0 text-left">
          <span className="block text-xs font-bold leading-tight sm:text-sm">
            {branch.label}
          </span>
          <span className={`block text-[11px] leading-snug sm:text-xs ${muted}`}>
            {branch.detail}
          </span>
        </span>
      </div>
    </div>
  );
}
