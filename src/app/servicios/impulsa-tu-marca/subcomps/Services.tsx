"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import BrandingImage from "@/images/Branding.png";
import SocialMediaImage from "@/images/Social Media.png";
import PautaPublicitariaImage from "@/images/Pauta Publicitaria.png";
import AsesoriaPersonalizada from "@/images/AsesoriaPersonalizada.png";
import DisenoIntegral from "@/images/Diseño Integral.png";
import TiendaNubeImage from "@/images/TiendaNubeImage.webp";

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function Services() {
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const [ref1, inView1] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [ref2, inView2] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [ref3, inView3] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [ref4, inView4] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [ref5, inView5] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [ref6, inView6] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const phoneNumber = "5491134514873";
  
  const Brandingmessage = encodeURIComponent(
    "Hola, estoy interesado en adquirir el servicio de branding para mi negocio."
  );

  const SocialMediaMessage = encodeURIComponent(
    "Hola, estoy interesado en adquirir el servicio de social media para mi marca."
  );

  const PautaPublicitariaMessage = encodeURIComponent(
    "Hola, estoy interesado en adquirir el servicio de pauta publicitaria para mi marca."
  );

  const AsesoriaPersonalizadaMessage = encodeURIComponent(
    "Hola, estoy interesado en agendar una asesoria personalizada para mi marca."
  );

  const DisenoIntegralMessage = encodeURIComponent(
    "Hola, estoy interesado en adquirir el servicio de diseño integral para mi marca."
  );

  const TiendaNubeMessage = encodeURIComponent(
    "Hola, estoy interesado en adquirir una tienda nube para mi marca."
  );

  const BrandinghandleClick = () => {
    window.open(
      `https://wa.me/${phoneNumber}?text=${Brandingmessage}`,
      "_blank"
    );
  };

  const SocialMediahandleClick = () => {
    window.open(
      `https://wa.me/${phoneNumber}?text=${SocialMediaMessage}`,
      "_blank"
    );
  };

  const PautaPublicitariahandleClick = () => {
    window.open(
      `https://wa.me/${phoneNumber}?text=${PautaPublicitariaMessage}`,
      "_blank"
    );
  };

  const AsesoriaPersonalizadahandleClick = () => {
    window.open(
      `https://wa.me/${phoneNumber}?text=${AsesoriaPersonalizadaMessage}`,
      "_blank"
    );
  };

  const DisenoIntegralhandleClick = () => {
    window.open(
      `https://wa.me/${phoneNumber}?text=${DisenoIntegralMessage}`,
      "_blank"
    );
  };

  const TiendaNubehandleClick = () => {
    window.open(
      `https://wa.me/${phoneNumber}?text=${TiendaNubeMessage}`,
      "_blank"
    );
  };

  return (
    <div>
      <motion.div
        ref={ref1}
        initial="hidden"
        animate={inView1 ? "visible" : "hidden"}
        variants={itemVariants}
        id="branding"
        className="flex flex-col-reverse lg:flex-row-reverse items-center justify-between content-container px-6 py-16 mx-auto max-w-7xl"
      >
        <div className="w-full flex items-center justify-center">
          <Image
            src={BrandingImage}
            alt="Branding"
            width={400}
            height={400}
            className="mt-12 lg:mt-0"
          />
        </div>
        <div className="w-full flex flex-col items-start text-left">
          <div className="flex flex-row items-center space-x-3">
            <span className="inline-block border-2 p-2 border-neutral-400 rounded-lg">
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
            <h2 className="text-3xl lg:text-4xl text-black font-bold pt-2">
              Branding
            </h2>
          </div>
          <p className="pt-6 font-medium text-lg text-neutral-600">
            Desarrollamos identidades de marca integrales, fusionando diseño y
            estrategia para destacar y perdurar en la mente del consumidor.
          </p>
          <p className="py-4 text-sm text-neutral-500">
            Nuestro enfoque comienza con una investigación exhaustiva del
            mercado, la competencia y el público objetivo, lo cual nos permite
            definir una propuesta de valor clara y un posicionamiento
            estratégico. Creamos elementos visuales como logotipos, paletas de
            colores y tipografías que reflejan los valores y la personalidad de
            la marca. Implementamos esta identidad de manera coherente en todos
            los aspectos del negocio, garantizando una comunicación consistente
            y efectiva.
          </p>
          <p className="pb-4 text-sm text-neutral-500">
            Además, establecemos directrices para la gestión y protección de la
            marca a largo plazo, asegurando su adaptabilidad y escalabilidad
            conforme el negocio crece. Nuestro objetivo es proporcionar
            soluciones creativas y efectivas que no solo mejoren la percepción
            de la marca, sino que también generen impacto positivo y contribuyan
            al crecimiento sostenible del cliente en el mercado.
          </p>
          <motion.button
            onClick={BrandinghandleClick}
            className="rounded-md bg-orange-500 p-3 text-sm font-semibold text-white shadow-sm hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a482fb]"
            whileHover={{ scale: 1.05, backgroundColor: "#ff7849" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Contratar Servicio
          </motion.button>
        </div>
      </motion.div>

      <motion.div
        ref={ref2}
        initial="hidden"
        animate={inView2 ? "visible" : "hidden"}
        variants={itemVariants}
        id="social-media"
        className="flex flex-col-reverse lg:flex-row items-center justify-between content-container px-6 py-16 mx-auto max-w-7xl"
      >
        <div className="w-full flex items-center justify-center">
          <Image
            src={SocialMediaImage}
            alt="Social Media"
            width={550}
            height={550}
            className="mt-12 lg:mt-0"
          />
        </div>
        <div className="w-full flex flex-col items-start text-left">
          <div className="flex flex-row items-center space-x-3">
            <span className="inline-block border-2 p-2 border-neutral-400 rounded-lg">
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
            <h2 className="text-3xl lg:text-4xl text-black font-bold pt-2">
              Social Media
            </h2>
          </div>
          <p className="pt-6 font-medium text-lg text-neutral-600">
            Gestionamos y potenciamos tu presencia online construyendo una
            comunidad digital activa, comprometida y leal. Creamos y ejecutamos
            una estrategia de marketing en las redes sociales.
          </p>
          <p className="py-4 text-sm text-neutral-500">
            Nuestro equipo especializado crea y ejecuta estrategias de marketing
            en redes sociales adaptadas a las necesidades y objetivos
            específicos de cada marca, asegurando una presencia efectiva en
            todas las plataformas.
          </p>
          <p className="pb-4 text-sm text-neutral-500">
            Nos encargamos de la planificación de contenido relevante y
            atractivo para maximizar el alcance y la interacción con el público
            objetivo.
          </p>
          <p className="pb-4 text-sm text-neutral-500">
            Además, monitoreamos de cerca las tendencias y el comportamiento del
            usuario para ajustar la estrategia de manera continua y optimizar
            los resultados.
          </p>
          <p className="pb-4 text-sm text-neutral-500">
            Implementamos técnicas avanzadas de engagement y atención al
            cliente, asegurando una comunicación efectiva y una respuesta ágil a
            las interacciones en línea. Con Studio Cah, no solo garantizamos una
            presencia activa y profesional en redes sociales, sino que también
            cultivamos relaciones significativas con la audiencia, impulsando el
            crecimiento y la fidelización de la base de seguidores{" "}
          </p>
          <motion.button
            onClick={SocialMediahandleClick}
            className="rounded-md bg-blue-800 p-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            whileHover={{ scale: 1.05, backgroundColor: "#2D29C2" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Contratar Servicio
          </motion.button>
        </div>
      </motion.div>

      <motion.div
        ref={ref3}
        initial="hidden"
        animate={inView3 ? "visible" : "hidden"}
        variants={itemVariants}
        id="asesoria-personalizada"
        className="flex flex-col-reverse lg:flex-row-reverse items-center justify-between content-container px-6 py-16 mx-auto max-w-7xl"
      >
        <div className="w-full flex items-center justify-center">
          <Image
            src={AsesoriaPersonalizada}
            alt="AsesoriaPersonalizada"
            width={500}
            height={500}
            className="mt-12 lg:mt-0"
          />
        </div>
        <div className="w-full flex flex-col items-start text-left">
          <div className="flex flex-row items-center space-x-3">
            <span className="inline-block border-2 p-2 border-neutral-400 rounded-lg">
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
            <h2 className="text-3xl lg:text-4xl text-black font-bold pt-2">
              Asesoría Personalizada
            </h2>
          </div>
          <p className="pt-6 font-medium text-lg text-neutral-600">
            Dos encuentros virtuales donde analizamos el perfil del negocio y
            objetivos, trabajamos en una estrategia integral que se adapte a la
            marca y sus necesidades.
          </p>
          <p className="py-4 text-sm text-neutral-500">
            Durante estos encuentros, analizamos en profundidad el perfil de tu
            negocio, tus objetivos comerciales y las características de tu
            público objetivo. A partir de esta información, desarrollamos una
            estrategia integral diseñada específicamente para tu marca. Desde la
            optimización de tu presencia en redes sociales hasta la
            implementación de campañas publicitarias efectivas, te
            proporcionamos recomendaciones y acciones concretas para potenciar
            tu visibilidad y maximizar tu impacto en el mercado digital.
          </p>
          <motion.button
            onClick={PautaPublicitariahandleClick}
            className="rounded-md bg-orange-500 p-3 text-sm font-semibold text-white shadow-sm hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a482fb]"
            whileHover={{ scale: 1.05, backgroundColor: "#ff7849" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Contratar Servicio
          </motion.button>
        </div>
      </motion.div>

      <motion.div
        ref={ref4}
        initial="hidden"
        animate={inView4 ? "visible" : "hidden"}
        variants={itemVariants}
        id="pauta-publicitaria"
        className="flex flex-col-reverse lg:flex-row items-center justify-between content-container px-6 py-16 mx-auto max-w-7xl"
      >
        <div className="w-full flex items-center justify-center">
          <Image
            src={PautaPublicitariaImage}
            alt="Pauta Publicitaria"
            width={400}
            height={400}
            className="mt-12 lg:mt-0"
          />
        </div>
        <div className="w-full flex flex-col items-start text-left">
          <div className="flex flex-row items-center space-x-3">
            <span className="inline-block border-2 p-2 border-neutral-400 rounded-lg">
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
            <h2 className="text-3xl lg:text-4xl text-black font-bold pt-2">
              Pauta Publicitaria
            </h2>
          </div>
          <p className="pt-6 font-medium text-lg text-neutral-600">
            Nuestro servicio de pauta publicitaria en Meta Ads se centra en la
            creación y gestión de campañas publicitarias efectivas, maximizando
            el impacto para alcanzar los objetivos comerciales del cliente.
          </p>
          <p className="py-4 text-sm text-neutral-500">
            Nuestro equipo de expertos en publicidad digital desarrolla mensajes
            persuasivos y creativos que captan la atención de tu audiencia y la
            guían hacia acciones concretas, como visitar tu sitio web, realizar
            una compra o interactuar con tu contenido. Nos aseguramos de
            optimizar continuamente las campañas, ajustando la segmentación, el
            presupuesto y el contenido según los datos y análisis en tiempo real
            para obtener los mejores resultados posibles. Además, monitoreamos
            de cerca el rendimiento de cada campaña y proporcionamos informes
            detallados que te permiten entender el impacto y el retorno de tus
            inversiones publicitarias.
          </p>

          <motion.button
            onClick={AsesoriaPersonalizadahandleClick}
            className="rounded-md bg-blue-800 p-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            whileHover={{ scale: 1.05, backgroundColor: "#2D29C2" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Contratar Servicio
          </motion.button>
        </div>
      </motion.div>

      <motion.div
        ref={ref5}
        initial="hidden"
        animate={inView5 ? "visible" : "hidden"}
        variants={itemVariants}
        id="diseño-integral"
        className="flex flex-col-reverse lg:flex-row-reverse items-center justify-between content-container px-6 py-16 mx-auto max-w-7xl"
      >
        <div className="w-full flex items-center justify-center">
          <Image
            src={DisenoIntegral}
            alt="Diseno Integral"
            width={400}
            height={400}
            className="mt-12 lg:mt-0"
          />
        </div>
        <div className="w-full flex flex-col items-start text-left">
          <div className="flex flex-row items-center space-x-3">
            <span className="inline-block border-2 p-2 border-neutral-400 rounded-lg">
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
            <h2 className="text-3xl lg:text-4xl text-black font-bold pt-2">
              Diseño Integral
            </h2>
          </div>
          <p className="pt-6 font-medium text-lg text-neutral-600">
            Si buscás delegar el diseño de tu marca, nuestro pack de diseño es
            la solución. Diseñamos tu feed e historias en base a la identidad y
            valores de tu negocio.
          </p>
          <p className="py-4 text-sm text-neutral-500">
            Nos encargamos de diseñar lo que necesites, desde flyers, papelería,
            hasta banners web, creatividades para redes sociales o publicidad,
            etc.
          </p>
          <p className="pb-4 text-sm text-neutral-500">
            Nos aseguramos de que cada elemento visual refleje fielmente los
            valores y la personalidad de tu negocio. Nuestro enfoque no solo se
            centra en la estética, sino también en la funcionalidad y el impacto
            visual que cada diseño puede generar en tu audiencia.
          </p>
          <motion.button
            onClick={DisenoIntegralhandleClick}
            className="rounded-md bg-orange-500 p-3 text-sm font-semibold text-white shadow-sm hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a482fb]"
            whileHover={{ scale: 1.05, backgroundColor: "#ff7849" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Contratar Servicio
          </motion.button>
        </div>
      </motion.div>

      <motion.div
        ref={ref6}
        initial="hidden"
        animate={inView6 ? "visible" : "hidden"}
        variants={itemVariants}
        id="tienda-nube"
        className="flex flex-col-reverse lg:flex-row items-center justify-between content-container px-6 py-16 mx-auto max-w-7xl"
      >
        <div className="w-full flex items-center justify-center">
          <Image
            src={TiendaNubeImage}
            alt="Tienda Nube"
            width={450}
            height={450}
            className="mt-12 lg:mt-0"
          />
        </div>
        <div className="w-full flex flex-col items-start text-left">
          <div className="flex flex-row items-center space-x-3">
            <span className="inline-block border-2 p-2 border-neutral-400 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="30"
                height="30"
                color="#2D29C2"
                fill="none"
              >
                <path
                  d="M17.4776 10.0001C17.485 10 17.4925 10 17.5 10C19.9853 10 22 12.0147 22 14.5C22 16.9853 19.9853 19 17.5 19H7C4.23858 19 2 16.7614 2 14C2 11.4003 3.98398 9.26407 6.52042 9.0227M17.4776 10.0001C17.4924 9.83536 17.5 9.66856 17.5 9.5C17.5 6.46243 15.0376 4 12 4C9.12324 4 6.76233 6.20862 6.52042 9.0227M17.4776 10.0001C17.3753 11.1345 16.9286 12.1696 16.2428 13M6.52042 9.0227C6.67826 9.00768 6.83823 9 7 9C8.12582 9 9.16474 9.37209 10.0005 10"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            <h2 className="text-3xl lg:text-4xl text-black font-bold pt-2">
              Tienda Nube
            </h2>
          </div>
          <p className="pt-6 font-medium text-lg text-neutral-600">
            Creamos de cero, configuramos y adaptamos tu Tienda Nube para que
            potencies tus ventas online.
          </p>
          <p className="py-4 text-base text-neutral-500">
            - Configuraciones de dominio
          </p>
          <p className="pb-4 text-base text-neutral-500">
            - Configuraciones de métodos de pagos y envíos
          </p>
          <p className="pb-4 text-base text-neutral-500">
            - Diseño integral para su personalización
          </p>
          <p className="pb-4 text-base text-neutral-500">
            - Carga y configurar de productos, categorías y subcategorías
          </p>
          <p className="pb-4 text-base text-neutral-500">Y más!</p>

          <motion.button
            onClick={TiendaNubehandleClick}
            className="rounded-md bg-blue-800 p-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            whileHover={{ scale: 1.05, backgroundColor: "#2D29C2" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Contratar Servicio
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}

export default Services;
