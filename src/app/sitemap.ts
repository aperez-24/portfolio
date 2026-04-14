import { MetadataRoute } from "next";
import { proyectos } from "@/data/proyectos";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://aperez24.dev";

  const proyectosUrls = proyectos.map((p) => ({
    url: `${baseUrl}/proyectos/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    ...proyectosUrls,
  ];
}