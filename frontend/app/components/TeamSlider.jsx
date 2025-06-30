"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowLeft, ArrowRight, Linkedin } from "lucide-react";

const teamMembers = [
  {
    name: "Bryan",
    role: "Chief Link Building Strategist",
    image: "/abdullah.PNG",
    linkedin: "#",
  },
  {
    name: "Jose",
    role: "Head of SEO",
    image: "/profileimage.png",
    linkedin: "#",
  },
  {
    name: "Erika",
    role: "Head of Link Operations",
    image: "/profile_image.png",
    linkedin: "#",
  },
  {
    name: "Stewart",
    role: "Co-Founder",
    image: "/abdullah.PNG",
    linkedin: "#",
  },
  {
    name: "Michael",
    role: "Co-Founder",
    image: "/profileimage.png",
    linkedin: "#",
  },
  {
    name: "Stewart",
    role: "Co-Founder",
    image: "/profile_image.png",
    linkedin: "#",
  },
];

const CARDS_PER_SLIDE = 3;

const TeamSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const maxSlide = Math.ceil(teamMembers.length / CARDS_PER_SLIDE) - 1;

  const nextSlide = () => {
    setCurrentSlide((prev) => Math.min(prev + 1, maxSlide));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  };

  const visibleMembers = teamMembers.slice(
    currentSlide * CARDS_PER_SLIDE,
    currentSlide * CARDS_PER_SLIDE + CARDS_PER_SLIDE
  );

  return (
    <section className="py-20 px-4">
      <h2 className="text-3xl font-bold text-center mb-12">Meet the team</h2>

      <div className="flex justify-center gap-8 mb-12 flex-wrap">
        {visibleMembers.map((member, i) => (
          <div key={i} className="w-72 text-center">
            <div className="w-44 h-44 mx-auto mb-4 relative">
              <div className="bg-blue-800 w-full h-full rounded-full overflow-hidden flex items-center justify-center">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={180}
                  height={180}
                  className="object-cover"
                />
              </div>
            </div>
            <h3 className="text-xl font-semibold">{member.name}</h3>
            <p className="text-gray-600 text-sm">{member.role}</p>
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-3 border border-black rounded-lg p-1"
            >
              <Linkedin size={20} />
            </a>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center gap-4">
        <button className="bg-blue-800 text-white font-semibold px-6 py-3 rounded-full text-lg">
          Meet the team
        </button>

        <div className="flex space-x-3">
          <button
            onClick={prevSlide}
            className="bg-black text-white p-2 rounded-full disabled:opacity-30"
            disabled={currentSlide === 0}
          >
            <ArrowLeft size={20} />
          </button>
          <button
            onClick={nextSlide}
            className="bg-black text-white p-2 rounded-full disabled:opacity-30"
            disabled={currentSlide === maxSlide}
          >
            <ArrowRight size={20} />
          </button>
        </div>
      </div>

    </section>


  );
};

export default TeamSlider;
