import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  title: "Adrián Pérez Navarro | Desarrollador Web Full Stack Madrid",
  description:
    "Desarrollador web full stack junior en Madrid. 3 proyectos reales entregados, incluyendo una plataforma para el Ayuntamiento de Rivas-Vaciamadrid. Disponible para empleo y freelance.",
  openGraph: {
    title: "Adrián Pérez Navarro | Desarrollador Web Full Stack Madrid",
    description:
      "Desarrollador web full stack junior en Madrid. 3 proyectos reales entregados, incluyendo una plataforma para el Ayuntamiento de Rivas-Vaciamadrid.",
    url: "https://aperez24.dev",
    siteName: "Adrián Pérez Navarro — Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Adrián Pérez Navarro — Full Stack Web Developer",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adrián Pérez Navarro | Desarrollador Web Full Stack Madrid",
    description:
      "Desarrollador web full stack junior en Madrid. 3 proyectos reales entregados, incluyendo una plataforma para el Ayuntamiento de Rivas-Vaciamadrid.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicons/favicon.ico", sizes: "any" },
      { url: "/favicons/favicon.svg", type: "image/svg+xml" },
      { url: "/favicons/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: [
      { url: "/favicons/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/favicons/site.webmanifest",
  alternates: {
    canonical: "https://aperez24.dev",
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Adrián Pérez Navarro",
  jobTitle: "Desarrollador Web Full Stack",
  url: "https://aperez24.dev",
  sameAs: [
    "https://github.com/aperez-24",
    "https://www.linkedin.com/in/adrián-pérez-navarro/",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Madrid",
    addressCountry: "ES",
  },
  knowsAbout: [
    "Next.js", "React", "TypeScript", "PHP", "MySQL",
    "Tailwind CSS", "JavaScript", "HTML5", "CSS3",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}>
        {children}
        <Analytics />
        <SpeedInsights />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </body>
    </html>
  );
}