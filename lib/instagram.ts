export type IgSlide = {
  kind: "post" | "reel";
  href: string;
  src: string;
  caption: string;
  videoSrc?: string;
};

export const IG_SLIDES: IgSlide[] = [
  { kind: "post", href: "https://www.instagram.com/p/DdRTTlFDWxR/", src: "/ig/post-1.jpg", caption: "¿Pensando en estrenar auto? En Laura Elisa Financiera te hacemos el proceso súper sencillo. A…" },
  { kind: "post", href: "https://www.instagram.com/p/DdHHQOsICRA/", src: "/ig/post-2.jpg", caption: "¡Deja de imaginarlo y empieza a manejarlo! Tu próximo vehículo está más cerca de lo que piens…" },
  { kind: "post", href: "https://www.instagram.com/p/DZLBF0NCaBP/", src: "/ig/post-3.jpg", caption: "Financiamiento Laura Elisa" },
  { kind: "post", href: "https://www.instagram.com/p/DY34l34iW-k/", src: "/ig/post-4.jpg", caption: "Conducir el auto de tus sueños es más fácil de lo que piensas. en Laura Elisa, te ofrecemos l…" },
  { kind: "post", href: "https://www.instagram.com/p/DYXKO0tgScT/", src: "/ig/post-5.jpg", caption: "¡Deja de soñarlo y empieza a manejarlo! Cuerpo: En Laura Elisa hacemos que el camino hacia tu…" },
  { kind: "post", href: "https://www.instagram.com/p/DYRQqw1jVRI/", src: "/ig/post-6.jpg", caption: "hacemos que el camino hacia tu nuevo auto sea rápido y sin complicaciones. No esperes más par…" },
  { kind: "reel", href: "https://www.instagram.com/reel/DUTOGSwDXW6/", src: "/ig/reel-7.jpg", videoSrc: "/ig/reel-DUTOGSwDXW6.mp4", caption: "Reel Laura Elisa" },
  { kind: "reel", href: "https://www.instagram.com/reel/DRc562fCeN5/", src: "/ig/reel-8.jpg", videoSrc: "/ig/reel-DRc562fCeN5.mp4", caption: "Comprar tu vehículo no tiene por qué ser complicado. En Laura Elisa, te ayudamos a tomar deci…" },
  { kind: "reel", href: "https://www.instagram.com/reel/DQZjE8iiWmg/", src: "/ig/reel-9.jpg", videoSrc: "/ig/reel-DQZjE8iiWmg.mp4", caption: "En Laura Elisa Financiamiento, tu preaprobación puede llegar más rápido de lo que imaginas. P…" },
  { kind: "reel", href: "https://www.instagram.com/reel/DQMlhBZjUZX/", src: "/ig/reel-10.jpg", videoSrc: "/ig/reel-DQMlhBZjUZX.mp4", caption: "Tasa desde 1.8% para que cumplir tus metas no cueste tanto. Financiar tu vehículo con Laura E…" },
];
