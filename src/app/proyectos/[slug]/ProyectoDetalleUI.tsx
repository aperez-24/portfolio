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
        background: "#0e0e13",
        minHeight: "100vh",
        color: "#e4e1e9",
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
          borderBottom: "1px solid rgba(74, 68, 85, 0.15)",
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
              color: "#94a3b8",
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
              color: "rgba(148, 163, 184, 0.4)",
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
              : "rgba(124, 58, 237, 0.05)",
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
                background: "rgba(120, 80, 0, 0.25)",
                border: "1px solid rgba(245, 158, 11, 0.4)",
                borderRadius: "9999px",
                marginBottom: "1.5rem",
              }}
            >
              <span style={{ color: "#fbbf24", fontSize: "0.75rem" }}>★</span>
              <span
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.6rem",
                  textTransform: "uppercase",
                  color: "#fbbf24",
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
                color: "#7c3aed",
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
              background: "linear-gradient(to right, #e4e1e9, #a78bfa)",
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
              color: "#94a3b8",
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
                background: "#131318",
                border: "1px solid rgba(74, 68, 85, 0.2)",
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
                      color: "#94a3b8",
                      marginBottom: "0.25rem",
                    }}
                  >
                    Duración
                  </p>
                  <p style={{ fontSize: "0.95rem", fontWeight: 600, color: "#e4e1e9" }}>
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
                      color: "#94a3b8",
                      marginBottom: "0.25rem",
                    }}
                  >
                    Rol
                  </p>
                  <p style={{ fontSize: "0.95rem", fontWeight: 600, color: "#e4e1e9" }}>
                    {proyecto.rol}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Tech pills */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
            {proyecto.tecnologias.map((tech) => (
              <span
                key={tech}
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.65rem",
                  textTransform: "uppercase",
                  padding: "0.5rem 1rem",
                  borderRadius: "0.5rem",
                  border: "1px solid #5b21b6",
                  color: "#a78bfa",
                  background: "rgba(19, 19, 24, 0.5)",
                  letterSpacing: "0.05em",
                }}
              >
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
                : "1px solid rgba(74, 68, 85, 0.2)",
              background: "#131318",
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
            <p style={{ fontSize: "1.05rem", color: "#ccc3d8", lineHeight: 1.8 }}>
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
                        color: "#ccc3d8",
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
                          background: "#7c3aed",
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
                    <p style={{ fontSize: "0.95rem", color: "#ccc3d8", lineHeight: 1.8 }}>
                      {proyecto.retos}
                    </p>
                  </div>
                )}
                {proyecto.solucion && (
                  <div>
                    <SectionLabel>La solución</SectionLabel>
                    <p style={{ fontSize: "0.95rem", color: "#ccc3d8", lineHeight: 1.8 }}>
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
                  background: "rgba(124, 58, 237, 0.04)",
                  border: "1px solid rgba(124, 58, 237, 0.15)",
                  borderRadius: "0.75rem",
                }}
              >
                <SectionLabel>Qué aprendí</SectionLabel>
                <p style={{ fontSize: "0.95rem", color: "#ccc3d8", lineHeight: 1.8 }}>
                  {proyecto.aprendizajes}
                </p>
              </div>
              <Divider />
            </>
          )}

          {/* Links de acción */}
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
                  padding: "0.85rem 1.75rem",
                  background: "#7c3aed",
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: "0.9rem",
                  borderRadius: "0.75rem",
                  textDecoration: "none",
                }}
              >
                Ver demo en vivo →
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
                  padding: "0.85rem 1.75rem",
                  background: "#1f1f25",
                  border: "1px solid rgba(74, 68, 85, 0.4)",
                  color: "#e4e1e9",
                  fontWeight: 700,
                  fontSize: "0.9rem",
                  borderRadius: "0.75rem",
                  textDecoration: "none",
                }}
              >
                Ver repositorio ↗
              </a>
            )}
            {!proyecto.linkDemo && !proyecto.linkRepo && (
              <p
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.7rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  color: "rgba(148, 163, 184, 0.4)",
                  padding: "0.85rem 0",
                }}
              >
                Repositorio privado — disponible bajo petición
              </p>
            )}
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
                color: "rgba(148, 163, 184, 0.4)",
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
                      background: "#131318",
                      border: "1px solid rgba(74, 68, 85, 0.2)",
                      borderRadius: "0.75rem",
                      textDecoration: "none",
                      flex: "1 1 200px",
                      maxWidth: "320px",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: "0.55rem",
                        textTransform: "uppercase",
                        letterSpacing: "0.1em",
                        color: "#7c3aed",
                      }}
                    >
                      {p.badge}
                    </span>
                    <span
                      style={{
                        fontSize: "0.9rem",
                        fontWeight: 700,
                        color: "#e4e1e9",
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
        color: "#7c3aed",
        marginBottom: "1rem",
      }}
    >
      {children}
    </p>
  );
}

function Divider() {
  return <div style={{ height: "1px", background: "rgba(74, 68, 85, 0.15)" }} />;
}