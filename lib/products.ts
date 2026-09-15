export type Product = {
  id: string;
  title: string;
  badge?: string;
  description: string;
  highlights: string[];
  cta: string;
  href: string;
  icon: string;
};

export const PRODUCTS: Product[] = [
  {
    id: "automotriz",
    title: "Financiamiento Automotriz",
    badge: "Estrella",
    description:
      "Financia el vehículo que quieres — nuevo o usado — con cuotas claras y acompañamiento de principio a fin.",
    highlights: [
      "Vehículos nuevos y usados",
      "Cuotas a tu medida",
      "Proceso ágil y transparente",
    ],
    cta: "Solicitar ahora",
    href: "/#contacto",
    icon: "/icons/product-car.svg",
  },
  {
    id: "garantia",
    title: "Préstamo con Vehículo en Garantía",
    description:
      "Usa tu carro como garantía y quédate con las llaves. Liquidez para negocio, emergencia o inversión — sin dejar de manejar.",
    highlights: [
      "Conservas tus llaves",
      "Liquidez rápida",
      "Sin entregar el vehículo",
    ],
    cta: "Cotizar ahora",
    href: "/#contacto",
    icon: "/icons/product-keys.svg",
  },
  {
    id: "hipotecas",
    title: "Hipotecas",
    description:
      "Financiamiento hipotecario para hacer realidad tu casa o consolidar tu patrimonio con condiciones claras.",
    highlights: [
      "Tu sueño de hogar",
      "Asesoría personalizada",
      "Condiciones transparentes",
    ],
    cta: "Consultar hipoteca",
    href: "/#contacto",
    icon: "/icons/product-home.svg",
  },
];

export const REQUIREMENTS = [
  {
    title: "Cédula vigente",
    body: "Documento de identidad válido y en buen estado.",
  },
  {
    title: "Documentación del bien",
    body: "Matrícula del vehículo, o documentos del inmueble según el producto.",
  },
  {
    title: "Bien evaluable",
    body: "Vehículo o propiedad en condiciones aptas para evaluación.",
  },
  {
    title: "Prueba de ingresos",
    body: "Información que respalde tu capacidad de pago, según el caso.",
  },
];

export const PRODUCT_STEPS = [
  {
    n: "01",
    title: "Cotiza",
    body: "Cuéntanos qué necesitas: auto, hipoteca o liquidez. Formulario, WhatsApp o en sucursal.",
  },
  {
    n: "02",
    title: "Aprobación rápida",
    body: "Evaluamos documentación y te explicamos monto, plazo y condiciones con claridad.",
  },
  {
    n: "03",
    title: "Recibe y avanza",
    body: "Con todo en orden, desembolsamos. Tú sigues con tu rutina — y con tus llaves.",
  },
];
