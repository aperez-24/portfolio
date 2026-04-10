"use client";

const tecnologias = [
  // Frontend
  { nombre: "HTML5",      icono: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { nombre: "CSS3",       icono: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { nombre: "JavaScript", icono: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { nombre: "TypeScript", icono: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { nombre: "React",      icono: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { nombre: "Next.js",    icono: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { nombre: "Tailwind",   icono: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
  { nombre: "Bootstrap",  icono: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
  // Backend & DB
  { nombre: "PHP",        icono: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
  { nombre: "Java",       icono: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { nombre: "MySQL",      icono: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { nombre: "MariaDB",    icono: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mariadb/mariadb-original.svg" },
  { nombre: "Apache",     icono: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg" },
  // Tools & Infra
  { nombre: "Git",        icono: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { nombre: "GitHub",     icono: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  { nombre: "Linux",      icono: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
  { nombre: "WordPress",  icono: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg" },
  { nombre: "VS Code",    icono: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
];

const stats = [
  { valor: "3", label: "proyectos reales" },
  { valor: "1", label: "cliente público" },
  { valor: "2", label: "clientes privados" },
];

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
        <div>
          <p
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "0.65rem",
              textTransform: "uppercase",
              letterSpacing: "0.25em",
              color: "#7c3aed",
              marginBottom: "1rem",
            }}
          >
            01 // Identity
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
            Junior con proyectos{" "}
            <span className="text-gradient">reales</span>.
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <p style={{ color: "#94a3b8", lineHeight: 1.7, fontSize: "1rem" }}>
              Soy Adrián Pérez Navarro, Técnico Superior en Desarrollo de
              Aplicaciones Web recién licenciado y con sede en Madrid. Desde el
              primer día del ciclo me centré en construir proyectos funcionales,
              no solo ejercicios.
            </p>
            <p style={{ color: "#94a3b8", lineHeight: 1.7, fontSize: "1rem" }}>
              Uno de esos proyectos fue un encargo real para el{" "}
              <span style={{ color: "#e4e1e9", fontWeight: 500 }}>
                Ayuntamiento de Rivas-Vaciamadrid
              </span>
              : una plataforma web para gestionar deportes infantiles
              municipales, hoy en uso real.
            </p>
            <p style={{ color: "#94a3b8", lineHeight: 1.7, fontSize: "1rem" }}>
              Busco mi primer empleo como desarrollador web donde pueda seguir
              aprendiendo, aportar desde el primer día y crecer dentro de un
              equipo.
            </p>
          </div>

          <a
            href="/cv-adrian-perez.pdf"
            download
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.75rem",
              marginTop: "2rem",
              padding: "0.75rem 1.5rem",
              background: "#1f1f25",
              border: "1px solid rgba(74, 68, 85, 0.4)",
              color: "#e4e1e9",
              fontWeight: 700,
              borderRadius: "0.75rem",
              textDecoration: "none",
              fontSize: "0.9rem",
            }}
          >
            <span style={{ color: "#7c3aed" }}>↓</span>
            Descargar CV
            <span
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.6rem",
                color: "#94a3b8",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
              }}
            >
              PDF
            </span>
          </a>
        </div>

        {/* ── Columna derecha: tecnologías + stats ── */}
        <div>
          <p
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "0.65rem",
              textTransform: "uppercase",
              letterSpacing: "0.25em",
              color: "#94a3b8",
              marginBottom: "1.25rem",
            }}
          >
            tecnologías
          </p>

          {/* Grid de iconos — 6 columnas para que quepan los 18 */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(6, 1fr)",
              gap: "0.6rem",
            }}
          >
            {tecnologias.map((tech) => (
              <div
                key={tech.nombre}
                title={tech.nombre}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "0.4rem",
                  padding: "0.65rem 0.25rem",
                  background: "#131318",
                  border: "1px solid rgba(74, 68, 85, 0.2)",
                  borderRadius: "0.75rem",
                  transition: "border-color 0.2s, background 0.2s",
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(124, 58, 237, 0.4)";
                  e.currentTarget.style.background = "#1a1a22";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(74, 68, 85, 0.2)";
                  e.currentTarget.style.background = "#131318";
                }}
              >
                <img
                  src={tech.icono}
                  alt={tech.nombre}
                  width={24}
                  height={24}
                  style={{
                    opacity: 0.8,
                    filter: tech.nombre === "GitHub" || tech.nombre === "WordPress" ? "invert(1) brightness(1)" : "none",
                  }}
                />
                <span
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "0.52rem",
                    color: "#94a3b8",
                    textAlign: "center",
                    lineHeight: 1.2,
                  }}
                >
                  {tech.nombre}
                </span>
              </div>
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
            {stats.map((stat) => (
              <div
                key={stat.label}
                style={{
                  padding: "1rem",
                  background: "#131318",
                  border: "1px solid rgba(74, 68, 85, 0.2)",
                  borderRadius: "0.75rem",
                  textAlign: "center",
                }}
              >
                <p
                  style={{
                    fontSize: "1.75rem",
                    fontWeight: 800,
                    color: "#7c3aed",
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
                    color: "#94a3b8",
                    marginTop: "0.4rem",
                    lineHeight: 1.4,
                  }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}