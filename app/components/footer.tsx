"use client";

import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container py-25 space-y-12">
        {/* TOP */}
        <div className="grid gap-12 md:grid-cols-[2fr_3fr]">
          {/* IZQUIERDA: LOGO */}
          <div className="space-y-2 max-w-md">
            <h3 className="text-primary-general text-lg font-semibold">Startup</h3>
            <p className="text-primary-color-text text-sm text-muted-foreground leading-relaxed">
              © copyright Startup 2024. All rights reserved.
            </p>
          </div>

          {/* DERECHA: LINKS */}
          <div className="grid grid-cols-3 gap-25 md:justify-self-end">
            {/* PRODUCTO */}
            <div className="space-y-4">
              <h4 className="text-primary-general text-sm font-semibold  tracking-wide">Pages</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>
                  <Link href="#" className="hover:text-primary-general  transition">
                    Ayuda
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary-general  transition">
                    Precios
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary-general  transition">
                    Contacto
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary-general  transition">
                    Acerca De
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary-general  transition">
                    Características
                  </Link>
                </li>
              </ul>
            </div>

            {/* RECURSOS */}
            <div className="space-y-4">
              <h4 className="text-primary-general text-sm font-semibold  tracking-wide">Socials</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>
                  <Link href="#" className="hover:text-primary-general  transition">
                    GitHub
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary-general  transition">
                    Linkedln
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary-general  transition">
                    Facebook
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary-general  transition">
                    Instagram
                  </Link>
                </li>
              </ul>
            </div>

            {/* COMPAÑÍA */}
            <div className="space-y-4">
              <h4 className="text-primary-general text-sm font-semibold tracking-wide">
                Legal
              </h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>
                  <Link href="#" className="hover:text-primary-general   transition">
                    Cookies
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary-general transition">
                    Terminos
                  </Link>
                </li>

                <li>
                  <Link href="#" className="hover:text-primary-general  transition">
                    Privacidad
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
