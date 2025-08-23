"use client";
import React, { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const FooterGlobe = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { threshold: 0.2, once: false });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, scale: 0, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: [0.175, 0.885, 0.32, 1.275]
      }
    }
  };

  const headingVariants = {
    hidden: { opacity: 0, scale: 0.3, filter: "blur(8px)" },
    visible: {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 1,
        ease: [0.175, 0.885, 0.32, 1.175]
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0, filter: "blur(6px)" },
    visible: {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.6,
        ease: "backOut",
        delay: 0.2
      }
    },
    hover: {
      scale: 1.05,
      backgroundColor: "#f3f4f6",
      color: "#000000",
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    },
    tap: {
      scale: 0.95
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative h-screen bg-white overflow-hidden"
      style={{ zIndex: 1 }}
    >
      {/* Background Image with subtle animation */}
      <motion.img
        src="/blob-poster.png"
        alt="Transform Globe"
        className="absolute inset-0 w-full h-full object-contain"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : { scale: 1.1, opacity: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />

      {/* Main Content */}
      <motion.div
        className="absolute inset-0 flex flex-col items-center justify-center text-center z-10"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        {/* Subtitle */}
        <motion.p
          variants={textVariants}
          className="text-[16px] md:text-[18px] lg:text-[22px] font-bold uppercase tracking-widest mb-1 sub-heading"
        >
          HAVE PROJECT IN MIND?
        </motion.p>

        {/* Main Headlines */}
        <div className="flex flex-col items-center justify-center leading-[.95]">
          {["let's create", "something great", "together!"].map((text, i) => (
            <motion.h1
              key={i}
              variants={headingVariants}
              className="text-[50px] md:text-[70px] lg:text-[90px] font-bold"
              style={{
                background: "linear-gradient(135deg, #000 0%, #333 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text"
              }}
            >
              {text}
            </motion.h1>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-4">
          <motion.button
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            className="bg-black text-[16px] md:text-[18px] lg:text-[22px] text-white px-6 py-3 cursor-pointer rounded-md font-medium inline-block shadow-lg"
            onClick={() => {
              console.log("Navigate to contacts");
            }}
          >
            let's Go
          </motion.button>
        </div>

        {/* Optional: Floating particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-gray-300 rounded-full opacity-20"
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + (i % 3) * 20}%`
              }}
              animate={
                isInView
                  ? {
                      y: [-10, 10, -10],
                      opacity: [0.2, 0.5, 0.2]
                    }
                  : {}
              }
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.3
              }}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default FooterGlobe;
