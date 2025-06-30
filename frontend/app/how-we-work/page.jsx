import React from "react";
import Hero from "../components/Hero";

const steps = [
  {
    title: "Analysis & Planning",
    description: ["Full link and content audit", "Competitor analysis", "Target page and anchor text analysis"],
    image: "broker.jpg",
  },
  {
    title: "Prospecting",
    description: ["Identify relevant websites", "Qualify based on authority", "Build outreach lists"],
    image: "https://via.placeholder.com/300x200",
  },
  {
    title: "Outreach",
    description: ["Craft personalized emails", "A/B testing subject lines", "Follow-up sequences"],
    image: "https://via.placeholder.com/300x200",
  },
  {
    title: "Content Creation",
    description: ["Create high-quality content", "Focus on value & relevance", "SEO optimization"],
    image: "https://via.placeholder.com/300x200",
  },
  {
    title: "Link Placement",
    description: ["Manual placement of links", "Ensure natural integration", "Track status"],
    image: "https://via.placeholder.com/300x200",
  },
  {
    title: "Reporting",
    description: ["Monthly performance report", "Backlink index tracking", "Improvements & recommendations"],
    image: "https://via.placeholder.com/300x200",
  },
  {
    title: "Optimization",
    description: ["Ongoing strategy adjustment", "Replace lost links", "Continue link growth"],
    image: "https://via.placeholder.com/300x200",
  },
];

const Home = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        {/* Header Section */}
        <div className="h-[75vh] flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl font-bold mb-6">
            How our <span className="bg-blue-800 text-white px-2 rounded-full">process</span> works
          </h1>
          <p className="max-w-2xl text-lg text-gray-700 mb-6">
            We pride ourselves in taking a completely bespoke approach for every one of our link building clients.
            Our SEO analysts methodically plan our strategy to ensure the right links are built for your business.
          </p>
          <h2 className="text-xl font-semibold">Here's how it works...</h2>
        </div>

        {/* Timeline */}
<div className="relative px-4 py-16">
  {/* Vertical Line */}
  <div className="absolute left-1/2 transform -translate-x-1/2 top-0 h-full w-1 bg-green-500 z-0" />

  {steps.map((step, index) => (
    <div
      key={index}
      className={`relative grid md:grid-cols-2 items-center py-10`}
    >
      {/* Dot */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-green-500 rounded-full z-10" />

      {/* Left Title */}
      <div className="flex justify-center items-center px-6 text-center">
        <h2 className="text-2xl font-bold bg-green-400 px-4 py-2 rounded-full">
          {step.title}
        </h2>
      </div>

      {/* Right Description + Image */}
      <div className="px-6 mt-6 md:mt-0">
        <ul className="list-disc marker:text-green-500 ml-6 space-y-2 text-gray-800 text-left">
          {step.description.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
        <img
          src={step.image}
          alt={step.title}
          className="mt-4 rounded-lg shadow-md w-full max-w-md"
        />
      </div>
    </div>
  ))}
</div>

      </div>

      <Hero />
    </>
  );
};

export default Home;
