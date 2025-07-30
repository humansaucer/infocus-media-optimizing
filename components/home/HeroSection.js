"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const iframeRef = useRef(null);
  const mobileTextRef = useRef(null);
  const tabletTextRef = useRef(null);
  const [isHeroLoaded, setIsHeroLoaded] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  // Handle iframe loading
  useEffect(() => {
    const iframe = iframeRef.current;
    
    if (iframe) {
      const handleIframeLoad = () => {
        setTimeout(() => {
          setIsHeroLoaded(true);
        }, 1500);
      };

      iframe.addEventListener('load', handleIframeLoad);
      
      return () => {
        iframe.removeEventListener('load', handleIframeLoad);
      };
    }
  }, []);

  // GSAP animations for large screens
  useEffect(() => {
    const section = sectionRef.current;
    const text = textRef.current;

    if (!section || !text) return;

    // Only run GSAP on large screens
    if (window.innerWidth < 1024) return;

    requestAnimationFrame(() => {
      const textWidth = text.getComputedTextLength();
      const viewportWidth = window.innerWidth;

      const startX = 0;
      const endX = -textWidth + viewportWidth * 0.9;

      gsap.set(text, { attr: { x: startX } });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "+=4000",
            scrub: 1,
            pin: true,
            anticipatePin: 1,
          },
        })
        .to(text, {
          attr: { x: endX },
          ease: "power1.out"
        });
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
    const video = document.querySelector('video');
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
    >
      {/* Large Screens (Desktop) */}
      <div className="h-screen">
        <video
          ref={iframeRef}
          className="absolute inset-0 z-0 w-full h-full object-cover"
          src="/media-hero.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          onLoadedData={handleVideoLoad}
        />

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

      {/* Tablet Screens */}
      {/* <div 
        className="hidden md:flex lg:hidden min-h-[160vh] h-screen bg-white flex-col justify-center items-center"
      >
        <div className="mt-[-17vh] flex justify-center tablet-text">
          <h1 className="text-[55vw] font-bold text-black rotate-90 leading-none">
            Infocus Media <span className="text-[12vw] align-super">®</span>
          </h1>
        </div>
      </div> */}

      {/* Mobile Screens */}
      {/* <div 
        className="md:hidden min-h-[330vh] h-screen bg-white flex flex-col justify-center items-center"
      >
        <div className="flex mt-[-5vh] justify-center mobile-text">
          <div className="transform rotate-90 origin-center">
            <h1 className="text-[100vw] font-bold text-black whitespace-nowrap">
              Infocus Media <span className="text-[20vw] align-super">®</span>
            </h1>
          </div>
        </div>
      </div> */}

      
    </div>
  );
}