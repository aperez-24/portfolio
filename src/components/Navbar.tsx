"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image"; // Importante para optimización

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = ["hero", "about", "projects"];
      const current = sections.find((id) => {
        const el = document.getElementById(id);
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= 120 && rect.bottom >= 120;
      });
      if (current) setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "hero", label: "Inicio", href: "/#hero" },
    { id: "about", label: "Sobre Mí", href: "/#about" },
    { id: "projects", label: "Proyectos", href: "/#projects" },
  ];

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 50,
        transition: "background 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease",
        background: scrolled ? "rgba(14,14,19,0.88)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled
          ? "1px solid var(--border)"
          : "1px solid transparent",
        boxShadow: scrolled ? "0 4px 40px rgba(124,58,237,0.05)" : "none",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "72px",
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 2rem",
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        {/* ── Logo con cambio Dinámico ── */}
        <Link
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
            flexShrink: 0,
          }}
        >
          {/* Logo corto para Móvil (Oculto en md+) */}
          <div className="block md:hidden">
            <Image
              src="/images/logos/logo.png"
              alt="Logo"
              width={40}
              height={40}
              priority
              className="object-contain"
            />
          </div>

          {/* Logo lateral para Desktop (Oculto en móvil) */}
          <div className="hidden md:block">
            <Image
              src="/images/logos/logo.png"
              alt="Adrián Pérez Navarro Logo"
              width={50} // Ajusta según el aspecto de tu logo lateral
              height={50}
              priority
              className="object-contain"
            />
          </div>
        </Link>

        {/* ── Desktop links ── */}
        <div
          className="hidden md:flex"
          style={{ alignItems: "center", gap: "0.25rem" }}
        >
          {navLinks.map(({ id, label, href }) => (
            <a
              key={id}
              href={href}
              style={{
                padding: "0.5rem 1rem",
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.68rem",
                textTransform: "uppercase",
                letterSpacing: "0.16em",
                color: activeSection === id ? "var(--accent-hover)" : "var(--text-muted)",
                textDecoration: "none",
                borderRadius: "0.5rem",
                background: activeSection === id ? "rgba(124,58,237,0.07)" : "transparent",
                transition: "color 0.2s, background 0.2s",
              }}
              onMouseEnter={(e) => {
                if (activeSection !== id)
                  (e.currentTarget as HTMLAnchorElement).style.color = "var(--text-secondary)";
              }}
              onMouseLeave={(e) => {
                if (activeSection !== id)
                  (e.currentTarget as HTMLAnchorElement).style.color = "var(--text-muted)";
              }}
            >
              {label}
            </a>
          ))}

          <a
            href="#contact"
            style={{
              marginLeft: "1.25rem",
              padding: "0.65rem 1.5rem",
              background: "var(--accent)",
              color: "#fff",
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "0.68rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              borderRadius: "0.5rem",
              textDecoration: "none",
              whiteSpace: "nowrap",
              transition: "background 0.2s, box-shadow 0.2s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "var(--accent-hover)";
              (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                "0 0 24px rgba(124,58,237,0.35)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "var(--accent)";
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = "none";
            }}
          >
            Contactame
          </a>
        </div>

        {/* ── Mobile hamburger ── */}
        <button
          className="flex md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "0.5rem",
            flexDirection: "column",
            gap: "5px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span
            style={{
              display: "block",
              width: "20px",
              height: "1.5px",
              background: "var(--text-primary)",
              transition: "transform 0.3s",
              transform: menuOpen ? "rotate(45deg) translate(4.5px, 4.5px)" : "none",
            }}
          />
          <span
            style={{
              display: "block",
              width: "20px",
              height: "1.5px",
              background: "var(--text-primary)",
              transition: "opacity 0.3s",
              opacity: menuOpen ? 0 : 1,
            }}
          />
          <span
            style={{
              display: "block",
              width: "20px",
              height: "1.5px",
              background: "var(--text-primary)",
              transition: "transform 0.3s",
              transform: menuOpen ? "rotate(-45deg) translate(4.5px, -4.5px)" : "none",
            }}
          />
        </button>
      </div>

      {/* ── Mobile menu ── */}
      <div
        className="block md:hidden"
        style={{
          overflow: "hidden",
          maxHeight: menuOpen ? "320px" : "0",
          transition: "max-height 0.3s ease",
        }}
      >
        <div
          style={{
            background: "rgba(14,14,19,0.97)",
            backdropFilter: "blur(20px)",
            borderTop: "1px solid var(--border)",
            padding: "1.5rem 2rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.25rem",
          }}
        >
          {navLinks.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => setMenuOpen(false)}
              style={{
                padding: "0.85rem 0",
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.68rem",
                textTransform: "uppercase",
                letterSpacing: "0.16em",
                color: "var(--text-muted)",
                textDecoration: "none",
                borderBottom: "1px solid rgba(74,68,85,0.1)",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.color = "var(--accent-hover)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.color = "var(--text-muted)")
              }
            >
              {label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            style={{
              marginTop: "1rem",
              padding: "0.85rem",
              textAlign: "center",
              background: "var(--accent)",
              color: "#fff",
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "0.68rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              borderRadius: "0.5rem",
              textDecoration: "none",
            }}
          >
            Contactame
          </a>
        </div>
      </div>
    </nav>
  );
}