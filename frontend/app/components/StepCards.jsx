import React from 'react';

const StepCards = () => {
  const steps = [
    { id: 1, title: "Strategy", text: "Our custom link building process includes over 20 different link building strategies that work for any website." },
    { id: 2, title: "Outreach", text: "We target top quality websites and influencers relevant to our client’s niche & content, and launch tried & tested outreach campaigns." },
    { id: 3, title: "Backlinks", text: "We consistently earn high authority links for our clients using a diverse range of white hat link building methods." },
    { id: 4, title: "Results", text: "Search engines love the links we build, and our clients trust us to build links which move the needle for their SEO rankings." }
  ];

  return (
    <div className="flex justify-center items-center px-8 py-12 mt-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl w-full">
        {steps.map((step, index) => (
          <div
            key={step.id}
            className={`flex flex-col items-center text-center px-4 md:border-r md:border-gray-300 ${
              index === steps.length - 1 ? 'md:border-r-0' : ''
            }`}
          >
            {/* Step Number */}
            <div className="bg-blue-800 text-white text-lg font-bold w-10 h-10 rounded-full flex items-center justify-center z-10">
              {step.id}.
            </div>

            {/* Step Content */}
            <h3 className="text-xl font-bold mt-4">{step.title}</h3>
            <p className="text-gray-600 mt-2">{step.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StepCards;
