# Adrián Pérez Navarro — Portfolio Web

> Portafolio profesional personal. Desarrollado con Next.js 15, TypeScript y Tailwind CSS v4. Desplegado en Vercel con dominio propio.

🌐 **[aperez24.dev](https://aperez24.dev)**

---

## Sobre el proyecto

Este repositorio contiene el código fuente de mi portfolio web personal. Es una Single Page Application con páginas de detalle por proyecto, formulario de contacto funcional y páginas legales completas (Aviso Legal y Política de Privacidad RGPD).

El proyecto está **actualmente en producción** en [aperez24.dev](https://aperez24.dev).

---

## Stack tecnológico

| Categoría | Tecnología |
|-----------|-----------|
| Framework | Next.js 15 (App Router) |
| Lenguaje | TypeScript |
| Estilos | Tailwind CSS v4 |
| Animaciones | Framer Motion |
| Formularios | React Hook Form |
| Email | Resend API |
| Hosting | Vercel |
| Analytics | Vercel Analytics + Speed Insights |

---

## Estructura del proyecto

```
src/
├── app/
│   ├── page.tsx                      # Página principal (Hero, Sobre Mí, Proyectos, Contacto)
│   ├── layout.tsx                    # Layout global, fuentes, SEO, Schema.org
│   ├── globals.css                   # Variables CSS, estilos globales
│   ├── not-found.tsx                 # Página 404 personalizada
│   ├── mantenimiento/page.tsx        # Página de mantenimiento
│   ├── aviso-legal/page.tsx          # Aviso Legal (LSSICE)
│   ├── privacidad/page.tsx           # Política de Privacidad (RGPD)
│   ├── sitemap.ts                    # Sitemap dinámico
│   ├── robots.ts                     # robots.txt
│   ├── proyectos/
│   │   └── [slug]/
│   │       ├── page.tsx              # SSG — genera páginas estáticas por proyecto
│   │       ├── ProyectoDetalleUI.tsx # UI del detalle de proyecto
│   │       └── layout.tsx
│   └── api/
│       └── contacto/route.ts         # API Route — envío de emails con Resend
├── components/
│   ├── Navbar.tsx                    # Navbar fija con scroll y menú móvil
│   ├── Hero.tsx                      # Sección hero con animaciones
│   ├── SobreMi.tsx                   # Sección sobre mí, tecnologías y stats
│   ├── Proyectos.tsx                 # Grid de tarjetas de proyectos
│   ├── Contacto.tsx                  # Formulario de contacto
│   └── Footer.tsx                    # Pie de página con redes y legal
├── data/
│   └── proyectos.ts                  # ← FICHERO CLAVE: array de proyectos
├── types/
│   └── proyecto.ts                   # Interfaz TypeScript Proyecto
└── middleware.ts                     # Modo mantenimiento
public/
├── images/
│   ├── projects/                     # Imágenes de proyectos (.webp)
│   └── logos/                        # Logo del portfolio
├── favicons/                         # Favicon y manifest
├── CV-Adrián_Pérez_Navarro.pdf       # CV descargable
└── og-image.png                      # Open Graph image
```

---

## Instalación y uso local

### Requisitos previos

- Node.js v20 LTS o superior
- npm v9 o superior

### Pasos

```bash
# 1. Clonar el repositorio
git clone https://github.com/aperez-24/portfolio.git
cd portfolio

# 2. Instalar dependencias
npm install

# 3. Crear el fichero de variables de entorno
cp .env.example .env.local
# Editar .env.local con tus valores (ver sección Variables de entorno)

# 4. Arrancar el servidor de desarrollo
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

---

## Variables de entorno

Crea un fichero `.env.local` en la raíz con las siguientes variables:

```env
# API Key de Resend (https://resend.com)
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxx

# Email donde recibirás los mensajes del formulario de contacto
CONTACT_EMAIL=tu@email.com

# Modo mantenimiento — pon "true" para activarlo, "false" para desactivarlo
NEXT_PUBLIC_MAINTENANCE_MODE=false
```

> ⚠️ El fichero `.env.local` está en `.gitignore`. Nunca subas claves API al repositorio.

---

## Scripts disponibles

```bash
npm run dev      # Servidor de desarrollo en localhost:3000
npm run build    # Build de producción
npm run start    # Servidor de producción (requiere build previo)
npm run lint     # Análisis de código con ESLint
```

---

## Cómo añadir un nuevo proyecto

Solo tienes que editar **un único fichero**: `src/data/proyectos.ts`.

Añade un nuevo objeto al array `proyectos` siguiendo esta estructura:

```typescript
{
  slug: "nombre-del-proyecto",           // URL: /proyectos/nombre-del-proyecto
  titulo: "Nombre del Proyecto",
  descripcionCorta: "Una línea que aparece en la tarjeta.",
  descripcionLarga: "Descripción completa para la página de detalle.",
  tecnologias: ["Next.js", "TypeScript"],
  imagen: "/images/projects/nombre.webp",
  badge: "Proyecto para Cliente",
  badgeTipo: "client",                   // "featured" | "client" | "personal"
  linkDemo: "https://...",               // opcional
  linkRepo: "https://github.com/...",    // opcional
  duracion: "3 meses",                   // opcional
  rol: "Desarrollador full stack",       // opcional
  caracteristicas: ["Feature 1", "Feature 2"],  // opcional
  retos: "El mayor reto fue...",         // opcional
  solucion: "La solución fue...",        // opcional
  aprendizajes: "Aprendí...",            // opcional
}
```

Después haz `git push` — Vercel despliega automáticamente en ~30 segundos.

---

## Despliegue en Vercel

El proyecto está configurado para despliegue continuo desde la rama `main`.

**Pasos para configurar desde cero:**

1. Conecta el repositorio en [vercel.com](https://vercel.com)
2. Framework preset: **Next.js** (se detecta automáticamente)
3. Añade las variables de entorno en el panel de Vercel (Settings → Environment Variables)
4. Configura el dominio personalizado en Domains
5. Vercel gestiona HTTPS automáticamente (Let's Encrypt)

Cualquier `git push` a `main` dispara un nuevo deploy automáticamente.

---

## Características del portfolio

- **Dark mode** con paleta violeta (`#7c3aed`) sobre negro azulado (`#0e0e13`)
- **Formulario de contacto** con validación cliente/servidor, rate limiting y envío real via Resend
- **Páginas de detalle** por proyecto generadas estáticamente en build (SSG)
- **SEO técnico**: meta tags, Open Graph, Twitter Card, Schema.org (Person), sitemap dinámico, robots.txt
- **Modo mantenimiento** activable con variable de entorno sin tocar código
- **Cumplimiento RGPD**: Aviso Legal y Política de Privacidad, gestión de datos de contacto
- **Responsive** completo: móvil, tablet y escritorio
- **Animaciones** de entrada con Framer Motion
- **Accesibilidad**: skip link, atributos alt, contraste WCAG AA, navegación por teclado

---

## Proyectos mostrados

| Proyecto | Tipo | Stack |
|----------|------|-------|
| Portal Deportivo — Rivas-Vaciamadrid | Cliente público (Ayuntamiento) | PHP, MySQL, JS, Apache |
| FitHub — Plataforma de gimnasios | TFG | PHP, MySQL, JS, Stripe, Apache |
| CarBen Soluciones Gráficas | Cliente privado | Next.js 15, Tailwind v4, Cloudflare Workers |

Los repositorios de los proyectos son privados. Disponibles para revisión bajo petición en [contacto@aperez24.dev](mailto:contacto@aperez24.dev).

---

## Contacto

- 🌐 [aperez24.dev](https://aperez24.dev)
- 💼 [linkedin.com/in/adrián-pérez-navarro](https://www.linkedin.com/in/adrián-pérez-navarro/)
- 🐙 [github.com/aperez-24](https://github.com/aperez-24)
- ✉️ [contacto@aperez24.dev](mailto:contacto@aperez24.dev)

---

## Licencia

© 2025 Adrián Pérez Navarro. Todos los derechos reservados.

El código fuente de este repositorio es público con fines de consulta y aprendizaje. **No está permitida su reproducción, distribución, modificación ni publicación** en ningún medio —total ni parcial— sin autorización escrita del autor.

Puedes clonar o descargar el repositorio para uso estrictamente personal y local. No puedes usarlo como base para proyectos propios ni publicarlo de ninguna forma.