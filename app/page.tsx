"use client";

import "./i18n";
import { Header } from "./components/20-header-comp";
import { Hero } from "@/app/components/13-hero1-comp";
import { SplineSceneBasic } from "@/app/components/23-robot-comp";
import { PaginasDemo } from "@/app/components/10-comp";

import { PointerHighlightDemo } from "@/app/components/8-comp";
import { PointerHighlightDemoCopy } from "@/app/components/9-comp";
import ComponentCruz from "@/app/components/6-comp";
import { Component1text } from "@/app/components/1-comp";
import { Component4 } from "@/app/components/3-comp";
import { Component2 } from "@/app/components/2-comp";
import { Component2text } from "@/app/components/5-comp";
import Component6Precios from "@/app/components/4-comp";
import { Testimonios } from "@/app/components/12-testimonios-comp";
import { Footer } from "./components/19-footer-comp";
import Footer2  from "./components/22-footer2-comp";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t, i18n } = useTranslation();
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="py-10">
        <SplineSceneBasic />
        <Hero />

        <Component1text />
        <ComponentCruz />
        <PaginasDemo />

        <PointerHighlightDemo />
        <Component2 />
        <Component2text />
        <Component4 />
        <PointerHighlightDemoCopy />
        <Component6Precios />
        <Testimonios />
      </main>
      {/* <Footer /> */}
      <Footer2 />
    </div>
  );
}

// Terminal
// import { Terminall } from "@/app/components/11-comp";
// <Terminall />;


//Hero2
// import  LaserFlowBoxExample  from "@/app/components/14-hero2-comp";
// <LaserFlowBoxExample /> 
