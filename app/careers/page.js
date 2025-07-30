import HeroSection from '@/components/careers/HeroSection'
import Map from '@/components/careers/Map'
import VacanciesSection from '@/components/careers/VacanciesSection'
import Footer from '@/components/home/Footer'
import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col'>
      <HeroSection/>
      <VacanciesSection/>
      {/* <Map/> */}
      <Footer/>

    </div>
  )
}

export default page
