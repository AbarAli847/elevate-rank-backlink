"use client";
import React from "react";

const Slider = () => {
  const logos = ["s1.jpeg", "s2.jpeg", "s3.jpeg", "s4.jpeg"];

  // Duplicate array for seamless infinite scroll
  const allLogos = [...logos, ...logos];

  return (
    <div className="overflow-hidden mt-11 w-full">
      <div className="flex items-center justify-center mb-8">
        <p className="text-black text-2xl font-bold text-center">
          The Link Building Company Trusted By Global Brands
        </p>
      </div>

      <div className="relative w-full overflow-hidden">
        <div className="flex animate-slide gap-8 w-[1600px]">
          {allLogos.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Logo ${index + 1}`}
              className="w-[200px] h-auto object-contain flex-shrink-0"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
