"use client";

import Image from "next/image";

const logos = [
  { src: "/a1.jpeg", alt: "GiveWell" },
  { src: "/a2.jpeg", alt: "Unicef" },
  { src: "/a3.jpeg", alt: "WaterAid" },
  { src: "/a4.jpeg", alt: "Compassion" },
  { src: "/a5.jpeg", alt: "Effective Altruism" },
];

const SupportingChange = () => {
  return (
    <section className="bg-[#f9f9f7] py-24 px-4 text-center">
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-bold mb-6">
        Supporting{" "}
        <span className="bg-blue-800 text-white px-4 py-1 rounded-2xl inline-block">
          real
        </span>{" "}
        change
      </h2>

      {/* Subtitle */}
      <p className="text-gray-500 max-w-2xl mx-auto text-lg mb-12">
        Each month, we donate a percentage of revenue to organizations which aim to provide the 
        highest impact possible for people in less fortunate
        parts of the World.
      </p>

      {/* Logos */}
      <div className="flex flex-nowrap justify-center items-center gap-8 overflow-x-auto max-w-7xl mx-auto px-2">
        {logos.map((logo, index) => (
          <div key={index} className="relative h-30 w-54 flex-shrink-0">
            <Image
              src={logo.src}
              alt={logo.alt}
              layout="fill"
              objectFit="contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default SupportingChange;
