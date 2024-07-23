"use client";
import React from "react";
import { motion } from "framer-motion";

const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

function Faq() {
  return (
    <div className="container max-w-4xl px-6 py-16 mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          variants={variants}
          className="w-full"
        >
          <p className="text-center text-base font-bold text-orange-500 uppercase tracking-wider mb-2">
            PREGUNTAS FRECUENTES
          </p>
          <h2 className="text-3xl text-black font-bold tracking-tight lg:text-4xl text-center">
            Todo lo que necesitas saber <br /> sobre Studio Cah.
          </h2>
        </motion.div>

      <div className="mt-12 space-y-8">
        <div className="border-2 border-neutral-100 rounded-lg">
          <button className="flex items-center justify-between w-full p-8">
            <h1 className="font-semibold text-neutral-700">
              How i can play for my appoinment ?
            </h1>

            <span className="text-neutral-400 bg-neutral-200 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M18 12H6"
                />
              </svg>
            </span>
          </button>

          <hr className="border-neutral-200" />

          <p className="p-8 text-sm text-neutral-500">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas
            eaque nobis, fugit odit omnis fugiat deleniti animi ab maxime cum
            laboriosam recusandae facere dolorum veniam quia pariatur obcaecati
            illo ducimus?
          </p>
        </div>

        <div className="border-2 border-neutral-100 rounded-lg">
          <button className="flex items-center justify-between w-full p-8">
            <h1 className="font-semibold text-neutral-700">
              Is the cost of the appoinment covered by private health insurance?
            </h1>

            <span className="text-white bg-[#2D29C2] rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
            </span>
          </button>
        </div>

        <div className="border-2 border-neutral-100 rounded-lg">
          <button className="flex items-center justify-between w-full p-8">
            <h1 className="font-semibold text-neutral-700">
              Do i need a referral?
            </h1>

            <span className="text-white bg-[#2D29C2] rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
            </span>
          </button>
        </div>

        <div className="border-2 border-neutral-100 rounded-lg">
          <button className="flex items-center justify-between w-full p-8">
            <h1 className="font-semibold text-neutral-700">
              What are your opening house?
            </h1>

            <span className="text-white bg-[#2D29C2] rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
            </span>
          </button>
        </div>

        <div className="border-2 border-neutral-100 rounded-lg">
          <button className="flex items-center justify-between w-full p-8">
            <h1 className="font-semibold text-neutral-700">
              What can i expect at my first consultation?
            </h1>

            <span className="text-white bg-[#2D29C2] rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Faq;
