"use client";

import Link from "next/link";
import { proyectos } from "@/data/proyectos";

export default function Proyectos() {
  return (
    <section
      id="projects"
      style={{
        padding: "8rem 2rem",
        background: "var(--bg-primary)",
        borderTop: "1px solid var(--border)",
        width: "100%",
        boxSizing: "border-box",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Ambient glow */}
      <div
        style={{
          position: "absolute",
          top: "5%",
          right: "-5%",
          width: "500px",
          height: "500px",
          background: "radial-gradient(circle, rgba(124,58,237,0.04) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative" }}>

        {/* ── Section header ── */}
        <div style={{ marginBottom: "4rem" }}>
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
            02 // Portafolio
          </p>
          <h2
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              lineHeight: 1.15,
              color: "#e4e1e9",
              marginBottom: "1.5rem",
            }}
          >
            Trabajos {" "}
            <span className="text-gradient">Seleccionados</span>.
          </h2>
          <p
            style={{
              color: "var(--text-muted)",
              fontSize: "0.95rem",
              maxWidth: "32rem",
              lineHeight: 1.65,
            }}
          >
            Proyectos reales entregados — no ejercicios de clase.
          </p>
        </div>

        {/* ── Cards grid ── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "1.25rem",
          }}
        >
          {proyectos.map((proyecto) => {
            const isFeatured = proyecto.badgeTipo === "featured";
            return (
              <div
                key={proyecto.slug}
                style={{
                  background: "var(--bg-secondary)",
                  border: isFeatured
                    ? "1px solid rgba(124,58,237,0.3)"
                    : "1px solid var(--border)",
                  borderRadius: "1rem",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease",
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.transform = "translateY(-3px)";
                  el.style.boxShadow = isFeatured
                    ? "0 20px 60px rgba(124,58,237,0.18)"
                    : "0 20px 40px rgba(0,0,0,0.4)";
                  el.style.borderColor = isFeatured
                    ? "rgba(124,58,237,0.5)"
                    : "rgba(124,58,237,0.2)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.transform = "translateY(0)";
                  el.style.boxShadow = "none";
                  el.style.borderColor = isFeatured
                    ? "rgba(124,58,237,0.3)"
                    : "var(--border)";
                }}
              >
                {/* Image */}
                <div
                  style={{
                    height: "11rem",
                    overflow: "hidden",
                    background: "var(--bg-primary)",
                    position: "relative",
                    flexShrink: 0,
                  }}
                >
                  <img
                    src={proyecto.imagen}
                    alt={proyecto.titulo}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      opacity: 0.65,
                      transition: "opacity 0.4s ease, transform 0.5s ease",
                    }}
                    onMouseEnter={(e) => {
                      const img = e.currentTarget as HTMLImageElement;
                      img.style.opacity = "0.85";
                      img.style.transform = "scale(1.04)";
                    }}
                    onMouseLeave={(e) => {
                      const img = e.currentTarget as HTMLImageElement;
                      img.style.opacity = "0.65";
                      img.style.transform = "scale(1)";
                    }}
                  />
                  {/* Gradient fade into card */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(to bottom, transparent 30%, var(--bg-secondary) 100%)",
                    }}
                  />
                </div>

                {/* Content */}
                <div
                  style={{
                    padding: "1.75rem",
                    display: "flex",
                    flexDirection: "column",
                    flexGrow: 1,
                    gap: "1.25rem",
                  }}
                >
                  <div>
                    {/* Badge */}
                    {isFeatured ? (
                      <div
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "0.4rem",
                          padding: "0.2rem 0.75rem",
                          background: "rgba(120,80,0,0.18)",
                          border: "1px solid rgba(245,158,11,0.3)",
                          borderRadius: "9999px",
                          marginBottom: "0.875rem",
                        }}
                      >
                        <span style={{ color: "#fbbf24", fontSize: "0.6rem" }}>★</span>
                        <span
                          style={{
                            fontFamily: "'JetBrains Mono', monospace",
                            fontSize: "0.55rem",
                            textTransform: "uppercase",
                            letterSpacing: "0.08em",
                            color: "#fbbf24",
                            fontWeight: 700,
                          }}
                        >
                          Cliente Destacado
                        </span>
                      </div>
                    ) : (
                      <p
                        style={{
                          fontFamily: "'JetBrains Mono', monospace",
                          fontSize: "0.55rem",
                          textTransform: "uppercase",
                          letterSpacing: "0.12em",
                          color: "var(--text-muted)",
                          marginBottom: "0.5rem",
                        }}
                      >
                        {proyecto.badge}
                      </p>
                    )}

                    <h3
                      style={{
                        fontSize: "1.05rem",
                        fontWeight: 700,
                        letterSpacing: "-0.025em",
                        color: "var(--text-primary)",
                        lineHeight: 1.3,
                        marginBottom: "0.6rem",
                      }}
                    >
                      {proyecto.titulo}
                    </h3>

                    <p
                      style={{
                        fontSize: "0.85rem",
                        color: "var(--text-muted)",
                        lineHeight: 1.65,
                      }}
                    >
                      {proyecto.descripcionCorta}
                    </p>
                  </div>

                  {/* Bottom: pills + link */}
                  <div style={{ marginTop: "auto" }}>
                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "0.4rem",
                        marginBottom: "1.25rem",
                      }}
                    >
                      {proyecto.tecnologias.map((tech) => (
                        <span key={tech} className="tech-pill">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        paddingTop: "1rem",
                        borderTop: "1px solid var(--border)",
                      }}
                    >
                      <Link
                        href={`/proyectos/${proyecto.slug}`}
                        style={{
                          fontFamily: "'JetBrains Mono', monospace",
                          fontSize: "0.63rem",
                          textTransform: "uppercase",
                          letterSpacing: "0.12em",
                          fontWeight: 700,
                          color: "var(--accent-hover)",
                          textDecoration: "none",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "0.5rem",
                          transition: "gap 0.2s ease, color 0.2s ease",
                        }}
                        onMouseEnter={(e) => {
                          const el = e.currentTarget as HTMLAnchorElement;
                          el.style.color = "#c4b5fd";
                          el.style.gap = "0.8rem";
                        }}
                        onMouseLeave={(e) => {
                          const el = e.currentTarget as HTMLAnchorElement;
                          el.style.color = "var(--accent-hover)";
                          el.style.gap = "0.5rem";
                        }}
                      >
                        Ver detalles →
                      </Link>

                      {proyecto.linkRepo && (
                        <a
                          href={proyecto.linkRepo}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            fontFamily: "'JetBrains Mono', monospace",
                            fontSize: "0.6rem",
                            textTransform: "uppercase",
                            letterSpacing: "0.1em",
                            color: "var(--text-muted)",
                            textDecoration: "none",
                            transition: "color 0.2s",
                          }}
                          onMouseEnter={(e) =>
                            ((e.currentTarget as HTMLAnchorElement).style.color =
                              "var(--text-secondary)")
                          }
                          onMouseLeave={(e) =>
                            ((e.currentTarget as HTMLAnchorElement).style.color =
                              "var(--text-muted)")
                          }
                        >
                          GitHub ↗
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}