"use client";

import React from "react";
import { LayoutTextFlip } from "@/app/components/ui/layout-text-flip";
import { motion } from "motion/react";

export function Component2text() {
  return (
    <div>
      <motion.div className="relative mx-6 my-35 flex flex-col items-center justify-center gap-3 text-center sm:mx-0 sm:mb-0 sm:flex-row">
        <LayoutTextFlip
          text="Descubre"
          words={["Modos", "Temas", "Colores", "Diseño"]}
          duration={2500}
        />
      </motion.div>
      <p className="mt-1 text-center text-base text-primary-color-text">
        Explora la personalización completa de tus componentes frontend.
      </p>
    </div>
  );
}
