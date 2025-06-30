import React from 'react';

const SEOCTA = () => {
  return (
    <section className="bg-[#f8f9f7] py-6 px-4">
      <div className="max-w-md mx-auto bg-white rounded-full flex flex-col sm:flex-row items-center justify-between px-4 py-3 shadow-sm gap-3">
        
        <div className="flex items-center gap-3">
          <img
            src="/profile_image.png"
            alt="Bryan"
            className="w-12 h-12 rounded-full bg-[#00e7b4]"
          />
          <p className="text-base font-medium text-black">
            Power up your SEO<br className="hidden sm:block" /> with us.
          </p>
        </div>

        <button className="bg-black text-white text-sm font-semibold px-5 py-2 rounded-lg flex items-center gap-1 shadow hover:bg-black/90 transition">
          👉 <span>Book a call</span>
        </button>
      </div>
    </section>
  );
};

export default SEOCTA;
