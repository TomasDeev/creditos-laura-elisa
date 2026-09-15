import Image from "next/image";
import Link from "next/link";
import { SITE, WHATSAPP_URL } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-[#0c1220] text-white">
      <div className="container-narrow py-16 md:py-20">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3">
              <Image
                src="/logo.svg"
                alt={SITE.name}
                width={44}
                height={44}
                className="h-10 w-10"
              />
              <span className="text-sm font-extrabold leading-tight">
                Créditos
                <br />
                Laura Elisa
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
              {SITE.tagline}. {SITE.slogan}.
            </p>
            <a
              href={SITE.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-orange hover:text-white"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M12 2.16c3.2 0 3.58.01 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.15 3.23-1.66 4.77-4.92 4.92-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85C2.38 3.92 3.9 2.38 7.15 2.23 8.42 2.17 8.8 2.16 12 2.16zm0 1.8c-3.15 0-3.52.01-4.76.07-2.25.1-3.3 1.15-3.4 3.4-.06 1.24-.07 1.61-.07 4.76s.01 3.52.07 4.76c.1 2.24 1.16 3.3 3.4 3.4 1.24.06 1.61.07 4.76.07s3.52-.01 4.76-.07c2.25-.1 3.3-1.16 3.4-3.4.06-1.24.07-1.61.07-4.76s-.01-3.52-.07-4.76c-.1-2.25-1.16-3.3-3.4-3.4-1.24-.06-1.61-.07-4.76-.07zm0 3.06a5.18 5.18 0 1 1 0 10.36 5.18 5.18 0 0 1 0-10.36zm0 8.55a3.37 3.37 0 1 0 0-6.74 3.37 3.37 0 0 0 0 6.74zm6.6-8.8a1.21 1.21 0 1 1-2.42 0 1.21 1.21 0 0 1 2.42 0z" />
              </svg>
              {SITE.instagramHandle}
            </a>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/45">
              Navegación
            </p>
            <ul className="mt-4 space-y-3 text-sm text-white/85">
              <li><Link href="/" className="hover:text-orange">Inicio</Link></li>
              <li><Link href="/nosotros" className="hover:text-orange">Nosotros</Link></li>
              <li><Link href="/productos" className="hover:text-orange">Productos</Link></li>
              <li><Link href="/#sucursal" className="hover:text-orange">Sucursal</Link></li>
              <li><Link href="/#instagram" className="hover:text-orange">Instagram</Link></li>
              <li><Link href="/#faq" className="hover:text-orange">Preguntas frecuentes</Link></li>
              <li><Link href="/#contacto" className="hover:text-orange">Contacto</Link></li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/45">
              Productos
            </p>
            <ul className="mt-4 space-y-3 text-sm text-white/85">
              <li><Link href="/productos" className="hover:text-orange">Financiamiento automotriz</Link></li>
              <li><Link href="/productos" className="hover:text-orange">Garantía vehicular</Link></li>
              <li><Link href="/productos" className="hover:text-orange">Hipotecas</Link></li>
              <li><Link href="/productos" className="hover:text-orange">Préstamos personales</Link></li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/45">
              Contacto
            </p>
            <ul className="mt-4 space-y-3 text-sm text-white/85">
              <li>
                <span className="text-white/55">Dirección: </span>
                {SITE.address}
              </li>
              <li>
                <span className="text-white/55">WhatsApp: </span>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-orange">
                  {SITE.whatsappDisplay}
                </a>
              </li>
              <li>
                <span className="text-white/55">Teléfono: </span>
                <a href={`tel:${SITE.phoneTel}`} className="hover:text-orange">
                  {SITE.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${SITE.email}`} className="hover:text-orange">
                  {SITE.email}
                </a>
              </li>
              <li className="text-white/55">{SITE.hours}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-7 text-sm text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>Todos los derechos reservados — © {SITE.name}</p>
          <p className="font-medium text-white/40">{SITE.slogan}</p>
        </div>
      </div>
    </footer>
  );
}
