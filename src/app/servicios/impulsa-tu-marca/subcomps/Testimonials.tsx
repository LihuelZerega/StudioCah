"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Logo4 from "@/images/Brands/Logo4.png";

const variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

function Testimonials() {
  return (
    <div className="py-10 bg-white sm:py-16 lg:py-24">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        variants={variants}
        className="w-full"
      >
        <p className="text-center text-base font-bold text-orange-500 uppercase tracking-wider mb-2">
          TESTIMONIOS
        </p>
        <h2 className="text-3xl text-black font-bold tracking-tight lg:text-4xl text-center">
          ¿Que dicen nuestros clientes <br className="hidden lg:block" /> sobre
          nuestros servicios?
        </h2>
      </motion.div>
      <section className="py-16">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 lg:gap-10 sm:grid-cols-2 md:grid-cols-3">
            <div className="flex flex-col bg-white border border-neutral-200 rounded-md">
              <div className="flex flex-col justify-between flex-1 p-8">
                <div className="flex-1">
                  <blockquote>
                    <p className="text-lg text-neutral-500">
                      “Nuestra identidad de marca se fortaleció. Nos ayudaron a
                      definir una imagen clara y coherente. ¡Muy satisfechos con
                      el resultado!”
                    </p>
                  </blockquote>
                </div>

                <div className="mt-8">
                  <div className="w-full h-0 mb-8 border-t-2 border-neutral-200 border-dotted"></div>
                  <div className="flex items-center">
                    <div className="ml-3">
                      <p className="text-base font-semibold text-neutral-800 truncate">
                        Oscar Daniel Gonzalez
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col bg-white border border-neutral-200 rounded-md">
              <div className="flex flex-col justify-between flex-1 p-8">
                <div className="flex-1">
                  <blockquote>
                    <p className="text-lg text-neutral-500">
                      “Desde que gestionan nuestras redes sociales, vimos un
                      aumento significativo en la interacción con nuestros
                      seguidores. Su trabajo es fundamental para nuestro
                      crecimiento.”
                    </p>
                  </blockquote>
                </div>

                <div className="mt-8">
                  <div className="w-full h-0 mb-8 border-t-2 border-neutral-200 border-dotted"></div>
                  <div className="flex items-center">
                    <div className="min-w-0 ml-3">
                      <p className="text-base font-semibold text-neutral-800 truncate">
                        Silvana Delfino
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col bg-white border border-neutral-200 rounded-md">
              <div className="flex flex-col justify-between flex-1 p-8">
                <div className="flex-1">
                  <blockquote>
                    <p className="text-lg text-neutral-500">
                      En las sesiones de asesoría personalizada nos brindaron
                      estrategias concretas y adaptadas a nuestras necesidades.
                      ¡Recomendados!”
                    </p>
                  </blockquote>
                </div>

                <div className="mt-8">
                  <div className="w-full h-0 mb-8 border-t-2 border-neutral-200 border-dotted"></div>
                  <div className="flex items-center">
                    <div className="min-w-0 ml-3">
                      <p className="text-base font-semibold text-neutral-800 truncate">
                        Joaquin Prieto
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col bg-white border border-neutral-200 rounded-md">
              <div className="flex flex-col justify-between flex-1 p-8">
                <div className="flex-1">
                  <blockquote>
                    <p className="text-lg text-neutral-500">
                      “Las campañas publicitarias en Meta Ads que manejó Studio
                      Cah fueron muy efectivas. Alcanzamos a un público más
                      amplio y aumentamos nuestras ventas.”
                    </p>
                  </blockquote>
                </div>

                <div className="mt-8">
                  <div className="w-full h-0 mb-8 border-t-2 border-neutral-200 border-dotted"></div>
                  <div className="flex items-center">
                    <div className="min-w-0 ml-3">
                      <p className="text-base font-semibold text-neutral-800 truncate">
                        Bruno Barreto
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col bg-white border border-neutral-200 rounded-md">
              <div className="flex flex-col justify-between flex-1 p-8">
                <div className="flex-1">
                  <blockquote>
                    <p className="text-lg text-neutral-500">
                      “El equipo de Studio Cah hizo un trabajo excelente con el
                      diseño de nuestra marca. Todo, desde los flyers hasta las
                      creatividades para redes sociales, refleja perfectamente
                      nuestra identidad.”
                    </p>
                  </blockquote>
                </div>

                <div className="mt-8">
                  <div className="w-full h-0 mb-8 border-t-2 border-neutral-200 border-dotted"></div>
                  <div className="flex items-center">
                    <div className="min-w-0 ml-3">
                      <p className="text-base font-semibold text-neutral-800 truncate">
                        Joaquin Luna
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col bg-white border border-neutral-200 rounded-md">
              <div className="flex flex-col justify-between flex-1 p-8">
                <div className="flex-1">
                  <blockquote>
                    <p className="text-lg text-neutral-500">
                      “Transformaron la manera en que interactuamos con nuestra
                      comunidad online. Ahora, tenemos una audiencia mucho más
                      comprometida y leal.”
                    </p>
                  </blockquote>
                </div>

                <div className="mt-8">
                  <div className="w-full h-0 mb-8 border-t-2 border-neutral-200 border-dotted"></div>
                  <div className="flex items-center">
                    <div className="min-w-0 ml-3">
                      <p className="text-base font-semibold text-neutral-800 truncate">
                        Santiago Castrillo
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Testimonials;
