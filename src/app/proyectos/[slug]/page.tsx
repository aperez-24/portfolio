import { notFound } from "next/navigation";
import { proyectos } from "@/data/proyectos";
import ProyectoDetalleUI from "./ProyectoDetalleUI";

export function generateStaticParams() {
  return proyectos.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const proyecto = proyectos.find((p) => p.slug === slug);
  if (!proyecto) return {};

  return {
    title: `${proyecto.titulo} — Adrián Pérez Navarro`,
    description: proyecto.descripcionCorta,
    openGraph: {
      title: `${proyecto.titulo} — Adrián Pérez Navarro`,
      description: proyecto.descripcionCorta,
      url: `https://aperez24.dev/proyectos/${proyecto.slug}`,
      images: [
        {
          url: proyecto.imagen,
          width: 1200,
          height: 630,
          alt: proyecto.titulo,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${proyecto.titulo} — Adrián Pérez Navarro`,
      description: proyecto.descripcionCorta,
      images: [proyecto.imagen],
    },
  };
}

export default async function ProyectoDetalle({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const proyecto = proyectos.find((p) => p.slug === slug);

  if (!proyecto) notFound();

  return <ProyectoDetalleUI proyecto={proyecto} />;
}