"use client"
import CaseStudies from '@/components/case studies/CaseStudies'
import Footer from '@/components/home/Footer'
import React from 'react'
import { useEffect } from 'react'
import Lenis from "@studio-freight/lenis";

const page = () => {

  useEffect(() => {
      const lenis = new Lenis({
        duration: 1, // feel free to tweak for more smoothness
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
    <div className='flex flex-col w-full'>
        <CaseStudies/>
        <Footer/>
      
    </div>
  )
}

export default page
