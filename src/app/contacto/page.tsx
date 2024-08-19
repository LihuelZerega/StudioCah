"use client";
import React, { useState } from "react";
import { Suspense } from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Loading from "@/components/Loading";

function Page() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const mailtoLink = `mailto:info.studiocah@gmail.com?subject=${encodeURIComponent(
      "Consulta sobre servicios"
    )}&body=${encodeURIComponent(
      `Nombre: ${formData.name}\nCorreo: ${formData.email}\nMensaje: ${formData.message}`
    )}`;

    window.location.href = mailtoLink;
  };

  return (
    <div>
      <Suspense fallback={<Loading />}>
        <Navbar />
        <section
          className="min-h-screen bg-cover"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')",
          }}
        >
          <div className="flex flex-col min-h-screen bg-black/60">
            <div className="container flex flex-col flex-1 px-6 py-12 pt-24 mx-auto">
              <div className="flex-1 lg:flex lg:items-center lg:-mx-6">
                <div className="text-white lg:w-1/2 lg:mx-6">
                  <h1 className="text-2xl font-semibold capitalize lg:text-3xl">
                    ¡Ponete en Contacto con Nosotros!
                  </h1>

                  <p className="max-w-xl mt-6">
                    Estamos acá para ayudarte a llevar tu marca al próximo
                    nivel. Si tenés alguna pregunta, querés más información
                    sobre nuestros servicios o querés charlar sobre un nuevo
                    proyecto, no dudes en comunicarte con nosotros. Nos
                    encantaría saber de vos y ver cómo podemos trabajar juntos!
                  </p>

                  <div className="mt-6 md:mt-8">
                    <h3 className="text-neutral-300">Seguinos en</h3>

                    <div className="flex items-center mt-4 -mx-1.5 ">
                      <a
                        className="mx-1.5 text-white transition-colors duration-300 transform hover:text-blue-500"
                        href="https://www.instagram.com/studiocah_la/"
                      >
                        <svg
                          className="w-8 h-8"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11.9294 7.72275C9.65868 7.72275 7.82715 9.55428 7.82715 11.825C7.82715 14.0956 9.65868 15.9271 11.9294 15.9271C14.2 15.9271 16.0316 14.0956 16.0316 11.825C16.0316 9.55428 14.2 7.72275 11.9294 7.72275ZM11.9294 14.4919C10.462 14.4919 9.26239 13.2959 9.26239 11.825C9.26239 10.354 10.4584 9.15799 11.9294 9.15799C13.4003 9.15799 14.5963 10.354 14.5963 11.825C14.5963 13.2959 13.3967 14.4919 11.9294 14.4919ZM17.1562 7.55495C17.1562 8.08692 16.7277 8.51178 16.1994 8.51178C15.6674 8.51178 15.2425 8.08335 15.2425 7.55495C15.2425 7.02656 15.671 6.59813 16.1994 6.59813C16.7277 6.59813 17.1562 7.02656 17.1562 7.55495ZM19.8731 8.52606C19.8124 7.24434 19.5197 6.10901 18.5807 5.17361C17.6453 4.23821 16.51 3.94545 15.2282 3.88118C13.9073 3.80621 9.94787 3.80621 8.62689 3.88118C7.34874 3.94188 6.21341 4.23464 5.27444 5.17004C4.33547 6.10544 4.04628 7.24077 3.98201 8.52249C3.90704 9.84347 3.90704 13.8029 3.98201 15.1238C4.04271 16.4056 4.33547 17.5409 5.27444 18.4763C6.21341 19.4117 7.34517 19.7045 8.62689 19.7687C9.94787 19.8437 13.9073 19.8437 15.2282 19.7687C16.51 19.708 17.6453 19.4153 18.5807 18.4763C19.5161 17.5409 19.8089 16.4056 19.8731 15.1238C19.9481 13.8029 19.9481 9.84704 19.8731 8.52606ZM18.1665 16.5412C17.8881 17.241 17.349 17.7801 16.6456 18.0621C15.5924 18.4799 13.0932 18.3835 11.9294 18.3835C10.7655 18.3835 8.26272 18.4763 7.21307 18.0621C6.51331 17.7837 5.9742 17.2446 5.69215 16.5412C5.27444 15.488 5.37083 12.9888 5.37083 11.825C5.37083 10.6611 5.27801 8.15832 5.69215 7.10867C5.97063 6.40891 6.50974 5.8698 7.21307 5.58775C8.26629 5.17004 10.7655 5.26643 11.9294 5.26643C13.0932 5.26643 15.596 5.17361 16.6456 5.58775C17.3454 5.86623 17.8845 6.40534 18.1665 7.10867C18.5843 8.16189 18.4879 10.6611 18.4879 11.825C18.4879 12.9888 18.5843 15.4916 18.1665 16.5412Z"
                            fill="currentColor"
                          />
                        </svg>
                      </a>
                      <a
                        className="mx-1.5 text-white transition-colors duration-300 transform hover:text-blue-500"
                        href="https://www.tiktok.com/@studiocah_"
                      >
                        <svg
                          className="w-6 h-6"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.5 22C12.8137 22 15.5 19.3137 15.5 16V8.24537C16.5006 9.04749 17.6981 9.61412 19.0085 9.86122C19.3589 9.92728 19.5341 9.96032 19.7502 9.90446C20.007 9.83809 20.2923 9.6016 20.4051 9.36157C20.5 9.15952 20.5 8.93968 20.5 8.5C20.5 8.04137 20.5 7.81205 20.4499 7.65983C20.3671 7.4079 20.2952 7.31049 20.079 7.15694C19.9483 7.06416 19.6395 6.96876 19.022 6.77796C17.4492 6.29199 16.208 5.05079 15.722 3.47798C15.5312 2.86045 15.4358 2.55169 15.3431 2.42104C15.1895 2.20479 15.0921 2.13294 14.8402 2.05007C14.6879 2 14.4586 2 14 2C13.5341 2 13.3011 2 13.1173 2.07612C12.8723 2.17761 12.6776 2.37229 12.5761 2.61732C12.5 2.80109 12.5 3.03406 12.5 3.5V16C12.5 17.6569 11.1569 19 9.5 19C7.84315 19 6.5 17.6569 6.5 16C6.5 14.8644 7.13101 13.8761 8.06154 13.3667C8.75264 12.9884 9.0982 12.7992 9.19494 12.7057C9.38565 12.5214 9.39434 12.5068 9.46444 12.251C9.5 12.1212 9.5 11.9141 9.5 11.5C9.5 11.0747 9.5 10.8621 9.39825 10.6541C9.28169 10.4159 8.96391 10.1689 8.70429 10.1147C8.47765 10.0674 8.32349 10.1067 8.01518 10.1851C5.41964 10.8459 3.5 13.1988 3.5 16C3.5 19.3137 6.18629 22 9.5 22Z"
                            stroke="currentColor"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-8 lg:w-1/2 lg:mx-6">
                  <div className="w-full px-8 py-10 mx-auto overflow-hidden bg-white shadow-2xl rounded-xl lg:max-w-xl">
                    <h1 className="text-xl font-medium text-neutral-700 ">
                      Formulario de contacto
                    </h1>

                    <p className="mt-2 text-neutral-500 ">
                      Si necesitas más información sobre nuestros servicios, o
                      estás listo para comenzar un nuevo proyecto, no dudes en
                      ponerte en contacto con nosotros. Completa el formulario y
                      te responderemos lo antes posible!
                    </p>

                    <form onSubmit={handleSubmit} className="mt-6">
                      <div className="w-full">
                        <label className="block mb-2 text-sm text-neutral-600 ">
                          Nombre completo
                        </label>
                        <input
                          name="name"
                          type="text"
                          placeholder="Nombre Completo"
                          value={formData.name}
                          onChange={handleChange}
                          className="block w-full px-5 py-3 mt-2 text-neutral-700 bg-white border border-neutral-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                          required
                        />
                      </div>

                      <div className="w-full mt-6">
                        <label className="block mb-2 text-sm text-neutral-600 ">
                          Dirección de correo electrónico
                        </label>
                        <input
                          name="email"
                          type="email"
                          placeholder="tuemail@example.com"
                          value={formData.email}
                          onChange={handleChange}
                          className="block w-full px-5 py-3 mt-2 text-neutral-700 bg-white border border-neutral-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                          required
                        />
                      </div>

                      <div className="w-full mt-6">
                        <label className="block mb-2 text-sm text-neutral-600 ">
                          Mensaje
                        </label>
                        <textarea
                          name="message"
                          className="block w-full h-32 px-5 py-3 mt-2 text-neutral-700 bg-white border border-neutral-200 rounded-md md:h-48 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                          placeholder="Tu mensaje..."
                          value={formData.message}
                          onChange={handleChange}
                          required
                        ></textarea>
                      </div>

                      <button
                        type="submit"
                        className="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                      >
                        Enviar mensaje
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </Suspense>
    </div>
  );
}

export default Page;
