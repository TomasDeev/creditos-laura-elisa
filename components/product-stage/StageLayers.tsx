"use client";

import { motion, useReducedMotion } from "framer-motion";
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
  /** Optional mock PNG as subtle texture behind cards */
  texture?: string;
  loan?: LoanStageData;
  advance?: AdvanceStageData;
};

function ringBackground(ring: string) {
  return [
    `radial-gradient(circle at 58% 46%, transparent 0, transparent 16%, ${ring} 16.4%, transparent 17%)`,
    `radial-gradient(circle at 58% 46%, transparent 0, transparent 28%, ${ring} 28.4%, transparent 29%)`,
    `radial-gradient(circle at 58% 46%, transparent 0, transparent 40%, ${ring} 40.4%, transparent 41%)`,
    `radial-gradient(circle at 58% 46%, transparent 0, transparent 52%, ${ring} 52.4%, transparent 53%)`,
    `radial-gradient(circle at 58% 46%, transparent 0, transparent 64%, ${ring} 64.4%, transparent 65%)`,
  ].join(", ");
}

function LoanLayer({
  toast,
  loan,
}: {
  toast: string;
  loan?: LoanStageData;
}) {
  const reduce = useReducedMotion();
  return (
    <div className="relative flex h-full w-full items-center justify-center">
      <motion.div
        className="absolute left-[6%] top-[10%] z-20 sm:left-[8%] sm:top-[12%]"
        initial={reduce ? false : { opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
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

      <div className="relative z-10 w-[86%] max-w-[340px] sm:max-w-[360px]">
        <UpcomingPaymentsCard
          paidLabel={loan?.paidLabel}
          progress={loan?.progress}
          history={loan?.history}
        />
      </div>
    </div>
  );
}

function AdvanceLayer({
  toast,
  advance,
}: {
  toast: string;
  advance?: AdvanceStageData;
}) {
  const reduce = useReducedMotion();
  return (
    <div className="relative flex h-full w-full items-center justify-center">
      <motion.div
        className="absolute right-[5%] top-[8%] z-30 sm:right-[8%] sm:top-[10%]"
        initial={reduce ? false : { opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
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

      <div className="relative z-10 w-[82%] max-w-[320px] sm:max-w-[340px]">
        <BalanceCard
          balance={advance?.balance}
          paidAmount={advance?.paidAmount}
          history={advance?.history}
        />
      </div>

      <motion.div
        className="absolute bottom-[7%] left-[4%] z-20 w-[58%] max-w-[220px] sm:left-[6%] sm:max-w-[240px]"
        initial={reduce ? false : { opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
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
        >
          <UpcomingMiniCard />
        </motion.div>
      </motion.div>
    </div>
  );
}

export function StageLayer({
  content,
  active,
}: {
  content: StageContent;
  active: boolean;
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
      <div
        className="absolute inset-0"
        style={{ backgroundColor: content.cream }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{ backgroundImage: ringBackground(content.ring) }}
        aria-hidden
      />
      {content.texture ? (
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `url(${content.texture})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          aria-hidden
        />
      ) : null}
      <div className="relative h-full w-full px-4 py-10 sm:px-8 md:py-12 lg:px-10 lg:py-14">
        {content.kind === "loan" ? (
          <LoanLayer toast={content.toast} loan={content.loan} />
        ) : (
          <AdvanceLayer toast={content.toast} advance={content.advance} />
        )}
      </div>
    </div>
  );
}

export function StageFrame({
  layers,
  activeIndex,
}: {
  layers: StageContent[];
  activeIndex: number;
}) {
  return (
    <div className="relative h-full min-h-[22rem] w-full overflow-hidden sm:min-h-[26rem] lg:min-h-full">
      {layers.map((layer, i) => (
        <StageLayer key={i} content={layer} active={i === activeIndex} />
      ))}
    </div>
  );
}
