"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const videoRef = useRef(null);
  const contentOverlayRef = useRef(null);
  const mobileTextRef = useRef(null);
  const tabletTextRef = useRef(null);
  const [isHeroLoaded, setIsHeroLoaded] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  // GSAP animations for large screens
  useEffect(() => {
    const section = sectionRef.current;
    const text = textRef.current;
    const video = videoRef.current;

    if (!section || !text || !video) return;

    // Only run GSAP on large screens
    if (window.innerWidth < 1024) return;

    requestAnimationFrame(() => {
      const textWidth = text.getComputedTextLength();
      const viewportWidth = window.innerWidth;

      const startX = 0;
      const endX = -textWidth + viewportWidth * 0.9;

      // Get content elements
      const logo = document.querySelector('.logo-fade');
      const textElements = document.querySelectorAll('.text-fade');
      const contentOverlay = contentOverlayRef.current;

      gsap.set(text, { attr: { x: startX } });
      gsap.set(video, { y: 0 }); // Initial position
      
      // Hide content initially and position it
      if (logo) gsap.set(logo, { opacity: 0, y: 50 });
      if (textElements.length) {
        gsap.set(textElements, { opacity: 0, y: 30 });
      }
      if (contentOverlay) {
        gsap.set(contentOverlay, { 
          y: 0,
          display: 'flex',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0
        });
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=4000",
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });

      // Text animation (first 70%)
      tl.to(text, {
        attr: { x: endX },
        ease: "power1.out",
        duration: 0.7
      })
      // Video and content overlay animation (next 20%)
      .to([video, contentOverlay], {
        y: "100vh",
        ease: "power1.out",
        duration: 0.2
      })
      // Content fade in animation (last 10%)
      .to(logo, {
        opacity: 1,
        y: 0,
        ease: "power2.out",
        duration: 0.05
      }, "+=0.05")
      .to(textElements, {
        opacity: 1,
        y: 0,
        ease: "power2.out",
        duration: 0.05,
        stagger: 0.02
      }, "-=0.03");
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  // GSAP animations for tablet
  useEffect(() => {
    const container = tabletTextRef.current;
    if (!container || window.innerWidth >= 1024 || window.innerWidth < 768) return;

    const textElement = container.querySelector('.tablet-text');
    
    gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: "bottom top",
        scrub: 0.5,
        pin: true,
        onUpdate: (self) => {
          const progress = self.progress;
          gsap.to(textElement, {
            y: progress * window.innerHeight,
            duration: 0,
          });
        }
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  // GSAP animations for mobile
  useEffect(() => {
    const container = mobileTextRef.current;
    if (!container || window.innerWidth >= 768) return;

    const textElement = container.querySelector('.mobile-text');
    
    gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top bottom",
        end: "bottom bottom",
        scrub: 0.9,
      
        // onUpdate: (self) => {
        //   const progress = self.progress;
        //   gsap.to(textElement, {
        //     y: progress * window.innerHeight,
        //     duration: 0,
        //   });
        // }
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  const handleVideoLoad = () => {
    setIsVideoLoaded(true);
    setTimeout(() => {
      setIsHeroLoaded(true);
    }, 1500);
  }

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.addEventListener('loadeddata', handleVideoLoad);
      return () => {
        video.removeEventListener('loadeddata', handleVideoLoad);
      };
    }
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative w-screen overflow-hidden"
      style={{ height: '200vh' }} // Make container taller to accommodate video movement
    >
      {/* Single Video Element - Used for all screen sizes */}
      <video
        ref={videoRef}
        className="absolute inset-0 z-0 w-full h-full object-cover"
        src="/media-hero.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        onLoadedData={handleVideoLoad}
      />

      {/* Content overlay - moves with video and shows below h-screen */}
      <div className="content-overlay top-180 absolute inset-0 flex flex-col items-center justify-center text-center z-20 px-4 pointer-events-none">
        <img
          src="/logo.png"
          alt="Logo"
          className="logo-fade w-3/4 max-w-[580px] max-h-[68px] mb-6 object-contain"
        />
        <p
          className="text-fade uppercase text-black text-[15px] md:text-[18px] lg:text-[22px] mb-1"
          style={{
            fontFamily: "'Almarai', sans-serif",
            fontWeight: 600,
            letterSpacing: "0.02em",
            lineHeight: 1.2
          }}
        >
          Born from Emirati soil, our roots run deep
        </p>
        <p
          className="text-fade uppercase text-black text-[16px] md:text-[18px] lg:text-[22px]"
          style={{
            fontFamily: "'Almarai', sans-serif",
            fontWeight: 600,
            letterSpacing: "0.02em",
            lineHeight: 1.2
          }}
        >
          and our vision soars high
        </p>
      </div>

      {/* Large Screens (Desktop) */}
      <div className="hidden lg:block">
        <div className="h-screen relative">
          <div className="absolute inset-0 z-10">
            <div className="sticky top-0 h-screen">
              <svg
                className="absolute inset-0 pointer-events-none"
                width="100%"
                height="100%"
              >
                <defs>
                  <mask
                    id="text-mask"
                    x="0"
                    y="0"
                    width="100%"
                    height="100%"
                    maskUnits="userSpaceOnUse"
                  >
                    <rect x="0" y="0" width="100%" height="100%" fill="white" />
                    <text
                      ref={textRef}
                      x="0"
                      y="60%"
                      dominantBaseline="middle"
                      fontSize="54vw"
                      textAnchor="start"
                      fontWeight="bold"
                      fontFamily="inherit"
                      fill="black"
                      className="whitespace-nowrap"
                    >
                      Infocus Media
                      <tspan fontSize="20vw" dy="-0.65em">
                        ®
                      </tspan>
                    </text>
                  </mask>
                </defs>
                <rect
                  x="0"
                  y="0"
                  width="100%"
                  height="100%"
                  fill="white"
                  mask="url(#text-mask)"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Medium screens and below - fallback */}
      {/* <div className="lg:hidden">
        <div className="h-screen relative">
          <div className="absolute inset-0 z-10">
            <div className="sticky top-0 h-screen">
              <svg
                className="absolute inset-0 pointer-events-none"
                width="100%"
                height="100%"
              >
                <defs>
                  <mask
                    id="text-mask-mobile"
                    x="0"
                    y="0"
                    width="100%"
                    height="100%"
                    maskUnits="userSpaceOnUse"
                  >
                    <rect x="0" y="0" width="100%" height="100%" fill="white" />
                    <text
                      x="0"
                      y="60%"
                      dominantBaseline="middle"
                      fontSize="54vw"
                      textAnchor="start"
                      fontWeight="bold"
                      fontFamily="inherit"
                      fill="black"
                      className="whitespace-nowrap"
                    >
                      Infocus Media
                      <tspan fontSize="20vw" dy="-0.65em">
                        ®
                      </tspan>
                    </text>
                  </mask>
                </defs>
                <rect
                  x="0"
                  y="0"
                  width="100%"
                  height="100%"
                  fill="white"
                  mask="url(#text-mask-mobile)"
                />
              </svg>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}