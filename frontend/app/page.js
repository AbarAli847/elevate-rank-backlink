 import React from 'react'
import HeroSection from './components/HeroSection'
import Slider from './components/Slider'
import Elevate from './components/Elevate'
import StepCards from './components/StepCards'
import InfoCard from './components/InfoCard'
import CaseStudies from './components/Casestudy'
import TestimonialSection from './pricing/TestimonialSection'
import Hero from './components/Hero'
// import CaseStudy from './case-study/page'
 
 const page = () => {
   return (
     <div>
      <HeroSection/>
      <Slider/>
      <Elevate/>
      <StepCards/>
      <InfoCard/>
      <CaseStudies/>
      {/* <CaseStudy/> */}
      <TestimonialSection/>
      <Hero/>
      
     </div>
   )
 }
 
 export default page