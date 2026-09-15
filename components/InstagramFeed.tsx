"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { SITE } from "@/lib/constants";
import { IG_SLIDES } from "@/lib/instagram";
import { Reveal } from "./Reveal";
import { ArrowUpRight } from "./icons";

function InstagramGlyph({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2.16c3.2 0 3.58.01 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.15 3.23-1.66 4.77-4.92 4.92-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85C2.38 3.92 3.9 2.38 7.15 2.23 8.42 2.17 8.8 2.16 12 2.16zm0 1.8c-3.15 0-3.52.01-4.76.07-2.25.1-3.3 1.15-3.4 3.4-.06 1.24-.07 1.61-.07 4.76s.01 3.52.07 4.76c.1 2.24 1.16 3.3 3.4 3.4 1.24.06 1.61.07 4.76.07s3.52-.01 4.76-.07c2.25-.1 3.3-1.16 3.4-3.4.06-1.24.07-1.61.07-4.76s-.01-3.52-.07-4.76c-.1-2.25-1.16-3.3-3.4-3.4-1.24-.06-1.61-.07-4.76-.07zm0 3.06a5.18 5.18 0 1 1 0 10.36 5.18 5.18 0 0 1 0-10.36zm0 8.55a3.37 3.37 0 1 0 0-6.74 3.37 3.37 0 0 0 0 6.74zm6.6-8.8a1.21 1.21 0 1 1-2.42 0 1.21 1.21 0 0 1 2.42 0z" />
    </svg>
  );
}


function MutedAutoplayVideo({
  src,
  poster,
  label,
}: {
  src: string;
  poster: string;
  label: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    v.muted = true;
    const tryPlay = () => {
      const p = v.play();
      if (p) p.catch(() => {});
    };
    tryPlay();
    v.addEventListener("loadeddata", tryPlay);
    return () => v.removeEventListener("loadeddata", tryPlay);
  }, [src]);

  return (
    <video
      ref={ref}
      className="absolute inset-0 h-full w-full object-cover"
      src={src}
      poster={poster}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      aria-label={label}
    />
  );
}

function SlideCard({
  href,
  src,
  caption,
  kind,
  videoSrc,
}: {
  href: string;
  src: string;
  caption: string;
  kind: "post" | "reel";
  videoSrc?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block w-[16.5rem] shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-[#111827] shadow-[0_16px_40px_rgba(0,0,0,0.35)] sm:w-[18.5rem] md:w-[20rem]"
    >
      <div className="relative aspect-[4/5] w-full">
        {kind === "reel" && videoSrc ? (
          <MutedAutoplayVideo src={videoSrc} poster={src} label={caption} />
        ) : (
          <Image
            src={src}
            alt={caption}
            fill
            className="object-cover transition duration-700 group-hover:scale-[1.03]"
            sizes="320px"
          />
        )}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
        {kind === "reel" ? (
          <span className="pointer-events-none absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-black/55 px-2.5 py-1 text-[0.65rem] font-bold uppercase tracking-[0.12em] text-white backdrop-blur-sm">
            <svg className="h-3 w-3" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M8 5.14v13.72L19 12 8 5.14z" />
            </svg>
            Reel
          </span>
        ) : null}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 p-4">
          <p className="line-clamp-3 text-sm font-medium leading-snug text-white/95">
            {caption}
          </p>
          <span className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-[#F58220]">
            Abrir en Instagram
            <ArrowUpRight size={12} />
          </span>
        </div>
      </div>
    </a>
  );
}

export function InstagramFeed() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);
  const slides = [...IG_SLIDES, ...IG_SLIDES];

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    let raf = 0;
    let last = performance.now();
    // Slow, fluid crawl (~0.16 px/ms ≈ 160 px/s)
    const speed = 0.16;

    const tick = (now: number) => {
      const dt = Math.min(32, now - last);
      last = now;
      if (!paused) {
        el.scrollLeft += speed * dt;
        const half = el.scrollWidth / 2;
        if (half > 0 && el.scrollLeft >= half) {
          el.scrollLeft -= half;
        }
      }
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [paused]);

  return (
    <section
      id="instagram"
      className="scroll-mt-24 border-y border-black bg-[#0c1220] text-white"
    >
      <div className="container-narrow py-12 md:py-14 lg:py-16">
        <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-white/75">
              <InstagramGlyph className="h-3.5 w-3.5 text-[#F58220]" />
              Comunidad
            </div>
            <h2 className="mt-4 text-[1.85rem] font-extrabold leading-[1.08] tracking-[-0.035em] sm:text-4xl">
              Síguenos en {SITE.instagramHandle}
            </h2>
            <p className="mt-3 text-base leading-relaxed text-white/65">
              Requisitos, financiamientos y el día a día de {SITE.name}. Posts y
              Reels del perfil, listos para abrir en Instagram.
            </p>
          </div>
          <a
            href={SITE.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-full bg-[#F58220] px-6 text-sm font-bold text-[#1c1c1c] transition hover:brightness-95"
          >
            Ver perfil
            <ArrowUpRight size={15} />
          </a>
        </Reveal>
      </div>

      <div
        className="relative pb-12 md:pb-14 lg:pb-16"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocusCapture={() => setPaused(true)}
        onBlurCapture={(e) => {
          if (!e.currentTarget.contains(e.relatedTarget as Node)) setPaused(false);
        }}
      >
        <div
          ref={trackRef}
          className="flex gap-4 overflow-x-auto px-4 pb-2 scrollbar-none sm:gap-5 sm:px-6 md:px-8"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          aria-label="Carrusel de posts y Reels de Instagram"
        >
          {slides.map((s, i) => (
            <SlideCard
              key={`${s.href}-${i}`}
              href={s.href}
              src={s.src}
              caption={s.caption}
              kind={s.kind}
              videoSrc={s.videoSrc}
            />
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-[#0c1220] to-transparent sm:w-12" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-[#0c1220] to-transparent sm:w-12" />
      </div>
    </section>
  );
}
