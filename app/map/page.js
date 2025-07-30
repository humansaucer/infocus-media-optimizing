import React from 'react';

const Map = () => {
  return (
    <div className="relative w-full h-screen md:h-auto aspect-[3/2] overflow-hidden">
      
      {/* Desktop layout: visible on md and above */}
      <div className="hidden md:block relative w-full h-full">
        {/* Manatee County */}
        <img
          src="/map/Manatee.svg"
          alt="Manatee"
          className="absolute top-[5%] left-[20%] w-[18%] max-w-[280px] transition-transform duration-300 filter hover:invert hover:scale-125 z-10 hover:z-50 transform origin-center cursor-pointer"
        />
        {/* Sarasota County */}
        <img
          src="/map/Sarasota.svg"
          alt="Sarasota"
          className="absolute top-[16.5%] left-[22%] w-[18%] max-w-[280px] transition-transform duration-300 filter hover:invert hover:scale-125 z-10 hover:z-50 transform origin-center cursor-pointer"
        />
        {/* Charlotte County */}
        <img
          src="/map/Charlotte.svg"
          alt="Charlotte"
          className="absolute top-[29.5%] left-[31.9%] w-[18%] max-w-[280px] transition-transform duration-300 filter hover:invert hover:scale-125 z-10 hover:z-50 transform origin-center cursor-pointer"
        />
        {/* Lee County */}
        <img
          src="/map/Lee.svg"
          alt="Lee"
          className="absolute top-[38%] left-[35%] w-[18%] max-w-[280px] transition-transform duration-300 filter hover:invert hover:scale-125 z-10 hover:z-50 transform origin-center cursor-pointer"
        />
        {/* Collier County */}
        <img
          src="/map/Collier.svg"
          alt="Collier"
          className="absolute top-[49%] left-[48%] w-[18%] max-w-[280px] transition-transform duration-300 filter hover:invert hover:scale-125 z-10 hover:z-50 transform origin-center cursor-pointer"
        />
      </div>

      {/* Mobile layout: visible below md */}
      <div className="block md:hidden relative w-full h-full">
        {/* Manatee County */}
        <img
          src="/map/Manatee.svg"
          alt="Manatee"
          className="absolute top-[5%] left-[5%] w-[180px] transition-transform duration-300 filter hover:invert hover:scale-125 z-10 hover:z-50 transform origin-center cursor-pointer"
        />
        {/* Sarasota County */}
        <img
          src="/map/Sarasota.svg"
          alt="Sarasota"
          className="absolute top-[15.2%] left-[8%] w-[48%] max-w-[180px] transition-transform duration-300 filter hover:invert hover:scale-125 z-10 hover:z-50 transform origin-center cursor-pointer"
        />
        {/* Charlotte County */}
        <img
          src="/map/Charlotte.svg"
          alt="Charlotte"
          className="absolute top-[26.9%] left-[30.4%] w-[48%] max-w-[180px] transition-transform duration-300 filter hover:invert hover:scale-125  z-10 hover:z-50 transform origin-center cursor-pointer"
        />
        {/* Lee County */}
        <img
          src="/map/Lee.svg"
          alt="Lee"
          className="absolute top-[34.9%] left-[39.5%] w-[48%] max-w-[150px] transition-transform duration-300 filter hover:invert hover:scale-125 z-10 hover:z-50 transform origin-center cursor-pointer"
        />
        {/* Collier County */}
        <img
          src="/map/Collier.svg"
          alt="Collier"
          className="absolute top-[44%] left-[65%] w-[32%] max-w-[180px] transition-transform duration-300 filter hover:invert hover:scale-125 z-10 hover:z-50 transform origin-center cursor-pointer"
        />
      </div>

    </div>
  );
};

export default Map;
