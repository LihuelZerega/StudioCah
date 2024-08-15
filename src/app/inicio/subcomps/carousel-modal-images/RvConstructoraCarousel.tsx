import React, { useState, useEffect } from "react";
import Image from "next/image";
import RvConstructora1 from "@/images/RvConstructora/RvConstructora1.png";
import RvConstructora2 from "@/images/RvConstructora/RvConstructora2.png";
import RvConstructora3 from "@/images/RvConstructora/RvConstructora3.png";
import RvConstructora5 from "@/images/RvConstructora/RvConstructora5.png";
import RvConstructora7 from "@/images/RvConstructora/RvConstructora7.png";
import RvConstructora8 from "@/images/RvConstructora/RvConstructora8.png";
import RvConstructora9 from "@/images/RvConstructora/RvConstructora9.png";
import RvConstructora10 from "@/images/RvConstructora/RvConstructora10.png";

const images = [RvConstructora1, RvConstructora2, RvConstructora3, RvConstructora5, RvConstructora7, RvConstructora8, RvConstructora9, RvConstructora10];

function RvConstructoraCarousel() {
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

export default RvConstructoraCarousel;
