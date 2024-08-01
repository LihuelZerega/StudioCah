import React from "react";
import Image from "next/image";
import CallToActionImage from "@/images/CTAImage.png";

function CallToAction() {
  return (
    <section className="relative py-10 overflow-hidden px-6 sm:py-16 lg:py-24 lg:rounded-3xl max-w-7xl mx-auto my-12">
      <div className="absolute inset-0">
        <img
          className="object-cover w-full h-full md:object-left md:scale-150 md:origin-top-left"
          src="https://cdn.rareblocks.xyz/collection/celebration/images/cta/5/girl-working-on-laptop.jpg"
          alt=""
        />
      </div>

      <div className="absolute inset-0 hidden bg-gradient-to-r md:block from-black to-transparent"></div>

      <div className="absolute inset-0 block bg-black/60 md:hidden"></div>

      <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="mx-auto max-w-xl text-center lg:mx-0 lg:flex-auto lg:text-left">
          <h2 className="text-3xl font-semibold leading-7 tracking-tight text-white lg:text-5xl">
            <span className="text-orange-500">Impulsá</span> tu marca con Studio
            Cah <br />
            <span className="text-orange-500 mt-2">¿Listo para destacar?</span>
          </h2>
          <p className="mt-6 text-lg leading-8 text-neutral-300">
            ¡Transforma tu presencia digital con soluciones creativas y estratégicas!
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
            <a
              href="/servicios"
              className="rounded-md bg-orange-500 px-3.5 py-2.5 text-sm font-semibold text-neutral-white shadow-sm hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Ver Servicios
            </a>
            <a href="/contacto" className="text-sm font-semibold leading-6 text-white">
              Contactanos <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CallToAction;
