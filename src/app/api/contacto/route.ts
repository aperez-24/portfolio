import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { nombre, email, asunto, mensaje } = body;

    // Validación básica
    if (!nombre || !email || !mensaje) {
      return NextResponse.json(
        { error: "Faltan campos obligatorios" },
        { status: 400 }
      );
    }

    // Validación de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Email no válido" },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL!,
      replyTo: email,
      subject: asunto
        ? `[Portfolio] ${asunto}`
        : `[Portfolio] Mensaje de ${nombre}`,
      html: `
        <div style="font-family: 'Inter', sans-serif; max-width: 600px; margin: 0 auto; background: #0e0e13; color: #e4e1e9; padding: 2rem; border-radius: 12px; border: 1px solid #4a4455;">
          
          <div style="margin-bottom: 2rem; padding-bottom: 1.5rem; border-bottom: 1px solid #4a4455;">
            <p style="font-family: monospace; font-size: 0.65rem; text-transform: uppercase; letter-spacing: 0.2em; color: #7c3aed; margin: 0 0 0.5rem 0;">
              Nuevo mensaje desde el portfolio
            </p>
            <h1 style="font-size: 1.5rem; font-weight: 800; margin: 0; color: #e4e1e9;">
              ${asunto || `Mensaje de ${nombre}`}
            </h1>
          </div>

          <table style="width: 100%; border-collapse: collapse; margin-bottom: 2rem;">
            <tr>
              <td style="padding: 0.75rem 0; border-bottom: 1px solid rgba(74,68,85,0.3);">
                <p style="font-family: monospace; font-size: 0.6rem; text-transform: uppercase; letter-spacing: 0.15em; color: #94a3b8; margin: 0 0 0.2rem 0;">Nombre</p>
                <p style="font-size: 0.95rem; color: #e4e1e9; margin: 0; font-weight: 600;">${nombre}</p>
              </td>
            </tr>
            <tr>
              <td style="padding: 0.75rem 0; border-bottom: 1px solid rgba(74,68,85,0.3);">
                <p style="font-family: monospace; font-size: 0.6rem; text-transform: uppercase; letter-spacing: 0.15em; color: #94a3b8; margin: 0 0 0.2rem 0;">Email</p>
                <a href="mailto:${email}" style="font-size: 0.95rem; color: #a78bfa; margin: 0; font-weight: 600; text-decoration: none;">${email}</a>
              </td>
            </tr>
          </table>

          <div style="background: #131318; border: 1px solid rgba(74,68,85,0.3); border-radius: 8px; padding: 1.5rem;">
            <p style="font-family: monospace; font-size: 0.6rem; text-transform: uppercase; letter-spacing: 0.15em; color: #94a3b8; margin: 0 0 0.75rem 0;">Mensaje</p>
            <p style="font-size: 0.95rem; color: #ccc3d8; line-height: 1.75; margin: 0; white-space: pre-wrap;">${mensaje}</p>
          </div>

          <div style="margin-top: 2rem; padding-top: 1.5rem; border-top: 1px solid #4a4455;">
            <a href="mailto:${email}" style="display: inline-block; padding: 0.75rem 1.5rem; background: #7c3aed; color: #fff; font-weight: 700; font-size: 0.85rem; border-radius: 8px; text-decoration: none;">
              Responder a ${nombre} →
            </a>
          </div>

        </div>
      `,
    });

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (error) {
    console.error("Error enviando email:", error);
    return NextResponse.json(
      { error: "Error interno del servidor" },
      { status: 500 }
    );
  }
}