"use client"
import React from "react";

const HeroSection = () => {
  return (
    <section  className="bg-white dark:bg-gray-900">
    <div  className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div  className="mr-auto place-self-center lg:col-span-7">
            <h1  className="max-w-2xl mb-8 text-3xl font-bold tracking-tight leading-none ml-10 mt-0  md:text-5xl xl:text-6xl dark:text-white">Link Building<br/>Services<br/>Agency</h1>
            <p  className="max-w-2xl mb-6 font-light text-black lg:mb-8 md:text-lg lg:text-xl ml-10 dark:text-gray-400">We’re a specialist link building agency that builds<br/> incredible backlinks to improve your search engine<br/> rankings..</p>
            <div  className="flex space-x-4 ml-10">
          <a href="#"  className="bg-black text-white px-4 py-2 rounded transition duration-300 hover:bg-gray-800">
            Access Dashboard
          </a>
          <a href="/contact" className="border bg-black text-white border-gray-800 px-4 py-2 rounded transition duration-300 hover:bg-black hover:text-white">
            Conatct Us 📞
          </a>
        </div>
        </div>
        <div  className="hidden bg-blue-800 rounded-4xl lg:mt-0 lg:col-span-5 lg:flex">
            <img src="/hero1.png" alt="mockup"/>
        </div>                
    </div>
</section>
  );
};

export default HeroSection;
