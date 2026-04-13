import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
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
  title: "Adrián Pérez Navarro | Full Stack Web Developer",
  description:
    "Desarrollador web full stack con proyectos reales, incluyendo una plataforma para el Ayuntamiento de Rivas-Vaciamadrid.",
  openGraph: {
    title: "Adrián Pérez Navarro | Full Stack Web Developer",
    description:
      "Desarrollador web full stack con proyectos reales, incluyendo una plataforma para el Ayuntamiento de Rivas-Vaciamadrid.",
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
    title: "Adrián Pérez Navarro | Full Stack Web Developer",
    description:
      "Desarrollador web full stack con proyectos reales, incluyendo una plataforma para el Ayuntamiento de Rivas-Vaciamadrid.",
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
      </body>
    </html>
  );
}