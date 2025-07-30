"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const data = [
  { image: "/assets/Team/image-4.png", occupation: "Founder & CEO", name: "Hassan Mohammad Al Najjar" },
  { image: "/assets/Team/image-1.png", occupation: "Accountant", name: "Sami Ayyoub" },
  { image: "/assets/Team/image-5.png", occupation: "Art Director", name: "Harry Hussin" },
  { image: "/assets/Team/image-2.png", occupation: "Project Manager", name: "Reem Ramzi" },
  { image: "/assets/Team/image-6.png", occupation: "Human Resources Manager", name: "Omnia Hassan" },
  { image: "/assets/Team/image-9.png", occupation: "Content Manager", name: "Aysar Nourdine" },
  { image: "/assets/Team/image-7.png", occupation: "Animation Team Lead", name: "Sohib Hesham" },
  { image: "/assets/Team/image-8.png", occupation: "Social Media Manager", name: "Ahmed Aljazzar" },
  { image: "/assets/Team/image-10.png", occupation: "Social Media Manager", name: "Haroorn Waheed" },
];

const TeamSection = () => {
  const ceoIndex = data.findIndex(member => member.occupation === "Founder & CEO");
  const [currentIndex, setCurrentIndex] = useState(ceoIndex);
  const intervalRef = useRef(null);
  const [loadedImages, setLoadedImages] = useState({});

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % data.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + data.length) % data.length);

  useEffect(() => {
    intervalRef.current = setInterval(nextSlide, 4000);
    return () => clearInterval(intervalRef.current);
  }, []);

  const handleMouseEnter = () => clearInterval(intervalRef.current);
  const handleMouseLeave = () => {
    intervalRef.current = setInterval(nextSlide, 4000);
  };

  const getVisibleItems = () => {
    const totalItems = data.length;
    return [-3, -2, -1, 0, 1, 2, 3].map((offset) => {
      const index = (currentIndex + offset + totalItems) % totalItems;
      return { ...data[index], position: offset, originalIndex: index };
    });
  };

  const visibleItems = getVisibleItems();

  const handleImageLoad = (index) => {
    setLoadedImages((prev) => ({ ...prev, [index]: true }));
  };

  return (
    <section className="relative bg-black text-white py-20 overflow-hidden">
      <div className="container mx-auto px-6 text-center mb-16">
        <h2 className="text-[39px] md:text-[64px] lg:text-[100px] font-bold mb-4">
          Meet The Team
        </h2>
      </div>

      <div
        className="relative flex items-center justify-center px-2"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Previous Button */}
        <button
          onClick={prevSlide}
          className="cursor-pointer absolute left-12 z-20 bg-white/10 backdrop-blur-md p-4 rounded-md hover:bg-white/20 transition-all duration-300"
          aria-label="Previous team member"
        >
          <FaChevronLeft className="text-white text-xl" />
        </button>

        {/* Carousel Container */}
        <div className="flex gap-6 items-center justify-center w-full">
          <AnimatePresence mode="wait">
            {visibleItems.map((item) => {
              const isCenter = item.position === 0;

              return (
                <motion.div
                  key={`${item.originalIndex}-${currentIndex}`}
                  initial={{ opacity: 0.6, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="flex flex-col items-center justify-center text-center"
                >
                  <div className="relative rounded-2xl py-6 px-1 max-w-[500px]">
                    <div className="relative">
                      {!loadedImages[item.originalIndex] && (
                        <div
                          className={`absolute top-0 left-0 w-full h-full rounded-full bg-gradient-to-r from-gray-300 via-gray-100 to-gray-300 animate-pulse z-10 ${
                            isCenter
                              ? "max-w-[300px] max-h-[300px] md:max-w-[450px] md:max-h-[450px]"
                              : "max-w-[200px] max-h-[200px] md:max-w-[300px] md:max-h-[300px]"
                          }`}
                        ></div>
                      )}
                      <img
                        src={item.image}
                        alt={item.name}
                        onLoad={() => handleImageLoad(item.originalIndex)}
                        className={`rounded-full object-cover mx-auto mb-4 transition-all duration-500 ${
                          isCenter
                            ? "max-w-[300px] max-h-[300px] md:max-w-[450px] md:max-h-[450px]"
                            : "max-w-[200px] max-h-[200px] md:max-w-[300px] md:max-h-[300px]"
                        }`}
                      />
                    </div>
                    <p className="text-sm uppercase tracking-wider font-semibold mb-2 sub-heading">
                      {item.occupation}
                    </p>
                    <h3
                      className={`font-bold text-white ${
                        isCenter ? "text-2xl" : "text-xl"
                      }`}
                    >
                      {item.name}
                    </h3>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          className="cursor-pointer absolute right-12 z-20 bg-white/10 backdrop-blur-md p-4 rounded-md hover:bg-white/20 transition-all duration-300"
          aria-label="Next team member"
        >
          <FaChevronRight className="text-white text-xl" />
        </button>
      </div>
    </section>
  );
};

export default TeamSection;
