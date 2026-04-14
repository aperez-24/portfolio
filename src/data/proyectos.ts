import { Proyecto } from "@/types/proyecto";

export const proyectos: Proyecto[] = [
  {
    slug: "sports-portal-rivas",
    titulo: "Portal de Deportes — Rivas-Vaciamadrid",
    descripcionCorta:
      "Plataforma pública para la gestión integral de actas, clasificaciones y competición de deportes municipales.",
    descripcionLarga:
      "Solución integral desarrollada para el Ayuntamiento de Rivas-Vaciamadrid. El sistema centraliza el registro de deportes infantiles, permitiendo a los ciudadanos consultar clasificaciones y calendarios en tiempo real. Incluye un panel administrativo robusto para la gestión de temporadas, resultados y cumplimiento de normativas locales.",
    tecnologias: ["PHP", "MySQL", "JavaScript", "HTML", "CSS", "Apache", "IONOS"],
    imagen: "/images/projects/rivas.webp",
    badge: "Cliente Gubernamental ★",
    badgeTipo: "featured",
    linkDemo: "https://ligas.deportividadyjuegolimpio.e",
    duracion: "4 meses",
    rol: "Desarrollador full stack en solitario",
    caracteristicas: [
      "Panel administrativo para gestión de temporadas y jornadas",
      "Consulta pública de clasificaciones y resultados en tiempo real",
      "Sistema de actas digitales por partido",
      "Gestión multi-deporte y multi-categoría de edad",
      "Calendario de próximos partidos por deporte",
      "Desplegado en servidor de producción real (IONOS)",
    ],
    retos:
      "El mayor reto fue diseñar una base de datos lo suficientemente flexible para soportar múltiples deportes, cada uno con sus propias reglas de puntuación, categorías y formato de competición, manteniendo el código manejable.",
    solucion:
      "Diseñé un esquema relacional que separa la lógica de cada deporte mediante tablas de configuración independientes. Esto permite añadir un nuevo deporte editando solo los datos, sin tocar el código de la aplicación.",
    aprendizajes:
      "Fue mi primer contacto con un cliente institucional real. Aprendí a gestionar requisitos cambiantes, comunicarme con personas no técnicas, y desplegar y mantener una aplicación en producción en un servidor externo.",
  },
  {
    slug: "fitness-gamification-app",
    titulo: "Fitness Gamification App",
    descripcionCorta:
      "Ecosistema web para el seguimiento de entrenamiento y nutrición con dinámicas de competición social.",
    descripcionLarga:
      "Proyecto de fin de grado enfocado en la retención de usuarios mediante gamificación. La plataforma permite el tracking de rutinas y dietas, integrando un motor de competición con rankings dinámicos y sistemas de logros. Diseñada bajo principios de escalabilidad y una experiencia de usuario (UX) orientada al rendimiento.",
    tecnologias: ["PHP", "MySQL", "JavaScript", "HTML", "CSS", "Apache"],
    imagen: "/images/projects/fitness.webp",
    badge: "Proyecto de Grado (TFG)",
    badgeTipo: "personal",
    duracion: "3 meses",
    rol: "Desarrollador full stack — Trabajo de Fin de Grado",
    caracteristicas: [
      "Registro y seguimiento de rutinas de gimnasio personalizadas",
      "Control de dietas con cálculo de macronutrientes",
      "Sistema de logros y badges por hitos alcanzados",
      "Rankings y competición entre usuarios registrados",
      "Dashboard personal con progreso semanal y mensual",
      "Autenticación y perfiles de usuario",
    ],
    retos:
      "Implementar el motor de gamificación fue el punto más complejo: debía calcular rankings en tiempo real sin degradar el rendimiento de la base de datos con consultas pesadas en cada carga de página.",
    solucion:
      "Opté por cachear los rankings en una tabla auxiliar que se actualiza mediante un proceso programado, desacoplando el cálculo del renderizado y manteniendo tiempos de respuesta rápidos.",
    aprendizajes:
      "Este proyecto me enseñó a pensar en la arquitectura antes de escribir código. También profundicé en diseño de base de datos relacional compleja y en cómo las decisiones de esquema afectan al rendimiento.",
  },
  {
    slug: "graphic-arts-studio",
    titulo: "Estudio de Artes Gráficas",
    descripcionCorta:
      "Plataforma corporativa de alto rendimiento con enfoque en conversión y diseño responsivo.",
    descripcionLarga:
      "Desarrollo de sitio web corporativo para el sector de artes gráficas utilizando stack moderno. Prioriza la velocidad de carga y el SEO, incluyendo un sistema de contacto optimizado y una arquitectura de componentes reutilizables. Enfoque en 'Privacy by Design' para el manejo de leads.",
    tecnologias: ["Next.js", "Tailwind CSS", "Cloudflare Pages", "Google Analytics"],
    imagen: "/images/projects/artes-graficas.webp",
    badge: "Proyecto para Cliente",
    badgeTipo: "client",
    linkDemo: "https://carbensl.com/",
    duracion: "6 semanas",
    rol: "Desarrollador front-end y responsable de despliegue",
    caracteristicas: [
      "Diseño corporativo responsivo adaptado a la identidad visual del cliente",
      "Formulario de contacto funcional con validación y notificaciones",
      "SEO técnico optimizado con meta tags y datos estructurados",
      "Desplegado en Cloudflare Pages con CDN global",
      "Integración de Google Analytics para seguimiento de visitas",
      "Arquitectura de componentes reutilizables en Next.js",
    ],
    retos:
      "El cliente no tenía conocimientos técnicos y el briefing inicial era muy abierto. Traducir sus ideas visuales a requisitos concretos y conseguir su aprobación en cada iteración fue el reto principal.",
    solucion:
      "Establecí un proceso claro de revisiones con prototipos visuales antes de desarrollar. Cada sección se presentaba por separado para evitar cambios de alcance tardíos.",
    aprendizajes:
      "Aprendí a gestionar expectativas de cliente y a trabajar con Next.js en un proyecto real por primera vez. También me familiaricé con el flujo de despliegue en Cloudflare Pages y la optimización de rendimiento con next/image.",
  },
];