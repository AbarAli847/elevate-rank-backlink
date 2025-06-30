import React from 'react';
import PricingCards from './Pricing_Card';

const page = () => {
  return (
    <>
    <section className="bg-[#f8f9f7] min-h-screen px-4 pt-24  text-center">
      <div>
        <p className="text-lg text-black/70 mb-2">Monthly Packages</p>
        <h1 className="text-4xl sm:text-5xl font-semibold text-black">
          Simple,{" "}
          <span className="bg-blue-900 text-white px-2 rounded-xl font-bold">
            transparent
          </span>{" "}
          pricing
        </h1>
        <p className="mt-4 text-lg text-black/60">
          Our fully managed monthly link building solution.
        </p>
      </div>
      <PricingCards/>
    </section>
    
    </>
  );
};

export default page;
