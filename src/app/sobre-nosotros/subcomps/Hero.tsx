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
            Somos Studio Cah
          </BlurFade>
          <BlurFade delay={0.50} className="mt-6 text-neutral-300 font-semibold text-sm lg:text-base">
            Una agencia creativa que busca impulsar tu marca estratégica y
            visualmente.
          </BlurFade>
          <BlurFade delay={0.75} className="text-neutral-400">
            Junto a un gran equipo, formado por apasionados profesionales del
            marketing digital, diseño creativo y estrategia, nos dedicamos a
            potenciar negocios en todos los canales digitales.
          </BlurFade>
        </div>
      </div>
    </section>
  );
}
