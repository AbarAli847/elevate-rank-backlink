 import React from 'react'
 
 const Hero = () => {
   return (
    <div className="min-h-screen mt-24 bg-[#f9faf9] flex flex-col items-center justify-center text-center px-6 py-20">
    {/* Main Heading */}
    <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-black mb-6">
      Let’s Double Your Search Traffic
    </h1>

    {/* Subtext */}
    <p className="text-lg md:text-xl text-gray-600 max-w-2xl mb-10">
      We love talking link building. Let us know about your project <br />
      and we'll send you a free proposal
    </p>

    {/* Avatar + Text */}
    <div className="flex items-center space-x-4 mb-10">
      <img
        src="/profile_image.png"
        alt="person"
        className="w-16 h-16 rounded-full border-4 border-blue-900"
      />
      <p className="text-xl font-semibold">Let's talk links.</p>
    </div>

    {/* Call to Action Bar */}
    <div className="flex items-center bg-white shadow-xl rounded-full px-2 py-2 w-full max-w-3xl">
      {/* Gradient Pill */}
      <div className="flex-1 h-24 rounded-full bg-gradient-to-r from-yellow-100 via-blue-400 to-yellow-100 bg-[length:200%_200%] animate-stripes" />

      {/* Button */}
      <a href='/contact' className="ml-[-4rem] bg-black text-white text-2xl font-semibold rounded-full px-10 py-4 shadow-2xl hover:scale-105 transition">
        Contact Us
      </a>
    </div>
  </div>
   )
 }
 
 export default Hero