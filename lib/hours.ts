/** Business hours in America/Santo_Domingo */
export type OpenStatus = {
  isOpen: boolean;
  label: string;
  detail: string;
};

function partsInSantoDomingo(date = new Date()) {
  const fmt = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Santo_Domingo",
    weekday: "short",
    hour: "numeric",
    minute: "numeric",
    hour12: false,
  });
  const parts = Object.fromEntries(
    fmt.formatToParts(date).map((p) => [p.type, p.value])
  );
  const weekday = parts.weekday; // Sun, Mon, ...
  const hour = Number(parts.hour === "24" ? "0" : parts.hour);
  const minute = Number(parts.minute);
  return { weekday, minutes: hour * 60 + minute };
}

export function getBranchStatus(now = new Date()): OpenStatus {
  const { weekday, minutes } = partsInSantoDomingo(now);
  const dayMap: Record<string, [number, number] | null> = {
    Mon: [9 * 60, 18 * 60],
    Tue: [9 * 60, 18 * 60],
    Wed: [9 * 60, 18 * 60],
    Thu: [9 * 60, 18 * 60],
    Fri: [9 * 60, 18 * 60],
    Sat: [9 * 60, 13 * 60],
    Sun: null,
  };
  const range = dayMap[weekday] ?? null;
  if (!range) {
    return {
      isOpen: false,
      label: "Sucursal cerrada",
      detail: "Abrimos lunes a sábado · Lun–Vie 9:00–18:00 · Sáb 9:00–13:00",
    };
  }
  const [open, close] = range;
  const isOpen = minutes >= open && minutes < close;
  if (isOpen) {
    return {
      isOpen: true,
      label: "Sucursal abierta ahora",
      detail: "Santo Domingo · Santo Domingo Este",
    };
  }
  return {
    isOpen: false,
    label: "Sucursal cerrada ahora",
    detail: "Horario: Lun–Vie 9:00–18:00 · Sáb 9:00–13:00",
  };
}

export function getAdvisorStatus(now = new Date()): OpenStatus {
  const branch = getBranchStatus(now);
  if (branch.isOpen) {
    return {
      isOpen: true,
      label: "Asesor en línea",
      detail: "Listo para iniciar tu cotización por WhatsApp",
    };
  }
  return {
    isOpen: false,
    label: "Asesor fuera de horario",
    detail: "Déjanos tu mensaje; te contactamos al abrir",
  };
}
