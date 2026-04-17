"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Privacidad() {
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
              Legal // Privacidad
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
              Política de Privacidad
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
            <Section title="1. Responsable del tratamiento">
              <p>
                En cumplimiento del Reglamento (UE) 2016/679 (RGPD) y la Ley
                Orgánica 3/2018 (LOPDGDD), te informamos que el responsable del
                tratamiento de tus datos personales es:
              </p>
              <InfoBlock
                items={[
                  { label: "Responsable", value: "Adrián Pérez Navarro" },
                  { label: "Actividad", value: "Desarrollador Web" },
                  { label: "Ubicación", value: "Madrid, España" },
                  {
                    label: "Contacto",
                    value: "contacto@aperez24.dev",
                    href: "mailto:contacto@aperez24.dev",
                  },
                ]}
              />
            </Section>

            <Divider />

            <Section title="2. Datos que recopilamos">
              <p>
                Únicamente recopilamos los datos que tú nos proporcionas
                voluntariamente a través del <strong>formulario de contacto</strong>:
              </p>
              <ul>
                <li>Nombre</li>
                <li>Dirección de correo electrónico</li>
                <li>Asunto</li>
                <li>Mensaje</li>
              </ul>
              <p>
                No recogemos datos de navegación, no usamos cookies de
                seguimiento y no elaboramos perfiles de usuario.
              </p>
              <p>
                Esta web utiliza{" "}
                <strong>Vercel Analytics y Speed Insights</strong>, que recogen
                métricas de rendimiento y visitas de forma anónima y agregada,
                sin identificar usuarios individuales ni usar cookies.
              </p>
            </Section>

            <Divider />

            <Section title="3. Finalidad y base legitimadora">
              <TableBlock
                headers={["Finalidad", "Base legal"]}
                rows={[
                  [
                    "Responder a tu mensaje de contacto",
                    "Interés legítimo (art. 6.1.f RGPD)",
                  ],
                  [
                    "Mantener comunicación para posibles colaboraciones",
                    "Consentimiento (art. 6.1.a RGPD)",
                  ],
                ]}
              />
            </Section>

            <Divider />

            <Section title="4. Destinatarios de los datos">
              <p>
                Tus datos son tratados por los siguientes proveedores de
                servicios que actúan como encargados del tratamiento:
              </p>
              <TableBlock
                headers={["Proveedor", "Servicio", "Ubicación"]}
                rows={[
                  ["Resend Inc.", "Envío de emails transaccionales", "EE.UU. (SCCs)"],
                  ["Vercel Inc.", "Hospedaje web e infraestructura", "EE.UU. (SCCs)"],
                ]}
              />
              <p>
                Las transferencias internacionales a EE.UU. están cubiertas por
                Cláusulas Contractuales Estándar (SCCs) aprobadas por la
                Comisión Europea.
              </p>
              <p>No cedemos ni vendemos tus datos a terceros.</p>
            </Section>

            <Divider />

            <Section title="5. Plazo de conservación">
              <p>
                Conservamos tus datos de contacto durante el tiempo necesario
                para gestionar tu consulta y, si surge una relación profesional,
                durante la vigencia de la misma. En cualquier caso, los datos se
                eliminarán transcurridos <strong>12 meses</strong> desde el
                último contacto, salvo obligación legal de conservación.
              </p>
            </Section>

            <Divider />

            <Section title="6. Tus derechos">
              <p>
                Puedes ejercer los siguientes derechos enviando un email a{" "}
                <a
                  href="mailto:contacto@aperez24.dev"
                  style={{ color: "var(--accent-hover)", textDecoration: "none" }}
                >
                  contacto@aperez24.dev
                </a>{" "}
                con el asunto <em>"Ejercicio de derechos RGPD"</em>:
              </p>
              <ul>
                <li>
                  <strong>Acceso</strong> — saber qué datos tenemos sobre ti
                </li>
                <li>
                  <strong>Rectificación</strong> — corregir datos inexactos
                </li>
                <li>
                  <strong>Supresión</strong> — solicitar la eliminación de tus datos
                </li>
                <li>
                  <strong>Oposición</strong> — oponerte al tratamiento
                </li>
                <li>
                  <strong>Portabilidad</strong> — recibir tus datos en formato
                  estructurado
                </li>
                <li>
                  <strong>Limitación</strong> — restringir el tratamiento en
                  determinadas circunstancias
                </li>
              </ul>
              <p>
                También puedes presentar una reclamación ante la{" "}
                <a
                  href="https://www.aepd.es"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "var(--accent-hover)", textDecoration: "none" }}
                >
                  Agencia Española de Protección de Datos (AEPD)
                </a>
                .
              </p>
            </Section>

            <Divider />

            <Section title="7. Seguridad">
              <p>
                La web se sirve exclusivamente mediante <strong>HTTPS</strong>.
                Las API keys y credenciales se almacenan como variables de
                entorno en Vercel, nunca en el código fuente. El endpoint de
                contacto incluye validación de campos y protección básica contra
                abuso.
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
              href="/aviso-legal"
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
              Aviso Legal →
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
        <div key={label} style={{ display: "flex", gap: "1rem", alignItems: "baseline" }}>
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

function TableBlock({
  headers,
  rows,
}: {
  headers: string[];
  rows: string[][];
}) {
  return (
    <div style={{ overflowX: "auto" }}>
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          fontSize: "0.85rem",
        }}
      >
        <thead>
          <tr>
            {headers.map((h) => (
              <th
                key={h}
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.58rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                  color: "var(--accent)",
                  textAlign: "left",
                  padding: "0.6rem 1rem 0.6rem 0",
                  borderBottom: "1px solid var(--border-subtle)",
                  whiteSpace: "nowrap",
                }}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => (
                <td
                  key={j}
                  style={{
                    padding: "0.75rem 1rem 0.75rem 0",
                    borderBottom: "1px solid var(--border-faint)",
                    color: "var(--text-muted)",
                    lineHeight: 1.6,
                    verticalAlign: "top",
                  }}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}