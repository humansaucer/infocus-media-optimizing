import Footer from '@/components/home/Footer'
import FooterGlobe from '@/components/home/FooterGlobe'
import BuilderSection from '@/components/our-story/BuilderSection'
import HeroSection from '@/components/our-story/HeroSection'
import OpportunitySection from '@/components/our-story/OpportunitySection'
import TimeLine from '@/components/our-story/TimeLine'
import VerticalTimeLine from '@/components/our-story/VerticalTimeLine'
import React from 'react'

const page = () => {
  return (
    <div className="relative">
      <HeroSection/>
      <BuilderSection/>
      <div className="relative bg-[#FAFAFA]">

       <TimeLine/>
      </div>
      <VerticalTimeLine/>
      <OpportunitySection/>
      <FooterGlobe/>
      <Footer/>
    </div>
  )
}

export default page
