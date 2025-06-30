import React from 'react'
import HeroSection from './HeroSection'
import TeamSlider from '../components/TeamSlider'
import ByTheNumbers from './ByTheNumbers'
import SupportingChange from './SupportingChange'
import Founder from './Founder'
import Hero from '../components/Hero'

const page = () => {
  return (
    <>
        <HeroSection/>
        <TeamSlider />
        <ByTheNumbers/>
        <SupportingChange/>
        <Founder/>
        <Hero />
    </>
  )
}

export default page