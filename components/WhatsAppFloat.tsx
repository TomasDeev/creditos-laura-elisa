"use client";

import { WHATSAPP_URL } from "@/lib/constants";

export function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribir por WhatsApp"
      className="focus-ring fixed wa-float-safe bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 transition hover:scale-105 hover:bg-[#1ebe57] md:bottom-6 md:right-6"
    >
      <svg
        viewBox="0 0 32 32"
        className="h-7 w-7"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M16.04 3C9.4 3 4 8.37 4 14.98c0 2.1.55 4.15 1.6 5.96L4 29l8.27-1.55a12.1 12.1 0 0 0 3.77.6h.01c6.63 0 12.03-5.37 12.03-11.98C28.08 8.37 22.67 3 16.04 3zm0 21.9h-.01a10 10 0 0 1-5.1-1.4l-.37-.22-4.9.92.93-4.78-.24-.39a9.9 9.9 0 0 1-1.52-5.27c0-5.47 4.48-9.92 10.2-9.92 5.73 0 10.2 4.45 10.2 9.92 0 5.48-4.47 9.93-10.19 9.93zm5.6-7.43c-.3-.15-1.8-.89-2.08-.99-.28-.1-.48-.15-.68.15-.2.3-.78.99-.96 1.19-.18.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.49-.9-.8-1.5-1.78-1.68-2.08-.18-.3-.02-.46.13-.61.14-.14.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.68-1.64-.93-2.24-.24-.58-.5-.5-.68-.51h-.58c-.2 0-.53.08-.8.38-.28.3-1.05 1.02-1.05 2.49s1.08 2.89 1.23 3.09c.15.2 2.12 3.24 5.14 4.54.72.31 1.28.5 1.72.64.72.23 1.38.2 1.9.12.58-.09 1.8-.74 2.05-1.45.25-.71.25-1.32.18-1.45-.08-.13-.28-.2-.58-.35z" />
      </svg>
    </a>
  );
}

/** Alias used in layout */
export const WhatsAppWidget = WhatsAppFloat;
