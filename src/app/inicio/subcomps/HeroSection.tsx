"use client";
import React from "react";
import Image from "next/image";
import HeroMockupMobile from "@/images/HeroMobile.png";
import HeroMockupDesktop from "@/images/HeroDesktop.png";
import BlurFade from "@/components/BlurFade";

export default function HeroSection() {
  return (
    <div
      className="min-h-screen bg-cover"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dys0jotat/image/upload/v1722538690/HeroHomeBg_gepdmi.png')",
      }}
    >
      <section className="min-h-screen">
        <div className="container px-6 pt-36 lg:pt-40 mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <BlurFade
              inView
              delay={0.25}
              className="text-4xl font-bold text-white lg:text-6xl"
            >
              Impulsá tu marca <br className="block lg:hidden" /> hacia nuevos
              horizontes{" "}
            </BlurFade>
            <BlurFade
              inView
              delay={0.50}
              className="mt-6 lg:text-xl text-neutral-300"
            >
              ¿Buscás delegar el diseño de tus redes? <br /> Dejalo en buenas
              manos
            </BlurFade>
            <div className="flex items-center justify-center mt-8">
              <BlurFade inView delay={0.75}>
                <a
                  href="/servicios/impulsa-tu-marca"
                  className="rounded-md bg-white p-3 text-sm font-bold text-black shadow-sm hover:bg-neutral-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                >
                  Comenzar ahora
                </a>
              </BlurFade>
              <BlurFade inView delay={1.0}>
                <a
                  href="/sobre-nosotros"
                  className="p-3 text-sm font-semibold text-white hover:text-neutral-300"
                >
                  Conocenos →
                </a>
              </BlurFade>
            </div>
          </div>

          <BlurFade inView delay={1.25} className="flex justify-center pt-12">
            <Image
              className=" w-full h-96 rounded-xl lg:w-3/5 block lg:hidden"
              src={HeroMockupMobile}
              alt=""
            />
            <Image
              className=" w-full h-[500px] rounded-xl lg:w-4/5 2xl:w-3/4 hidden lg:block"
              src={HeroMockupDesktop}
              alt=""
            />
          </BlurFade>
        </div>
      </section>
    </div>
  );
}
