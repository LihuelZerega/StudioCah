"use client";
import React from "react";

export default function Hero() {
  return (
    <section className="bg-neutral-900">
      <div className="container px-6 pt-36 lg:pt-40 pb-16 mx-auto text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-white lg:text-6xl">
            Servicios que Transforman
            <br /> Tu Negocio
          </h1>
          <p className="mt-6 text-neutral-300 text-sm lg:text-base">
            En Studio Cah, ofrecemos una amplia gama de servicios diseñados para{" "}
            <br className="hidden lg:block" /> impulsar tu marca y maximizar tu
            impacto en el mercado digital.
          </p>
        </div>
      </div>
    </section>
  );
}
