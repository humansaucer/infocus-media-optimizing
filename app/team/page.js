import Footer from '@/components/home/Footer'
import HeroSection from '@/components/team/HeroSection'
import MembersSection from '@/components/team/MembersSection'
import TeamLocationSection from '@/components/team/TeamLocationSection'
import React from 'react'

const page = () => {
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
