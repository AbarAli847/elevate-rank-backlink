import Link from "next/link";
import React from "react";

const caseStudies = [
  {
    title: "Career Guidance",
    growth: "↑ 14582%",
    traffic: "241 → 36k",
    links: "551",
    time: "12 months",
  },
  {
    title: "Employee Retention",
    growth: "↑ 6098%",
    traffic: "357 → 22.1k",
    links: "262",
    time: "24 months +",
  },
  {
    title: "Online Courses",
    growth: "↑ 84%",
    traffic: "5m → 9.3m",
    links: "682",
    time: "24 months",
  },
];

const CaseStudies = () => {
  return (
    <div className="bg-gray-100 py-12 px-6 mt-[15rem]">
      {/* Heading */}
      <h2 className="text-center text-4xl font-bold">
        We get <span className="bg-blue-800 px-2 text-white rounded-md">results</span>
      </h2>

      {/* Case Study Cards */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {caseStudies.map((study, index) => (
          <div key={index} className="bg-white shadow-lg rounded-xl p-6">
            {/* Title & Growth */}
            <div className="flex items-center justify-between  mb-4">
              <span className="text-lg font-semibold">{study.title}</span>
              <span className="bg-blue-400 px-3 py-1 rounded-full text-sm">
                {study.growth}
              </span>
            </div>

            {/* Stats */}
            <div className="text-sm space-y-8 flex-grow my-6 border-t ">
              <p className="tracking-widest">🚀 <strong >Traffic Increase :</strong> {study.traffic}</p>
              <p>🌱 <strong>Links Built:</strong> {study.links}</p>
              <p>⏳ <strong>Time Span:</strong> {study.time}</p>
            </div>
          </div>
        ))}
      </div>
      <Link href={'/case-study'}>
      <button  className="bg-black  text-white font-bold mt-16 px-8 ml-[35rem] py-4 rounded-2xl">
        view all case studies
      </button>
      </Link>
    </div>
  );
};

export default CaseStudies;
