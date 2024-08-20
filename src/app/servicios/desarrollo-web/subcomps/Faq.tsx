"use client";
import React, { useState } from 'react';

function Faq() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div>
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="grid md:grid-cols-5 gap-10">
          <div className="md:col-span-2">
            <div className="max-w-xs">
              <h2 className="text-2xl font-bold md:text-4xl md:leading-tight text-gray-900">Preguntas frecuentes</h2>
              <p className="mt-1 hidden md:block text-gray-600">Respuestas a las preguntas más frecuentes.</p>
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="hs-accordion-group divide-y divide-gray-200">
              {faqData.map((faq, index) => (
                <div
                  className={`hs-accordion pt-6 pb-3 ${activeIndex === index ? 'active' : ''}`}
                  key={index}
                >
                  <button
                    className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 focus:outline-none focus:text-gray-500"
                    aria-expanded={activeIndex === index}
                    aria-controls={`hs-basic-with-title-and-arrow-stretched-collapse-${index}`}
                    onClick={() => toggleAccordion(index)}
                  >
                    {faq.question}
                    <svg
                      className={`${activeIndex !== index ? 'block' : 'hidden'} shrink-0 size-5 text-gray-600 group-hover:text-gray-500`}
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                    <svg
                      className={`${activeIndex === index ? 'block' : 'hidden'} shrink-0 size-5 text-gray-600 group-hover:text-gray-500`}
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m18 15-6-6-6 6" />
                    </svg>
                  </button>
                  <div
                    id={`hs-basic-with-title-and-arrow-stretched-collapse-${index}`}
                    className={`hs-accordion-content w-full overflow-hidden transition-[height] duration-300 ${activeIndex === index ? '' : 'hidden'}`}
                    role="region"
                    aria-labelledby={`hs-basic-with-title-and-arrow-stretched-heading-${index}`}
                  >
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const faqData = [
  {
    question: '¿Qué incluye el modelo One Page?',
    answer: 'El modelo One Page incluye una página única con diseño personalizado, mantenimiento y soporte por $.000/mes. Es ideal para promocionar servicios y capturar potenciales clientes.',
  },
  {
    question: '¿Cuál es la diferencia entre una Landing Page y una One Page?',
    answer: 'La Landing Page está diseñada para captar y convertir clientes interesados en tus servicios con hasta 3 páginas sin costo adicional y mantenimiento por $.000/mes. En cambio, la One Page es una sola página enfocada en la presencia online.',
  },
  {
    question: '¿Qué características de seguridad ofrecen los diferentes modelos web?',
    answer: 'Todos los modelos ofrecen protección DDoS y un firewall de aplicaciones web. La Tienda Nube y Tienda Online ofrecen seguridad mejorada con estándares SOC 2 e ISO 27001.',
  },
  {
    question: '¿Cuál es la opción más adecuada para un negocio que vende productos?',
    answer: "La Tienda Online es ideal para quienes venden productos y desean llegar a una audiencia global. Incluye un carrito de compras, proceso de pago seguro, y administración de inventario.",
  },
  {
    question: '¿Los precios son por única vez?',
    answer: 'Sí, el costo de $00,99 ARS es un pago único por la creación del sitio web, con opciones de mantenimiento y soporte mensual adicionales según el modelo elegido.',
  },
];

export default Faq;
