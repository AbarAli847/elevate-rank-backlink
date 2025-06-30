import Link from 'next/link'
import React from 'react'
// import HeroSection from '../components/HeroSection'
 
const HeroSection = () => {
  return (
   <div className="bg-white flex flex-col  md:flex-row items-center justify-between px-8 md:px-16 py-12">
   {/* Left Side - Text Content */}
   <div className="max-w-lg mt-[-60] ">
     
     <h1 className="text-4xl md:text-4xl text-black font-extrabold mt-4">
     <span className='bg-blue-800 text-white'>Who</span> we are
       
     </h1>
     <p className="text-black mt-6 text-lg leading-relaxed">
     Collectively, our team of 43 dedicated link building professionals have over 250 years of experience amongst them.
</p>

<p className="text-black mt-6 text-lg leading-relaxed">
After launching in 2016, our team has grown rapidly as we’ve earned recognition and increased demand for our bespoke approach to link building.
</p>
<Link href={'/'}>
<p className="text-blue-800 font-bold mt-6 text-lg leading-relaxed">👀 Meet our team</p>
</Link>





   </div>

   {/* Right Side - Image & Video */}
   <div className="relative mt-10 md:mt-0">
     <div className="rounded-5xl p-8 relative w-full max-w-lg">
       <img src="/image.png" alt="Illustration" className="w-full" />
       
     </div>
   </div>
 </div>
  )
}

export default HeroSection