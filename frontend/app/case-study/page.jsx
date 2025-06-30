"use client";
import React from "react";
import Hero from "../components/Hero";


const clients = [
  {
    name: 'Career Guidance Service',
    traffic: '14582%',
    trafficRange: '241 → 36k',
    links: 551,
    timeSpan: '8 months',
    icon: 'https://optimise2.assets-servd.host/obedient-zorilla/production/images/Logos/link-building.jpeg?w=80&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1734702848&s=2f61570755d9e9ae3971408e0c4c33a1',
  },
  {
    name: 'Employee Relocation Service',
    traffic: '6098%',
    trafficRange: '357 → 22.1k',
    links: 262,
    timeSpan: '1 year 2 months',
    icon: 'https://optimise2.assets-servd.host/obedient-zorilla/production/images/Logos/link-building.jpeg?w=80&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1734702848&s=2f61570755d9e9ae3971408e0c4c33a1',
  },
  {
    name: 'Online Courses Service',
    traffic: '84%',
    trafficRange: '5m → 9.3m',
    links: 682,
    timeSpan: '6 months',
    icon: 'https://optimise2.assets-servd.host/obedient-zorilla/production/images/Logos/link-building.jpeg?w=80&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1734702848&s=2f61570755d9e9ae3971408e0c4c33a1',
  },
  {
    name: 'Snack Delivery Service',
    traffic: '132%',
    trafficRange: '428k → 995k',
    links: 603,
    timeSpan: '10 months',
    icon: 'https://optimise2.assets-servd.host/obedient-zorilla/production/images/Logos/link-building.jpeg?w=80&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1734702848&s=2f61570755d9e9ae3971408e0c4c33a1',
  },
];

const CaseStudy = () => {
  return (
    <>
    <div className="bg-white py-12 px-6 mt-32">
      <h1 className="text-3xl font-bold text-center">
        Link Building{" "}
        <span
          className="text-white px-5 py-2 rounded-md"
          style={{ backgroundColor: "#1e40af" }} // Tailwind's blue-800
        >
          Case Studies
        </span>
      </h1>

      <p className="text-center text-gray-600 text-lg  mx-auto mt-6">
      Our detailed case studies show exactly how we generated increased rankings and traffic to<br/> websites through link building.
      </p>
    </div>



       {/* <case stydy priceing      */}


    <div className="max-w-6xl mx-auto mt-24  rounded-3xl overflow-hidden bg-gray-100 shadow-md">
    <div className="grid grid-cols-4 md:grid-cols-5 gap-4 bg-gray-50 px-6 py-4 text-lg font-semibold text-gray-800 text-center">
  <div className="text-left md:text-center">Client</div>
  <div className="text-right">Traffic Increase</div>
  <div className="text-center">Links Built</div>
  <div className="hidden md:block text-right">Time Span</div>
</div>

      {clients.map((client, idx) => (
        <div
          key={client.name}
          className={`grid grid-cols-4 md:grid-cols-5 items-center px-6 py-5 border-b ${
            idx % 2 !== 0 ? 'bg-gray-450' : ''
          }`}
        >
          {/* Client Name */}
          <div className="flex items-center space-x-4">
            <img src={client.icon} alt="link" className="w-10 h-10 rounded-lg" />
            <span className="text-lg font-medium">{client.name}</span>
          </div>

          {/* Traffic */}
          <div className="text-right">
            <div className="flex items-center justify-end text-green-500 font-semibold text-xl">
              <span className="mr-1">⬆</span> {client.traffic}
            </div>
            <div className="text-sm text-gray-500 text-right">{client.trafficRange}</div>
          </div>

          {/* Links Built */}
          <div className="text-center">
            <div className="bg-black text-white px-4 py-2 rounded-lg font-bold text-lg inline-block">
              {client.links}
            </div>
          </div>

          {/* Time Span */}
          <div className="hidden md:block text-right text-gray-600 font-medium">{client.timeSpan}</div>
        </div>
      ))}
    </div>
    <Hero />
    </>
    
  );
};

export default CaseStudy;
