"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "¿Qué servicios ofrece Studio Cah?",
    answer:
      "Ofrecemos servicios de Branding, Social Media, Asesoría Personalizada, Pauta Publicitaria y Diseño Integral para impulsar tu marca y maximizar tu impacto en el mercado digital.",
  },
  {
    question: "¿Cómo puede el servicio de Branding ayudar a mi negocio?",
    answer:
      "Desarrollamos una identidad de marca única mediante investigación de mercado, creación de logotipos y elementos visuales, y estrategias de posicionamiento.",
  },
  {
    question: "¿Qué incluye el servicio de Social Media?",
    answer:
      "Gestionamos y potenciamos tu presencia online con estrategias de contenido, monitoreo de tendencias y técnicas de engagement para construir una comunidad digital activa.",
  },
  {
    question: "¿En qué consiste la Asesoría Personalizada?",
    answer:
      "Incluye dos encuentros virtuales donde analizamos tu negocio y objetivos, y desarrollamos una estrategia integral con recomendaciones para mejorar tu presencia digital.",
  },
  {
    question: "¿Cómo funciona el servicio de Pauta Publicitaria en Meta Ads?",
    answer:
      "Creamos y gestionamos campañas en Meta Ads, optimizando segmentación, presupuesto y contenido para maximizar el impacto y proporcionar informes detallados del rendimiento.",
  },
];

const variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

function Faq() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="container max-w-4xl px-6 py-16 mx-auto">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        variants={variants}
        className="w-full"
      >
        <p className="text-center text-base font-bold text-orange-500 uppercase tracking-wider mb-2">
          PREGUNTAS FRECUENTES
        </p>
        <h2 className="text-3xl text-black font-bold tracking-tight lg:text-4xl text-center">
          Todo lo que necesitas saber <br /> sobre Studio Cah.
        </h2>
      </motion.div>

      <div className="mt-12 space-y-8">
        {faqItems.map((item, index) => (
          <div key={index} className="border-2 border-neutral-100 rounded-lg">
            <button
              className="flex items-center justify-between w-full p-8"
              onClick={() => toggleItem(index)}
            >
              <h1 className="text-left font-semibold text-neutral-700">
                {item.question}
              </h1>

              <span
                className={`text-white ${
                  activeIndex === index
                    ? "bg-neutral-200 text-neutral-400"
                    : "bg-[#2D29C2]"
                } rounded-full`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d={
                      activeIndex === index
                        ? "M18 12H6"
                        : "M12 6v6m0 0v6m0-6h6m-6 0H6"
                    }
                  />
                </svg>
              </span>
            </button>

            {activeIndex === index && (
              <>
                <hr className="border-neutral-200" />
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="p-8 text-sm text-neutral-500">{item.answer}</p>
                </motion.div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Faq;
