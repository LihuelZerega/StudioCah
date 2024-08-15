"use client";
import React from "react";
import Image from "next/image";
import BlurFade from "@/components/BlurFade";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure,
} from "@nextui-org/react";

import PortfolioPlumaBlanca from "@/images/PortfolioPlumaBlanca.png";
import PortfolioMarisaP from "@/images/PortfolioMarisaP.png";
import PortfolioImportadosSanta from "@/images/PortfolioSantaImportados.png";
import PortfolioLala from "@/images/PortfolioLala.png";
import PortfolioRvConstructora from "@/images/PortfolioRvConstructora.png";
import PortfolioLabios from "@/images/PortfolioLabios.png";

import LalaCarousel from "./carousel-modal-images/LalaCarousel";
import PlumaBlancaCarousel from "./carousel-modal-images/PlumaBlancaCarousel";
import RvConstructoraCarousel from "./carousel-modal-images/RvConstructoraCarousel";
import DenclatCarousel from "./carousel-modal-images/DenclatCarousel";

function Portfolio() {
  const {
    isOpen: isLalaOpen,
    onOpen: onLalaOpen,
    onOpenChange: onLalaOpenChange,
  } = useDisclosure();
  const {
    isOpen: isPlumaBlancaOpen,
    onOpen: onPlumaBlancaOpen,
    onOpenChange: onPlumaBlancaOpenChange,
  } = useDisclosure();
  const {
    isOpen: isRvConstructoraOpen,
    onOpen: onRvConstructoraOpen,
    onOpenChange: onRvConstructoraOpenChange,
  } = useDisclosure();
  const {
    isOpen: isDenclatOpen,
    onOpen: onDenclatOpen,
    onOpenChange: onDenclatOpenChange,
  } = useDisclosure();

  return (
    <div className="container px-6 mx-auto py-10 bg-white sm:py-16 lg:py-24">
      <BlurFade inView className="max-w-2xl mx-auto text-center py-10">
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
      </BlurFade>

      <BlurFade
        inView
        className="flex flex-col lg:flex-row gap-8 w-full h-full"
      >
        <div className="flex flex-col gap-8 w-full">
          <div
            onClick={onLalaOpen}
            className="bg-black h-full lg:h-5/6 rounded-xl transition-all duration-500 hover:scale-105 relative overflow-hidden cursor-pointer"
          >
            <Image
              src={PortfolioLala}
              width={390}
              height={300}
              alt=""
              className="rounded-xl object-cover w-full h-full opacity-70"
            />
            <div className="absolute bottom-0 left-0 p-4 bg- bg-blur bg-opacity-50 text-white">
              <p className="font-semibold text-xl">Lala</p>
              <p className="font-normal text-sm text-neutral-200 mt-2"></p>
            </div>

            <Modal
              isOpen={isLalaOpen}
              size="2xl"
              placement="center"
              onOpenChange={onLalaOpenChange}
            >
              <ModalContent>
                {(onClose) => (
                  <>
                    <ModalHeader className="flex flex-col gap-1 text-neutral-800">
                      Lala - Gestion Recursos Humanos
                    </ModalHeader>
                    <ModalBody>
                      <LalaCarousel />
                    </ModalBody>
                  </>
                )}
              </ModalContent>
            </Modal>
          </div>

          <a
            href="https://drive.google.com/file/d/1-N_KJxkigZhl6QnK4Ro8YWct6jMvwLGD/view"
            className="bg-black h-full lg:h-6/6 rounded-xl transition-all duration-500 hover:scale-105 relative overflow-hidden cursor-pointer"
          >
            <Image
              src={PortfolioMarisaP}
              width={390}
              height={300}
              alt=""
              className="rounded-xl object-cover w-full h-full opacity-70"
            />
            <div className="absolute bottom-0 left-0 p-4 text-white">
              <p className="font-semibold text-xl">
                Marisa Peraggini - Estudio Inmobiliario
              </p>
            </div>
          </a>
        </div>

        <div className="flex flex-col gap-8 w-full">
          <div
            onClick={onPlumaBlancaOpen}
            className="bg-black h-full lg:h-4/6 rounded-xl transition-all duration-500 hover:scale-105 relative overflow-hidden cursor-pointer"
          >
            <Image
              src={PortfolioPlumaBlanca}
              width={390}
              height={300}
              alt=""
              className="rounded-xl object-cover w-full h-full opacity-70"
            />
            <div className="absolute bottom-0 left-0 p-4 text-white">
              <p className="font-semibold text-xl">Pluma Blanca</p>
            </div>

            <Modal
              isOpen={isPlumaBlancaOpen}
              size="2xl"
              placement="center"
              onOpenChange={onPlumaBlancaOpenChange}
            >
              <ModalContent>
                {(onClose) => (
                  <>
                    <ModalHeader className="flex flex-col gap-1 text-neutral-800">
                      Pluma Blanca
                    </ModalHeader>
                    <ModalBody>
                      <PlumaBlancaCarousel />
                    </ModalBody>
                  </>
                )}
              </ModalContent>
            </Modal>
          </div>

          <div
            onClick={onRvConstructoraOpen}
            className="bg-black h-full lg:h-2/6 rounded-xl transition-all duration-500 hover:scale-105 relative overflow-hidden cursor-pointer"
          >
            <Image
              src={PortfolioRvConstructora}
              width={390}
              height={300}
              alt=""
              className="rounded-xl object-cover w-full h-full opacity-70"
            />
            <div className="absolute bottom-0 left-0 p-4 text-white">
              <p className="font-semibold text-xl">Rv Constructora</p>
            </div>

            <Modal
              isOpen={isRvConstructoraOpen}
              size="2xl"
              placement="center"
              onOpenChange={onRvConstructoraOpenChange}
            >
              <ModalContent>
                {(onClose) => (
                  <>
                    <ModalHeader className="flex flex-col gap-1 text-neutral-800">
                      Rv Constructora
                    </ModalHeader>
                    <ModalBody>
                      <RvConstructoraCarousel />
                    </ModalBody>
                  </>
                )}
              </ModalContent>
            </Modal>
          </div>
        </div>

        <div className="flex flex-col gap-8 w-full">
          <a
            href="https://pency.app/importados_santa"
            className="bg-black h-full lg:h-2/6 rounded-xl transition-all duration-500 hover:scale-105 relative overflow-hidden"
          >
            <Image
              src={PortfolioImportadosSanta}
              width={390}
              height={300}
              alt=""
              className="rounded-xl object-cover w-full h-full opacity-70"
            />
            <div className="absolute bottom-0 left-0 p-4 text-white">
              <p className="font-semibold text-xl">
                Importados Santa - Tienda Online
              </p>
            </div>
          </a>

          <div
            onClick={onDenclatOpen}
            className="bg-black h-full lg:h-4/6 rounded-xl transition-all duration-500 hover:scale-105 relative overflow-hidden cursor-pointer"
          >
            <Image
              src={PortfolioLabios}
              width={390}
              height={300}
              alt=""
              className="rounded-xl object-cover w-full h-full opacity-70"
            />
            <div className="absolute bottom-0 left-0 p-4 text-white">
              <p className="font-semibold text-xl">D Enclat</p>
            </div>

            <Modal
              isOpen={isDenclatOpen}
              size="2xl"
              placement="center"
              onOpenChange={onDenclatOpenChange}
            >
              <ModalContent>
                {(onClose) => (
                  <>
                    <ModalHeader className="flex flex-col gap-1 text-neutral-800">
                      D Enclat
                    </ModalHeader>
                    <ModalBody>
                      <DenclatCarousel />
                    </ModalBody>
                  </>
                )}
              </ModalContent>
            </Modal>
          </div>
        </div>
      </BlurFade>
    </div>
  );
}

export default Portfolio;
