import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Modo mantenimiento: mientras esté en true, cualquier ruta de la web (páginas, API,
// imágenes, PDF, robots.txt…) muestra solo public/mantenimiento.html.
// Para volver a publicar el portfolio, cámbialo a false y haz push.
const MAINTENANCE = true;
const PAGE = "/mantenimiento.html";

export function middleware(request: NextRequest) {
  if (!MAINTENANCE) return NextResponse.next();

  // 503 + Retry-After: los buscadores entienden que es temporal y no desindexan la web
  const res =
    request.nextUrl.pathname === PAGE
      ? NextResponse.next({ status: 503 })
      : NextResponse.rewrite(new URL(PAGE, request.url), { status: 503 });
  res.headers.set("Retry-After", "86400");
  res.headers.set("X-Robots-Tag", "noindex");
  res.headers.set("Cache-Control", "no-store");
  return res;
}

export const config = {
  // Todas las rutas, incluidos /api y los estáticos de Next
  matcher: ["/:path*"],
};
