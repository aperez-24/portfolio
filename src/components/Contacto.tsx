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

  const inputBase: React.CSSProperties = {
    width: "100%",
    background: "transparent",
    border: "none",
    borderBottom: "1px solid var(--border)",
    padding: "0.65rem 0",
    color: "var(--text-primary)",
    fontSize: "0.9rem",
    outline: "none",
    boxSizing: "border-box",
    transition: "border-color 0.2s",
    fontFamily: "inherit",
  };

  const labelBase: React.CSSProperties = {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: "0.58rem",
    textTransform: "uppercase" as const,
    letterSpacing: "0.18em",
    color: "var(--text-muted)",
    display: "block",
    marginBottom: "0.4rem",
  };

  return (
    <section
      id="contact"
      style={{
        padding: "8rem 2rem",
        width: "100%",
        boxSizing: "border-box",
        borderTop: "1px solid var(--border)",
        background: "var(--bg-primary)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Ambient glow */}
      <div
        style={{
          position: "absolute",
          bottom: "-5%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "700px",
          height: "300px",
          background:
            "radial-gradient(ellipse, var(--accent-overlay) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "5rem",
          alignItems: "start",
          position: "relative",
        }}
      >
        {/* ── Left column ── */}
        <div>
          <p
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "0.6rem",
              textTransform: "uppercase",
              letterSpacing: "0.3em",
              color: "var(--accent)",
              marginBottom: "0.75rem",
            }}
          >
            03 // Contacto
          </p>
          <h2
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              lineHeight: 1.15,
              color: "var(--text-primary)",
              marginBottom: "1.5rem",
            }}
          >
            Ponte en{" "}
            <span className="text-gradient">contacto</span>.
          </h2>
          <p
            style={{
              color: "var(--text-muted)",
              fontSize: "0.95rem",
              lineHeight: 1.75,
              maxWidth: "26rem",
              marginBottom: "3rem",
            }}
          >
            ¿Tienes un proyecto o quieres hablar sobre una oportunidad? Escríbeme.
            Suelo responder en menos de 24 horas.
          </p>

          {/* Contact items */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {[
              {
                icon: "✉",
                label: "Email",
                value: "apereznavarro24@gmail.com",
                href: "mailto:apereznavarro24@gmail.com",
              },
              {
                icon: "📍",
                label: "Ubicación",
                value: "Madrid, España",
                href: null,
              },
            ].map(({ icon, label, value, href }) => (
              <div
                key={label}
                style={{ display: "flex", alignItems: "center", gap: "1rem" }}
              >
                <div
                  style={{
                    width: "2.75rem",
                    height: "2.75rem",
                    background: "var(--bg-secondary)",
                    border: "1px solid var(--border)",
                    borderRadius: "0.75rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1rem",
                    flexShrink: 0,
                  }}
                >
                  {icon}
                </div>
                <div>
                  <p
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "0.55rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.15em",
                      color: "var(--text-muted)",
                      marginBottom: "0.2rem",
                    }}
                  >
                    {label}
                  </p>
                  {href ? (
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontWeight: 600,
                        color: "var(--text-secondary)",
                        fontSize: "0.875rem",
                        textDecoration: "none",
                        transition: "color 0.2s",
                      }}
                      onMouseEnter={(e) =>
                        ((e.currentTarget as HTMLAnchorElement).style.color =
                          "var(--accent-hover)")
                      }
                      onMouseLeave={(e) =>
                        ((e.currentTarget as HTMLAnchorElement).style.color =
                          "var(--text-secondary)")
                      }
                    >
                      {value}
                    </a>
                  ) : (
                    <p
                      style={{
                        fontWeight: 600,
                        color: "var(--text-secondary)",
                        fontSize: "0.875rem",
                      }}
                    >
                      {value}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right column: form ── */}
        <div
          style={{
            background: "var(--bg-secondary)",
            padding: "2.5rem",
            borderRadius: "1rem",
            border: "1px solid var(--border)",
          }}
        >
          <p
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "0.55rem",
              textTransform: "uppercase",
              letterSpacing: "0.2em",
              color: "var(--text-muted)",
              marginBottom: "2rem",
            }}
          >
            — nueva conversación
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "2rem",
              marginBottom: "2rem",
            }}
          >
            <div>
              <label style={labelBase}>Nombre</label>
              <input
                name="nombre"
                type="text"
                placeholder="Tu nombre"
                value={form.nombre}
                onChange={handleChange}
                style={inputBase}
                onFocus={(e) =>
                  ((e.target as HTMLInputElement).style.borderBottomColor = "var(--accent)")
                }
                onBlur={(e) =>
                  ((e.target as HTMLInputElement).style.borderBottomColor = "var(--border)")
                }
              />
            </div>
            <div>
              <label style={labelBase}>Email</label>
              <input
                name="email"
                type="email"
                placeholder="tu@email.com"
                value={form.email}
                onChange={handleChange}
                style={inputBase}
                onFocus={(e) =>
                  ((e.target as HTMLInputElement).style.borderBottomColor = "var(--accent)")
                }
                onBlur={(e) =>
                  ((e.target as HTMLInputElement).style.borderBottomColor = "var(--border)")
                }
              />
            </div>
          </div>

          <div style={{ marginBottom: "2rem" }}>
            <label style={labelBase}>Asunto</label>
            <input
              name="asunto"
              type="text"
              placeholder="Consulta sobre proyecto..."
              value={form.asunto}
              onChange={handleChange}
              style={inputBase}
              onFocus={(e) =>
                ((e.target as HTMLInputElement).style.borderBottomColor = "var(--accent)")
              }
              onBlur={(e) =>
                ((e.target as HTMLInputElement).style.borderBottomColor = "var(--border)")
              }
            />
          </div>

          <div style={{ marginBottom: "2rem" }}>
            <label style={labelBase}>Mensaje</label>
            <textarea
              name="mensaje"
              placeholder="Cuéntame tu proyecto o consulta..."
              rows={5}
              value={form.mensaje}
              onChange={handleChange}
              style={{ ...inputBase, resize: "none" }}
              onFocus={(e) =>
                ((e.target as HTMLTextAreaElement).style.borderBottomColor = "var(--accent)")
              }
              onBlur={(e) =>
                ((e.target as HTMLTextAreaElement).style.borderBottomColor = "var(--border)")
              }
            />
          </div>

          <button
            onClick={handleSubmit}
            disabled={formState === "loading"}
            style={{
              width: "100%",
              padding: "0.9rem",
              background: formState === "loading" ? "var(--border)" : "var(--accent)",
              color: "#fff",
              fontFamily: "'JetBrains Mono', monospace",
              fontWeight: 700,
              fontSize: "0.7rem",
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              borderRadius: "0.6rem",
              border: "none",
              cursor: formState === "loading" ? "not-allowed" : "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.5rem",
              transition: "background 0.2s, box-shadow 0.2s, transform 0.2s",
            }}
            onMouseEnter={(e) => {
              if (formState !== "loading") {
                const btn = e.currentTarget as HTMLButtonElement;
                btn.style.background = "var(--accent-hover)";
                btn.style.boxShadow = `0 0 25px var(--accent-glow-md)`;
                btn.style.transform = "translateY(-1px)";
              }
            }}
            onMouseLeave={(e) => {
              const btn = e.currentTarget as HTMLButtonElement;
              btn.style.background =
                formState === "loading" ? "var(--border)" : "var(--accent)";
              btn.style.boxShadow = "none";
              btn.style.transform = "translateY(0)";
            }}
          >
            {formState === "loading" ? "Enviando..." : "Enviar mensaje →"}
          </button>

          {formState === "success" && (
            <div
              style={{
                marginTop: "1rem",
                padding: "0.75rem 1rem",
                background: "var(--color-success-bg)",
                border: "1px solid var(--color-success-border)",
                borderRadius: "0.5rem",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              <span style={{ color: "var(--color-success)", fontSize: "0.9rem" }}>✓</span>
              <p
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.62rem",
                  color: "var(--color-success)",
                  letterSpacing: "0.05em",
                }}
              >
                Mensaje enviado correctamente
              </p>
            </div>
          )}

          {formState === "error" && (
            <div
              style={{
                marginTop: "1rem",
                padding: "0.75rem 1rem",
                background: "var(--color-error-bg)",
                border: "1px solid var(--color-error-border)",
                borderRadius: "0.5rem",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              <span style={{ color: "var(--color-error)", fontSize: "0.9rem" }}>✗</span>
              <p
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.62rem",
                  color: "var(--color-error)",
                  letterSpacing: "0.05em",
                }}
              >
                Error al enviar. Inténtalo de nuevo.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}