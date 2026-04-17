"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AvisoLegal() {
  return (
    <>
      <Navbar />
      <main
        style={{
          background: "var(--bg-primary)",
          minHeight: "100vh",
          color: "var(--text-primary)",
          fontFamily: "'Inter', sans-serif",
          paddingTop: "72px",
        }}
      >
        {/* Back bar */}
        <div
          style={{
            background: "rgba(14, 14, 19, 0.95)",
            borderBottom: "1px solid var(--border-faint)",
          }}
        >
          <div
            style={{
              maxWidth: "1200px",
              margin: "0 auto",
              padding: "0.85rem 2rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Link
              href="/"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.7rem",
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                color: "var(--text-muted)",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.color =
                  "var(--accent-hover)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.color =
                  "var(--text-muted)")
              }
            >
              ← Volver al portfolio
            </Link>
            <span
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.6rem",
                textTransform: "uppercase",
                letterSpacing: "0.2em",
                color: "var(--text-muted)",
              }}
            >
              Legal
            </span>
          </div>
        </div>

        {/* Content */}
        <article
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            padding: "5rem 2rem 8rem",
          }}
        >
          {/* Header */}
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
              Legal // Aviso
            </p>
            <h1
              style={{
                fontSize: "clamp(2rem, 4vw, 2.75rem)",
                fontWeight: 800,
                letterSpacing: "-0.03em",
                lineHeight: 1.15,
                color: "var(--text-primary)",
                marginBottom: "1rem",
              }}
            >
              Aviso Legal
            </h1>
            <p
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.65rem",
                color: "var(--text-muted)",
                letterSpacing: "0.08em",
              }}
            >
              Última actualización: abril de 2026
            </p>
          </div>

          {/* Sections */}
          <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
            <Section title="1. Identificación del titular">
              <p>
                En cumplimiento de la Ley 34/2002, de 11 de julio, de Servicios
                de la Sociedad de la Información y de Comercio Electrónico
                (LSSICE), se facilitan los siguientes datos de identificación:
              </p>
              <InfoBlock
                items={[
                  { label: "Titular", value: "Adrián Pérez Navarro" },
                  { label: "Actividad", value: "Desarrollador Web (persona física)" },
                  { label: "Domicilio", value: "Madrid, España" },
                  {
                    label: "Email",
                    value: "contacto@aperez24.dev",
                    href: "mailto:contacto@aperez24.dev",
                  },
                  { label: "Web", value: "aperez24.dev", href: "https://aperez24.dev" },
                ]}
              />
            </Section>

            <Divider />

            <Section title="2. Objeto y ámbito de aplicación">
              <p>
                El presente Aviso Legal regula el acceso y uso del sitio web{" "}
                <strong>aperez24.dev</strong>, cuya titularidad corresponde a
                Adrián Pérez Navarro.
              </p>
              <p>
                La web tiene carácter de <strong>portfolio profesional personal</strong>{" "}
                y no realiza actividades de comercio electrónico ni venta de
                productos o servicios con precio publicado. Su único fin es
                mostrar proyectos realizados y facilitar el contacto para
                posibles colaboraciones.
              </p>
            </Section>

            <Divider />

            <Section title="3. Propiedad intelectual e industrial">
              <p>
                Todos los contenidos de esta web —incluyendo textos, imágenes,
                diseño, código fuente y marca— son propiedad de Adrián Pérez
                Navarro o de sus respectivos titulares, y están protegidos por
                la legislación española e internacional sobre propiedad
                intelectual e industrial.
              </p>
              <p>
                Queda expresamente prohibida la reproducción, distribución,
                comunicación pública o transformación de cualquier contenido sin
                autorización escrita del titular, salvo para uso personal y
                privado.
              </p>
              <p>
                Los logotipos de tecnologías mostrados en la sección de stack
                (HTML5, PHP, etc.) son marcas registradas de sus respectivos
                propietarios y se usan con fines meramente identificativos.
              </p>
            </Section>

            <Divider />

            <Section title="4. Exclusión de responsabilidad">
              <p>
                El titular no garantiza la disponibilidad continua del sitio web
                ni se responsabiliza de:
              </p>
              <ul>
                <li>
                  Interrupciones del servicio por mantenimiento, fallos técnicos
                  o causas ajenas a su control.
                </li>
                <li>
                  El contenido de webs de terceros enlazadas desde este sitio.
                </li>
                <li>
                  El uso que los visitantes hagan de la información publicada.
                </li>
              </ul>
            </Section>

            <Divider />

            <Section title="5. Ley aplicable y jurisdicción">
              <p>
                Las presentes condiciones se rigen por la legislación española.
                Para la resolución de cualquier controversia derivada del uso
                de esta web, las partes se someten a los Juzgados y Tribunales
                de la ciudad de <strong>Madrid</strong>, con renuncia expresa a
                cualquier otro fuero que pudiera corresponderles.
              </p>
            </Section>

            <Divider />

            <Section title="6. Modificaciones">
              <p>
                El titular se reserva el derecho a modificar el presente Aviso
                Legal en cualquier momento. Las modificaciones entrarán en vigor
                desde su publicación en la web. Se recomienda revisar
                periódicamente este apartado.
              </p>
            </Section>
          </div>

          {/* Footer links */}
          <div
            style={{
              marginTop: "5rem",
              paddingTop: "2rem",
              borderTop: "1px solid var(--border-faint)",
              display: "flex",
              gap: "2rem",
              flexWrap: "wrap",
            }}
          >
            <Link
              href="/privacidad"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.65rem",
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                color: "var(--text-muted)",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.color =
                  "var(--accent-hover)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.color =
                  "var(--text-muted)")
              }
            >
              Política de Privacidad →
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}

/* ── Sub-components ── */

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2
        style={{
          fontSize: "1.1rem",
          fontWeight: 700,
          letterSpacing: "-0.02em",
          color: "var(--text-primary)",
          marginBottom: "1.25rem",
        }}
      >
        {title}
      </h2>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          color: "var(--text-muted)",
          fontSize: "0.92rem",
          lineHeight: 1.8,
        }}
      >
        {children}
      </div>
    </section>
  );
}

function Divider() {
  return (
    <div style={{ height: "1px", background: "var(--border-faint)" }} />
  );
}

function InfoBlock({
  items,
}: {
  items: { label: string; value: string; href?: string }[];
}) {
  return (
    <div
      style={{
        background: "var(--bg-secondary)",
        border: "1px solid var(--border-subtle)",
        borderRadius: "0.75rem",
        padding: "1.25rem 1.5rem",
        display: "flex",
        flexDirection: "column",
        gap: "0.75rem",
      }}
    >
      {items.map(({ label, value, href }) => (
        <div
          key={label}
          style={{ display: "flex", gap: "1rem", alignItems: "baseline" }}
        >
          <span
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "0.58rem",
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              color: "var(--accent)",
              minWidth: "7rem",
              flexShrink: 0,
            }}
          >
            {label}
          </span>
          {href ? (
            <a
              href={href}
              style={{
                fontSize: "0.875rem",
                color: "var(--text-secondary)",
                textDecoration: "none",
              }}
            >
              {value}
            </a>
          ) : (
            <span style={{ fontSize: "0.875rem", color: "var(--text-secondary)" }}>
              {value}
            </span>
          )}
        </div>
      ))}
    </div>
  );
}