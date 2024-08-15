"use client";
import React from "react";
import Image from "next/image";
import BlurFade from "@/components/BlurFade";
import { GoArrowUpRight } from "react-icons/go";
import AboutUsImage from "@/images/InicioSobreNosotros.png";

const AboutUs = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row items-center justify-between content-container px-6 py-10 mx-auto max-w-7xl">
      <BlurFade inView delay={0.25} className="w-full flex items-center justify-center">
        <Image src={AboutUsImage} alt="About Us" width={450} height={450} />
      </BlurFade>

      <BlurFade inView delay={0.50} className="w-full flex flex-col items-center lg:items-start text-center lg:text-left">
        <h3 className="text-orange-500 font-semibold">SOBRE NOSOTROS</h3>
        <h2 className="text-3xl lg:text-4xl text-black font-bold pt-2">
          Sobre StudioCah_la.
        </h2>
        <p className="py-4 text-lg text-neutral-400">
          Somos Studio Cah, una agencia creativa que busca impulsar tu marca
          estratégica y visualmente. Junto a un gran equipo, formado por
          apasionados profesionales del marketing digital, diseño creativo y
          estrategia, nos dedicamos a potenciar negocios en todos los canales
          digitales.
        </p>
        <a
          href="sobre-nosotros"
          className="text-[#2D29C2] font-semibold text-lg flex flex-row items-center space-x-2"
        >
          Ver más
          <span>
            <GoArrowUpRight className="text-lg" />
          </span>
        </a>
      </BlurFade>
    </div>
  );
};

export default AboutUs;
