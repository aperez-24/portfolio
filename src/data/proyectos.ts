import { Proyecto } from "@/types/proyecto";

export const proyectos: Proyecto[] = [
  {
    slug: "sports-portal-rivas",
    titulo: "Sports Portal — Rivas-Vaciamadrid",
    descripcionCorta: "Plataforma pública para gestionar actas, clasificaciones y partidos de deportes infantiles municipales.",
    descripcionLarga: "Aplicación web desarrollada para el Ayuntamiento de Rivas-Vaciamadrid que permite llevar el registro completo de todos los deportes infantiles del municipio. Los ciudadanos pueden consultar clasificaciones, ver próximos partidos y acceder a las actas de cada jornada. El panel de administración permite gestionar equipos, resultados y temporadas.",
    tecnologias: ["PHP", "MySQL", "JavaScript", "HTML", "CSS", "Apache"],
    imagen: "/images/projects/rivas.jpg",
    badge: "Government Client ★",
    badgeTipo: "featured",
  },
  {
    slug: "fitness-gamification-app",
    titulo: "Fitness Gamification App",
    descripcionCorta: "Aplicación web de registro de actividad en el gimnasio con rutinas, dietas y mecánicas de competición.",
    descripcionLarga: "Trabajo de Fin de Grado consistente en una aplicación web completa para el seguimiento de la actividad física. Los usuarios pueden registrar sus rutinas de entrenamiento, llevar un control de su dieta y competir con otros usuarios a través de un sistema de gamificación con rankings y logros desbloqueables.",
    tecnologias: ["PHP", "MySQL", "JavaScript", "HTML", "CSS", "Apache"],
    imagen: "/images/projects/fitness.jpg",
    badge: "Final Degree Project",
    badgeTipo: "personal",
  },
  {
    slug: "graphic-arts-studio",
    titulo: "Graphic Arts Studio Website",
    descripcionCorta: "Web corporativa de 4 páginas con formulario de contacto para empresa del sector de artes gráficas.",
    descripcionLarga: "Sitio web corporativo desarrollado para una empresa de artes gráficas. Incluye página de inicio, servicios, portfolio y contacto. Diseño limpio y profesional orientado a transmitir la identidad visual de la empresa. Formulario de contacto funcional y diseño completamente responsivo.",
    tecnologias: ["Next.js", "Tailwind CSS"],
    imagen: "/images/projects/artes-graficas.jpg",
    badge: "Client Project",
    badgeTipo: "client",
  },
];