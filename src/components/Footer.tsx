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
    fontSize: "0.65rem",
    textTransform: "uppercase",
    letterSpacing: "0.1em",
    color: "rgba(204, 195, 216, 0.5)",
    textDecoration: "none",
    transition: "color 0.2s",
  };

  return (
    <footer
      style={{
        background: "#0e0e13",
        borderTop: "1px solid rgba(74, 68, 85, 0.1)",
        width: "100%",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "4rem 2rem",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "2rem",
        }}
      >
        <p style={{ fontWeight: 700, fontSize: "1rem", color: "#e4e1e9", letterSpacing: "-0.01em" }}>
          Adrián Pérez Navarro
        </p>

        <div style={{ display: "flex", gap: "2rem" }}>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={linkStyle}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#7c3aed")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(204, 195, 216, 0.5)")}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div style={{ display: "flex", gap: "1.5rem" }}>
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              style={linkStyle}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#7c3aed")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(204, 195, 216, 0.5)")}
            >
              {link.label}
            </a>
          ))}
        </div>

        <p
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "0.6rem",
            color: "rgba(148, 163, 184, 0.4)",
            letterSpacing: "0.05em",
          }}
        >
          © {new Date().getFullYear()} Adrián Pérez Navarro
        </p>
      </div>
    </footer>
  );
}