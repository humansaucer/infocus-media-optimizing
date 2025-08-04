"use client";
import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";

const FooterGlobe = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    const section = sectionRef.current;
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen bg-white overflow-hidden"
      style={{ zIndex: 1 }}
    >
      {/* Fade-in/out text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 transition-opacity duration-1000 ease-out">
        <p
          className={`text-[16px] md:text-[18px] lg:text-[22px] font-bold uppercase tracking-widest mb-1 sub-heading transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "0.2s" }}
        >
          HAVE PROJECT IN MIND?
        </p>

        <div className="flex flex-col items-center justify-center leading-[.95]">
          {["let's create", "something great", "together!"].map((text, i) => (
            <h1
              key={i}
              className={`text-[50px] md:text-[70px] lg:text-[90px] font-bold transition-all duration-1000 ease-out ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${0.4 + i * 0.2}s` }}
            >
              {text}
            </h1>
          ))}
        </div>

        <div className="text-center mt-4">
          <Link
            href="/contacts"
            className={`bg-black text-[16px] md:text-[18px] lg:text-[22px] text-white px-4 py-2 cursor-pointer hover:bg-gray-200 hover:text-black hover:scale-105 transition-all duration-300 rounded-md font-medium inline-block ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{
              transitionDelay: "1s",
              transitionDuration: "1000ms",
              transitionTimingFunction: "ease-out",
            }}
          >
            let's Go
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FooterGlobe;
