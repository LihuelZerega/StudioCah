import React, { useState, useEffect } from "react";
import Image from "next/image";
import PlumaBlanca1 from "@/images/PlumaBlanca/PlumaBlanca1.png";
import PlumaBlanca2 from "@/images/PlumaBlanca/PlumaBlanca2.png";
import PlumaBlanca3 from "@/images/PlumaBlanca/PlumaBlanca3.png";
import PlumaBlanca4 from "@/images/PlumaBlanca/PlumaBlanca4.png";
import PlumaBlanca5 from "@/images/PlumaBlanca/PlumaBlanca5.png";
import PlumaBlanca6 from "@/images/PlumaBlanca/PlumaBlanca6.png";
import PlumaBlanca7 from "@/images/PlumaBlanca/PlumaBlanca7.png";

const images = [PlumaBlanca1, PlumaBlanca2, PlumaBlanca3, PlumaBlanca4, PlumaBlanca5, PlumaBlanca6, PlumaBlanca7];

function PlumaBlancaCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative max-w-2xl mx-auto lg:w-2/3 lg:h-2/3">
      <div className="overflow-hidden rounded-lg shadow-lg">
        <Image
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full h-full object-cover"
        />
      </div>

      <button
        onClick={handlePrevious}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-neutral-800 text-white p-2 rounded-full"
      >
        &lt;
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-neutral-800 text-white p-2 rounded-full"
      >
        &gt;
      </button>

      <div className="flex justify-center mt-4">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 mx-1 rounded-full ${
              currentIndex === index ? "bg-neutral-800" : "bg-neutral-400"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default PlumaBlancaCarousel;
