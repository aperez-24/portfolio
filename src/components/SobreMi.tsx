"use client";

import { motion, Variants } from "framer-motion";

const tecnologias = [
  { nombre: "HTML5",      icono: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { nombre: "CSS3",       icono: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { nombre: "JavaScript", icono: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { nombre: "TypeScript", icono: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { nombre: "React",      icono: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { nombre: "Next.js",    icono: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { nombre: "Tailwind",   icono: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
  { nombre: "Bootstrap",  icono: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
  { nombre: "PHP",        icono: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
  { nombre: "Java",       icono: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { nombre: "MySQL",      icono: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { nombre: "MariaDB",    icono: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mariadb/mariadb-original.svg" },
  { nombre: "Apache",     icono: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg" },
  { nombre: "Git",        icono: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { nombre: "GitHub",     icono: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  { nombre: "Linux",      icono: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
  { nombre: "WordPress",  icono: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg" },
  { nombre: "VS Code",    icono: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
];

const stats = [
  { valor: "3", label: "proyectos reales" },
  { valor: "1", label: "cliente público" },
  { valor: "1", label: "clientes privados" },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
      delay,
    },
  }),
};

export default function SobreMi() {
  return (
    <section
      id="about"
      style={{ padding: "8rem 2rem", width: "100%", boxSizing: "border-box" }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "4rem",
          alignItems: "center",
        }}
      >
        {/* ── Columna izquierda: texto ── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          custom={0}
        >
          <p
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "0.65rem",
              textTransform: "uppercase",
              letterSpacing: "0.25em",
              color: "var(--accent)",
              marginBottom: "1rem",
            }}
          >
            01 // Sobre Mí
          </p>

          <h2
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              lineHeight: 1.15,
              color: "var(--text-primary)",
              marginBottom: "1.5rem",
            }}
          >
            Junior con proyectos{" "}
            <span className="text-gradient">reales</span>.
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <p style={{ color: "var(--text-muted)", lineHeight: 1.7, fontSize: "1rem" }}>
              Soy Adrián Pérez Navarro, Técnico Superior en Desarrollo de
              Aplicaciones Web recién licenciado y con sede en Madrid. Desde el
              primer día del ciclo me centré en aprender como construir proyectos funcionales,
              no solo ejercicios.
            </p>
            <p style={{ color: "var(--text-muted)", lineHeight: 1.7, fontSize: "1rem" }}>
              Así es como conseguí un encargo real para el{" "}
              <span style={{ color: "var(--text-primary)", fontWeight: 500 }}>
                Ayuntamiento de Rivas-Vaciamadrid
              </span>
              : una plataforma web para gestionar deportes infantiles
              municipales y fomentar los valores deportivos en los más pequeños, hoy en uso real.
            </p>
            <p style={{ color: "var(--text-muted)", lineHeight: 1.7, fontSize: "1rem" }}>
              Busco mi primer empleo como desarrollador web donde pueda seguir
              aprendiendo, aportar desde el primer día y crecer dentro de un
              equipo.
            </p>
          </div>

          <a
            href="/CV-Adrián_Pérez_Navarro.pdf"
            download
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.75rem",
              marginTop: "2rem",
              padding: "0.75rem 1.5rem",
              background: "var(--bg-card)",
              border: "1px solid var(--border-subtle)",
              color: "var(--text-primary)",
              fontWeight: 700,
              borderRadius: "0.75rem",
              textDecoration: "none",
              fontSize: "0.9rem",
              transition: "border-color 0.2s, background 0.2s",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.borderColor = "var(--accent-overlay-hover)";
              el.style.background = "var(--bg-card-hover)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.borderColor = "var(--border-subtle)";
              el.style.background = "var(--bg-card)";
            }}
          >
            <span style={{ color: "var(--accent)" }}>↓</span>
            Descargar CV
            <span
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.6rem",
                color: "var(--text-muted)",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
              }}
            >
              PDF
            </span>
          </a>
        </motion.div>

        {/* ── Columna derecha: tecnologías + stats ── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          custom={0.15}
        >
          <p
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "0.65rem",
              textTransform: "uppercase",
              letterSpacing: "0.25em",
              color: "var(--text-muted)",
              marginBottom: "1.25rem",
            }}
          >
            tecnologías
          </p>

          {/* Grid de iconos */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(6, 1fr)",
              gap: "0.6rem",
            }}
          >
            {tecnologias.map((tech, i) => (
              <motion.div
                key={tech.nombre}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.3,
                  delay: i * 0.03,
                  ease: [0.16, 1, 0.3, 1],
                }}
                title={tech.nombre}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "0.4rem",
                  padding: "0.65rem 0.25rem",
                  background: "var(--bg-secondary)",
                  border: "1px solid var(--border-subtle)",
                  borderRadius: "0.75rem",
                  transition: "border-color 0.2s, background 0.2s",
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--accent-overlay-hover)";
                  e.currentTarget.style.background = "var(--bg-card)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--border-subtle)";
                  e.currentTarget.style.background = "var(--bg-secondary)";
                }}
              >
                <img
                  src={tech.icono}
                  alt={tech.nombre}
                  width={24}
                  height={24}
                  loading="lazy"
                  decoding="async"
                  style={{
                    opacity: 0.8,
                    filter:
                      tech.nombre === "GitHub" || tech.nombre === "WordPress"
                        ? "invert(1) brightness(1)"
                        : "none",
                  }}
                />
                <span
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "0.52rem",
                    color: "var(--text-muted)",
                    textAlign: "center",
                    lineHeight: 1.2,
                  }}
                >
                  {tech.nombre}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Stats */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "1rem",
              marginTop: "1.5rem",
            }}
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  padding: "1rem",
                  background: "var(--bg-secondary)",
                  border: "1px solid var(--border-subtle)",
                  borderRadius: "0.75rem",
                  textAlign: "center",
                }}
              >
                <p
                  style={{
                    fontSize: "1.75rem",
                    fontWeight: 800,
                    color: "var(--accent)",
                    letterSpacing: "-0.03em",
                    lineHeight: 1,
                  }}
                >
                  {stat.valor}
                </p>
                <p
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "0.6rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    color: "var(--text-muted)",
                    marginTop: "0.4rem",
                    lineHeight: 1.4,
                  }}
                >
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}