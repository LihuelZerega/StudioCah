import React from "react";
import Image from "next/image";
import CahLogo from "@/images/png logo-17.png";

function Footer() {
  return (
    <footer
      className="bg-cover"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dys0jotat/image/upload/v1722538689/FooterBg_dyswi4.png')",
      }}
    >
      <div className="container px-6 py-12 mx-auto">
        <div className="md:flex md:-mx-3 md:items-center md:justify-between">
          <h1 className="text-xl font-semibold tracking-tight text-neutral-200 md:mx-3 xl:text-2xl">
            ¿Buscás delegar el diseño de tus redes? Dejalo en buenas manos
          </h1>

          <div className="mt-6 md:mx-3 shrink-0 md:mt-0 md:w-auto">
            <a
              href="/servicios"
              className="inline-flex items-center justify-center w-full p-3 text-sm text-black font-bold duration-300 bg-neutral-200 rounded-md gap-x-3 hover:bg-neutral-100 focus:ring focus:ring-neutral-300 focus:ring-opacity-80"
            >
              <span>Comenzar Ahora</span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </a>
          </div>
        </div>

        <hr className="my-6 border-neutral-200 md:my-10" />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div>
            <p className="font-semibold text-neutral-800 dark:text-white">
              Services
            </p>

            <div className="flex flex-col items-start mt-5 space-y-2">
              <a
                href="/servicios#branding"
                className="text-neutral-300 transition-colors duration-300 hover:underline hover:text-blue-500"
              >
                Branding
              </a>
              <a
                href="/servicios#social-media"
                className="text-neutral-300 transition-colors duration-300 hover:underline hover:text-blue-500"
              >
                Social Media
              </a>
              <a
                href="/servicios#asesoria-personalizada"
                className="text-neutral-300 transition-colors duration-300 hover:underline hover:text-blue-500"
              >
                Asesorías Personalizadas
              </a>
              <a
                href="/servicios#pauta-publicitaria"
                className="text-neutral-300 transition-colors duration-300 hover:underline hover:text-blue-500"
              >
                Pauta Publicitaria
              </a>
              <a
                href="/servicios#diseño-integral"
                className="text-neutral-300 transition-colors duration-300 hover:underline hover:text-blue-500"
              >
                Diseño Integral
              </a>
            </div>
          </div>

          <div>
            <p className="font-semibold text-neutral-800 dark:text-white">
              Sobre Nosotros
            </p>

            <div className="flex flex-col items-start mt-5 space-y-2">
              <a
                href="/sobre-nosotros"
                className="text-neutral-300 transition-colors duration-300 hover:underline hover:text-blue-500"
              >
                ¿Que incluyen nuestros servicios?
              </a>
              <a
                href="/sobre-nosotros"
                className="text-neutral-300 transition-colors duration-300 hover:underline hover:text-blue-500"
              >
                ¿Que ofrecemos?
              </a>
              <a
                href="/sobre-nosotros"
                className="text-neutral-300 transition-colors duration-300 hover:underline hover:text-blue-500"
              >
                Experiencia y Compromiso
              </a>
            </div>
          </div>

          <div>
            <p className="font-semibold text-neutral-800 dark:text-white">
              Contacto
            </p>

            <div className="flex flex-col items-start mt-5 space-y-2">
              <a
                href="#"
                className="text-neutral-300 transition-colors duration-300 hover:underline hover:text-blue-500"
              >
                +54 9 11 2345-6789
              </a>
              <a
                href="#"
                className="text-neutral-300 transition-colors duration-300 hover:underline hover:text-blue-500"
              >
                info@studio-cah.com
              </a>
              <a
                href="https://www.instagram.com/studiocah_la/"
                className="text-neutral-300 transition-colors duration-300 hover:underline hover:text-blue-500"
              >
                @studiocah_la
              </a>
            </div>
          </div>
        </div>

        <hr className="my-6 border-neutral-200 md:my-10" />

        <div className="flex flex-col items-center justify-between sm:flex-row">
          <a href="#">
            <Image src={CahLogo} alt="logo" width={75} height={75} />
          </a>

          <p className="mt-4 text-sm text-neutral-300 sm:mt-0">
            © Copyright 2024. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
