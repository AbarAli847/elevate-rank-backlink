// components/FromTheFounder.jsx

import Image from 'next/image';

const Founder = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Column */}
        <div>
          <h2 className="text-4xl md:text-5xl font-semibold mb-6">
            From the{' '}
            <span className="bg-blue-800 text-white px-4 py-1 rounded-full inline-block">
              founder
            </span>
          </h2>

          <p className="text-lg text-gray-800 mb-8">
            “I founded ElevateRank because I saw a serious gap in the market for white hat link-building services. Despite all the warnings from Google and the horror stories from buying backlinks, companies have been buying junk for years. SEO on its own is an all-encompassing term, but we focus on link building because time and time again it’s proven to be the number 1 most important factor when it comes to gaining more traffic from Google.”
          </p>

          <h3 className="text-xl font-bold mb-4 text-black">
            We do things differently from other agencies
          </h3>
          <ul className="space-y-3 text-blue-800 text-base pl-5 list-disc marker:text-blue-800">
            <li>Painstaking focus on strategy to guarantee results</li>
            <li>Cutting-edge link-building tactics and outreach</li>
            <li>Vigorous experiments and A/B testing</li>
            <li>We use big data to analyze link building performance</li>
          </ul>

          <p className="mt-8 text-lg text-gray-800">
            We now serve a large number of clients in all sorts of challenging industries, primarily ambitious online businesses who want to start seriously driving their organic traffic. Our very holistic and case-by-case approach to each project means you’re getting significantly better value for money.”
          </p>
        </div>

        {/* Right Column */}
        <div className="w-full h-auto">
          <Image
            src="/founder.png" // place your image in public/ folder
            alt="Founder working at desk illustration"
            width={700}
            height={700}
            className="rounded-[40px] bg-blue-800"
          />
        </div>
      </div>
    </section>
  );
};

export default Founder;
