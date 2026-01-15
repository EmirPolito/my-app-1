"use client";

import { PointerHighlight } from "@/app/components/ui/pointer-highlight";

export function PointerHighlightDemo() {
  return (
    <div className="mx-auto py-10 text-center">
      <div className="text-primary-general whitespace-nowrap text-2xl font-bold tracking-tight md:text-4xl">
        The best way to grow is to{" "}
        <PointerHighlight>
          <span>collaborate</span>
        </PointerHighlight>
      </div>

      <p className="mt-4 text-center text-base text-primary-color-text whitespace-nowrap">
        Experience the power of modern UI components that bring your ideas to
        life.
      </p>
    </div>
  );
}
