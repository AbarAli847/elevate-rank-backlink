 import React from 'react'
 
 const Elevate = () => {
   return (
    <div className="bg-white flex flex-col mt-10 md:flex-row items-center justify-between px-8 md:px-16 py-12">
    {/* Left Side - Text Content */}
    <div className="max-w-lg">
      <h4 className="text-lg font-medium flex items-center">
        👋 Welcome to <span className="ml-2 font-bold text-black">Elevate Rank</span>
      </h4>
      <h1 className="text-4xl md:text-4xl font-extrabold mt-4">
        The link building agency<br/> that <br />
        <span className="bg-blue-800 text-white px-3 mt-6 py-1 rounded-lg inline-block">
          drives insane rankings
        </span>
      </h1>
      <p className="text-black mt-6 text-lg">
        Using a process-driven approach with a cutting-edge link-building strategy, our services 
        significantly improve your search engine rankings and SEO performance.
      </p>
      <p className="text-black mt-4 text-lg">
        Our service is trusted by leading SEO managers worldwide because{" "}
        <strong className="font-bold text-black">we deliver incredible backlinks</strong> 
        that other link-building providers simply cannot match.
      </p>
      <p className="text-black mt-6 text-lg">
      Our process works by acquiring high relevance links to key target pages on your domain,
       which is the most important Google ranking factor.
      </p>
    </div>

    {/* Right Side - Image & Video */}
    <div className="relative mt-10 md:mt-0">
      <div className="bg-blue-800 rounded-3xl p-8 relative w-full max-w-lg">
        <img src="/call.png" alt="Illustration" className="w-full" />
        
      </div>
    </div>
  </div>

   )
 }
 
 export default Elevate