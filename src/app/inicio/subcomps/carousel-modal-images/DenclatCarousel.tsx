import React, { useState, useEffect } from "react";
import Image from "next/image";
import Denclat1 from "@/images/Denclat/Denclat1.png";
import Denclat2 from "@/images/Denclat/Denclat2.png";
import Denclat3 from "@/images/Denclat/Denclat3.png";
import Denclat4 from "@/images/Denclat/Denclat4.png";
import Denclat5 from "@/images/Denclat/Denclat5.png";
import Denclat6 from "@/images/Denclat/Denclat6.png";
import Denclat7 from "@/images/Denclat/Denclat7.png";
import Denclat8 from "@/images/Denclat/Denclat8.png";

const images = [Denclat1, Denclat2, Denclat3, Denclat4, Denclat5, Denclat6, Denclat7, Denclat8];

function DenclatCarousel() {
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

export default DenclatCarousel;
