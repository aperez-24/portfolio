"use client";

import { motion, Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
      delay,
    },
  }),
};

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "0 2rem",
        textAlign: "center",
        overflow: "hidden",
        background: "var(--bg-primary)",
        boxSizing: "border-box",
      }}
    >
      {/* Grid background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          opacity: 0.03,
          backgroundImage:
            "linear-gradient(var(--accent-hover) 1px, transparent 1px), linear-gradient(90deg, var(--accent-hover) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Radial glow */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "900px",
          height: "500px",
          background: "radial-gradient(ellipse, var(--accent-overlay) 0%, transparent 70%)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      {/* Bottom separator line */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "60%",
          height: "1px",
          background: "linear-gradient(90deg, transparent, var(--accent-glow-md), transparent)",
          zIndex: 1,
        }}
      />

      {/* Content */}
      <div style={{ position: "relative", zIndex: 1 }}>

        {/* Available badge */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.6rem",
            padding: "0.4rem 1rem",
            background: "var(--bg-secondary)",
            border: "1px solid var(--border)",
            borderRadius: "9999px",
            marginBottom: "2.5rem",
          }}
        >
          <span
            style={{
              width: "6px",
              height: "6px",
              borderRadius: "9999px",
              background: "var(--color-success)",
              boxShadow: "0 0 6px var(--color-success-border)",
              animation: "pulse 2s infinite",
              display: "block",
              flexShrink: 0,
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
            Disponible para trabajar
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          className="text-gradient"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.1}
          style={{
            fontSize: "clamp(3.5rem, 10vw, 7rem)",
            fontWeight: 900,
            letterSpacing: "-0.04em",
            lineHeight: 0.95,
            marginBottom: "1.5rem",
          }}
        >
          Adrián Pérez
        </motion.h1>

        {/* Role */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.2}
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
              fontSize: "0.68rem",
              textTransform: "uppercase",
              letterSpacing: "0.25em",
              color: "var(--text-muted)",
            }}
          >
            Desarrollador Web Full Stack
          </p>
          <span style={{ height: "1px", width: "2.5rem", background: "var(--border)" }} />
        </motion.div>

        {/* Description */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.3}
          style={{
            maxWidth: "520px",
            margin: "0 auto 3rem",
            color: "var(--text-muted)",
            lineHeight: 1.75,
            fontSize: "1rem",
          }}
        >
          Desarrollador junior con 3 proyectos reales entregados, incluyendo una
          plataforma para el{" "}
          <span style={{ color: "var(--text-secondary)", fontWeight: 500 }}>
            Ayuntamiento de Rivas-Vaciamadrid
          </span>
          . Construyo aplicaciones limpias, funcionales y mantenibles.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.4}
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1rem",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <a
            href="#projects"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.6rem",
              padding: "0.9rem 2rem",
              background: "var(--accent)",
              color: "#fff",
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "0.72rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              borderRadius: "0.6rem",
              textDecoration: "none",
              border: "1px solid var(--accent)",
              boxShadow: `0 0 30px var(--accent-glow-sm)`,
              transition: "background 0.2s, box-shadow 0.2s, transform 0.2s",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.background = "var(--accent-hover)";
              el.style.boxShadow = `0 0 50px var(--accent-glow-lg)`;
              el.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.background = "var(--accent)";
              el.style.boxShadow = `0 0 30px var(--accent-glow-sm)`;
              el.style.transform = "translateY(0)";
            }}
          >
            Ver mis proyectos →
          </a>

          <a
            href="/cv-adrian-perez.pdf"
            download
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.6rem",
              padding: "0.9rem 2rem",
              background: "transparent",
              color: "var(--text-secondary)",
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "0.72rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              borderRadius: "0.6rem",
              textDecoration: "none",
              border: "1px solid var(--border)",
              transition: "border-color 0.2s, color 0.2s, background 0.2s, transform 0.2s",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.borderColor = "var(--accent-overlay-hover)";
              el.style.color = "var(--text-primary)";
              el.style.background = "var(--accent-overlay)";
              el.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.borderColor = "var(--border)";
              el.style.color = "var(--text-secondary)";
              el.style.background = "transparent";
              el.style.transform = "translateY(0)";
            }}
          >
            <span style={{ color: "var(--accent)" }}>↓</span>
            Descargar CV
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        style={{
          position: "absolute",
          bottom: "2.5rem",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.5rem",
          zIndex: 1,
        }}
      >
        <span
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "0.52rem",
            textTransform: "uppercase",
            letterSpacing: "0.2em",
            color: "var(--border)",
          }}
        >
          scroll
        </span>
        <div
          style={{
            width: "1px",
            height: "2.5rem",
            background: "linear-gradient(to bottom, var(--border), transparent)",
          }}
        />
      </motion.div>
    </section>
  );
}