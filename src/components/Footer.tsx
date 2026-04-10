"use client";

export default function Footer() {
  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { label: "GitHub", href: "https://github.com/aperez-24" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/adrián-pérez-navarro/" },
  ];

  const linkStyle: React.CSSProperties = {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: "0.6rem",
    textTransform: "uppercase",
    letterSpacing: "0.12em",
    color: "var(--text-muted)",
    textDecoration: "none",
    transition: "color 0.2s",
  };

  return (
    <footer
      style={{
        background: "var(--bg-primary)",
        width: "100%",
        position: "relative",
      }}
    >
      {/* Glow line on top */}
      <div
        style={{
          height: "1px",
          background:
            "linear-gradient(90deg, transparent, rgba(124,58,237,0.2), transparent)",
        }}
      />

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "2.5rem 2rem",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "1.5rem",
        }}
      >
        {/* Brand */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <span
            style={{
              width: "6px",
              height: "6px",
              borderRadius: "9999px",
              background: "var(--accent)",
              boxShadow: "0 0 6px rgba(124,58,237,0.55)",
              flexShrink: 0,
            }}
          />
          <span
            style={{
              fontWeight: 700,
              fontSize: "0.875rem",
              color: "var(--text-secondary)",
              letterSpacing: "-0.01em",
            }}
          >
            aperez<span style={{ color: "var(--accent)" }}>-24</span>
          </span>
        </div>

        {/* Nav links */}
        <div style={{ display: "flex", gap: "2rem" }}>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={linkStyle}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.color = "var(--accent)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.color = "var(--text-muted)")
              }
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Social links */}
        <div style={{ display: "flex", gap: "1.5rem" }}>
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              style={linkStyle}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.color = "var(--accent)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.color = "var(--text-muted)")
              }
            >
              {link.label} ↗
            </a>
          ))}
        </div>

        {/* Copyright */}
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
          © {new Date().getFullYear()} Adrián Pérez Navarro
        </p>
      </div>
    </footer>
  );
}