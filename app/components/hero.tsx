"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/app/components/ui/buttons";
import { ContainerScroll } from "@/app/components/ui/container-scroll-animation";

export function Hero() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <div className="flex flex-col items-center text-center gap-1 pt-1">
            {/* Title */}
            <h1 className="text-primary-general font-bold md:text-[4rem] text-text-heading">
              Titulo
            </h1>

            {/* Description */}
            <p className="text-primary-color-text pt-0 md:text-1xl font-sm text-text-body">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
              dignissimos recusandae dolores non.{" "}
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap justify-center gap-7 pt-5">
              <Link href="/get-started">
                <Button
                  size="lg"
                  className="
                    cursor-pointer
                    text-surface-primary
                    bg-text-heading
                    hover:bg-accent-brand-hover/90
                  "
                >
                  Get Started
                </Button>
              </Link>

              <Link href="/about">
                <Button variant="outline" size="lg" className="cursor-pointer">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        }
      >
        <img
          src="/img/hero.jpg"
          alt="hero"
          height={750}
          width={1200}
          className="mx-auto h-full rounded-2xl object-cover object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
