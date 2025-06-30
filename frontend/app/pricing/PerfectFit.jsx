import React from 'react';

const PerfectFit = () => {
  return (
    <section className="py-20 bg-white text-center">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-16">
        Who is LinkBuilder a{' '}
        <span className="bg-blue-800 px-3 py-1 rounded-2xl inline-block text-white">
          perfect
        </span>{' '}
        fit for?
      </h2>

      <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto px-6 md:px-0">
        {/* Founders */}
        <div className="border-r border-gray-200 pr-6 md:pr-10">
          <div className="flex justify-center -space-x-4 mb-4">
            <img src="/abdullah.PNG" alt="Founder" className="w-10 h-10 rounded-full border-2 border-white" />
            <img src="/abrar.jpg" alt="Founder" className="w-10 h-10 rounded-full border-2 border-white" />
            <img src="/Umaid.PNG" alt="Founder" className="w-10 h-10 rounded-full border-2 border-white" />
          </div>
          <h3 className="font-semibold text-xl mb-2">Founders and entrepreneurs</h3>
          <p className="text-gray-700 leading-relaxed">
            We help entrepreneurs scale their link building performance with a solution
            that's incredibly affordable and effective.
          </p>
        </div>

        {/* Marketing Directors */}
        <div className="border-r border-gray-200 px-6 md:px-10">
          <div className="flex justify-center items-center gap-2 mb-4">
            <img src="/seo1.jpg" alt="Up" className="w-6  rounded-b-fullh-6" />
            <img src="/images2.png" alt="PDF" className="w-8 h-8" />
          </div>
          <h3 className="font-semibold text-xl mb-2">Marketing directors</h3>
          <p className="text-gray-700 leading-relaxed">
            We help marketing directors remove the need to build an expensive in-house
            link building team, helping to quickly scale high quality links.
          </p>
        </div>

        {/* SEO Professionals */}
        <div className="pl-6 md:pl-10">
          <div className="flex justify-center -space-x-4 mb-4">
            <img src="/abdullah.PNG" alt="SEO" className="w-10 h-10 rounded-full border-2 border-white" />
            <img src="/umaid.PNG" alt="SEO" className="w-10 h-10 rounded-full border-2 border-white" />
            <img src="/abrar.jpg" alt="SEO" className="w-10 h-10 rounded-full border-2 border-white" />
          </div>
          <h3 className="font-semibold text-xl mb-2">SEO Professionals</h3>
          <p className="text-gray-700 leading-relaxed">
            SEO professionals and agencies love us because they know we can hit the ground running
            and take care of all the analysis and strategy, leaving them free to tackle other issues.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PerfectFit;
