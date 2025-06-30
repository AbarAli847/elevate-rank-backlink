 import React from 'react'
 
 const Fair_Price = () => {
   return (
    <div className="bg-white flex flex-col mt-10 md:flex-row items-center justify-between px-8 md:px-16 py-12">
    {/* Left Side - Text Content */}
    <div className="max-w-lg">
      
      <h1 className="text-4xl md:text-4xl text-blue-800 font-extrabold mt-4">
        What’s a Fair Price?
        
      </h1>
      <p className="text-black mt-6 text-lg leading-relaxed">
  We’ve put together a detailed guide on link building costs to help you make a better-informed decision.
  As a company, we strive to offer a fair deal that represents real value for money.
</p>

<p className="text-black mt-6 text-lg leading-relaxed">
  Our team works closely with some of the world’s most successful online brands,
  placing a strong emphasis on high-quality work and in-depth analysis to ensure your success.
</p>

    </div>

    {/* Right Side - Image & Video */}
    <div className="relative mt-10 md:mt-0">
      <div className="rounded-5xl p-8 relative w-full max-w-lg">
        <img src="/price_image.png" alt="Illustration" className="w-full" />
        
      </div>
    </div>
  </div>
   )
 }
 
 export default Fair_Price