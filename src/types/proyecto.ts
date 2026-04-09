export type Proyecto = {
  slug: string;
  titulo: string;
  descripcionCorta: string;
  descripcionLarga: string;
  tecnologias: string[];
  imagen: string;
  badge: string;
  badgeTipo: "featured" | "client" | "personal";
  linkDemo?: string;
  linkRepo?: string;
};