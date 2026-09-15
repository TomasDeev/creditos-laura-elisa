import { NextResponse } from "next/server";
import { Resend } from "resend";
import { SITE } from "@/lib/constants";

export const runtime = "nodejs";

type Body = {
  nombre?: string;
  correo?: string;
  telefono?: string;
  mensaje?: string;
};

function bad(message: string, status = 400) {
  return NextResponse.json({ error: message }, { status });
}

export async function POST(request: Request) {
  let body: Body;
  try {
    body = (await request.json()) as Body;
  } catch {
    return bad("Solicitud inválida.");
  }

  const nombre = String(body.nombre || "").trim();
  const correo = String(body.correo || "").trim();
  const telefono = String(body.telefono || "").trim();
  const mensaje = String(body.mensaje || "").trim();

  if (nombre.length < 2) {
    return bad("Ingresa tu nombre completo.");
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo)) {
    return bad("Ingresa un correo válido.");
  }
  if (telefono.replace(/\D/g, "").length < 10) {
    return bad("Ingresa un teléfono válido.");
  }
  if (mensaje.length < 10) {
    return bad("El mensaje es demasiado corto.");
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      {
        error:
          "El envío de correos no está configurado. Define RESEND_API_KEY en el servidor o contáctanos por WhatsApp.",
      },
      { status: 503 }
    );
  }

  const to = process.env.CONTACT_TO || SITE.email;
  const from =
    process.env.CONTACT_FROM ||
    `Créditos Laura Elisa <onboarding@resend.dev>`;

  const resend = new Resend(apiKey);

  try {
    const { error } = await resend.emails.send({
      from,
      to: [to],
      replyTo: correo,
      subject: `Nueva solicitud Laura Elisa — ${nombre}`,
      text: [
        `Nombre: ${nombre}`,
        `Correo: ${correo}`,
        `Teléfono: ${telefono}`,
        "",
        "Mensaje:",
        mensaje,
      ].join("\n"),
      html: `
        <h2>Nueva solicitud — Créditos Laura Elisa</h2>
        <p><strong>Nombre:</strong> ${escapeHtml(nombre)}</p>
        <p><strong>Correo:</strong> ${escapeHtml(correo)}</p>
        <p><strong>Teléfono:</strong> ${escapeHtml(telefono)}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${escapeHtml(mensaje).replace(/\n/g, "<br/>")}</p>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return bad("No pudimos enviar el mensaje. Intenta más tarde.", 502);
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return bad("Error interno al enviar. Intenta más tarde.", 500);
  }
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
