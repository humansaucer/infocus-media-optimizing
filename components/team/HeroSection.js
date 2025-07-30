import React from 'react'

const HeroSection = () => {
  return (
    <div className='bg-black text-white max-sm:py-32 md:h-screen flex flex-col px-2 justify-center items-center leading-[.95]'>

        <p className='text-[16px] sm:text-[18px] md:text-[22px] font-bold mb-4 leading-relaxed sub-heading'>WHO WE ARE</p>
        <h1 className='text-[29px] md:text-[50px] lg:text-[84px] font-bold'>We are <span className='text-green-400'>catalyst creators</span> Fast-</h1>
              <h1 className=' text-[29px] md:text-[50px] lg:text-[84px]  font-bold'>moving, future-focused,</h1>

        <h1 className='text-[29px] md:text-[50px] lg:text-[84px]  font-bold'>and fired up by initiative.</h1>

        <h1 className='text-[29px] md:text-[50px] lg:text-[84px]  font-bold'> No corner offices, just open</h1>
        <h1 className='text-[29px] md:text-[50px] lg:text-[84px]  font-bold'>doors and <span className='text-green-400'>open minds</span>.</h1>

    </div>
  )
}

export default HeroSection
