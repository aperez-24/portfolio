"use client";

import Link from "next/link";
import { proyectos } from "@/data/proyectos";
import { Proyecto } from "@/types/proyecto";

export default function ProyectoDetalleUI({
  proyecto,
}: {
  proyecto: Proyecto;
}) {
  const esFeatured = proyecto.badgeTipo === "featured";

  return (
    <main
      style={{
        background: "var(--bg-primary)",
        minHeight: "100vh",
        color: "var(--text-primary)",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {/* ── Top bar ── */}
      <div
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          background: "rgba(14, 14, 19, 0.85)",
          backdropFilter: "blur(16px)",
          borderBottom: "1px solid var(--border-faint)",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "1.25rem 2rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Link
            href="/"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "0.7rem",
              textTransform: "uppercase",
              letterSpacing: "0.15em",
              color: "var(--text-muted)",
              textDecoration: "none",
            }}
          >
            ← Volver
          </Link>
          <span
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "0.6rem",
              textTransform: "uppercase",
              letterSpacing: "0.2em",
              color: "var(--text-muted)",
            }}
          >
            Adrián Pérez — Portfolio
          </span>
        </div>
      </div>

      {/* ── Hero del proyecto ── */}
      <section
        style={{
          position: "relative",
          padding: "6rem 2rem 4rem",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: "50%",
            transform: "translateX(-50%)",
            width: "700px",
            height: "400px",
            background: esFeatured
              ? "rgba(124, 58, 237, 0.08)"
              : "var(--accent-subtle)",
            borderRadius: "50%",
            filter: "blur(100px)",
            pointerEvents: "none",
          }}
        />

        <div style={{ maxWidth: "900px", margin: "0 auto", position: "relative" }}>
          {/* Badge */}
          {esFeatured ? (
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
                padding: "0.3rem 0.85rem",
                background: "var(--color-featured-bg)",
                border: "1px solid var(--color-featured-border)",
                borderRadius: "9999px",
                marginBottom: "1.5rem",
              }}
            >
              <span style={{ color: "var(--color-featured)", fontSize: "0.75rem" }}>★</span>
              <span
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.6rem",
                  textTransform: "uppercase",
                  color: "var(--color-featured)",
                  fontWeight: 700,
                  letterSpacing: "0.05em",
                }}
              >
                Featured Client
              </span>
            </div>
          ) : (
            <p
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.6rem",
                textTransform: "uppercase",
                letterSpacing: "0.2em",
                color: "var(--accent)",
                marginBottom: "1rem",
              }}
            >
              {proyecto.badge}
            </p>
          )}

          {/* Título */}
          <h1
            style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              marginBottom: "1.5rem",
              background: "linear-gradient(to right, var(--text-primary), var(--accent-hover))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {proyecto.titulo}
          </h1>

          {/* Descripción corta */}
          <p
            style={{
              fontSize: "1.15rem",
              color: "var(--text-muted)",
              lineHeight: 1.7,
              maxWidth: "640px",
              marginBottom: "2.5rem",
            }}
          >
            {proyecto.descripcionCorta}
          </p>

          {/* Meta: duración + rol */}
          {(proyecto.duracion || proyecto.rol) && (
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "2.5rem",
                marginBottom: "2.5rem",
                padding: "1.25rem 1.5rem",
                background: "var(--bg-secondary)",
                border: "1px solid var(--border-subtle)",
                borderRadius: "0.75rem",
                width: "fit-content",
              }}
            >
              {proyecto.duracion && (
                <div>
                  <p
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "0.55rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.15em",
                      color: "var(--text-muted)",
                      marginBottom: "0.25rem",
                    }}
                  >
                    Duración
                  </p>
                  <p style={{ fontSize: "0.95rem", fontWeight: 600, color: "var(--text-primary)" }}>
                    {proyecto.duracion}
                  </p>
                </div>
              )}
              {proyecto.rol && (
                <div>
                  <p
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "0.55rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.15em",
                      color: "var(--text-muted)",
                      marginBottom: "0.25rem",
                    }}
                  >
                    Rol
                  </p>
                  <p style={{ fontSize: "0.95rem", fontWeight: 600, color: "var(--text-primary)" }}>
                    {proyecto.rol}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Tech pills */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
            {proyecto.tecnologias.map((tech) => (
              <span key={tech} className="tech-pill">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Imagen principal ── */}
      <section style={{ padding: "0 2rem 5rem" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <div
            style={{
              borderRadius: "1rem",
              overflow: "hidden",
              border: esFeatured
                ? "2px solid rgba(139, 92, 246, 0.4)"
                : "1px solid var(--border-subtle)",
              background: "var(--bg-secondary)",
              aspectRatio: "16/9",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={proyecto.imagen}
              alt={proyecto.titulo}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                opacity: 0.85,
              }}
            />
          </div>
        </div>
      </section>

      {/* ── Cuerpo ── */}
      <section style={{ padding: "0 2rem 8rem" }}>
        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            gap: "4rem",
          }}
        >
          {/* Descripción larga */}
          <div>
            <SectionLabel>Sobre el proyecto</SectionLabel>
            <p style={{ fontSize: "1.05rem", color: "var(--text-secondary)", lineHeight: 1.8 }}>
              {proyecto.descripcionLarga}
            </p>
          </div>

          <Divider />

          {/* Características */}
          {proyecto.caracteristicas && proyecto.caracteristicas.length > 0 && (
            <>
              <div>
                <SectionLabel>Funcionalidades clave</SectionLabel>
                <ul
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.75rem",
                    listStyle: "none",
                    padding: 0,
                  }}
                >
                  {proyecto.caracteristicas.map((item, i) => (
                    <li
                      key={i}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "0.75rem",
                        fontSize: "0.95rem",
                        color: "var(--text-secondary)",
                        lineHeight: 1.6,
                      }}
                    >
                      <span
                        style={{
                          flexShrink: 0,
                          marginTop: "0.5rem",
                          width: "5px",
                          height: "5px",
                          borderRadius: "9999px",
                          background: "var(--accent)",
                        }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <Divider />
            </>
          )}

          {/* Retos y solución */}
          {(proyecto.retos || proyecto.solucion) && (
            <>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                  gap: "3rem",
                }}
              >
                {proyecto.retos && (
                  <div>
                    <SectionLabel>El reto</SectionLabel>
                    <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", lineHeight: 1.8 }}>
                      {proyecto.retos}
                    </p>
                  </div>
                )}
                {proyecto.solucion && (
                  <div>
                    <SectionLabel>La solución</SectionLabel>
                    <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", lineHeight: 1.8 }}>
                      {proyecto.solucion}
                    </p>
                  </div>
                )}
              </div>
              <Divider />
            </>
          )}

          {/* Aprendizajes */}
          {proyecto.aprendizajes && (
            <>
              <div
                style={{
                  padding: "2rem",
                  background: "var(--accent-subtle)",
                  border: "1px solid var(--accent-subtle-border)",
                  borderRadius: "0.75rem",
                }}
              >
                <SectionLabel>Qué aprendí</SectionLabel>
                <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", lineHeight: 1.8 }}>
                  {proyecto.aprendizajes}
                </p>
              </div>
              <Divider />
            </>
          )}

          {/* ── Links de acción ── MEJORADO */}
          <div>
            <SectionLabel>Ver el proyecto</SectionLabel>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
              {proyecto.linkDemo && (
                <a
                  href={proyecto.linkDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.6rem",
                    padding: "0.9rem 1.75rem",
                    background: "var(--accent)",
                    color: "#fff",
                    fontFamily: "'JetBrains Mono', monospace",
                    fontWeight: 700,
                    fontSize: "0.72rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    borderRadius: "0.75rem",
                    textDecoration: "none",
                    border: "1px solid var(--accent)",
                    boxShadow: "0 0 30px rgba(124,58,237,0.2)",
                    transition: "background 0.2s, box-shadow 0.2s, transform 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.background = "var(--accent-hover)";
                    el.style.boxShadow = "0 0 45px rgba(124,58,237,0.4)";
                    el.style.transform = "translateY(-1px)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.background = "var(--accent)";
                    el.style.boxShadow = "0 0 30px rgba(124,58,237,0.2)";
                    el.style.transform = "translateY(0)";
                  }}
                >
                  Ver proyecto en vivo ↗
                </a>
              )}

              {proyecto.linkRepo && (
                <a
                  href={proyecto.linkRepo}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.6rem",
                    padding: "0.9rem 1.75rem",
                    background: "var(--bg-card)",
                    border: "1px solid var(--border-subtle)",
                    color: "var(--text-primary)",
                    fontFamily: "'JetBrains Mono', monospace",
                    fontWeight: 700,
                    fontSize: "0.72rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    borderRadius: "0.75rem",
                    textDecoration: "none",
                    transition: "border-color 0.2s, background 0.2s, transform 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.borderColor = "rgba(124,58,237,0.4)";
                    el.style.background = "var(--bg-card-hover)";
                    el.style.transform = "translateY(-1px)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.borderColor = "var(--border-subtle)";
                    el.style.background = "var(--bg-card)";
                    el.style.transform = "translateY(0)";
                  }}
                >
                  Ver código en GitHub ↗
                </a>
              )}

              {!proyecto.linkDemo && !proyecto.linkRepo && (
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    padding: "0.9rem 1.5rem",
                    background: "var(--bg-secondary)",
                    border: "1px solid var(--border-subtle)",
                    borderRadius: "0.75rem",
                  }}
                >
                  <span style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>🔒</span>
                  <p
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "0.65rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      color: "var(--text-muted)",
                      margin: 0,
                    }}
                  >
                    Repositorio privado — disponible bajo petición
                  </p>
                </div>
              )}
            </div>
          </div>

          <Divider />

          {/* Otros proyectos */}
          <div>
            <p
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.6rem",
                textTransform: "uppercase",
                letterSpacing: "0.2em",
                color: "var(--text-muted)",
                marginBottom: "1.5rem",
              }}
            >
              Otros proyectos
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
              {proyectos
                .filter((p) => p.slug !== proyecto.slug)
                .map((p) => (
                  <Link
                    key={p.slug}
                    href={`/proyectos/${p.slug}`}
                    style={{
                      display: "inline-flex",
                      flexDirection: "column",
                      gap: "0.3rem",
                      padding: "1rem 1.5rem",
                      background: "var(--bg-secondary)",
                      border: "1px solid var(--border-subtle)",
                      borderRadius: "0.75rem",
                      textDecoration: "none",
                      flex: "1 1 200px",
                      maxWidth: "320px",
                      transition: "border-color 0.2s, background 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLAnchorElement;
                      el.style.borderColor = "rgba(124,58,237,0.3)";
                      el.style.background = "var(--bg-card)";
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLAnchorElement;
                      el.style.borderColor = "var(--border-subtle)";
                      el.style.background = "var(--bg-secondary)";
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: "0.55rem",
                        textTransform: "uppercase",
                        letterSpacing: "0.1em",
                        color: "var(--accent)",
                      }}
                    >
                      {p.badge}
                    </span>
                    <span
                      style={{
                        fontSize: "0.9rem",
                        fontWeight: 700,
                        color: "var(--text-primary)",
                      }}
                    >
                      {p.titulo}
                    </span>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

// ── Componentes auxiliares internos ──

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p
      style={{
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: "0.6rem",
        textTransform: "uppercase",
        letterSpacing: "0.2em",
        color: "var(--accent)",
        marginBottom: "1rem",
      }}
    >
      {children}
    </p>
  );
}

function Divider() {
  return <div style={{ height: "1px", background: "var(--border-faint)" }} />;
}