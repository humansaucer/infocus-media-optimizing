"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TransformGlobe = () => {
  const videoRef = useRef(null);
  const sectionRef = useRef(null);
  const transformContentRef = useRef(null);
  const insightContentRef = useRef(null);

  useEffect(() => {
    // Small delay to ensure other GSAP animations have initialized
    const initTimeout = setTimeout(() => {
      const video = videoRef.current;
      const section = sectionRef.current;
      const transformContent = transformContentRef.current;
      const insightContent = insightContentRef.current;

      if (!video || !section || !transformContent || !insightContent) return;

      // Set initial states
      gsap.set(insightContent, { opacity: 0, y: 50 });
      gsap.set(transformContent, { opacity: 1, y: 0 });

      // Create GSAP timeline with ScrollTrigger
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top", // Changed from "top 80px" to "top center"
          end: "+=4000", // 
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          id: "transform-globe",
          refreshPriority: -1,
          invalidateOnRefresh: true,
          pinSpacing: true, // Added to ensure proper spacing
          onUpdate: (self) => {
            // Control video playback based on scroll progress
            const progress = self.progress;
            if (video.duration) {
              video.currentTime = video.duration * progress;
            }
          },
          onEnter: () => {
            // Ensure video is ready when entering
            if (video.readyState >= 2) {
              video.currentTime = 0;
            }
          }
        }
      });

      // Animation sequence with better timing
tl.to({}, { duration: 0.6 }) // Hold time
  .to(transformContent, {
    opacity: 0,
    y: -50,
    duration: 0.3,
    ease: "power2.inOut"
  }, 0.6) // Start after hold time completes
  .to(insightContent, {
    opacity: 1,
    y: 0,
    duration: 0.3,
    ease: "power2.inOut"
  }, 0.9) // Start after transformContent fade completes (0.6 + 0.3 = 0.9)
  .to(video, {
    scale: 1.05,
    duration: 0.4,
    ease: "power1.inOut"
  }, 1.0);
    }, 100);

    return () => {
      clearTimeout(initTimeout);
      ScrollTrigger.getById("transform-globe")?.kill();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="TransformGlobe relative h-screen bg-white overflow-hidden"
      style={{ 
        zIndex: 1,
        marginTop: 0, // Ensure no top margin
        paddingTop: 0  // Ensure no top padding
      }}
    >
      {/* Video Background */}
      <video
        ref={videoRef}
        src="/Blob.mp4"
        className="absolute inset-0 w-full h-full object-cover"
        muted
        playsInline
        preload="auto"
        style={{ 
          willChange: "transform",
          top: 0,
          left: 0
        }}
      />

      {/* Text Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
        {/* Transform content */}
        <div ref={transformContentRef} className="flex flex-col items-center justify-center absolute inset-0">
          <p className="md:text-[18px] text-[16px] lg:text-[22px] font-bold uppercase text-black text-center mb-4 sub-heading">
            WE don't see brands, we see possibilities
          </p>
          <div className="flex flex-col leading-[.95]">
            <h1 className="text-[40px] md:text-[65px] lg:text-[100px] font-bold text-black text-center mb-2">
              We transform ideas
            </h1>
            <h1 className="text-[40px] md:text-[65px] lg:text-[100px] font-bold text-black text-center">
              into visual stories
            </h1>
          </div>
          <p className="md:text-[18px] text-[16px] lg:text-[22px] font-bold uppercase text-black text-center mt-4 sub-heading">
            and we know what your brand needs
          </p>
        </div>

        {/* Insight content */}
        <div ref={insightContentRef} className="flex flex-col items-center justify-center absolute inset-0">
          <p className="md:text-[18px] text-[16px] lg:text-[22px] font-bold uppercase text-black text-center mb-4 sub-heading">
            we make your audience feel, think, and act
          </p>
          <div className="flex flex-col leading-[.95]">
            <h1 className="text-[40px] md:text-[65px] lg:text-[100px] font-bold text-black text-center mb-2">
              We turn insights
            </h1>
            <h1 className="text-[40px] md:text-[65px] lg:text-[100px] font-bold text-black text-center">
              into impact
            </h1>
          </div>
          <Link
            href="/contacts"
            className="mt-5 bg-black rounded-md text-white px-8 py-4 font-bold cursor-pointer hover:bg-gray-200 hover:text-black hover:scale-105 transition-transform duration-300 text-center"
          >
            Let's Get Started
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TransformGlobe;