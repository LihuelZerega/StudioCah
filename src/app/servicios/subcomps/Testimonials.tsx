"use client";
import React from "react";
import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

function Testimonials() {
  return (
    <div className="py-10 bg-white sm:py-16 lg:py-24">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        variants={variants}
        className="w-full"
      >
        <p className="text-center text-base font-bold text-orange-500 uppercase tracking-wider mb-2">
          TESTIMONIOS
        </p>
        <h2 className="text-3xl text-black font-bold tracking-tight lg:text-4xl text-center">
          ¿Que dicen nuestros clientes <br className="hidden lg:block"/> sobre nuestros servicios?
        </h2>
      </motion.div>
      <section className="py-16">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 lg:gap-10 sm:grid-cols-2 md:grid-cols-3">
            <div className="flex flex-col bg-white border border-gray-200 rounded-md">
              <div className="flex flex-col justify-between flex-1 p-8">
                <div className="flex-1">
                  <blockquote>
                    <p className="text-lg text-gray-800">
                      “You made it so simple. My new site is so much faster and
                      easier to work with than my old site. I just choose the
                      page, make the change and click save.”
                    </p>
                  </blockquote>
                </div>

                <div className="mt-8">
                  <div className="w-full h-0 mb-8 border-t-2 border-gray-200 border-dotted"></div>
                  <div className="flex items-center">
                    <img
                      className="flex-shrink-0 object-cover w-10 h-10 rounded-full"
                      src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/8/avatar-1.jpg"
                      alt=""
                    />
                    <div className="ml-3">
                      <p className="text-base font-semibold text-gray-800 truncate">
                        Devon Lane
                      </p>
                      <p className="text-base text-gray-500 truncate">
                        President of Sales
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col bg-white border border-gray-200 rounded-md">
              <div className="flex flex-col justify-between flex-1 p-8">
                <div className="flex-1">
                  <blockquote>
                    <p className="text-lg text-gray-800">
                      “Simply the best. Better than all the rest. I’d recommend
                      this product to beginners and advanced users.”
                    </p>
                  </blockquote>
                </div>

                <div className="mt-8">
                  <div className="w-full h-0 mb-8 border-t-2 border-gray-200 border-dotted"></div>
                  <div className="flex items-center">
                    <img
                      className="flex-shrink-0 object-cover w-10 h-10 rounded-full"
                      src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/8/avatar-2.jpg"
                      alt=""
                    />
                    <div className="min-w-0 ml-3">
                      <p className="text-base font-semibold text-gray-800 truncate">
                        Ronald Richards
                      </p>
                      <p className="text-base text-gray-500 truncate">
                        Marketing Coordinator
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col bg-white border border-gray-200 rounded-md">
              <div className="flex flex-col justify-between flex-1 p-8">
                <div className="flex-1">
                  <blockquote>
                    <p className="text-lg text-gray-800">
                      “This is a top quality product. No need to think twice
                      before making it live on web.”
                    </p>
                  </blockquote>
                </div>

                <div className="mt-8">
                  <div className="w-full h-0 mb-8 border-t-2 border-gray-200 border-dotted"></div>
                  <div className="flex items-center">
                    <img
                      className="flex-shrink-0 object-cover w-10 h-10 rounded-full"
                      src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/8/avatar-3.jpg"
                      alt=""
                    />
                    <div className="min-w-0 ml-3">
                      <p className="text-base font-semibold text-gray-800 truncate">
                        Jane Cooper
                      </p>
                      <p className="text-base text-gray-500 truncate">
                        Dog Trainer
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col bg-white border border-gray-200 rounded-md">
              <div className="flex flex-col justify-between flex-1 p-8">
                <div className="flex-1">
                  <blockquote>
                    <p className="text-lg text-gray-800">
                      “Finally, I’ve found a template that covers all bases for
                      a bootstrapped startup. We were able to launch in days,
                      not months.”
                    </p>
                  </blockquote>
                </div>

                <div className="mt-8">
                  <div className="w-full h-0 mb-8 border-t-2 border-gray-200 border-dotted"></div>
                  <div className="flex items-center">
                    <img
                      className="flex-shrink-0 object-cover w-10 h-10 rounded-full"
                      src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/8/avatar-4.jpg"
                      alt=""
                    />
                    <div className="min-w-0 ml-3">
                      <p className="text-base font-semibold text-gray-800 truncate">
                        Theresa Webb
                      </p>
                      <p className="text-base text-gray-500 truncate">
                        Web Designer
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col bg-white border border-gray-200 rounded-md">
              <div className="flex flex-col justify-between flex-1 p-8">
                <div className="flex-1">
                  <blockquote>
                    <p className="text-lg text-gray-800">
                      “My new site is so much faster and easier to work with
                      than my old site. I just choose the page, make the change
                      and click save.”
                    </p>
                  </blockquote>
                </div>

                <div className="mt-8">
                  <div className="w-full h-0 mb-8 border-t-2 border-gray-200 border-dotted"></div>
                  <div className="flex items-center">
                    <img
                      className="flex-shrink-0 object-cover w-10 h-10 rounded-full"
                      src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/8/avatar-5.jpg"
                      alt=""
                    />
                    <div className="min-w-0 ml-3">
                      <p className="text-base font-semibold text-gray-800 truncate">
                        Darlene Robertson
                      </p>
                      <p className="text-base text-gray-500 truncate">
                        Medical Assistant
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col bg-white border border-gray-200 rounded-md">
              <div className="flex flex-col justify-between flex-1 p-8">
                <div className="flex-1">
                  <blockquote>
                    <p className="text-lg text-gray-800">
                      “You made it so simple. My new site is so much faster and
                      easier to work with than my old site. I just choose the
                      page, make the change and click save.”
                    </p>
                  </blockquote>
                </div>

                <div className="mt-8">
                  <div className="w-full h-0 mb-8 border-t-2 border-gray-200 border-dotted"></div>
                  <div className="flex items-center">
                    <img
                      className="flex-shrink-0 object-cover w-10 h-10 rounded-full"
                      src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/8/avatar-6.jpg"
                      alt=""
                    />
                    <div className="min-w-0 ml-3">
                      <p className="text-base font-semibold text-gray-800 truncate">
                        Floyd Miles
                      </p>
                      <p className="text-base text-gray-500 truncate">
                        Nursing Assistant
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Testimonials;
