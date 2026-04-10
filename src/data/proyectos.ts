import { Proyecto } from "@/types/proyecto";

export const proyectos: Proyecto[] = [
  {
    slug: "sports-portal-rivas",
    titulo: "Portal de Deportes — Rivas-Vaciamadrid",
    descripcionCorta: "Plataforma pública para la gestión integral de actas, clasificaciones y competición de deportes municipales.",
    descripcionLarga: "Solución integral desarrollada para el Ayuntamiento de Rivas-Vaciamadrid. El sistema centraliza el registro de deportes infantiles, permitiendo a los ciudadanos consultar clasificaciones y calendarios en tiempo real. Incluye un panel administrativo robusto para la gestión de temporadas, resultados y cumplimiento de normativas locales.",
    tecnologias: ["PHP", "MySQL", "JavaScript", "HTML", "CSS", "Apache", "IONOS"],
    imagen: "/images/projects/rivas.jpg",
    badge: "Cliente Gubernamental ★",
    badgeTipo: "featured",
  },
  {
    slug: "fitness-gamification-app",
    titulo: "Fitness Gamification App",
    descripcionCorta: "Ecosistema web para el seguimiento de entrenamiento y nutrición con dinámicas de competición social.",
    descripcionLarga: "Proyecto de fin de grado enfocado en la retención de usuarios mediante gamificación. La plataforma permite el tracking de rutinas y dietas, integrando un motor de competición con rankings dinámicos y sistemas de logros. Diseñada bajo principios de escalabilidad y una experiencia de usuario (UX) orientada al rendimiento.",
    tecnologias: ["PHP", "MySQL", "JavaScript", "HTML", "CSS", "Apache"],
    imagen: "/images/projects/fitness.jpg",
    badge: "Proyecto de Grado (TFG)",
    badgeTipo: "personal",
  },
  {
    slug: "graphic-arts-studio",
    titulo: "Estudio de Artes Gráficas",
    descripcionCorta: "Plataforma corporativa de alto rendimiento con enfoque en conversión y diseño responsivo.",
    descripcionLarga: "Desarrollo de sitio web corporativo para el sector de artes gráficas utilizando stack moderno. Prioriza la velocidad de carga y el SEO, incluyendo un sistema de contacto optimizado y una arquitectura de componentes reutilizables. Enfoque en 'Privacy by Design' para el manejo de leads.",
    tecnologias: ["Next.js", "Tailwind CSS", "Cloudflare Pages", "Google Analytics"],
    imagen: "/images/projects/artes-graficas.jpg",
    badge: "Proyecto para Cliente",
    badgeTipo: "client",
  },
];