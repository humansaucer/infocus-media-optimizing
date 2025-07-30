"use client";
import React, { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const FooterGlobe = () => {
  const videoRef = useRef(null);
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;

    if (!video || !section) return;

    const handleLoadedData = () => {
      const duration = video.duration || 10;
      video.pause();
      video.currentTime = 0;

      // Set initial states for content animation
      gsap.set(".footer-text", { opacity: 0, y: 30 });
      gsap.set(".footer-heading", { opacity: 0, y: 40 });
      gsap.set(".footer-button", { opacity: 0, y: 20 });

      // Create timeline with delayed start
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          
          start: window.innerWidth < 768 ? "top+=10% top" : "top top", 
          
          
          end: () => `+=${duration * 300}`, // Dynamic end based on video duration
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          pinSpacing: true,
          refreshPriority: -1,
          invalidateOnRefresh: true,
          id: "footer-globe-video",
          
          // Add markers for debugging (remove in production)
          // markers: true,
          
          onStart: () => {
            console.log("Footer animation started");
          },
          onComplete: () => {
            console.log("Footer animation completed");
          },
          onUpdate: (self) => {
            // Ensure video stays synced with scroll
            const progress = self.progress;
            const targetTime = duration * progress;
            if (Math.abs(video.currentTime - targetTime) > 0.1) {
              video.currentTime = targetTime;
            }
          },
          onEnter: () => {
            // Reset video when entering the section
            if (video.readyState >= 2) {
              video.currentTime = 0;
            }
          }
        },
      });

      // Animation sequence with better timing
      tl.to({}, { duration: 0.1 }) // Brief hold at start
        // Animate video playback
        .to(video, {
          currentTime: duration,
          ease: "none",
          duration: 0.7 // Most of the timeline for video
        }, 0.1)
        // Fade in content with staggered timing
        .to(".footer-text", {
          opacity: 1,
          y: 0,
          duration: 0.2,
          ease: "power2.out"
        }, 0.15)
        .to(".footer-heading", {
          opacity: 1,
          y: 0,
          duration: 0.3,
          stagger: 0.1,
          ease: "power2.out"
        }, 0.25)
        .to(".footer-button", {
          opacity: 1,
          y: 0,
          duration: 0.2,
          ease: "power2.out"
        }, 0.45)
        // // Optional: Add slight video scale for emphasis
        // .to(video, {
        //   scale: 1.02,
        //   duration: 0.2,
        //   ease: "power1.inOut"
        // }, 0.6);
    };

    video.addEventListener("loadeddata", handleLoadedData);

    // Also try to initialize immediately if video is already loaded
    if (video.readyState >= 2) {
      setTimeout(handleLoadedData, 100);
    }

    return () => {
      video.removeEventListener("loadeddata", handleLoadedData);
      ScrollTrigger.getById("footer-globe-video")?.kill();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen bg-white overflow-hidden"
      style={{
        zIndex: 1,
        marginTop: 0,
        paddingTop: 0
      }}
    >
      {/* Video background */}
      <video
        ref={videoRef}
        src="/Blob.mp4"
        className="absolute inset-0 w-full h-full object-cover"
        muted
        playsInline
        preload="auto"
        style={{
          willChange: 'transform',
          top: 0,
          left: 0
        }}
      />

      {/* Text on top of video */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10">
        <p className="footer-text text-[16px] md:text-[18px] lg:text-[22px] font-bold uppercase tracking-widest mb-1 sub-heading">
          HAVE PROJECT IN MIND?
        </p>
        <div className="flex flex-col items-center justify-center leading-[.95]">
          <h1 className="footer-heading text-[50px] md:text-[100px] font-bold">let's create</h1>
          <h1 className="footer-heading text-[50px] md:text-[100px] font-bold">something great</h1>
          <h1 className="footer-heading text-[50px] md:text-[100px] font-bold mb-2">together!</h1>
        </div>
        <div className="text-center mt-4">
          <Link
            href="/contacts"
            className="footer-button bg-black text-[16px] md:text-[18px] lg:text-[22px] text-white px-4 py-2 cursor-pointer hover:bg-gray-200 hover:text-black hover:scale-105 transition-transform duration-300 rounded-md font-medium inline-block"
          >
            let's Go
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FooterGlobe;