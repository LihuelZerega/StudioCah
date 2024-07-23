"use client";
import React from "react";
import { motion } from "framer-motion";

const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

function Services() {
  return (
    <section className="content-container px-6 py-10 mx-auto max-w-7xl">
      <div className="flex flex-col items-center container px-6 py-10 mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          variants={variants}
          className="w-full"
        >
          <p className="text-center text-base font-bold text-orange-500 uppercase tracking-wider mb-2">
            SERVICIOS
          </p>
          <h2 className="text-3xl text-black font-bold tracking-tight lg:text-4xl text-center">
            Marcá la diferencia en tu negocio
            <br /> con Studio Cah
          </h2>
        </motion.div>

        <div className="w-full mx-auto">
          <div className="flex flex-col gap-4 mt-8 xl:mt-12 xl:gap-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <a
                href="/servicios#branding"
                className="p-8 space-y-3 border-2 border-neutral-500 border-opacity-70 rounded-xl transition-all duration-500 hover:scale-105"
              >
                <span className="inline-block border-2 p-2 border-neutral-400 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="30"
                    height="30"
                    color="#ff7208"
                    fill="none"
                  >
                    <path
                      d="M13.2852 19.3647L5.82243 20.7506C4.39103 21.0164 3.67534 21.1493 3.26303 20.737C2.85072 20.3246 2.98362 19.6089 3.24943 18.1774L4.63523 10.7143C4.85745 9.51762 4.96856 8.91925 5.36302 8.5577C5.75749 8.19616 6.47889 8.1256 7.9217 7.98448C9.31227 7.84847 10.6283 7.37177 12 6L18 12.0005C16.6283 13.3723 16.1513 14.6874 16.0151 16.0781C15.8738 17.5211 15.8031 18.2426 15.4416 18.637C15.0801 19.0314 14.4818 19.1425 13.2852 19.3647Z"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M11 15.2105C10.4405 15.1197 9.92895 14.8763 9.52632 14.4737M9.52632 14.4737C9.12368 14.0711 8.8803 13.5595 8.78947 13M9.52632 14.4737L4 20"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M12 6C12.7123 4.9491 13.6771 3.1812 15.1065 3.01098C16.0822 2.89479 16.8906 3.70312 18.5072 5.31978L18.6802 5.49277C20.2969 7.10944 21.1052 7.91777 20.989 8.8935C20.8188 10.3229 19.0509 11.2877 18 12"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>

                <h1 className="text-xl font-semibold text-black capitalize">
                  Branding
                </h1>

                <p className="text-neutral-500">
                  Desarrollamos identidades de marca integrales, fusionando
                  diseño y estrategia para destacar y perdurar en la mente del
                  consumidor.
                </p>
              </a>

              <a
                href="/servicios#social-media"
                className="p-8 space-y-3 border-2 border-neutral-500 border-opacity-70 rounded-xl transition-all duration-500 hover:scale-105"
              >
                <span className="inline-block border-2 p-2 border-neutral-400 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="30"
                    height="30"
                    color="#2D29C2"
                    fill="none"
                  >
                    <path
                      d="M2 9C2 5.70017 2 4.05025 3.02513 3.02513C4.05025 2 5.70017 2 9 2H11C14.2998 2 15.9497 2 16.9749 3.02513C18 4.05025 18 5.70017 18 9V11C18 14.2998 18 15.9497 16.9749 16.9749C15.9497 18 14.2998 18 11 18H9C5.70017 18 4.05025 18 3.02513 16.9749C2 15.9497 2 14.2998 2 11V9Z"
                      stroke="currentColor"
                      stroke-width="1.5"
                    />
                    <path
                      d="M18.2383 7C19.5732 7.08138 20.4232 7.30467 21.036 7.91738C22 8.88143 22 10.433 22 13.5363V15.4171C22 18.5203 22 20.0719 21.036 21.036C20.0719 22 18.5203 22 15.4171 22H13.5363C10.433 22 8.88143 22 7.91738 21.036C7.30467 20.4232 7.08138 19.5732 7 18.2383"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M11 12V6C11.2222 6.4 11.4 8.08 13 8.4M11 12C11 13.1046 10.1046 14 9 14C7.89543 14 7 13.1046 7 12C7 10.8954 7.89543 10 9 10C10.1046 10 11 10.8954 11 12Z"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>

                <h1 className="text-xl font-semibold text-black capitalize">
                  Social Media
                </h1>

                <p className="text-neutral-500">
                  Gestionamos y potenciamos tu presencia online construyendo una
                  comunidad digital activa, comprometida y leal. Creamos y
                  ejecutamos una estrategia de marketing en las redes sociales.
                </p>
              </a>

              <a
                href="/servicios#asesoria-personalizada"
                className="p-8 space-y-3 border-2 border-neutral-500 border-opacity-70 rounded-xl transition-all duration-500 hover:scale-105"
              >
                <span className="inline-block border-2 p-2 border-neutral-400 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="30"
                    height="30"
                    color="#ff7208"
                    fill="none"
                  >
                    <path
                      d="M8.49994 16.5C9.19857 15.2923 10.5044 14.4797 11.9999 14.4797C13.4955 14.4797 14.8013 15.2923 15.4999 16.5M14 10C14 11.1046 13.1045 12 12 12C10.8954 12 9.99997 11.1046 9.99997 10C9.99997 8.89543 10.8954 8 12 8C13.1045 8 14 8.89543 14 10Z"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M22 13.9669V10.0332C19.1433 10.0332 17.2857 6.93041 18.732 4.46691L15.2679 2.5001C13.8038 4.99405 10.1978 4.99395 8.73363 2.5L5.26953 4.46681C6.71586 6.93035 4.85673 10.0332 2 10.0332V13.9669C4.85668 13.9669 6.71425 17.0697 5.26795 19.5332L8.73205 21.5C10.1969 19.0048 13.8046 19.0047 15.2695 21.4999L18.7336 19.5331C17.2874 17.0696 19.1434 13.9669 22 13.9669Z"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>

                <h1 className="text-xl font-semibold text-black capitalize">
                  Asesorías Personalizadas
                </h1>

                <p className="text-neutral-500">
                  Dos encuentros virtuales donde analizamos el perfil del
                  negocio y objetivos, trabajamos en una estrategia integral que
                  se adapte a la marca y sus necesidades.
                </p>
              </a>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <a
                href="/servicios#pauta-publicitaria"
                className="w-fit p-8 space-y-3 border-2 border-neutral-500 border-opacity-70 rounded-xl transition-all duration-500 hover:scale-105"
              >
                <span className="inline-block border-2 p-2 border-neutral-400 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="30"
                    height="30"
                    color="#2D29C2"
                    fill="none"
                  >
                    <path
                      d="M14.9263 2.91103L8.27352 6.10452C7.76151 6.35029 7.21443 6.41187 6.65675 6.28693C6.29177 6.20517 6.10926 6.16429 5.9623 6.14751C4.13743 5.93912 3 7.38342 3 9.04427V9.95573C3 11.6166 4.13743 13.0609 5.9623 12.8525C6.10926 12.8357 6.29178 12.7948 6.65675 12.7131C7.21443 12.5881 7.76151 12.6497 8.27352 12.8955L14.9263 16.089C16.4534 16.8221 17.217 17.1886 18.0684 16.9029C18.9197 16.6172 19.2119 16.0041 19.7964 14.778C21.4012 11.4112 21.4012 7.58885 19.7964 4.22196C19.2119 2.99586 18.9197 2.38281 18.0684 2.0971C17.217 1.8114 16.4534 2.17794 14.9263 2.91103Z"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M11.4581 20.7709L9.96674 22C6.60515 19.3339 7.01583 18.0625 7.01583 13H8.14966C8.60978 15.8609 9.69512 17.216 11.1927 18.197C12.1152 18.8012 12.3054 20.0725 11.4581 20.7709Z"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M7.5 12.5V6.5"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>

                <h1 className="text-xl font-semibold text-black capitalize">
                  Pauta Publicitaria
                </h1>

                <p className="text-neutral-500">
                  Nuestro servicio de pauta publicitaria en Meta Ads se centra
                  en la creación y gestión de campañas publicitarias efectivas,
                  maximizando el impacto para alcanzar los objetivos comerciales
                  del cliente.
                </p>
              </a>

              <a
                href="/servicios#diseño-integral"
                className="w-fit p-8 space-y-3 border-2 border-neutral-500 border-opacity-70 rounded-xl transition-all duration-500 hover:scale-105"
              >
                <span className="inline-block border-2 p-2 border-neutral-400 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="30"
                    height="30"
                    color="#ff7208"
                    fill="none"
                  >
                    <path
                      d="M7.49478 13.753C10.5833 10.1644 17.5788 3.15478 20.5387 3.00445C22.3699 2.82906 18.7218 9.32547 10.0785 16.4339M11.4581 10.0449L13.7157 12.3249M3 20.8546C3.70948 18.3472 3.26187 19.5794 3.50407 16.6919C3.63306 16.2644 3.89258 14.9377 5.51358 14.2765C7.35618 13.5249 8.70698 14.6611 9.05612 15.195C10.0847 16.3102 10.2039 17.6952 9.05612 19.2774C7.9083 20.8596 4.50352 21.2527 3 20.8546Z"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>

                <h1 className="text-2xl font-bold text-black capitalize">
                  Diseño Integral
                </h1>

                <p className="text-neutral-500">
                  Si buscás delegar el diseño de tu marca, nuestro pack de
                  diseño es la solución. Diseñamos tu feed e historias en base a
                  la identidad y valores de tu negocio.
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
