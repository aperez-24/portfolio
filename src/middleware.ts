import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // Leemos la variable de entorno
  const isMaintenanceMode = process.env.NEXT_PUBLIC_MAINTENANCE_MODE === "true";
  const { pathname } = request.nextUrl;

  // Si el modo mantenimiento está ON y el usuario NO está ya en la página de mantenimiento
  // ni está pidiendo un archivo estático (imágenes, css)
  if (
    isMaintenanceMode && 
    !pathname.startsWith("/mantenimiento") && 
    !pathname.startsWith("/privacidad") &&
    !pathname.startsWith("/aviso-legal") &&
    !pathname.includes(".") // Evita bloquear imágenes o iconos necesarios para la página
  ) {
    return NextResponse.rewrite(new URL("/mantenimiento", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};