"use client";

import { SITE } from "@/lib/constants";

/** Full-bleed looping banner — edge to edge, native wide aspect (taller). */
export function LoopPromoVideo() {
  return (
    <section
      className="w-full overflow-hidden border-b border-black"
      aria-label="Video promocional Laura Elisa"
    >
      <div className="relative w-full aspect-[1968/492] min-h-[6.5rem] sm:min-h-[8rem] md:min-h-[10rem] lg:min-h-[12rem]">
        <video
          className="absolute inset-0 h-full w-full object-cover object-center"
          src="/le-promo-loop.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-label={`Video promocional de ${SITE.name}`}
        />
      </div>
    </section>
  );
}
