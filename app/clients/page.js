"use client"

import Footer from '@/components/home/Footer'
import Clients from '@/components/our clients/Clients'
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
    <div className='flex flex-col w-full'>
      <Clients/>
      <Footer/>
    </div>
  )
}

export default page
