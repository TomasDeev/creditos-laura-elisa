/** Colorful circular product badges (Possible-style craft) */

export function BadgeAutomotriz({ size = 56 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      aria-hidden
    >
      <circle cx="32" cy="32" r="32" fill="#1A3A6B" />
      <circle cx="32" cy="32" r="24" fill="#F58220" />
      <circle cx="32" cy="32" r="16" fill="#FFD31F" />
      <path
        d="M18 34h28l-3.2-8.2A4 4 0 0 0 39 23H25a4 4 0 0 0-3.8 2.8L18 34Z"
        fill="#003B8E"
      />
      <rect x="20" y="34" width="24" height="5" rx="1.5" fill="#003B8E" />
      <circle cx="24.5" cy="39" r="3" fill="#1c1c1c" stroke="#fff" strokeWidth="1.2" />
      <circle cx="39.5" cy="39" r="3" fill="#1c1c1c" stroke="#fff" strokeWidth="1.2" />
      <path
        d="M44 18c4 2 7 6 8 11"
        stroke="#57C3FF"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M20 46c-4-2-7-6-8-11"
        stroke="#57C3FF"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function BadgeGarantia({ size = 56 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      aria-hidden
    >
      <circle cx="32" cy="32" r="32" fill="#0E3D2C" />
      <rect x="14" y="18" width="28" height="28" rx="6" fill="#1A5C40" />
      <rect x="22" y="22" width="28" height="28" rx="6" fill="#7DFFB3" />
      <circle cx="34" cy="34" r="9" fill="#1c1c1c" />
      <circle cx="34" cy="34" r="4" fill="#FFD31F" />
      <path
        d="M40 38l12 8M48 42l5-4M52 46l5-3.5"
        stroke="#FFD31F"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function BadgeHipotecas({ size = 56 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      aria-hidden
    >
      <circle cx="32" cy="32" r="32" fill="#12324F" />
      <circle cx="32" cy="32" r="26" fill="#E8F4FF" />
      <path d="M32 14 14 30h8v18h20V30h8L32 14Z" fill="#003B8E" />
      <rect x="28" y="36" width="8" height="12" rx="1" fill="#F58220" />
      <rect x="20" y="34" width="6" height="6" rx="1" fill="#7DFFB3" opacity=".9" />
      <path
        d="M48 16c5 3 8 8 9 14"
        stroke="#F58220"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function BadgePersonales({ size = 56 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      aria-hidden
    >
      <circle cx="32" cy="32" r="32" fill="#4A2208" />
      <circle cx="32" cy="32" r="22" fill="#FFD31F" />
      <circle cx="32" cy="32" r="14" fill="#F58220" />
      <path
        d="M32 22v20M28 26h6.5a3.5 3.5 0 0 1 0 7H29a3.5 3.5 0 0 0 0 7H36"
        stroke="#fff"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M48 18c3.5 2 6 5.5 7 10M16 46c-3.5-2-6-5.5-7-10"
        stroke="#57C3FF"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  );
}
