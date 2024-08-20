import React from "react";
import BlurFade from "@/components/BlurFade";

function Projects() {
  return (
    <div className="bg-neutral-50 py-10">
      <BlurFade
        inView
        duration={0.5}
        className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto"
      >
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl">
            <div className="h-52 flex flex-col justify-center items-center bg-blue-500 rounded-t-xl">
              <div className="flex items-center justify-center bg-white h-[7rem] w-[7rem] rounded-2xl p-3">
                <img
                  src="https://piletasramiro.com.ar/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FStellarStudioLogoNegative.4ff964a2.png&w=64&q=75"
                  alt=""
                />
              </div>
            </div>
            <div className="p-4 md:p-6">
              <span className="block mb-1 text-xs font-semibold uppercase text-blue-600">
                Tienda Online
              </span>
              <h3 className="text-xl font-semibold text-gray-800">
                Piletas Ramiro
              </h3>
              <p className="mt-3 text-gray-500">
                Ramiro, de Piletas ramiro nos contacto para desarrollar una
                <strong> Tienda Online</strong> a medida para sus necesidades de
                negocio que no podia concretar con otros servicios de
                desarrollo.
              </p>
            </div>
            <div className="mt-auto flex border-t border-gray-200 divide-x divide-gray-200">
              <a
                className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                href="https://piletasramiro.com.ar"
              >
                Visitar Sitio
              </a>
              <a
                className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-ee-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                href="#"
              >
                Comprar Ahora
              </a>
            </div>
          </div>

          <div className="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl">
            <div className="h-52 flex flex-col justify-center items-center bg-neutral-800 rounded-t-xl">
              <div className="flex items-center justify-center bg-white h-[7rem] w-[7rem] rounded-2xl p-3">
                <img
                  src="https://www.centercarautomoviles.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FCenterCarLogotipo.45ffa4f1.png&w=256&q=75"
                  alt=""
                />
              </div>
            </div>
            <div className="p-4 md:p-6">
              <span className="block mb-1 text-xs font-semibold uppercase text-rose-600">
                Landing Page
              </span>
              <h3 className="text-xl font-semibold text-gray-800">
                Center Car Automoviles
              </h3>
              <p className="mt-3 text-gray-500">
                Trabajamos en conjunto con Tomas de Center Car Automotores en
                una <strong>Landing Page</strong> y 2 pestañas adicionales para
                sus clientes vendan sus autos y trabajen con ellos.
              </p>
            </div>
            <div className="mt-auto flex border-t border-gray-200 divide-x divide-gray-200">
              <a
                className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                href="https://www.centercarautomoviles.com/"
              >
                Visitar Sitio
              </a>
              <a
                className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-ee-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                href="#"
              >
                Comprar Ahora
              </a>
            </div>
          </div>

          <div className="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl">
          <div className="h-52 flex flex-col justify-center items-center bg-amber-500 rounded-t-xl">
              <div className="flex items-center justify-center bg-white h-[7rem] w-[7rem] rounded-2xl p-3">
                <h3 className="text-xl font-semibold text-amber-500">TecnicFmf</h3>
              </div>
            </div>
            <div className="p-4 md:p-6">
              <span className="block mb-1 text-xs font-semibold uppercase text-amber-500">
                Landing Page
              </span>
              <h3 className="text-xl font-semibold text-gray-800">TecnicFmf</h3>
              <p className="mt-3 text-gray-500">
                TecnicFmf nos contacto para que creemos su{" "}
                <strong>Landing Page </strong>
                ofreciendo sus servicios al publico, llevando el publico de las
                redes sociales a la web.
              </p>
            </div>
            <div className="mt-auto flex border-t border-gray-200 divide-x divide-gray-200">
              <a
                className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                href="#"
              >
                Visitar Sitio
              </a>
              <a
                className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-ee-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                href="#"
              >
                Comprar Ahora
              </a>
            </div>
          </div>
        </div>
      </BlurFade>
    </div>
  );
}

export default Projects;
