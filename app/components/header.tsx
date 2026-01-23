"use client"; // Indica que este componente se renderiza en el cliente (Next.js)

import { ThemeSwitcher } from "./theme-switcher"; // Importa el componente para cambiar el tema

export function Header() {
  return (
    <header
      className="
        sticky /* Fija el header en la parte superior al hacer scroll */
        top-0 /* Posiciona el header en la parte superior */
        z-50 /* Prioridad alta en el apilamiento (z-index) */
        w-full /* Ocupa todo el ancho de la pantalla */
        bg-background/95 /* Fondo con opacidad 95% */
        backdrop-blur /* Aplica desenfoque al fondo */
        supports-backdrop-filter:bg-background/60 /* Fondo con opacidad 60% si se soporta backdrop-filter */
        "
    >
      <div className="container relative flex h-22 items-center">
        {/* Logo - Far left */}
        <a className="flex items-center shrink-0 w-30" href="/">
          <span className="font-bold text-foreground">
            Arcoms <span className="font-light">Edu</span>
          </span>
        </a>

        {/* Nav - Centered absolutely */}
        <nav className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-3 bg-transparent">
          <a
            href="/acerca"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary-header focus:outline-none focus:ring-0 px-4"
          >
            Acerca de
          </a>
          <a
            href="/contacto"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary-header focus:outline-none focus:ring-0 px-4"
          >
            Contacto
          </a>
          <a
            href="/precios"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary-header focus:outline-none focus:ring-0 px-4"
          >
            Precios
          </a>
          <a
            href="/ayuda"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary-header focus:outline-none focus:ring-0 px-4"
          >
            Ayuda
          </a>
        </nav>

        {/* Theme Switcher - Right */}
        <div className="flex items-center justify-end shrink-0 w-32 ml-auto">
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  );
}
