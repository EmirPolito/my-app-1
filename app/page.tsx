import { Header } from "./components/header";
import { Hero } from "@/app/components/hero";
import { PointerHighlightDemo } from "@/app/components/componentText2";
import { PointerHighlightDemoCopy } from "@/app/components/componentText2copy";
import ComponentCruz from "@/app/components/componenteDeCruz";
import { Component1text } from "@/app/components/component1text";
import { Component4 } from "@/app/components/component4";
import { Component2 } from "@/app/components/component2";
import { Component2text } from "@/app/components/component7";
import Component6Precios from "@/app/components/component6Precios";
import { Testimonios } from "@/app/components/testimonios";
import { Footer } from "./components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="py-10">
        <Hero />

        <Component1text />
        <ComponentCruz />
        <PointerHighlightDemo />
        <Component2 />
        <Component2text />
        <Component4 />
        <PointerHighlightDemoCopy />
        <Component6Precios />
        <Testimonios />

      </main>
      <Footer />
    </div>
  );
}






