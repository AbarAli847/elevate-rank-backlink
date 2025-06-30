import { CheckCircle2, PhoneCall } from "lucide-react";
import SEOCTA from "./Seocta";
import Fair_Price from "./Fair_Price";
import PerfectFit from "./PerfectFit";
import ComparisonTable from "./Comparisontable";
import TestimonialSection from "./TestimonialSection";
// import CaseStudy from "../case-study/page";
import Hero from "../components/Hero";
 

const PricingCards = () => {
  const commonFeatures = [
    "Average DR 50-90 Links",
    "Competitor Backlink Gap Analysis",
    "Custom Reporting Dashboard",
    "Keyword Analysis",
  ];

  const startupFeatures = [
    "Detailed Link Planning",
    ...commonFeatures,
  ];

  const proFeatures = [
    "Target Page Planning",
    "Authority Links Included",
    "Anchor Text Optimization",
    ...commonFeatures,
  ];

  const FeatureItem = ({ text }) => (
    <li className="flex items-start gap-2 text-left">
      <CheckCircle2 className="text-blue-800" size={20} />
      <span>{text}</span>
    </li>
  );


  const features = [
    "Average DR 50-90 Links",
    "Authority Links Included",
    "Anchor Text Optimization",
    "Keyword Analysis",
    "Internal Linking Optimization",
    "Can spread across multiple domains",
    "Target Page Planning",
    "Competitor Backlink Gap Analysis",
    "Custom Reporting Dashboard",
    "Toxic Backlink Audit",
  ];
  
  const enterpriseExtras = ["Anytime Call Scheduling with Our Founder"];
  
  const FeatureList = ({ items }) => (
    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-base font-medium text-black/90 mb-8">
      {items.map((text, idx) => (
        <li key={idx} className="flex items-start gap-2">
          <CheckCircle2 className="text-blue-800" size={20} />
          <span>{text}</span>
        </li>
      ))}
    </ul>
  );

  return (
    <>
    <section className="bg-[#f8f9f7] py-20 px-4 mt-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* STARTUP CARD */}
        <div className="bg-white rounded-xl p-6 shadow-sm border">
          <div className="flex items-center gap-2 mb-2">
            <span>🚀</span>
            <h2 className="text-xl font-semibold">Startup</h2>
          </div>
          <div className="flex items-end gap-2 mb-2">
            <span className="text-4xl font-bold">$2999</span>
            <span className="text-gray-500 text-xl">/ mo</span>
          </div>
          <p className="mb-6">✨ 8 Links Per Month</p>
          <hr className="mb-6" />
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-base font-medium text-black/90">
            {startupFeatures.map((item, i) => (
              <FeatureItem key={i} text={item} />
            ))}
          </ul>

          <div className="mt-8 flex items-center gap-4 justify-between flex-wrap">
            <button className="bg-black text-white px-6 py-3 mt-14 rounded-xl flex items-center 
            gap-2 shadow-inner hover:bg-black/90">
              <PhoneCall className="text-red-500" size={20} />
              Book a call
            </button>
            <div className="border px-4 py-3 rounded-xl text-left mt-16 text-sm">
              <p className="font-semibold">Let's talk links!</p>
              <p className="text-gray-500">
                <img
                  src="/profile_image.png"
                  alt="Bryan"
                  className="inline-block w-5 h-5 rounded-full mr-2"
                />
                Bryan - Head of Strategy
              </p>
            </div>
          </div>
        </div>

        {/* PRO CARD */}
        <div className="bg-white rounded-xl p-6 shadow-sm border">
          <h2 className="text-xl font-semibold mb-2">Pro</h2>
          <div className="flex items-end gap-2 mb-2">
            <span className="text-4xl font-bold">$5999</span>
            <span className="text-gray-500 text-xl">/ mo</span>
          </div>
          <p className="mb-6">✨ 16+ Links Per Month</p>
          <hr className="mb-6" />
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-base font-medium text-black/90">
            {proFeatures.map((item, i) => (
              <FeatureItem key={i} text={item} />
            ))}
          </ul>
          <p className="text-red-500 text-sm mt-4 ml-0">🔴 Limited availability</p>

          <div className="mt-6 flex items-center gap-4 justify-between flex-wrap">
            <button className="bg-black text-white px-6 py-3 rounded-xl flex items-center gap-2 shadow-inner hover:bg-black/90">
              <PhoneCall className="text-red-500" size={20} />
              Book a call
            </button>
            <div className="border px-4 py-3 rounded-xl text-left text-sm">
              <p className="font-semibold">👉 We don't bite</p>
              <p className="text-gray-500">
                <img
                  src="/profile_image.png"
                  alt="Bryan"
                  className="inline-block w-5 h-5 rounded-full mr-2"
                />
                Bryan - Lord of links
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>


    <section className="bg-[#f8f9f7] py-20 px-4 mt-[-20]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Growth Plan */}
        <div className="bg-white border border-pink-200 rounded-xl p-6 relative shadow-sm">
          <span className="absolute top-4 right-4 bg-red-100 text-red-500 text-xs font-semibold px-3 py-1 rounded-full">
            POPULAR
          </span>
          <h2 className="text-xl font-semibold mb-1">Growth</h2>
          <div className="flex items-end gap-2 mb-2">
            <span className="text-4xl font-bold">$9999</span>
            <span className="text-gray-500 text-xl">/ mo</span>
          </div>
          <p className="mb-4">✨ 27+ Links Per Month</p>
          <hr className="mb-6" />
          <FeatureList items={features} />
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button className="bg-black text-white px-6 py-3 mt-16 rounded-xl font-bold
             shadow-md hover:bg-black/90">
              C'mon, please<br />book a call.
            </button>
            <div className="border mt-16 px-4 py-3 rounded-xl text-left text-sm">
              <p className="font-semibold">We really are great at links.</p>
              <p className="text-gray-500">
                <img
                  src="/profile_image.png"
                  alt="Bryan"
                  className="inline-block w-5 h-5 rounded-full mr-2"
                />
                Bryan - Head of Strategy
              </p>
            </div>
          </div>
        </div>

        {/* Enterprise Plan */}
        <div className="bg-white rounded-xl p-6 shadow-sm border">
          <div className="flex items-center gap-2 mb-2">
            <span>🌍</span>
            <h2 className="text-xl font-semibold">Enterprise</h2>
          </div>
          <div className="flex items-end gap-2 mb-2">
            <span className="text-4xl font-bold">$19,999</span>
            <span className="text-gray-500 text-xl">/ mo</span>
          </div>
          <p className="mb-4">✨ 58+ Links Per Month</p>
          <hr className="mb-6" />
          <FeatureList items={[...features, ...enterpriseExtras]} />
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button className="bg-black text-white px-6 py-3 rounded-xl flex items-center gap-2 shadow-md hover:bg-black/90">
              <PhoneCall className="text-red-500" size={20} />
              Book a call
            </button>
            <div className="border px-4 py-3 rounded-xl text-left text-sm">
              <p className="font-semibold">I'll tell you my secrets</p>
              <p className="text-gray-500">
                <img
                  src="/profile_image.png"
                  alt="Bryan"
                  className="inline-block w-5 h-5 rounded-full mr-2"
                />
                Bryan - Head of Something
              </p>
            </div>
          </div>
        </div>
      </div>

    </section>
    <SEOCTA/>
    <Fair_Price/>
    <PerfectFit/>
    <ComparisonTable/>
    <TestimonialSection/>
   <Hero/>
</>
  );
};

export default PricingCards;
