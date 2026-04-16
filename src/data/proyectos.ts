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
    linkDemo: "https://ligas.deportividadyjuegolimpio.es/",
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
    slug: "fithub-plataforma-gimnasios",
    titulo: "FitHub — Plataforma de gestión y gamificación para gimnasios",
    descripcionCorta:
      "Plataforma web completa para gimnasios con sistema de roles, gamificación, seguimiento de entrenamientos y panel de administración.",
    descripcionLarga:
      "FitHub nació de nuestra propia experiencia como usuarios de gimnasio: la falta de motivación y el abandono del entrenamiento son problemas reales que las soluciones existentes no resuelven bien. Desarrollé esta plataforma junto a otro compañero como Trabajo de Fin de Grado, con el objetivo de digitalizar la gestión de gimnasios y hacer el entrenamiento más social y motivador. La aplicación permite a clientes registrar su progreso y competir con amigos, a entrenadores monitorizar y asignar rutinas personalizadas, y a administradores gestionar toda la operativa del gimnasio: usuarios, clases, pagos y reservas. Cuenta con un sistema de gamificación real (rankings, logros y medallas), un panel de estadísticas visual, chat entre usuarios y una pasarela de pago integrada con Stripe.",
    tecnologias: ["PHP", "MySQL", "JavaScript", "HTML", "CSS", "Apache", "XAMPP", "Stripe", "PHPMailer", "Figma"],
    imagen: "/images/projects/fitness.webp",
    badge: "Trabajo de Fin de Grado",
    badgeTipo: "personal",
    duracion: "5 meses (enero — mayo 2025)",
    rol: "Desarrollador full stack — TFG en equipo de 2",
    caracteristicas: [
      "Sistema de tres roles diferenciados: Cliente, Entrenador y Administrador, con permisos independientes",
      "Gamificación real: rankings públicos por marcas personales, sistema de logros y medallas por hitos",
      "Seguimiento de entrenamientos con historial, marcas personales y visualización de progreso mediante estadísticas",
      "Reserva de clases con control de aforo limitado y calendario de disponibilidad",
      "Panel de administración completo: gestión de usuarios, clases, ejercicios, rutinas, dietas y pagos",
      "Sistema social con lista de amigos, chat entre usuarios y feed de logros compartidos",
      "Pasarela de pago integrada con Stripe para gestión de cuotas y planes Premium",
      "Panel del entrenador para asignar rutinas personalizadas y monitorizar la carga de cada cliente",
      "Sistema de notificaciones por correo electrónico con PHPMailer",
      "Diseño responsive probado en más de 7 dispositivos reales (iPhone, Android, tablet, escritorio)",
    ],
    retos:
      "El mayor reto técnico fue el motor de gamificación: calcular rankings en tiempo real consultando marcas personales de todos los usuarios generaba consultas pesadas que degradaban el rendimiento. Además, al ser un proyecto con muchos módulos interdependientes, cualquier cambio en la base de datos afectaba en cadena a múltiples partes de la aplicación.",
    solucion:
      "Implementé una tabla auxiliar de rankings que se actualiza de forma diferida, desacoplando el cálculo pesado del renderizado de cada página. Para la interdependencia de módulos, establecimos convenciones claras de naming y una capa de acceso a datos centralizada desde el inicio, lo que redujo drásticamente los errores en cascada.",
    aprendizajes:
      "Este proyecto me enseñó que pensar la arquitectura antes de escribir código no es opcional cuando la aplicación tiene muchos módulos relacionados. También profundicé en diseño de base de datos relacional compleja, integración de servicios de terceros (Stripe, PHPMailer), y aprendí a trabajar en equipo con Git gestionando ramas y conflictos de merge en un proyecto real.",
  },
  {
      slug: "graphic-arts-studio",
      titulo: "CarBen Soluciones Gráficas — Web Corporativa",
      descripcionCorta:
        "Sitio web corporativo de alto rendimiento para una empresa familiar de troquelado y packaging en Madrid, con enfoque en SEO técnico, conversión y privacidad.",
      descripcionLarga:
        "Desarrollo completo del sitio web corporativo de CarBen Soluciones Gráficas S.L., empresa familiar con más de 30 años en el sector de artes gráficas en Velilla de San Antonio, Madrid. El proyecto abarca desde la arquitectura de componentes en Next.js 15 (App Router) hasta el despliegue en Cloudflare Workers con OpenNext, pasando por la gestión del DNS, los correos corporativos con Google Workspace, la integración de Google Analytics 4 con consentimiento explícito conforme al RGPD, y un sistema de envío de formularios transaccional mediante la API de Resend. Se priorizó el rendimiento (Core Web Vitals), el SEO técnico con datos estructurados Schema.org y una arquitectura Privacy by Design para el manejo de datos de contacto.",
      tecnologias: [
        "Next.js 15",
        "TypeScript",
        "Tailwind CSS v4",
        "Cloudflare Workers",
        "OpenNext",
        "Resend API",
        "Google Analytics 4",
        "Google Search Console",
        "Google Workspace",
      ],
      imagen: "/images/projects/artes-graficas.webp",
      badge: "Proyecto para Cliente",
      badgeTipo: "client",
      linkDemo: "https://carbensl.com/",
      duracion: "6 semanas",
      rol: "Desarrollador full stack y responsable de infraestructura",
      caracteristicas: [
        "Arquitectura Next.js 15 App Router con separación estricta Server / Client Components para máximo rendimiento en SSR",
        "Sistema de animaciones scroll-reveal propio basado en IntersectionObserver, sin dependencias externas",
        "Formulario de contacto con validación en cliente y servidor, rate limiting, honeypot anti-spam y envío transaccional vía Resend API",
        "Panel de consentimiento de cookies RGPD-compliant con localStorage, carga condicional de GA4 y bloqueo de scroll hasta decisión del usuario",
        "SEO técnico completo: sitemap.xml y robots.txt generados dinámicamente, datos estructurados Schema.org (LocalBusiness, FAQPage, BreadcrumbList, Service) y meta tags Open Graph y Twitter Card",
        "Despliegue en Cloudflare Workers mediante OpenNext con CDN global, compatibilidad nodejs_compat y caché de assets estáticos con TTL de un año",
        "Gestión del DNS completa en Cloudflare con registros MX para Google Workspace y correos corporativos @carbensl.com",
        "Integración de Google Analytics 4 con anonimización de IP, Google Search Console con verificación por meta tag y sitemap enviado manualmente",
        "Optimización de imágenes con next/image (AVIF + WebP), tamaños responsivos precisos por breakpoint y preload de recursos críticos above-the-fold",
        "Cabeceras de seguridad HTTP configuradas a nivel de Next.js: HSTS, X-Content-Type-Options, Referrer-Policy y Permissions-Policy",
      ],
      retos:
        "El despliegue en Cloudflare Workers con OpenNext requirió resolver incompatibilidades entre el runtime Edge de Cloudflare y las APIs de Node.js que Next.js usa internamente. Además, configurar el sistema de cookies RGPD-compliant sin bloquear el renderizado SSR y evitar el hydration mismatch entre servidor y cliente fue técnicamente exigente.",
      solucion:
        "Para el despliegue, utilicé el adaptador @opennextjs/cloudflare con la flag nodejs_compat y global_fetch_strictly_public, ajustando el wrapper y el converter para el entorno Edge. El panel de cookies se construyó como Client Component con estado inicial neutro en servidor ('pending'), leyendo localStorage solo tras el montaje en cliente para eliminar el mismatch. El rate limiting del formulario se implementó en memoria en el propio API Route, compatible con el modelo de ejecución de Workers.",
      aprendizajes:
        "Este proyecto me permitió profundizar en las diferencias entre los runtimes Node.js y Edge de Cloudflare, y en cómo OpenNext abstrae Next.js para funcionar en Workers. También adquirí experiencia real en configuración de DNS, gestión de correo corporativo con Google Workspace, cumplimiento del RGPD en producción y el flujo completo de entrega a un cliente no técnico: desde el briefing hasta la formación en uso del panel de Google.",
    },
];