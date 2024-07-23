"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import AboutUsImage from "@/images/InicioSobreNosotros.png";

const AboutUs = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className="flex flex-col-reverse lg:flex-row items-center justify-between content-container px-6 py-10 mx-auto max-w-7xl"
    >
      <motion.div className="w-full flex items-center justify-center" variants={variants}>
        <Image src={AboutUsImage} alt="About Us" width={450} height={450} />
      </motion.div>
      <motion.div className="w-full flex flex-col items-center lg:items-start text-center lg:text-left" variants={variants}>
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
            <GoArrowUpRight className="text-lg"/>
          </span>
        </a>
      </motion.div>
    </motion.div>
  );
};

export default AboutUs;