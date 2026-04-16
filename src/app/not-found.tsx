"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "var(--bg-primary)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
        fontFamily: "'Inter', sans-serif",
        color: "var(--text-primary)",
        position: "relative",
        overflow: "hidden",
        boxSizing: "border-box",
      }}
    >
      {/* Grid background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.025,
          backgroundImage:
            "linear-gradient(var(--accent-hover) 1px, transparent 1px), linear-gradient(90deg, var(--accent-hover) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          zIndex: 0,
        }}
      />

      {/* Radial glow */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "800px",
          height: "400px",
          background: "radial-gradient(ellipse, var(--accent-glow-sm) 0%, transparent 70%)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 1,
          textAlign: "center",
          maxWidth: "560px",
          width: "100%",
        }}
      >
        {/* Error code */}
        <div
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "clamp(6rem, 20vw, 10rem)",
            fontWeight: 900,
            letterSpacing: "-0.06em",
            lineHeight: 1,
            marginBottom: "0",
            background: "linear-gradient(to bottom, var(--accent-glow-md), var(--accent-subtle))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            userSelect: "none",
          }}
        >
          404
        </div>

        {/* Divider line */}
        <div
          style={{
            height: "1px",
            background: "linear-gradient(90deg, transparent, var(--accent-overlay-hover), transparent)",
            margin: "0.5rem 0 2rem",
          }}
        />

        {/* Heading */}
        <h1
          style={{
            fontSize: "clamp(1.5rem, 4vw, 2.25rem)",
            fontWeight: 800,
            letterSpacing: "-0.03em",
            lineHeight: 1.2,
            marginBottom: "1rem",
            color: "var(--text-primary)",
          }}
        >
          Página no encontrada
        </h1>

        {/* Description */}
        <p
          style={{
            color: "var(--text-muted)",
            lineHeight: 1.75,
            fontSize: "0.95rem",
            marginBottom: "3rem",
            maxWidth: "380px",
            margin: "0 auto 3rem",
          }}
        >
          La ruta que buscas no existe o ha sido movida. Vuelve al inicio para
          seguir navegando.
        </p>

        {/* Code block — easter egg */}
        <div
          style={{
            background: "var(--bg-secondary)",
            border: "1px solid var(--border-subtle)",
            borderRadius: "0.75rem",
            padding: "1.25rem 1.5rem",
            marginBottom: "2.5rem",
            textAlign: "left",
          }}
        >
          <p
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "0.72rem",
              lineHeight: 1.8,
              color: "var(--border)",
              margin: 0,
            }}
          >
            <span style={{ color: "var(--accent)" }}>const</span>{" "}
            <span style={{ color: "var(--text-secondary)" }}>page</span>{" "}
            <span style={{ color: "var(--text-muted)" }}>=</span>{" "}
            <span style={{ color: "var(--accent-hover)" }}>await</span>{" "}
            <span style={{ color: "var(--text-secondary)" }}>fetch</span>
            <span style={{ color: "var(--text-muted)" }}>(</span>
            <span style={{ color: "var(--color-success)" }}>url</span>
            <span style={{ color: "var(--text-muted)" }}>)</span>
            <br />
            <span style={{ color: "var(--color-error)" }}>// ← Error 404: Not Found</span>
            <br />
            <span style={{ color: "var(--accent)" }}>return</span>{" "}
            <span style={{ color: "var(--accent-hover)" }}>redirect</span>
            <span style={{ color: "var(--text-muted)" }}>(</span>
            <span style={{ color: "var(--color-success)" }}>&quot;/&quot;</span>
            <span style={{ color: "var(--text-muted)" }}>)</span>
          </p>
        </div>

        {/* CTA */}
        <Link
          href="/"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.6rem",
            padding: "0.9rem 2rem",
            background: "var(--accent)",
            color: "#ffffff",
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "0.72rem",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.12em",
            borderRadius: "0.6rem",
            textDecoration: "none",
            boxShadow: "0 0 30px var(--accent-glow-sm)",
            transition: "background 0.2s, box-shadow 0.2s, transform 0.2s",
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget as HTMLAnchorElement;
            el.style.background = "var(--accent-hover)";
            el.style.boxShadow = "0 0 50px var(--accent-glow-lg)";
            el.style.transform = "translateY(-1px)";
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget as HTMLAnchorElement;
            el.style.background = "var(--accent)";
            el.style.boxShadow = "0 0 30px var(--accent-glow-sm)";
            el.style.transform = "translateY(0)";
          }}
        >
          ← Volver al inicio
        </Link>
      </div>
    </main>
  );
}