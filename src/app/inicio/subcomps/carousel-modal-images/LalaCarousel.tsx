import React, { useState, useEffect } from "react";
import Image from "next/image";
import Lala1 from "@/images/Lala/Lala1.png";
import Lala2 from "@/images/Lala/Lala2.png";
import Lala3 from "@/images/Lala/Lala3.png";
import Lala4 from "@/images/Lala/Lala4.png";
import Lala5 from "@/images/Lala/Lala5.png";
import Lala6 from "@/images/Lala/Lala6.png";

const images = [Lala1, Lala2, Lala3, Lala4, Lala5, Lala6];

function LalaCarousel() {
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

export default LalaCarousel;
