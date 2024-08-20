"use client";
import React from "react";
import BlurFade from "@/components/BlurFade";

export default function Hero() {
  return (
    <section
      className="bg-cover"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dys0jotat/image/upload/v1722538689/HeroBgServices_rv4f8a.png')",
      }}
    >
      <div className="container px-6 pt-36 lg:pt-40 pb-16 mx-auto text-center">
        <div className="max-w-4xl mx-auto">
          <BlurFade delay={0.25} className="text-4xl font-bold text-white lg:text-6xl">
            Servicios que Transforman
            <br /> Tu Negocio
          </BlurFade>
          <BlurFade delay={0.50} className="mt-6 text-neutral-300 text-sm lg:text-base">
            En Studio Cah, ofrecemos una amplia gama de servicios diseñados para{" "}
            <br className="hidden lg:block" /> impulsar tu marca y maximizar tu
            impacto en el mercado digital.
          </BlurFade>
        </div>
      </div>
    </section>
  );
}
