"use client";

import Link from "next/link";
import { proyectos } from "@/data/proyectos";

export default function Proyectos() {
  return (
    <section
      id="projects"
      style={{
        padding: "8rem 2rem",
        background: "#131318",
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

        {/* Header */}
        <div style={{ marginBottom: "4rem" }}>
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
            02 // Portfolio
          </p>
          <h2
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              color: "#e4e1e9",
            }}
          >
            Selected Works
          </h2>
        </div>

        {/* Grid de cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {proyectos.map((proyecto) => (
            <div
              key={proyecto.slug}
              style={{
                background: "#1f1f25",
                border: proyecto.badgeTipo === "featured"
                  ? "2px solid rgba(139, 92, 246, 0.5)"
                  : "1px solid rgba(74, 68, 85, 0.15)",
                borderRadius: "0.75rem",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                transition: "box-shadow 0.3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "0 0 50px rgba(124, 58, 237, 0.12)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {/* Imagen */}
              <div
                style={{
                  height: "12rem",
                  overflow: "hidden",
                  background: "#0e0e13",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src={proyecto.imagen}
                  alt={proyecto.titulo}
                  style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.8 }}
                />
              </div>

              {/* Contenido */}
              <div
                style={{
                  padding: "2rem",
                  display: "flex",
                  flexDirection: "column",
                  flexGrow: 1,
                  justifyContent: "space-between",
                  gap: "1.5rem",
                }}
              >
                <div>
                  {/* Badge */}
                  {proyecto.badgeTipo === "featured" ? (
                    <div
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.4rem",
                        padding: "0.25rem 0.75rem",
                        background: "rgba(120, 80, 0, 0.25)",
                        border: "1px solid rgba(245, 158, 11, 0.4)",
                        borderRadius: "9999px",
                        marginBottom: "1rem",
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
                        letterSpacing: "0.1em",
                        color: "#94a3b8",
                        marginBottom: "0.5rem",
                      }}
                    >
                      {proyecto.badge}
                    </p>
                  )}

                  <h3
                    style={{
                      fontSize: "1.15rem",
                      fontWeight: 700,
                      color: "#e4e1e9",
                      letterSpacing: "-0.02em",
                      marginBottom: "0.75rem",
                    }}
                  >
                    {proyecto.titulo}
                  </h3>

                  <p style={{ fontSize: "0.875rem", color: "#94a3b8", lineHeight: 1.6 }}>
                    {proyecto.descripcionCorta}
                  </p>
                </div>

                <div>
                  {/* Tech pills */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "1.5rem" }}>
                    {proyecto.tecnologias.map((tech) => (
                      <span key={tech} className="tech-pill">{tech}</span>
                    ))}
                  </div>

                  {/* Link detalle */}
                  <Link
                    href={`/proyectos/${proyecto.slug}`}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      fontWeight: 700,
                      fontSize: "0.875rem",
                      color: "#d2bbff",
                      textDecoration: "none",
                      transition: "gap 0.2s",
                    }}
                  >
                    Project Details →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}