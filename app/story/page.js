"use client";
import Footer from '@/components/home/Footer'
import FooterGlobe from '@/components/home/FooterGlobe'
import BuilderSection from '@/components/our-story/BuilderSection'
import HeroSection from '@/components/our-story/HeroSection'
import OpportunitySection from '@/components/our-story/OpportunitySection'
import TimeLine from '@/components/our-story/TimeLine'
import VerticalTimeLine from '@/components/our-story/VerticalTimeLine'
import React from 'react'
import { useEffect } from 'react'
import Lenis from "@studio-freight/lenis";

const page = () => {

  useEffect(() => {
        const lenis = new Lenis({
          duration: 2.5, // feel free to tweak for more smoothness
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // default ease
          smooth: true,
        });
    
        function raf(time) {
          lenis.raf(time);
          requestAnimationFrame(raf);
        }
    
        requestAnimationFrame(raf);
      }, []);

  return (
    <div className="relative">
      <HeroSection/>
      <BuilderSection/>
      <div className="relative bg-[#FAFAFA]">

       <TimeLine/>
      </div>
      <VerticalTimeLine/>
      <OpportunitySection/>
      {/* <FooterGlobe/> */}
      <Footer/>
    </div>
  )
}

export default page
