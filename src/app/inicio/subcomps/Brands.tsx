"use client";
import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import BlurFade from "@/components/BlurFade";

import Logo1 from "@/images/Brands/Logo1.png";
import Logo2 from "@/images/Brands/Logo2.png";
import Logo3 from "@/images/Brands/Logo3.png";
import Logo4 from "@/images/Brands/Logo4.png";
import Logo5 from "@/images/Brands/Logo5.png";
import Logo6 from "@/images/Brands/Logo6.png";
import Logo7 from "@/images/Brands/Logo7.png";
import Logo8 from "@/images/Brands/Logo8.png";
import Logo9 from "@/images/Brands/Logo9.png";
import Logo10 from "@/images/Brands/Logo10.png";
import Logo11 from "@/images/Brands/Logo11.png";
import Logo12 from "@/images/Brands/Logo12.png";
import Logo13 from "@/images/Brands/Logo13.png";
import Logo14 from "@/images/Brands/Logo14.png";

const logos = [
  { id: 1, src: Logo1, alt: "logo1" },
  { id: 2, src: Logo2, alt: "logo2" },
  { id: 3, src: Logo3, alt: "logo3" },
  { id: 4, src: Logo4, alt: "logo4" },
  { id: 5, src: Logo5, alt: "logo5" },
  { id: 6, src: Logo6, alt: "logo6" },
  { id: 7, src: Logo7, alt: "logo7" },
  { id: 8, src: Logo8, alt: "logo8" },
  { id: 9, src: Logo9, alt: "logo9" },
  { id: 10, src: Logo10, alt: "logo10" },
  { id: 11, src: Logo11, alt: "logo11" },
  { id: 12, src: Logo12, alt: "logo12" },
  { id: 13, src: Logo13, alt: "logo13" },
  { id: 14, src: Logo14, alt: "logo14" },
];

function Brands() {
  const settingsMobile = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const settingsDesktop = {
    dots: false,
    infinite: true,
    speed: 200,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1300,
  };

  return (
    <>
      <h1 className="pt-16 pb-4 sm:mt-0 md:text-3xl text-center tracking-tight opacity-90 text-3xl font-bold leading-tight text-neutral-800 sm:text-4xl lg:text-5xl">
        Clientes con los que <br className="block md:hidden" />{" "}
        <span className="text">trabajamos</span>
      </h1>
      <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-neutral-600 text-center px-3 lg:px-0">
        Con más de 4 años de experiencia en el mercado y más de 200 proyectos
        realizados, hemos ayudado a diversas marcas a alcanzar su máximo
        potencial.
      </p>

      <BlurFade inView className="block lg:hidden max-w-7xl py-16 md:my-20 px-6 lg:px-8 shadow-sm">
        <div className="relative w-full max-w-lg mx-auto overflow-hidden">
          <Slider {...settingsMobile}>
            {logos.map((image) => (
              <div key={image.id}>
                <div className="flex gap-x-8 items-center justify-center">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={400}
                    height={300}
                    className="col-span-2 max-h-14 w-full object-contain lg:col-span-1 hover:scale-105 duration-300 hover:opacity-80"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </BlurFade>

      <BlurFade inView className="hidden lg:block py-16 px-6 lg:px-8 shadow-sm">
        <div className="relative w-full mx-auto overflow-hidden">
          <Slider {...settingsDesktop}>
            {logos.map((image) => (
              <div key={image.id}>
                <div className="">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={400}
                    height={300}
                    className="col-span-2 max-h-16 w-full object-contain lg:col-span-1 hover:scale-105 duration-300 hover:opacity-80"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </BlurFade>
    </>
  );
}

export default Brands;
