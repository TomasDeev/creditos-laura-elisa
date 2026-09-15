"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { SITE, WHATSAPP_URL } from "@/lib/constants";
import { PRODUCTS } from "@/lib/products";

const NAV = [
  { href: "/nosotros", label: "Nosotros", chevron: false },
  { href: "/#faq", label: "FAQ", chevron: false },
  { href: "/#sucursal", label: "Sucursal", chevron: false },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [mega, setMega] = useState(false);
  const pathname = usePathname();
  const megaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    setOpen(false);
    setMega(false);
  }, [pathname]);

  useEffect(() => {
    const onDoc = (e: MouseEvent) => {
      if (!megaRef.current?.contains(e.target as Node)) setMega(false);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-black bg-[#003B8E] text-white">
      <div className="mx-auto flex h-16 max-w-[90rem] items-center justify-between gap-3 px-4 sm:px-6 md:h-[4.5rem] lg:px-8">
        <div className="flex min-w-0 items-center gap-6 lg:gap-10">
          <Link href="/" className="focus-ring flex shrink-0 items-center gap-2.5 rounded-md">
            <Image
              src="/logo.svg"
              alt={SITE.name}
              width={40}
              height={40}
              className="h-9 w-9 shrink-0 ring-1 ring-white/30 rounded-full"
              priority
            />
            <span className="hidden text-[0.95rem] font-extrabold tracking-tight sm:block">
              Laura Elisa
            </span>
          </Link>

          <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Principal">
            <div className="relative" ref={megaRef}>
              <button
                type="button"
                className="focus-ring inline-flex items-center gap-1 rounded-md px-3 py-2 text-[0.9375rem] font-medium text-white transition hover:bg-white/10"
                aria-expanded={mega}
                aria-haspopup="true"
                onClick={() => setMega((v) => !v)}
              >
                Productos
                <svg
                  className={`h-3 w-3 opacity-90 transition ${mega ? "rotate-180" : ""}`}
                  viewBox="0 0 12 12"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden
                >
                  <path d="M2.5 4.5L6 8l3.5-3.5" />
                </svg>
              </button>
              {mega && (
                <div className="absolute left-0 top-full z-50 mt-2 w-[min(92vw,26rem)] overflow-hidden rounded-2xl border border-black/10 bg-white p-1.5 shadow-2xl">
                  {PRODUCTS.map((p) => (
                    <Link
                      key={p.id}
                      href={`/productos#${p.id}`}
                      className="flex items-start gap-3 rounded-xl px-3 py-3 transition hover:bg-[#f0f8ff]"
                      onClick={() => setMega(false)}
                    >
                      <span className="relative mt-0.5 h-9 w-9 shrink-0 overflow-hidden rounded-lg bg-[#e8f0fb]">
                        <Image src={p.icon} alt="" fill className="object-cover p-1" sizes="36px" />
                      </span>
                      <span>
                        <span className="block text-sm font-bold text-[#1c1c1c]">{p.title}</span>
                        <span className="mt-0.5 block text-xs text-[#5c5c5c] line-clamp-1">
                          {p.highlights[0]}
                        </span>
                      </span>
                    </Link>
                  ))}
                  <Link
                    href="/productos"
                    className="mt-0.5 block rounded-xl bg-[#003B8E] px-3 py-2.5 text-center text-sm font-bold text-white"
                    onClick={() => setMega(false)}
                  >
                    Ver todos →
                  </Link>
                </div>
              )}
            </div>

            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="focus-ring inline-flex items-center gap-1 rounded-md px-3 py-2 text-[0.9375rem] font-medium text-white transition hover:bg-white/10"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="hidden items-center gap-2.5 sm:flex">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring inline-flex h-10 items-center justify-center gap-1.5 rounded-full border border-white px-5 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            WhatsApp <span aria-hidden>↗</span>
          </a>
          <Link
            href="/#contacto"
            className="focus-ring inline-flex h-10 items-center justify-center gap-1.5 rounded-full bg-[#F58220] px-5 text-sm font-bold text-[#1c1c1c] transition hover:bg-[#d66d12]"
          >
            Solicitar ahora <span aria-hidden>↗</span>
          </Link>
        </div>

        <button
          type="button"
          className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/40 text-white lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setOpen((v) => !v)}
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      <div
        className={`fixed inset-0 z-50 lg:hidden ${open ? "pointer-events-auto" : "pointer-events-none"}`}
        aria-hidden={!open}
      >
        <div
          className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setOpen(false)}
        />
        <div
          id="mobile-nav"
          className={`absolute right-0 top-0 flex h-full w-[min(100%,22rem)] flex-col border-l border-black bg-white text-[#1c1c1c] shadow-2xl transition-transform duration-300 ease-out ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between border-b border-black/10 px-4 py-4">
            <span className="text-sm font-extrabold text-[#003B8E]">{SITE.name}</span>
            <button
              type="button"
              className="focus-ring rounded-lg p-2"
              aria-label="Cerrar"
              onClick={() => setOpen(false)}
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
          </div>
          <nav className="flex flex-1 flex-col gap-0.5 overflow-y-auto p-3" aria-label="Móvil">
            <p className="px-3 py-2 text-[0.65rem] font-bold uppercase tracking-[0.16em] text-[#5c5c5c]">
              Productos
            </p>
            {PRODUCTS.map((p) => (
              <Link
                key={p.id}
                href={`/productos#${p.id}`}
                className="focus-ring rounded-xl px-3 py-3 text-[0.95rem] font-semibold"
                onClick={() => setOpen(false)}
              >
                {p.title}
              </Link>
            ))}
            <div className="my-2 border-t border-black/10" />
            {[
              { href: "/nosotros", label: "Nosotros" },
              { href: "/#faq", label: "FAQ" },
              { href: "/#sucursal", label: "Sucursal" },
              { href: "/#instagram", label: "Instagram" },
              { href: "/#contacto", label: "Contacto" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="focus-ring rounded-xl px-3 py-3 text-[0.95rem] font-semibold"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="space-y-2 border-t border-black/10 p-4">
            <Link
              href="/#contacto"
              className="focus-ring flex h-12 items-center justify-center gap-1 rounded-full bg-[#F58220] text-sm font-bold text-[#1c1c1c]"
              onClick={() => setOpen(false)}
            >
              Solicitar ahora ↗
            </Link>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring flex h-12 items-center justify-center rounded-full border-2 border-[#003B8E] text-sm font-bold text-[#003B8E]"
              onClick={() => setOpen(false)}
            >
              WhatsApp ↗
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
