import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

function baseProps({ size = 24, className, ...rest }: IconProps) {
  return {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none" as const,
    stroke: "currentColor",
    strokeWidth: 1.75,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className,
    "aria-hidden": true as const,
    ...rest,
  };
}

export function Bolt(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      <path d="M13 2 4.5 13.5h6L11 22l8.5-11.5h-6L13 2Z" />
    </svg>
  );
}

export function Calendar(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M3 10h18" />
      <path d="M8 3v4" />
      <path d="M16 3v4" />
      <path d="M8 14h.01" />
      <path d="M12 14h.01" />
      <path d="M16 14h.01" />
      <path d="M8 18h.01" />
      <path d="M12 18h.01" />
    </svg>
  );
}

export function ShieldCheck(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      <path d="M12 3 4.5 6.5v5.2c0 4.4 3 7.9 7.5 9.3 4.5-1.4 7.5-4.9 7.5-9.3V6.5L12 3Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

export function Scale(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      <path d="M12 3v18" />
      <path d="M5 7h14" />
      <path d="M5 7 2.8 13.2a2.6 2.6 0 0 0 2.5 3.3h.4a2.6 2.6 0 0 0 2.5-3.3L5 7Z" />
      <path d="m19 7 2.2 6.2a2.6 2.6 0 0 1-2.5 3.3h-.4a2.6 2.6 0 0 1-2.5-3.3L19 7Z" />
      <path d="M8.5 21h7" />
    </svg>
  );
}

export function Shield(props: IconProps) {
  return <ShieldCheck {...props} />;
}


export function Key(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      <circle cx="8" cy="14" r="4.25" />
      <path d="M11.5 11.5 20 3" />
      <path d="M16.5 6.5 19 9" />
      <path d="M14.5 8.5 17 11" />
    </svg>
  );
}

export function Car(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      <path d="M4 14.5 5.2 9.8A2.5 2.5 0 0 1 7.6 8h8.8a2.5 2.5 0 0 1 2.4 1.8L20 14.5" />
      <path d="M3 14.5h18v2.2a1.3 1.3 0 0 1-1.3 1.3H4.3A1.3 1.3 0 0 1 3 16.7v-2.2Z" />
      <circle cx="7.2" cy="16.2" r="1.35" />
      <circle cx="16.8" cy="16.2" r="1.35" />
      <path d="M8.5 8v2.2" />
      <path d="M15.5 8v2.2" />
    </svg>
  );
}

export function Home(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      <path d="m4 11 8-7 8 7" />
      <path d="M6.5 10.5V19a1 1 0 0 0 1 1h3.2v-5h2.6v5H16.5a1 1 0 0 0 1-1v-8.5" />
    </svg>
  );
}

export function Chart(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      <path d="M4 19h16" />
      <path d="M7 16V11" />
      <path d="M12 16V7" />
      <path d="M17 16v-4" />
      <path d="m5 9 4.2-3.2 3.3 2.4L19 4" />
    </svg>
  );
}

export function Check(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      <circle cx="12" cy="12" r="9" />
      <path d="m8.5 12.2 2.4 2.4 4.6-5" />
    </svg>
  );
}

export function ArrowUpRight(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      <path d="M7 17 17 7" />
      <path d="M9 7h8v8" />
    </svg>
  );
}

export function Quote(props: IconProps) {
  return (
    <svg {...baseProps({ ...props, strokeWidth: props.strokeWidth ?? 1.5 })}>
      <path d="M9.5 17H5.8c-.9 0-1.6-.7-1.6-1.6v-3.3c0-2.9 1.9-5.4 4.6-6.3l.7 1.7c-1.6.7-2.7 2.2-2.7 4v.6H9.5V17Z" />
      <path d="M19.8 17h-3.7c-.9 0-1.6-.7-1.6-1.6v-3.3c0-2.9 1.9-5.4 4.6-6.3l.7 1.7c-1.6.7-2.7 2.2-2.7 4v.6h2.7V17Z" />
    </svg>
  );
}

export function Clock(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7.5V12l3 2" />
    </svg>
  );
}

export function Wallet(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      <path d="M4 7.5A1.5 1.5 0 0 1 5.5 6h13A1.5 1.5 0 0 1 20 7.5v9A1.5 1.5 0 0 1 18.5 18h-13A1.5 1.5 0 0 1 4 16.5v-9Z" />
      <path d="M4 10h16" />
      <path d="M15.5 14h1.2" />
    </svg>
  );
}
