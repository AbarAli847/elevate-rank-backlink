import Link from "next/link";
import React from "react";

const testimonials = [
  {
    text: (
      <>
        Honestly, <span className="bg-yellow-300 px-1">the most professional</span>, best all around link building
        service I’ve used out of dozens. I’ve recommended several of my friends and they’ve just
        <span className="bg-yellow-300 px-1"> crushed results with them too</span>.
      </>
    ),
    name: "Bryce Welker",
    title: "Founder - Crush Empire",
    image: "/profile1.png",
  },
  {
    text: (
      <>
        LinkBuilder took blogs with <span className="bg-yellow-300 px-1">zero inbound links</span>, gathered high-quality backlinks,
        and vaulted them to the top of Google search results. We’ve seen
        <span className="bg-yellow-300 px-1"> impressive growth in consumer-intent keywords</span> and organic growth.
      </>
    ),
    name: "Brandon Monroe",
    title: "SEO Manager - Cellucor.com",
    image: "/profile2.png",
  },
  {
    text: (
      <>
        We have been working with them <span className="bg-yellow-300 px-1">for 2 years now, link building for over 25 different</span> clients.
        The quality of links is always amazing, communication is great and we’ve seen amazing results across every client.
      </>
    ),
    name: "Benji Hyam",
    title: "Co-Founder - Grow & Convert",
    image: "/profile3.png",
  },
];

const TestimonialSection = () => {
  return (
    <section className="bg-black text-white py-20 px-4">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold">
          Hear it from those that{" "}
          <span className="bg-blue-800 text-white px-3 py-1 rounded-md">know</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {testimonials.map((testimonial, i) => (
          <div key={i} className="bg-white text-black p-6 rounded-2xl shadow-md flex flex-col justify-between">
            <div>
              <div className="flex mb-4 text-yellow-500">
                {"★★★★★".split("").map((s, idx) => (
                  <span key={idx}>{s}</span>
                ))}
              </div>
              <p className="text-lg mb-6">{testimonial.text}</p>
            </div>
            <div className="flex items-center mt-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-8 h-8 rounded-full mr-3"
              />
              <div>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-gray-500 text-sm">{testimonial.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center mt-20 max-w-6xl mx-auto px-2 flex-wrap gap-4">
        <div className="flex items-center gap-4">
          <img src="/clutch-logo.svg" alt="Clutch" className="w-24" />
          <div className="text-white text-xl font-medium ">
            <div className="flex items-center text-red-500 text-xl mt-10">
              {"★★★★★"} <span className="ml-2 text-white">10 REVIEWS</span>
            </div>
            <div className="text-white font-bold text-3xl mt-[-30] ml-[8rem]">5.0</div>
            <div className="text-white ml-[18rem] mt-[-30] text-sm">Verified Rating</div>
          </div>
        </div>
         
        <Link href={'/contact'} className="bg-blue-800 hover:bg-blue-800 text-white font-semibold px-6 py-3 rounded-full transition">
          Get in touch
        </Link>
         
      </div>
    </section>
  );
};

export default TestimonialSection;
