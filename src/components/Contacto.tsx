"use client";

import { useState } from "react";

type FormState = "idle" | "loading" | "success" | "error";

export default function Contacto() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    asunto: "",
    mensaje: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    if (!form.nombre || !form.email || !form.mensaje) return;

    setFormState("loading");
    try {
      const res = await fetch("/api/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setFormState("success");
        setForm({ nombre: "", email: "", asunto: "", mensaje: "" });
      } else {
        setFormState("error");
      }
    } catch {
      setFormState("error");
    }
  }

  const inputStyle: React.CSSProperties = {
    width: "100%",
    background: "#0e0e13",
    border: "none",
    borderBottom: "2px solid rgba(74, 68, 85, 0.3)",
    padding: "0.75rem 0.25rem",
    color: "#e4e1e9",
    fontSize: "0.95rem",
    outline: "none",
    boxSizing: "border-box",
    transition: "border-color 0.2s",
  };

  const labelStyle: React.CSSProperties = {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: "0.6rem",
    textTransform: "uppercase",
    letterSpacing: "0.15em",
    color: "#94a3b8",
    display: "block",
    marginBottom: "0.5rem",
  };

  return (
    <section
      id="contact"
      style={{
        padding: "8rem 2rem",
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "5rem",
          alignItems: "start",
        }}
      >
        {/* ── Columna izquierda: info ── */}
        <div>
          <p
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "0.65rem",
              textTransform: "uppercase",
              letterSpacing: "0.3em",
              color: "#7c3aed",
              marginBottom: "0.75rem",
            }}
          >
            03 // Connect
          </p>
          <h2
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              color: "#e4e1e9",
              marginBottom: "1.5rem",
            }}
          >
            Get in Touch
          </h2>
          <p
            style={{
              color: "#94a3b8",
              fontSize: "1.05rem",
              lineHeight: 1.7,
              maxWidth: "28rem",
              marginBottom: "3rem",
            }}
          >
            ¿Tienes una pregunta sobre mi trabajo o quieres hablar de un
            proyecto? Escríbeme. Suelo responder en menos de 24 horas.
          </p>

          {/* Info items */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <div
                style={{
                  width: "3rem",
                  height: "3rem",
                  background: "#1f1f25",
                  borderRadius: "0.75rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.2rem",
                  flexShrink: 0,
                }}
              >
                ✉
              </div>
              <div>
                <p
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "0.6rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    color: "#94a3b8",
                    marginBottom: "0.2rem",
                  }}
                >
                  Email
                </p>
                <p style={{ fontWeight: 700, color: "#e4e1e9", fontSize: "0.95rem" }}>
                  adrianpereznavarro@gmail.com
                </p>
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <div
                style={{
                  width: "3rem",
                  height: "3rem",
                  background: "#1f1f25",
                  borderRadius: "0.75rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.2rem",
                  flexShrink: 0,
                }}
              >
                📍
              </div>
              <div>
                <p
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "0.6rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    color: "#94a3b8",
                    marginBottom: "0.2rem",
                  }}
                >
                  Ubicación
                </p>
                <p style={{ fontWeight: 700, color: "#e4e1e9", fontSize: "0.95rem" }}>
                  Madrid, España
                </p>
              </div>
            </div>
          </div>

          {/* Social links */}
          <div
            style={{
              display: "flex",
              gap: "2rem",
              marginTop: "3rem",
            }}
          >
            {[
              { label: "GitHub", href: "https://github.com/aperez-24" },
              { label: "LinkedIn", href: "https://www.linkedin.com/in/adrián-pérez-navarro/" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.65rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  color: "rgba(228, 225, 233, 0.5)",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.color = "#7c3aed")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.color =
                    "rgba(228, 225, 233, 0.5)")
                }
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* ── Columna derecha: formulario ── */}
        <div
          style={{
            background: "#1f1f25",
            padding: "2.5rem",
            borderRadius: "0.75rem",
            border: "1px solid rgba(74, 68, 85, 0.15)",
            boxShadow: "0 25px 50px rgba(0,0,0,0.3)",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1.5rem",
              marginBottom: "1.5rem",
            }}
          >
            <div>
              <label style={labelStyle}>Nombre</label>
              <input
                name="nombre"
                type="text"
                placeholder="Tu nombre"
                value={form.nombre}
                onChange={handleChange}
                style={inputStyle}
              />
            </div>
            <div>
              <label style={labelStyle}>Email</label>
              <input
                name="email"
                type="email"
                placeholder="tu@email.com"
                value={form.email}
                onChange={handleChange}
                style={inputStyle}
              />
            </div>
          </div>

          <div style={{ marginBottom: "1.5rem" }}>
            <label style={labelStyle}>Asunto</label>
            <input
              name="asunto"
              type="text"
              placeholder="Consulta sobre proyecto..."
              value={form.asunto}
              onChange={handleChange}
              style={inputStyle}
            />
          </div>

          <div style={{ marginBottom: "1.5rem" }}>
            <label style={labelStyle}>Mensaje</label>
            <textarea
              name="mensaje"
              placeholder="Tu mensaje aquí..."
              rows={4}
              value={form.mensaje}
              onChange={handleChange}
              style={{ ...inputStyle, resize: "vertical" }}
            />
          </div>

          <button
            onClick={handleSubmit}
            disabled={formState === "loading"}
            style={{
              width: "100%",
              padding: "1rem",
              background: "#7c3aed",
              color: "#fff",
              fontWeight: 700,
              fontSize: "0.95rem",
              borderRadius: "0.75rem",
              border: "none",
              cursor: formState === "loading" ? "not-allowed" : "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.5rem",
              opacity: formState === "loading" ? 0.7 : 1,
              transition: "box-shadow 0.2s, opacity 0.2s",
            }}
            onMouseEnter={(e) => {
              if (formState !== "loading")
                (e.currentTarget as HTMLButtonElement).style.boxShadow =
                  "0 0 20px rgba(124, 58, 237, 0.35)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.boxShadow = "none";
            }}
          >
            {formState === "loading" ? "Enviando..." : "Send Message →"}
          </button>

          {formState === "success" && (
            <p
              style={{
                marginTop: "1rem",
                color: "#34d399",
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.75rem",
                textAlign: "center",
              }}
            >
              ✓ Mensaje enviado correctamente
            </p>
          )}
          {formState === "error" && (
            <p
              style={{
                marginTop: "1rem",
                color: "#f87171",
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.75rem",
                textAlign: "center",
              }}
            >
              ✗ Error al enviar. Inténtalo de nuevo.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}