"use client";

import { useRef, useEffect } from "react";

const ExpertiseSection = () => {
  const videoRefs = [useRef(null), useRef(null), useRef(null)];

  useEffect(() => {
    videoRefs.forEach((ref) => {
      const video = ref.current;
      if (video) {
        video.currentTime = 0.5; // skip first half second

        const handleTimeUpdate = () => {
          if (video.duration - video.currentTime <= 1) {
            video.currentTime = 0.7; // loop back after last second
          }
        };

        video.addEventListener("timeupdate", handleTimeUpdate);

        return () => {
          video.removeEventListener("timeupdate", handleTimeUpdate);
        };
      }
    });
  }, []);

  return (
    <section className="relative top-0 w-full bg-white pt-20 mb-20">
      <div className="w-full overflow-hidden">
        <div className="text-center mb-16">
          <h2 className="text-[40px] md:text-[64px] font-bold mb-6">
            CORE EXPERTISE
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center w-full overflow-hidden">
          {["Visuals.mp4", "Animation2.mp4", "Production_3.mp4"].map(
            (src, i) => (
              <div key={i} className="w-full lg:w-1/3 h-screen">
                <video
                  ref={videoRefs[i]}
                  src={`/expertise-animations/${src}`}
                  className="w-full h-full object-cover"
                  autoPlay
                  muted
                  playsInline
                />
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
