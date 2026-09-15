export const SITE = {
  name: "Créditos Laura Elisa",
  tagline: "Financiamientos e hipotecas",
  slogan: "Tu sueño, nuestro compromiso",
  url: "https://creditoslauraelisa.com",
  email: "info@creditoslauraelisa.com",
  whatsappDisplay: "(809) 819-7385",
  whatsappE164: "18098197385",
  phoneDisplay: "(809) 334-1973",
  phoneTel: "+18093341973",
  address: "Plaza Nica, Av. Hipódromo, Santo Domingo Este 11508",
  instagram: "https://www.instagram.com/financiamiento_lauraelisa/",
  instagramHandle: "@financiamiento_lauraelisa",
  hours: "Lun–Vie 9:00 AM–6:00 PM · Sáb 9:00 AM–1:00 PM",
  hoursStructured: [
    { days: "Lunes a Viernes", open: "09:00", close: "18:00" },
    { days: "Sábado", open: "09:00", close: "13:00" },
  ],
} as const;

export const WHATSAPP_URL =
  `https://wa.me/${SITE.whatsappE164}?text=${encodeURIComponent(
    "Hola, quiero información sobre un financiamiento con Créditos Laura Elisa"
  )}`;

export const WHATSAPP_PLAIN = `https://wa.me/${SITE.whatsappE164}`;

export const INSTAGRAM_POSTS = [
  "https://www.instagram.com/p/DdRTTlFDWxR/",
  "https://www.instagram.com/p/DdHHQOsICRA/",
  "https://www.instagram.com/p/DZLBF0NCaBP/",
  "https://www.instagram.com/p/DY34l34iW-k/",
  "https://www.instagram.com/p/DYXKO0tgScT/",
  "https://www.instagram.com/p/DYRQqw1jVRI/",
] as const;
