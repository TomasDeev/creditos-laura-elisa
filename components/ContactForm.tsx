"use client";

import { FormEvent, useState } from "react";
import { SITE, WHATSAPP_URL } from "@/lib/constants";
import { Reveal } from "./Reveal";

type Status = "idle" | "loading" | "success" | "error";

type FieldErrors = Partial<
  Record<"nombre" | "correo" | "telefono" | "mensaje", string>
>;

function validate(data: {
  nombre: string;
  correo: string;
  telefono: string;
  mensaje: string;
}): FieldErrors {
  const errors: FieldErrors = {};
  if (!data.nombre.trim() || data.nombre.trim().length < 2) {
    errors.nombre = "Ingresa tu nombre completo.";
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.correo.trim())) {
    errors.correo = "Ingresa un correo válido.";
  }
  const phone = data.telefono.replace(/\D/g, "");
  if (phone.length < 10) {
    errors.telefono = "Ingresa un teléfono válido (mín. 10 dígitos).";
  }
  if (!data.mensaje.trim() || data.mensaje.trim().length < 10) {
    errors.mensaje = "Cuéntanos un poco más (mín. 10 caracteres).";
  }
  return errors;
}

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<FieldErrors>({});

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload = {
      nombre: String(fd.get("nombre") || ""),
      correo: String(fd.get("correo") || ""),
      telefono: String(fd.get("telefono") || ""),
      mensaje: String(fd.get("mensaje") || ""),
    };

    const nextErrors = validate(payload);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) {
      setStatus("error");
      setMessage("Revisa los campos marcados.");
      return;
    }

    setStatus("loading");
    setMessage("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await res.json().catch(() => ({}))) as {
        error?: string;
        ok?: boolean;
      };
      if (!res.ok) {
        setStatus("error");
        setMessage(
          data.error ||
            (res.status === 503
              ? "El envío de correos no está configurado. Configura RESEND_API_KEY o escríbenos por WhatsApp."
              : "No pudimos enviar tu mensaje. Intenta de nuevo o usa WhatsApp.")
        );
        return;
      }
      setStatus("success");
      setMessage("¡Listo! Recibimos tu solicitud. Te contactaremos pronto.");
      form.reset();
      setErrors({});
    } catch {
      setStatus("error");
      setMessage("Error de conexión. Intenta de nuevo o usa WhatsApp.");
    }
  }

  const inputClass =
    "focus-ring w-full rounded-2xl border border-border bg-white px-4 py-3 text-sm text-charcoal placeholder:text-charcoal-muted/60 transition hover:border-charcoal/20";

  return (
    <section id="contacto" className="scroll-mt-24 bg-magenta-soft/30 py-14 md:py-16 lg:py-20">
      <div className="container-narrow">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-magenta">
              Contacto
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-charcoal sm:text-4xl">
              Solicita tu préstamo Laura Elisa
            </h2>
            <p className="mt-3 text-base text-charcoal-muted">
              Déjanos tus datos y un asesor te cotiza. También puedes escribirnos
              directo por WhatsApp.
            </p>

            <ul className="mt-8 space-y-4 text-sm text-charcoal">
              <li>
                <span className="font-semibold">WhatsApp / Teléfono:</span>{" "}
                <a
                  href={WHATSAPP_URL}
                  className="text-magenta underline-offset-2 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {SITE.whatsappDisplay}
                </a>
              </li>
              <li>
                <span className="font-semibold">Correo:</span>{" "}
                <a
                  href={`mailto:${SITE.email}`}
                  className="text-magenta underline-offset-2 hover:underline"
                >
                  {SITE.email}
                </a>
              </li>
              <li>
                <span className="font-semibold">Dirección:</span> {SITE.address}
              </li>
              <li>
                <span className="font-semibold">Horario:</span> {SITE.hours}
              </li>
            </ul>
          </Reveal>

          <Reveal delay={0.06}>
            <form
              onSubmit={onSubmit}
              noValidate
              className="rounded-[1.75rem] border border-border bg-surface-alt/50 p-5 shadow-sm sm:p-7"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label htmlFor="nombre" className="mb-1.5 block text-sm font-semibold">
                    Nombre
                  </label>
                  <input
                    id="nombre"
                    name="nombre"
                    autoComplete="name"
                    className={inputClass}
                    placeholder="Tu nombre completo"
                    aria-invalid={!!errors.nombre}
                    aria-describedby={errors.nombre ? "err-nombre" : undefined}
                  />
                  {errors.nombre && (
                    <p id="err-nombre" className="mt-1 text-xs text-error">
                      {errors.nombre}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="correo" className="mb-1.5 block text-sm font-semibold">
                    Correo
                  </label>
                  <input
                    id="correo"
                    name="correo"
                    type="email"
                    autoComplete="email"
                    className={inputClass}
                    placeholder="tu@correo.com"
                    aria-invalid={!!errors.correo}
                    aria-describedby={errors.correo ? "err-correo" : undefined}
                  />
                  {errors.correo && (
                    <p id="err-correo" className="mt-1 text-xs text-error">
                      {errors.correo}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="telefono" className="mb-1.5 block text-sm font-semibold">
                    Teléfono
                  </label>
                  <input
                    id="telefono"
                    name="telefono"
                    type="tel"
                    autoComplete="tel"
                    className={inputClass}
                    placeholder="809 000 0000"
                    aria-invalid={!!errors.telefono}
                    aria-describedby={errors.telefono ? "err-telefono" : undefined}
                  />
                  {errors.telefono && (
                    <p id="err-telefono" className="mt-1 text-xs text-error">
                      {errors.telefono}
                    </p>
                  )}
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="mensaje" className="mb-1.5 block text-sm font-semibold">
                    Mensaje
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    rows={4}
                    className={`${inputClass} resize-y`}
                    placeholder="Cuéntanos sobre tu vehículo y el monto que necesitas…"
                    aria-invalid={!!errors.mensaje}
                    aria-describedby={errors.mensaje ? "err-mensaje" : undefined}
                  />
                  {errors.mensaje && (
                    <p id="err-mensaje" className="mt-1 text-xs text-error">
                      {errors.mensaje}
                    </p>
                  )}
                </div>
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="focus-ring mt-5 inline-flex h-12 w-full items-center justify-center rounded-full bg-orange px-6 text-base font-bold text-white transition hover:bg-orange-dark disabled:cursor-not-allowed disabled:opacity-70"
              >
                {status === "loading" ? "Enviando…" : "Enviar solicitud"}
              </button>

              {message && (
                <p
                  role="status"
                  className={`mt-3 text-sm ${
                    status === "success" ? "text-success" : "text-error"
                  }`}
                >
                  {message}
                </p>
              )}

              <p className="mt-4 text-xs leading-relaxed text-charcoal-muted">
                Si ves un error de configuración (503), hay que definir{" "}
                <code className="rounded bg-white px-1 py-0.5 text-[0.7rem]">
                  RESEND_API_KEY
                </code>{" "}
                en el entorno. Mientras tanto, escríbenos por WhatsApp.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
