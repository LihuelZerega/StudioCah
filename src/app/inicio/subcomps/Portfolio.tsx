import React from "react";
import Image from "next/image";
import PortfolioPlumaBlanca from "@/images/PortfolioPlumaBlanca.png"
import PortfolioMarisaP from  "@/images/PortfolioMarisaP.png"
import PortfolioImportadosSanta from  "@/images/PortfolioSantaImportados.png"
import PortfolioLala from "@/images/PortfolioLala.png"
import PortfolioRvConstructora from "@/images/PortfolioRvConstructora.png"
import PortfolioLabios from "@/images/PortfolioLabios.png"

function Portfolio() {
  return (
    <div className="container px-6 mx-auto py-10 bg-white sm:py-16 lg:py-24">
      <section className="max-w-2xl mx-auto text-center py-10">
        <p className="text-base font-semibold text-orange-500 uppercase tracking-wider mb-2">
          PORTAFOLIO
        </p>
        <h2 className="text-3xl font-bold leading-tight text-neutral-800 sm:text-4xl lg:text-5xl">
          Nuestros Proyectos <br /> Destacados
        </h2>
        <p className="max-w-2xl mx-auto mt-4 text-base leading-relaxed text-neutral-600">
          Durante los ultimos años, hemos tenido el placer de colaborar con una
          variedad de clientes en diferentes industrias. Aquí presentamos
          algunos de nuestros trabajos más destacados que reflejan nuestro
          compromiso con la excelencia y la creatividad.
        </p>
      </section>
      <section className="flex flex-col lg:flex-row gap-8 w-full h-full">
        <div className="flex flex-col gap-8 w-full">
          <div className="bg-black h-full lg:h-5/6 rounded-xl transition-all duration-500 hover:scale-105 relative overflow-hidden">
            <Image
              src={PortfolioLala}
              width={390}
              height={300}
              alt=""
              className="rounded-xl object-cover w-full h-full opacity-70"
            />
            <div className="absolute bottom-0 left-0 p-4 bg- bg-blur bg-opacity-50 text-white">
              <p className="font-semibold text-xl">Lala</p>
              <p className="font-normal text-sm text-neutral-200 mt-2">
                
              </p>
            </div>
          </div>

          <div className="bg-black h-full lg:h-6/6 rounded-xl transition-all duration-500 hover:scale-105 relative overflow-hidden">
            <Image
              src={PortfolioMarisaP}
              width={390}
              height={300}
              alt=""
              className="rounded-xl object-cover w-full h-full opacity-70"
            />
            <div className="absolute bottom-0 left-0 p-4 text-white">
              <p className="font-semibold text-xl">Marisa Peraggini - Estudio Inmobiliario</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-8 w-full">
          <div className="bg-black h-full lg:h-4/6 rounded-xl transition-all duration-500 hover:scale-105 relative overflow-hidden">
            <Image
              src={PortfolioPlumaBlanca}
              width={390}
              height={300}
              alt=""
              className="rounded-xl object-cover w-full h-full opacity-70"
            />
            <div className="absolute bottom-0 left-0 p-4 text-white">
              <p className="font-semibold text-xl">Pluma Blanca</p>
              {/* <p className="font-normal text-sm text-neutral-200 mt-2">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed
                voluptatibus nostrum quas at commodi, eveniet placeat quaerat,
                distinctio culpa doloremque pariatur. Expedita ut soluta odit
                sint, veniam harum voluptate non.
              </p> */}
            </div>
          </div>
          <div className="bg-black h-full lg:h-2/6 rounded-xl transition-all duration-500 hover:scale-105 relative overflow-hidden">
            <Image
              src={PortfolioRvConstructora}
              width={390}
              height={300}
              alt=""
              className="rounded-xl object-cover w-full h-full opacity-70"
            />
            <div className="absolute bottom-0 left-0 p-4 text-white">
              <p className="font-semibold text-xl">Rv Constructora</p>
              {/* <p className="font-normal text-sm text-neutral-200 mt-2">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed
                voluptatibus nostrum quas at commodi, eveniet placeat quaerat,
                distinctio culpa doloremque pariatur. Expedita ut soluta odit
                sint, veniam harum voluptate non.
              </p> */}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-8 w-full">
          <div className="bg-black h-full lg:h-2/6 rounded-xl transition-all duration-500 hover:scale-105 relative overflow-hidden">
            <Image
              src={PortfolioImportadosSanta}
              width={390}
              height={300}
              alt=""
              className="rounded-xl object-cover w-full h-full opacity-70"
            />
            <div className="absolute bottom-0 left-0 p-4 text-white">
              <p className="font-semibold text-xl">Importados Santa - Tienda Online</p>
              {/* <p className="font-normal text-sm text-neutral-200 mt-2">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed
                voluptatibus nostrum quas at commodi, eveniet placeat quaerat,
                distinctio culpa doloremque pariatur. Expedita ut soluta odit
                sint, veniam harum voluptate non.
              </p> */}
            </div>
          </div>
          <div className="bg-black h-full lg:h-4/6 rounded-xl transition-all duration-500 hover:scale-105 relative overflow-hidden">
            <Image
              src={PortfolioLabios}
              width={390}
              height={300}
              alt=""
              className="rounded-xl object-cover w-full h-full opacity-70"
            />
            <div className="absolute bottom-0 left-0 p-4 text-white">
              <p className="font-semibold text-xl">D Enclat</p>
              {/* <p className="font-normal text-sm text-neutral-200 mt-2">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed
                voluptatibus nostrum quas at commodi, eveniet placeat quaerat,
                distinctio culpa doloremque pariatur. Expedita ut soluta odit
                sint, veniam harum voluptate non.
              </p> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;
