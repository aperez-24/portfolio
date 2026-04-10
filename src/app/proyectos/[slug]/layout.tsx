import { proyectos } from "@/data/proyectos";

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
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}