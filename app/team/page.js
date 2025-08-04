"use client"

import Footer from '@/components/home/Footer'
import HeroSection from '@/components/team/HeroSection'
import MembersSection from '@/components/team/MembersSection'
import TeamLocationSection from '@/components/team/TeamLocationSection'
import React from 'react'
import { useEffect } from 'react'
import Lenis from "@studio-freight/lenis";

const page = () => {

  useEffect(() => {
      const lenis = new Lenis({
        duration: 0.5, // feel free to tweak for more smoothness
        easing: (t) => (t), // default ease
        smooth: true,
      });
  
      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
  
      requestAnimationFrame(raf);
    }, []);
  return (
    <div>
     <HeroSection/>
     <MembersSection/>
     <TeamLocationSection/>
     <Footer/>
    </div>
  )
}

export default page
