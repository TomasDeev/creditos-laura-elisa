import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { WhatsAppWidget } from "@/components/WhatsAppFloat";
import { RatesPromoPopup } from "@/components/RatesPromoPopup";
import { SiteGate } from "@/components/SiteGate";
import { SITE } from "@/lib/constants";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const title = `${SITE.name} | ${SITE.tagline}`;
const description =
  "Créditos Laura Elisa en República Dominicana. Financiamiento automotriz, hipotecas, préstamos con garantía vehicular y préstamos personales. Tu sueño, nuestro compromiso.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: title,
    template: `%s | ${SITE.name}`,
  },
  description,
  applicationName: SITE.name,
  keywords: [
    "financiamiento automotriz",
    "hipotecas República Dominicana",
    "préstamos con garantía vehicular",
    "préstamos personales",
    "Créditos Laura Elisa",
    "Santo Domingo",
  ],
  authors: [{ name: SITE.name }],
  creator: SITE.name,
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png" }],
    apple: [{ url: "/logo.png" }],
    shortcut: ["/favicon.png"],
  },
  openGraph: {
    type: "website",
    locale: "es_DO",
    url: SITE.url,
    siteName: SITE.name,
    title,
    description,
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: SITE.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/logo.png"],
  },
  alternates: {
    canonical: SITE.url,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#003B8E",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["FinancialService", "LocalBusiness"],
  name: SITE.name,
  description,
  url: SITE.url,
  image: `${SITE.url}/sucursal.jpg`,
  logo: `${SITE.url}/logo.png`,
  email: SITE.email,
  telephone: `+${SITE.whatsappE164}`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Plaza Nica, Av. Hipódromo",
    addressLocality: "Santo Domingo Este",
    postalCode: "11508",
    addressRegion: "Santo Domingo",
    addressCountry: "DO",
  },
  areaServed: {
    "@type": "Country",
    name: "República Dominicana",
  },
  openingHoursSpecification: SITE.hoursStructured.map((h) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek:
      h.days === "Sábado"
        ? ["Saturday"]
        : ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: h.open,
    closes: h.close,
  })),
  sameAs: [SITE.instagram],
  priceRange: "$$",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${plusJakarta.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SiteGate>
          {children}
          <RatesPromoPopup />
          <WhatsAppWidget />
        </SiteGate>
      </body>
    </html>
  );
}
