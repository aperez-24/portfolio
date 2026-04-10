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

  // Campos opcionales para información ampliada
  retos?: string;           // Retos técnicos encontrados
  solucion?: string;        // Cómo los resolviste
  aprendizajes?: string;    // Qué aprendiste desarrollando el proyecto
  caracteristicas?: string[]; // Lista de funcionalidades clave
  duracion?: string;        // Ej: "3 meses"
  rol?: string;             // Ej: "Desarrollador full stack en solitario"
};