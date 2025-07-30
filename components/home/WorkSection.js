"use client";

import React, { useState } from "react";

const WorkSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const services = [
    {
      title: "SOCIAL MEDIA MANAGEMENT",
      icon: "/assets/Icons/social media management.svg"
    },
    {
      title: "EVENT MEDIA COVERAGE",
      icon: "/assets/Icons/event media coverage.svg"
    },
    {
      title: "DIGITAL MARKETING & WEB DEVELOPMENT",
      icon: "/assets/Icons/digital marketing & web development.svg"
    },
    {
      title: "COMERCIAL VIDEO MARKETING",
      icon: "/assets/Icons/commercial video production.svg"
    },
    {
      title: "MARKETING STRATEGY",
      icon: "/assets/Icons/marketing strategy.svg"
    },
    {
      title: "ANIMATION & MOTION GRAPHICS",
      icon: "/assets/Icons/animation & motion graphics.svg"
    },
    {
      title: "BRANDING",
      icon: "/assets/Icons/branding.svg"
    },
  ];

  return (
    <section className="relative bg-white py-40 px-4">
      <div className=" md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-[40px] md:text-[64px] font-bold mb-6">
            What We Do
          </h2>
        </div>

        <div
          className="grid grid-cols-2 lg:grid-cols-7 w-full md:pl-0 pl-5 items-center justify-items-center gap-8"
          onMouseLeave={() => setHoveredIndex(null)} 
        >
          {services.map((service, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              className={`flex flex-col w-[161px] h-[140px] mb-5 md:w-[245px] lg:w-[173px]  gap-2  transition duration-300 
                ${hoveredIndex !== null && hoveredIndex !== index ? "opacity-30" : "opacity-100"}
              `}
            >
              <img src={service.icon} alt={service.title} className="w-[80px] h-[80px] md:w-[96px] md:h-[96px] lg:w-[110px] lg:h-[110px] hover:scale-130 duration-300 transition-transform mb-4" />
              <h3 className="font-bold text-left  text-black mb-3 mt-2 text-[16px] md:text-[18px] lg:text-[22px] pr-8 leading-[.95] sub-heading tracking-wide">
                {service.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
