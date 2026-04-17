"use client";

export default function Mantenimiento() {
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
          background: "radial-gradient(ellipse, var(--accent-subtle-border) 0%, transparent 70%)",
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
        {/* Status badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.6rem",
            padding: "0.4rem 1rem",
            background: "var(--bg-secondary)",
            border: "1px solid var(--border-subtle)",
            borderRadius: "9999px",
            marginBottom: "2.5rem",
          }}
        >
          <span
            style={{
              width: "6px",
              height: "6px",
              borderRadius: "9999px",
              background: "var(--color-featured)",
              boxShadow: "0 0 8px var(--color-featured-glow)",
              flexShrink: 0,
              display: "block",
              animation: "pulse-amber 2s infinite",
            }}
          />
          <span
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "0.58rem",
              textTransform: "uppercase",
              letterSpacing: "0.22em",
              color: "var(--text-muted)",
            }}
          >
            En mantenimiento
          </span>
        </div>

        {/* Main heading */}
        <h1
          style={{
            fontSize: "clamp(2.5rem, 8vw, 4.5rem)",
            fontWeight: 900,
            letterSpacing: "-0.04em",
            lineHeight: 1,
            marginBottom: "1.5rem",
            background: "linear-gradient(to right, var(--text-primary), var(--accent))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Adrián Pérez
        </h1>

        {/* Divider with role */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "1rem",
            marginBottom: "2rem",
          }}
        >
          <span style={{ height: "1px", width: "2.5rem", background: "var(--border)" }} />
          <p
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "0.65rem",
              textTransform: "uppercase",
              letterSpacing: "0.25em",
              color: "var(--text-muted)",
              whiteSpace: "nowrap",
            }}
          >
            Desarrollador Web Full Stack
          </p>
          <span style={{ height: "1px", width: "2.5rem", background: "var(--border)" }} />
        </div>

        {/* Description */}
        <p
          style={{
            color: "var(--text-muted)",
            lineHeight: 1.75,
            fontSize: "0.95rem",
            marginBottom: "3rem",
          }}
        >
          Estoy ultimando los detalles del portafolio.
          <br />
          Vuelve pronto — estará listo en breve.
        </p>

        {/* Info card */}
        <div
          style={{
            background: "var(--bg-secondary)",
            border: "1px solid var(--border-subtle)",
            borderRadius: "1rem",
            padding: "1.75rem",
            marginBottom: "2.5rem",
            textAlign: "left",
          }}
        >
          <p
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "0.55rem",
              textTransform: "uppercase",
              letterSpacing: "0.2em",
              color: "var(--text-muted)",
              marginBottom: "1.25rem",
            }}
          >
            — mientras tanto
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {[
              {
                label: "Email",
                value: "contacto@aperez24.dev",
                href: "mailto:contacto@aperez24.dev",
                target: "_blank",
              },
              {
                label: "GitHub",
                value: "github.com/aperez-24/",
                href: "https://github.com/aperez-24/",
                target: "_blank",
              },
              {
                label: "LinkedIn",
                value: "linkedin.com/in/adrián-pérez-navarro/",
                href: "https://www.linkedin.com/in/adrián-pérez-navarro/",
                target: "_blank",
              },
            ].map(({ label, value, href }) => (
              <div key={label} style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <span
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "0.65rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.12em",
                    color: "var(--accent)",
                    minWidth: "4.5rem",
                  }}
                >
                  {label}
                </span>
                <a
                  href={href}
                  target={href.startsWith("http") || href.startsWith("mailto") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  style={{
                    fontSize: "0.85rem",
                    color: "var(--text-secondary)",
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLAnchorElement).style.color = "var(--accent-hover)")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLAnchorElement).style.color = "var(--text-secondary)")
                  }
                >
                  {value}
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Footer note */}
        <p
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "0.55rem",
            color: "var(--text-muted)",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            opacity: 0.6,
          }}
        >
          © {new Date().getFullYear()} Adrián Pérez Navarro — Madrid, España
        </p>
      </div>

      <style>{`
        @keyframes pulse-amber {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
      `}</style>
    </main>
  );
}