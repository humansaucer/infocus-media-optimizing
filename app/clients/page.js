import Footer from '@/components/home/Footer'
import Clients from '@/components/our clients/Clients'
import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col w-full'>
      <Clients/>
      <Footer/>
    </div>
  )
}

export default page
