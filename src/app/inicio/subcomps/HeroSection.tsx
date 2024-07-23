"use client";
import React from "react";
import Image from "next/image";
import HeroMockupMobile from "@/images/HeroMobile.png";
import HeroMockupDesktop from "@/images/HeroDesktop.png";

export default function HeroSection() {
  return (
    <div>
      <section className="bg-neutral-900">
        <div className="container px-6 pt-36 lg:pt-40 mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold text-white lg:text-6xl">
              Impulsá tu marca <br className="block lg:hidden" /> hacia nuevos
              horizontes{" "}
            </h1>
            <p className="mt-6 lg:text-xl text-neutral-300">
              ¿Buscás delegar el diseño de tus redes? <br /> Dejalo en buenas
              manos
            </p>
            <div className="mt-8">
              <a
                href="/servicios"
                className="rounded-md bg-white p-3 text-sm font-bold text-black shadow-sm hover:bg-neutral-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                Comenzar ahora
              </a>
              <a
                href="/sobre-nosotros"
                className="p-3 text-sm font-semibold text-white hover:text-neutral-300"
              >
                Conocenos →
              </a>
            </div>
          </div>

          <div className="flex justify-center pt-12">
            <Image
              className=" w-full h-96 rounded-xl lg:w-3/5 block lg:hidden"
              src={HeroMockupMobile}
              alt=""
            />
            <Image
              className=" w-full h-[500px] rounded-xl lg:w-4/5 hidden lg:block"
              src={HeroMockupDesktop}
              alt=""
            />
          </div>
        </div>
      </section>
    </div>
  );
}
