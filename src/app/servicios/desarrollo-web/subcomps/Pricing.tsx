"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import BlurFade from "@/components/BlurFade";

interface PriceModel {
  id: number;
  name: string;
  priceArgentina: number;
  priceUSA: number;
}

const Pricing: React.FC = () => {
  const [prices, setPrices] = useState<PriceModel[]>([]);

  useEffect(() => {
    axios
      .get("https://digincrease-api-production.up.railway.app/api/studiocah")
      .then((response) => {
        setPrices(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the prices!", error);
      });
  }, []);

  return (
    <div>
      <div className="overflow-hidden">
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto mt-20">
          <BlurFade inView delay={0.25} className="mx-auto max-w-2xl mb-8 lg:mb-14 text-center">
            <h2 className="text-3xl lg:text-4xl text-gray-800 font-bold">
              <span className="underline underline-offset-4 decoration-blue-500">Conocé los modelos</span> web disponibles para <span className="underline underline-offset-4 decoration-orange-500">impulsár tu negocio</span>
            </h2>
          </BlurFade>

          <div className="relative xl:w-10/12 xl:mx-auto">
            <BlurFade inView delay={0.5} className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8">
              <div>
                <div className="p-4 relative z-10 bg-white border rounded-xl md:p-6">
                  <h3 className="text-xl font-bold text-gray-800">One Page</h3>
                  <div className="text-sm text-gray-500">
                    Potenciá tu presencia en línea, promocioná tus servicios y
                    capturá potenciales clientes.
                  </div>

                  <div className="mt-5">
                    <span className="text-4xl md:text-3xl font-bold text-gray-800">
                      {prices[0]?.priceArgentina}
                    </span>
                    <span className="ms-1 text-gray-500">ARS / Pago único</span>
                  </div>

                  <div className="mt-5 py-4 first:pt-0 last:pb-0">
                    <button
                      type="button"
                      className="w-full py-3 px-4 md:px-11 flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-50"
                    >
                      Comprar ahora
                    </button>
                  </div>
                </div>
              </div>

              <div>
                <div className="shadow-xl shadow-gray-200 p-5 relative z-10 bg-white border rounded-xl md:p-0 md:py-10 md:px-6">
                  <h3 className="text-xl font-bold text-gray-800">
                    Landing Page
                  </h3>
                  <div className="text-sm text-gray-500">
                    Sitio web a medida. Capturá, convertí y potenciá clientes
                    interesados en sus servicios.
                  </div>
                  <span className="absolute top-0 end-0 rounded-se-xl rounded-es-xl text-xs font-medium bg-gray-800 text-white py-1.5 px-3">
                    Más Vendido
                  </span>

                  <div className="mt-5">
                    <span className="text-4xl md:text-3xl font-bold text-gray-800">
                    {prices[1]?.priceArgentina}
                    </span>
                    <span className="ms-1 text-gray-500">ARS / Pago único</span>
                  </div>

                  <div className="mt-5 py-4 first:pt-0 last:pb-0">
                    <div className="flex justify-end">
                      <button
                        type="button"
                        className="w-full py-3 px-4 md:px-11 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                      >
                        Comprar ahora
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="p-4 relative z-10 bg-white border rounded-xl md:p-6">
                  <h3 className="text-xl font-bold text-gray-800">
                    Tienda Nube
                  </h3>
                  <div className="text-sm text-gray-500">
                    Creamos de cero, configuramos y adaptamos tu Tienda Nube
                    para que potencies tus ventas online.
                  </div>

                  <div className="mt-5">
                    <span className="text-4xl md:text-3xl font-bold text-gray-800">
                      $180.000
                    </span>
                    <span className="text-lg font-bold text-gray-800">.99</span>
                    <span className="ms-1 text-gray-500">ARS / Pago único</span>
                  </div>

                  <div className="mt-5 py-4 first:pt-0 last:pb-0">
                    <button
                      type="button"
                      className="w-full py-3 px-4 md:px-11 flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-50"
                    >
                      Comprar ahora
                    </button>
                  </div>
                </div>
              </div>

              <div>
                <div className="p-4 relative z-10 bg-white border rounded-xl md:p-6">
                  <h3 className="text-xl font-bold text-gray-800">
                    Tienda Online
                  </h3>
                  <div className="text-sm text-gray-500">
                    Ideal para aquellos que venden productos y desean ampliar su
                    alcance y llegar a una audiencia global.
                  </div>

                  <div className="mt-5">
                    <span className="text-4xl md:text-3xl font-bold text-gray-800">
                      {prices[2]?.priceArgentina}
                    </span>
                    <span className="ms-1 text-gray-500">ARS / Pago único</span>
                  </div>

                  <div className="mt-5 py-4 first:pt-0 last:pb-0">
                    <button
                      type="button"
                      className="w-full py-3 px-4 md:px-11 flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-50"
                    >
                      Comprar ahora
                    </button>
                  </div>
                </div>
              </div>
            </BlurFade>

            <div className="hidden md:block absolute top-0 end-0 translate-y-16 translate-x-20">
              <BlurFade inView duration={1.0}>
              <svg
                className="w-16 h-auto text-orange-500"
                width="121"
                height="135"
                viewBox="0 0 121 135"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 16.4754C11.7688 27.4499 21.2452 57.3224 5 89.0164"
                  stroke="currentColor"
                  stroke-width="10"
                  stroke-linecap="round"
                />
                <path
                  d="M33.6761 112.104C44.6984 98.1239 74.2618 57.6776 83.4821 5"
                  stroke="currentColor"
                  stroke-width="10"
                  stroke-linecap="round"
                />
                <path
                  d="M50.5525 130C68.2064 127.495 110.731 117.541 116 78.0874"
                  stroke="currentColor"
                  stroke-width="10"
                  stroke-linecap="round"
                />
              </svg>
              </BlurFade>

            </div>

            <div className="hidden md:block absolute bottom-0 start-0 translate-y-16 -translate-x-16">
            <BlurFade inView duration={1.0}>
              <svg
                className="w-56 h-auto text-blue-800"
                width="347"
                height="188"
                viewBox="0 0 347 188"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 82.4591C54.7956 92.8751 30.9771 162.782 68.2065 181.385C112.642 203.59 127.943 78.57 122.161 25.5053C120.504 2.2376 93.4028 -8.11128 89.7468 25.5053C85.8633 61.2125 130.186 199.678 180.982 146.248L214.898 107.02C224.322 95.4118 242.9 79.2851 258.6 107.02C274.299 134.754 299.315 125.589 309.861 117.539L343 93.4426"
                  stroke="currentColor"
                  stroke-width="7"
                  stroke-linecap="round"
                />
              </svg>
              </BlurFade>
            </div>
          </div>
        </div>
      </div>

      <BlurFade inView duration={0.5} className="relative">
  <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 md:py-14 lg:py-20 mx-auto">
    <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
      <h2 className="text-2xl font-bold md:text-3xl md:leading-tight text-gray-800">Comparar modelos</h2>
    </div>

    <div className="hidden lg:block sticky top-0 start-0 py-2 bg-white/60 backdrop-blur-md">
      <div className="grid grid-cols-5 gap-6">
        <div className="col-span-2">
          <span className="font-semibold text-lg text-gray-800">
          Características
          </span>
        </div>

        <div className="col-span-1">
          <span className="font-semibold text-lg text-gray-800">
          One Page
          </span>
          <p className="mt-2 text-sm text-gray-500">
          Mantenimiento y soporte: $8.000/mes
          </p>
        </div>

        <div className="col-span-1">
          <span className="font-semibold text-lg text-gray-800">
          Landing Page
          </span>
          <p className="mt-2 text-sm text-gray-500">
          Mantenimiento y soporte: $8.000/mes
          </p>
        </div>

        <div className="col-span-1">
          <span className="font-semibold text-lg text-gray-800">
          Tienda Online
          </span>
          <p className="mt-2 text-sm text-gray-500">
          Mantenimiento y soporte: $12.000/mes
          </p>
        </div>
      </div>
    </div>

    <div className="space-y-4 lg:space-y-0">
      <ul className="grid lg:grid-cols-5 lg:gap-6">
        <li className="lg:col-span-2 lg:py-3">
          <span className="text-lg font-semibold text-gray-800">
            General
          </span>
        </li>

        <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center">
        </li>

        <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center">
        </li>

        <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center">
        </li>

        <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center">
        </li>
      </ul>

      <ul className="grid lg:grid-cols-5 lg:gap-6">
        <li className="lg:col-span-2 pb-1.5 lg:py-3">
          <span className="font-semibold lg:font-normal text-sm text-gray-800">
          Número de páginas
          </span>
        </li>

        <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200">
          <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
            <span className="lg:hidden md:col-span-2 text-sm text-gray-800">
              One Page
            </span>
            <span className="text-sm text-gray-800">
              1
            </span>
          </div>
        </li>

        <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200">
          <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
            <span className="lg:hidden md:col-span-2 text-sm text-gray-800">
              Landing Page
            </span>
            <span className="text-sm text-gray-800">
              Hasta 3 sin costo adicional
            </span>
          </div>
        </li>

        <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200">
          <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
            <span className="lg:hidden md:col-span-2 text-sm text-gray-800">
              Tienda Online
            </span>
            <span className="text-sm text-gray-800">
              Ilimitado
            </span>
          </div>
        </li>
      </ul>

      <ul className="grid lg:grid-cols-5 lg:gap-6">
        <li className="lg:col-span-2 pb-1.5 lg:py-3">
          <span className="font-semibold lg:font-normal text-sm text-gray-800">
          Diseño y desarrollo personalizado
          </span>
        </li>

        <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200">
          <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
            <span className="lg:hidden md:col-span-2 text-sm text-gray-800">
              One Page
            </span>
            <svg className="shrink-0 size-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
          </div>
        </li>

        <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200">
          <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
            <span className="lg:hidden md:col-span-2 text-sm text-gray-800">
              Landing Page
            </span>
            <svg className="shrink-0 size-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
          </div>
        </li>

        <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200">
          <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
            <span className="lg:hidden md:col-span-2 text-sm text-gray-800">
              Tienda Online
            </span>
            <svg className="shrink-0 size-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
          </div>
        </li>
      </ul>

      <ul className="grid lg:grid-cols-5 lg:gap-6">
        <li className="lg:col-span-2 pb-1.5 lg:py-3">
          <span className="font-semibold lg:font-normal text-sm text-gray-800">
          Comisión por Ventas
          </span>
        </li>

        <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200">
          <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
            <span className="lg:hidden md:col-span-2 text-sm text-gray-800">
              One Page
            </span>
            <svg className="shrink-0 size-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/></svg>
          </div>
        </li>

        <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200">
          <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
            <span className="lg:hidden md:col-span-2 text-sm text-gray-800">
              Landing Page
            </span>
            <svg className="shrink-0 size-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/></svg>
          </div>
        </li>

        <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200">
          <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
            <span className="lg:hidden md:col-span-2 text-sm text-gray-800">
              Tienda Online
            </span>
            <svg className="shrink-0 size-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/></svg>
          </div>
        </li>
      </ul>
    </div>

    <div className="mt-6 space-y-4 lg:space-y-0">
      <ul className="grid lg:grid-cols-5 lg:gap-6">
        <li className="lg:col-span-2 lg:py-3">
          <span className="text-lg font-semibold text-gray-800">
          Seguridad
          </span>
        </li>

        <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center">
        </li>

        <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center">
        </li>

        <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center">
        </li>

        <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center">
        </li>
      </ul>

      <ul className="grid lg:grid-cols-5 lg:gap-6">
        <li className="lg:col-span-2 pb-1.5 lg:py-3">
          <span className="font-semibold lg:font-normal text-sm text-gray-800">
          Protección DDoS
          </span>
        </li>

        <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200">
          <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
            <span className="lg:hidden md:col-span-2 text-sm text-gray-800">
              One Page
            </span>
            <span className="text-sm text-gray-800">
            Estándar
            </span>
          </div>
        </li>

        <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200">
          <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
            <span className="lg:hidden md:col-span-2 text-sm text-gray-800">
              Landing Page
            </span>
            <span className="text-sm text-gray-800">
              Mejorada
            </span>
          </div>
        </li>

        <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200">
          <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
            <span className="lg:hidden md:col-span-2 text-sm text-gray-800">
              Tienda Online
            </span>
            <span className="text-sm text-gray-800">
            Mejorada
            </span>
          </div>
        </li>
      </ul>

      <ul className="grid lg:grid-cols-5 lg:gap-6">
        <li className="lg:col-span-2 pb-1.5 lg:py-3">
          <span className="font-semibold lg:font-normal text-sm text-gray-800">
          Firewall de aplicaciones web
          </span>
        </li>

        <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200">
          <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
            <span className="lg:hidden md:col-span-2 text-sm text-gray-800">
              One Page
            </span>
            <svg className="shrink-0 size-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
          </div>
        </li>

        <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200">
          <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
            <span className="lg:hidden md:col-span-2 text-sm text-gray-800">
              Landing Page
            </span>
            <svg className="shrink-0 size-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
          </div>
        </li>

        <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200">
          <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
            <span className="lg:hidden md:col-span-2 text-sm text-gray-800">
              Tienda Online
            </span>
            <svg className="shrink-0 size-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
          </div>
        </li>
      </ul>

      <ul className="grid lg:grid-cols-5 lg:gap-6">
        <li className="lg:col-span-2 pb-1.5 lg:py-3">
          <span className="font-semibold lg:font-normal text-sm text-gray-800">
          Proteccion de privacidad de datos (GDPR)
          </span>
        </li>

        <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200">
          <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
            <span className="lg:hidden md:col-span-2 text-sm text-gray-800">
              One Page
            </span>
            <svg className="shrink-0 size-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
          </div>
        </li>

        <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200">
          <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
            <span className="lg:hidden md:col-span-2 text-sm text-gray-800">
              Landing Page
            </span>
            <svg className="shrink-0 size-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
          </div>
        </li>

        <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200">
          <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
            <span className="lg:hidden md:col-span-2 text-sm text-gray-800">
              Tienda Online
            </span>
            <svg className="shrink-0 size-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
          </div>
        </li>
      </ul>

      <ul className="grid lg:grid-cols-5 lg:gap-6">
        <li className="lg:col-span-2 pb-1.5 lg:py-3">
          <span className="font-semibold lg:font-normal text-sm text-gray-800">
          Altos estándares de seguridad y disponibilidad (SOC 2)
          </span>
        </li>

        <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200">
          <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
            <span className="lg:hidden md:col-span-2 text-sm text-gray-800">
              One Page
            </span>
            <svg className="shrink-0 size-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
          </div>
        </li>

        <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200">
          <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
            <span className="lg:hidden md:col-span-2 text-sm text-gray-800">
              Landing Page
            </span>
            <svg className="shrink-0 size-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
          </div>
        </li>

        <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200">
          <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
            <span className="lg:hidden md:col-span-2 text-sm text-gray-800">
              Tienda Online
            </span>
            <svg className="shrink-0 size-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
          </div>
        </li>
      </ul>

      <ul className="grid lg:grid-cols-5 lg:gap-6">
        <li className="lg:col-span-2 pb-1.5 lg:py-3">
          <span className="font-semibold lg:font-normal text-sm text-gray-800">
          Altos estándares de gestión de la seguridad de la información (ISO 27001)
          </span>
        </li>

        <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200">
          <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
            <span className="lg:hidden md:col-span-2 text-sm text-gray-800">
              One Page
            </span>
            <svg className="shrink-0 size-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
          </div>
        </li>

        <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200">
          <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
            <span className="lg:hidden md:col-span-2 text-sm text-gray-800">
              Landing Page
            </span>
            <svg className="shrink-0 size-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
          </div>
        </li>

        <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200">
          <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
            <span className="lg:hidden md:col-span-2 text-sm text-gray-800">
              Tienda Online
            </span>
            <svg className="shrink-0 size-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
          </div>
        </li>
      </ul>
    </div>

    <div className="mt-6 space-y-4 lg:space-y-0">
      <ul className="grid lg:grid-cols-5 lg:gap-6">
        <li className="lg:col-span-2 lg:py-3">
          <span className="text-lg font-semibold text-gray-800">
          Rendimiento
          </span>
        </li>

        <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center">
        </li>

        <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center">
        </li>

        <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center">
        </li>

        <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center">
        </li>
      </ul>

      <ul className="grid lg:grid-cols-5 lg:gap-6">
        <li className="lg:col-span-2 pb-1.5 lg:py-3">
          <span className="font-semibold lg:font-normal text-sm text-gray-800">
          Distribución en una red global de servidores de alto rendimiento y baja latencia
          </span>
        </li>

        <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200">
          <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
            <span className="lg:hidden md:col-span-2 text-sm text-gray-800">
              One Page
            </span>
                        <svg className="shrink-0 size-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
          </div>
        </li>

        <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200">
          <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
            <span className="lg:hidden md:col-span-2 text-sm text-gray-800">
              Landing Page
            </span>
                        <svg className="shrink-0 size-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
          </div>
        </li>

        <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200">
          <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
            <span className="lg:hidden md:col-span-2 text-sm text-gray-800">
              Tienda Online
            </span>
            <svg className="shrink-0 size-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
          </div>
        </li>
      </ul>

      <ul className="grid lg:grid-cols-5 lg:gap-6">
        <li className="lg:col-span-2 pb-1.5 lg:py-3">
          <span className="font-semibold lg:font-normal text-sm text-gray-800">
          Optimización de imágenes
          </span>
        </li>

        <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200">
          <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
            <span className="lg:hidden md:col-span-2 text-sm text-gray-800">
              One Page
            </span>
                        <svg className="shrink-0 size-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
          </div>
        </li>

        <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200">
          <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
            <span className="lg:hidden md:col-span-2 text-sm text-gray-800">
              Landing Page
            </span>
                        <svg className="shrink-0 size-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
          </div>
        </li>

        <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200">
          <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
            <span className="lg:hidden md:col-span-2 text-sm text-gray-800">
              Tienda Online
            </span>
            <svg className="shrink-0 size-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
          </div>
        </li>
      </ul>

      <ul className="grid lg:grid-cols-5 lg:gap-6">
        <li className="lg:col-span-2 pb-1.5 lg:py-3">
          <span className="font-semibold lg:font-normal text-sm text-gray-800">
          Minificación y compresión de codigo
          </span>
        </li>

        <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200">
          <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
            <span className="lg:hidden md:col-span-2 text-sm text-gray-800">
              One Page
            </span>
                        <svg className="shrink-0 size-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
          </div>
        </li>

        <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200">
          <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
            <span className="lg:hidden md:col-span-2 text-sm text-gray-800">
              Landing Page
            </span>
                        <svg className="shrink-0 size-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
          </div>
        </li>

        <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200">
          <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
            <span className="lg:hidden md:col-span-2 text-sm text-gray-800">
              Tienda Online
            </span>
            <svg className="shrink-0 size-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
          </div>
        </li>
      </ul>

      <ul className="grid lg:grid-cols-5 lg:gap-6">
        <li className="lg:col-span-2 pb-1.5 lg:py-3">
          <span className="font-semibold lg:font-normal text-sm text-gray-800">
          Almacenamiento en Caché para usuarios regresantes
          </span>
        </li>

        <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200">
          <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
            <span className="lg:hidden md:col-span-2 text-sm text-gray-800">
              One Page
            </span>
            <svg className="shrink-0 size-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/></svg>
          </div>
        </li>

        <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200">
          <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
            <span className="lg:hidden md:col-span-2 text-sm text-gray-800">
              Landing Page
            </span>
            <svg className="shrink-0 size-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/></svg>
          </div>
        </li>

        <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200">
          <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
            <span className="lg:hidden md:col-span-2 text-sm text-gray-800">
              Tienda Online
            </span>
            <svg className="shrink-0 size-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
          </div>
        </li>
      </ul>

      <ul className="grid lg:grid-cols-5 lg:gap-6">
        <li className="lg:col-span-2 pb-1.5 lg:py-3">
          <span className="font-semibold lg:font-normal text-sm text-gray-800">
          Bases de datos de alto rendimiento y escalado automatico
          </span>
        </li>

        <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200">
          <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
            <span className="lg:hidden md:col-span-2 text-sm text-gray-800">
              One Page
            </span>
            <svg className="shrink-0 size-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/></svg>
          </div>
        </li>

        <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200">
          <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
            <span className="lg:hidden md:col-span-2 text-sm text-gray-800">
              Landing Page
            </span>
            <svg className="shrink-0 size-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/></svg>
          </div>
        </li>

        <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200">
          <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
            <span className="lg:hidden md:col-span-2 text-sm text-gray-800">
              Tienda Online
            </span>
            <svg className="shrink-0 size-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
          </div>
        </li>
      </ul>
    </div>

    <div className="mt-6 space-y-4 lg:space-y-0">
      <ul className="grid lg:grid-cols-5 lg:gap-6">
        <li className="lg:col-span-2 lg:py-3">
          <span className="text-lg font-semibold text-gray-800">
            Estructura y Caracteristicas
          </span>
        </li>

        <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center">
        </li>

        <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center">
        </li>

        <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center">
        </li>

        <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center">
        </li>
      </ul>

      <ul className="grid lg:grid-cols-5 lg:gap-6">
        <li className="lg:col-span-2 pb-1.5 lg:py-3">
          <span className="font-semibold lg:font-normal text-sm text-gray-800">
          {/* Protección DDoS */}
          </span>
        </li>

        <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200">
          <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
            <span className="lg:hidden md:col-span-2 text-sm text-gray-800">
              One Page
            </span>
            <span className="text-sm text-gray-800">
            Diseño de página web de una sola página
            </span>
          </div>
        </li>

        <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200">
          <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
            <span className="lg:hidden md:col-span-2 text-sm text-gray-800">
              Landing Page
            </span>
            <span className="text-sm text-gray-800">
            Diseño enfocado en la conversión
            </span>
          </div>
        </li>

        <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200">
          <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
            <span className="lg:hidden md:col-span-2 text-sm text-gray-800">
              Tienda Online
            </span>
            <span className="text-sm text-gray-800">
            Catálogo de productos con categorías y colecciones
            </span>
          </div>
        </li>
      </ul>

      <ul className="grid lg:grid-cols-5 lg:gap-6">
        <li className="lg:col-span-2 pb-1.5 lg:py-3">
          <span className="font-semibold lg:font-normal text-sm text-gray-800">
          {/* Protección DDoS */}
          </span>
        </li>

        <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200">
          <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
            <span className="lg:hidden md:col-span-2 text-sm text-gray-800">
              One Page
            </span>
            <span className="text-sm text-gray-800">
            Secciones desplazables con información clave
            </span>
          </div>
        </li>

        <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200">
          <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
            <span className="lg:hidden md:col-span-2 text-sm text-gray-800">
              Landing Page
            </span>
            <span className="text-sm text-gray-800">
            Llamados a la acción claros y destacados
            </span>
          </div>
        </li>

        <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200">
          <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
            <span className="lg:hidden md:col-span-2 text-sm text-gray-800">
              Tienda Online
            </span>
            <span className="text-sm text-gray-800">
            Carrito de compras y proceso de pago seguro
            </span>
          </div>
        </li>
      </ul>

      <ul className="grid lg:grid-cols-5 lg:gap-6">
        <li className="lg:col-span-2 pb-1.5 lg:py-3">
          <span className="font-semibold lg:font-normal text-sm text-gray-800">
          {/* Protección DDoS */}
          </span>
        </li>

        <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200">
          <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
            <span className="lg:hidden md:col-span-2 text-sm text-gray-800">
              One Page
            </span>
            <span className="text-sm text-gray-800">
            Llamado a la acción prominente
            </span>
          </div>
        </li>

        <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200">
          <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
            <span className="lg:hidden md:col-span-2 text-sm text-gray-800">
              Landing Page
            </span>
            <span className="text-sm text-gray-800">
            Formularios de contacto o registros visibles
            </span>
          </div>
        </li>

        <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200">
          <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
            <span className="lg:hidden md:col-span-2 text-sm text-gray-800">
              Tienda Online
            </span>
            <span className="text-sm text-gray-800">
            Opciones de búsqueda avanzada
            </span>
          </div>
        </li>
      </ul>

      <ul className="grid lg:grid-cols-5 lg:gap-6">
        <li className="lg:col-span-2 pb-1.5 lg:py-3">
          <span className="font-semibold lg:font-normal text-sm text-gray-800">
          {/* Protección DDoS */}
          </span>
        </li>

        <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200">
          <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
            <span className="lg:hidden md:col-span-2 text-sm text-gray-800">
              One Page
            </span>
            <span className="text-sm text-gray-800">
            Navegación dentro de la misma página
            </span>
          </div>
        </li>

        <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200">
          <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
            <span className="lg:hidden md:col-span-2 text-sm text-gray-800">
              Landing Page
            </span>
            <span className="text-sm text-gray-800">
            Testimonios o reseñas de clientes
            </span>
          </div>
        </li>

        <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200">
          <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
            <span className="lg:hidden md:col-span-2 text-sm text-gray-800">
              Tienda Online
            </span>
            <span className="text-sm text-gray-800">
            Administracion de pedidos, clientes, divisas y regiones
            </span>
          </div>
        </li>
      </ul>

      <ul className="grid lg:grid-cols-5 lg:gap-6">
        <li className="lg:col-span-2 pb-1.5 lg:py-3">
          <span className="font-semibold lg:font-normal text-sm text-gray-800">
          {/* Protección DDoS */}
          </span>
        </li>

        <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200">
          <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
            <span className="lg:hidden md:col-span-2 text-sm text-gray-800">
              One Page
            </span>
            <span className="text-sm text-gray-800">
            Formulario de contacto integrado
            </span>
          </div>
        </li>

        <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200">
          <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
            <span className="lg:hidden md:col-span-2 text-sm text-gray-800">
              Landing Page
            </span>
            <span className="text-sm text-gray-800">
            Elementos visuales atractivos y relevantes
            </span>
          </div>
        </li>

        <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200">
          <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
            <span className="lg:hidden md:col-span-2 text-sm text-gray-800">
              Tienda Online
            </span>
            <span className="text-sm text-gray-800">
            Gestión de inventario, codigos de descuentos y targetas de regalo
            </span>
          </div>
        </li>
      </ul>
    </div>

    <div className="hidden lg:block mt-6">
      <div className="grid grid-cols-5 gap-6">
        <div className="col-span-2">
        </div>

        <div className="col-span-1">
          <a className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-50" href="#">
            Comprar Ahora
          </a>
        </div>

        <div className="col-span-1">
          <a className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none" href="#">
            Comprar Ahora
          </a>
        </div>

        <div className="col-span-1">
          <a className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-50" href="#">
            Comprar Ahora
          </a>
        </div>
      </div>
    </div>

    <div className="mt-8 md:mt-12 flex justify-center items-center gap-x-3">
      <p className="text-sm text-gray-500">
      ¿Necesitas un plan personalizado?
      </p>

      <a href="/contacto" type="button" className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-50">
        Contactanos!
      </a>
    </div>
  </div>
</BlurFade>
    </div>
  );
}

export default Pricing;
