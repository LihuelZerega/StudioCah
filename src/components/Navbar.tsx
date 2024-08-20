"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Dialog, DialogPanel } from "@headlessui/react";
import { HiOutlineMenu } from "react-icons/hi";
import { HiOutlineXMark } from "react-icons/hi2";
import CahLogo from "@/images/png logo-18.png";
import Servicios from "@/components/Servicios";

const navigation = [
  { name: "Inicio", href: "/" },
  { name: "Servicios", href: "#" },
  { name: "Sobre Nosotros", href: "/sobre-nosotros" },
];

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="flex flex-col">
      <header className="fixed inset-x-0 top-0 z-50 bg-white">
        <div className="flex flex-row w-full">
          <div className="bg-black text-transparent w-full h-1">s</div>
          <div className="bg-[#FF7208] text-transparent w-full h-1">s</div>
          <div className="bg-[#2D29C2] text-transparent w-full h-1">s</div>
        </div>
        <nav
          aria-label="Global"
          className="flex items-center justify-between px-6 py-4 lg:px-8 border-b"
        >
          <div className="flex lg:flex-1">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Studio Cah</span>
              <div className="flex flex-row items-center space-x-3">
                <Image src={CahLogo} alt="logo" width={75} height={75} />
              </div>
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-neutral-800"
            >
              <span className="sr-only">Open main menu</span>
              <HiOutlineMenu aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) =>
              item.name === "Servicios" ? (
                <Servicios key={item.name} />
              ) : (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="text-base font-semibold leading-6 text-black hover:text-neutral-800"
                  whileHover={{ scale: 1.05, color: "#4A4A4A" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {item.name}
                </motion.a>
              )
            )}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <motion.a
              href="/contacto"
              className="rounded-md bg-orange-500 p-3 text-sm font-semibold text-white shadow-sm hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a482fb]"
              whileHover={{ scale: 1.05, backgroundColor: "#ff7849" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Contáctanos
            </motion.a>
          </div>
        </nav>

        <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="lg:hidden"
        >
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-black/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Studio Cah</span>
                <div className="flex flex-row items-center space-x-3">
                  <Image src={CahLogo} alt="logo" width={75} height={75} />
                </div>
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-neutral-800"
              >
                <span className="sr-only">Close menu</span>
                <HiOutlineXMark aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-neutral-500/10">
                <div className="space-y-2 py-6">
                {navigation.map((item) =>
              item.name === "Servicios" ? (
                <Servicios key={item.name} />
              ) : (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-black hover:bg-neutral-50"
                    >
                      {item.name}
                    </a>
                    )
                  )}
                </div>
                <div className="py-6">
                  <a
                    href="/contacto"
                    className="rounded-md bg-orange-500 p-3 text-sm font-semibold text-white shadow-sm hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a482fb]"
                  >
                    Contactanos
                  </a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
    </div>
  );
}

export default Navbar;
