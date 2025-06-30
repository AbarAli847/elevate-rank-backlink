"use client";

import Link from "next/link";

const ByTheNumbers = () => {
  return (
    <section className="bg-black text-white py-24 px-4 text-center">
      {/* Top: About us + Title */}
      <div className="mb-16">
        <p className="text-yellow-400 text-lg mb-3">✌ About us</p>
        <h2 className="text-4xl md:text-5xl font-bold">
          By the{" "}
          <span className="bg-blue-800 text-white px-4 py-1 rounded-2xl inline-block">
            numbers
          </span>
        </h2>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto mb-16">
        {/* 2016 */}
        <div>
          <div className="text-6xl md:text-7xl font-bold mb-4">2016</div>
          <p className="text-lg font-medium">
            Founded <span className="inline-block">🏡</span>
          </p>
        </div>

        {/* 350+ */}
        <div>
          <div className="text-6xl md:text-7xl font-bold mb-4">350+</div>
          <p className="text-lg font-medium">
            Companies we’ve helped <span className="inline-block">🤝</span>
          </p>
        </div>

        {/* 20k+ */}
        <div>
          <div className="text-8xl md:text-7xl font-bold mb-4">20k+</div>
          <p className="text-lg font-medium">
            Links we&apos;ve built <span className="inline-block">🔗</span>
          </p>
        </div>
      </div>

      {/* CTA Button */}
     
     <Link href={'/contact'} className="bg-white text-black text-lg font-medium px-6 py-3 rounded-xl hover:shadow-lg transition">
        Get started today
      </Link>
     
    </section>
  );
};

export default ByTheNumbers;
