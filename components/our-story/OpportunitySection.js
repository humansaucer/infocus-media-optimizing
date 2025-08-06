import React from "react";

const OpportunitySection = () => {
  return (
    <div className="bg-[#FAFAFA] w-full min-h-[850px] px-[5%] py-20 flex flex-col gap-16">
      {/* Title */}
      <div className="text-center leading-[.99]">
        <h1 className="text-[40px] md:text-[64px] font-bold">Unlocking opportunities</h1>
        <h1 className="text-[40px] md:text-[64px] font-bold ">
          through strategic partnerships
        </h1>
      </div>

      {/* Cards */}
      <div className="flex flex-col lg:flex-row justify-center gap-2  sub-heading">
        {/* Left Column */}
        <div className="flex flex-col items-center gap-4 w-full lg:w-1/2">
          <p className="text-[18px] md:text-[20px] lg:text-[22px] font-medium ">MAIN ASSOCIATIONS</p>

          <div className="flex flex-wrap gap-4 justify-center w-full">
            {/* Card 1 */}
            <div className="flex flex-col items-start gap-3 p-4 bg-white text-[18px] md:text-[20px] lg:text-[22px] w-full sm:w-[300px]">
<img src="/our-story/image1.png" alt="logo" className="w-[200px] h-[60px] mb-4  object-fit" />
              <div>
                <p className="font-bold ">DUBAI SME</p>
                <p className="leading-[1.2]">Empowering Emirati entrepreneurs to transform ideas into successful businesses since 2002.</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col items-start text-[18px] md:text-[20px] lg:text-[22px] gap-3 p-4 bg-white sm:w-[300px]">
              <img src="/our-story/image2.png" alt="logo" className="w-[80px] h-[80px] mb-4 object-fit" />
              <div>
                <p className="font-semibold">DONE BY YOUTH</p>
                <p className="leading-[1.2]">Connecting passionate young talents with 
nationwide opportunities to shape the UAE’s 
future.</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col text-[18px] md:text-[20px] lg:text-[22px] items-start gap-3 p-4 bg-white  w-full sm:w-[620px]">
              <img src="/our-story/image3.png" alt="logo" className="w-[100px] h-[100px]  object-contain" />
              <div>
                <p className="font-bold">ICV</p>
                <p className="leading-[1.2]">Strengthening the UAE’s economy by 
prioritizing local talent, products, and services 
across industrial sectors.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col text-[16px] md:text-[18px] lg:text-[22px] items-center gap-2 w-full lg:w-1/2">
          <p className="text-[16px] md:text-[18px] lg:text-[22px] font-medium ">SPECIALIZED PARTNERS</p>

          <div className="flex flex-wrap gap-4 justify-center w-full">
            {/* Card 1 */}
            <div className="flex flex-col items-start gap-3 p-4 bg-white w-full sm:w-[300px]">
              <img src="/our-story/image4.png" alt="logo" className="w-[160px] h-[80px] mb-4 object-contain" />
              <div>
                <p className="font-bold">EMPLIFI</p>
                <p className="leading-[1.2]">An AI-powered platform that optimizes digital presence and social engagement.</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col text-[18px] md:text-[20px] lg:text-[22px] items-start gap-3 p-4 bg-white w-full sm:w-[300px]">
              <img src="/our-story/image5.png" alt="logo" className="w-[160px] h-[80px] mb-4  object-contain" />
              <div>
                <p className="font-semibold">PIXEL HOUSE</p>
                <p className="leading-[1.2]">Transforming ideas into powerful visuals through film, photography, and design since 2013.</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col text-[18px] md:text-[20px] lg:text-[22px]  items-start gap-3 p-4 bg-white w-full sm:w-[620px]">
              <img src="/our-story/image6.png" alt="logo" className="w-[160px] h-[80px] mb-4  object-contain" />
              <div>
                <p className="font-bold">GARAGE STUDIO</p>
                <p className="leading-[1.2]">Creating an inspiring space where visionaries turn creative dreams into reality, led by award-winning photographer Shadi Alrefai.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpportunitySection;
