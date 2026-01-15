import { Header } from "./components/header";
import { Hero } from "@/app/components/hero";


import  {PointerHighlightDemo}  from "@/app/components/componentText2";
import  ComponentCruz  from "@/app/components/componenteDeCruz";

import { Component1text } from "@/app/components/component1text";
import  { Component4 }  from "@/app/components/component4";


import { Component2 } from "@/app/components/component2";

import  {Component2text}  from "@/app/components/component7";
import  Component6Precios  from "@/app/components/component6Precios";


import { Footer } from "./components/footer";


 
export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="py-10">
        <Hero />

        <PointerHighlightDemo />
        <ComponentCruz />

        <Component1text />
        <Component2 />

        <Component4 />





         <Component2text />
        <Component6Precios />


      </main>
      <Footer />
    </div>
  );
}
