import React from "react";
import Image from "next/image";

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
              src="https://images.unsplash.com/photo-1503256207526-0d5d80fa2f47?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              width={390}
              height={300}
              alt=""
              className="rounded-xl object-cover w-full h-full opacity-70"
            />
            <div className="absolute bottom-0 left-0 p-4 bg- bg-blur bg-opacity-50 text-white">
              <p className="font-semibold text-xl">In the mountains</p>
              <p className="font-normal text-sm text-neutral-200 mt-2">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed
                voluptatibus nostrum quas at commodi, eveniet placeat quaerat,
                distinctio culpa doloremque pariatur. Expedita ut soluta odit
                sint, veniam harum voluptate non.
              </p>
            </div>
          </div>

          <div className="bg-black h-full lg:h-6/6 rounded-xl transition-all duration-500 hover:scale-105 relative overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1503256207526-0d5d80fa2f47?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              width={390}
              height={300}
              alt=""
              className="rounded-xl object-cover w-full h-full opacity-70"
            />
            <div className="absolute bottom-0 left-0 p-4 text-white">
              <p className="font-semibold text-xl">In the mountains</p>
              <p className="font-normal text-sm text-neutral-200 mt-2">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed
                voluptatibus nostrum quas at commodi, eveniet placeat quaerat,
                distinctio culpa doloremque pariatur. Expedita ut soluta odit
                sint, veniam harum voluptate non.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-8 w-full">
          <div className="bg-black h-full lg:h-4/6 rounded-xl transition-all duration-500 hover:scale-105 relative overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1503256207526-0d5d80fa2f47?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              width={390}
              height={300}
              alt=""
              className="rounded-xl object-cover w-full h-full opacity-70"
            />
            <div className="absolute bottom-0 left-0 p-4 text-white">
              <p className="font-semibold text-xl">In the mountains</p>
              <p className="font-normal text-sm text-neutral-200 mt-2">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed
                voluptatibus nostrum quas at commodi, eveniet placeat quaerat,
                distinctio culpa doloremque pariatur. Expedita ut soluta odit
                sint, veniam harum voluptate non.
              </p>
            </div>
          </div>
          <div className="bg-black h-full lg:h-2/6 rounded-xl transition-all duration-500 hover:scale-105 relative overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1503256207526-0d5d80fa2f47?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              width={390}
              height={300}
              alt=""
              className="rounded-xl object-cover w-full h-full opacity-70"
            />
            <div className="absolute bottom-0 left-0 p-4 text-white">
              <p className="font-semibold text-xl">In the mountains</p>
              <p className="font-normal text-sm text-neutral-200 mt-2">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed
                voluptatibus nostrum quas at commodi, eveniet placeat quaerat,
                distinctio culpa doloremque pariatur. Expedita ut soluta odit
                sint, veniam harum voluptate non.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-8 w-full">
          <div className="bg-black h-full lg:h-2/6 rounded-xl transition-all duration-500 hover:scale-105 relative overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1503256207526-0d5d80fa2f47?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              width={390}
              height={300}
              alt=""
              className="rounded-xl object-cover w-full h-full opacity-70"
            />
            <div className="absolute bottom-0 left-0 p-4 text-white">
              <p className="font-semibold text-xl">In the mountains</p>
              <p className="font-normal text-sm text-neutral-200 mt-2">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed
                voluptatibus nostrum quas at commodi, eveniet placeat quaerat,
                distinctio culpa doloremque pariatur. Expedita ut soluta odit
                sint, veniam harum voluptate non.
              </p>
            </div>
          </div>
          <div className="bg-black h-full lg:h-4/6 rounded-xl transition-all duration-500 hover:scale-105 relative overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1503256207526-0d5d80fa2f47?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              width={390}
              height={300}
              alt=""
              className="rounded-xl object-cover w-full h-full opacity-70"
            />
            <div className="absolute bottom-0 left-0 p-4 text-white">
              <p className="font-semibold text-xl">In the mountains</p>
              <p className="font-normal text-sm text-neutral-200 mt-2">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed
                voluptatibus nostrum quas at commodi, eveniet placeat quaerat,
                distinctio culpa doloremque pariatur. Expedita ut soluta odit
                sint, veniam harum voluptate non.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;
