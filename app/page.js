"use client";
import { useState, useEffect } from "react";
import CaseStudies from "@/components/home/CaseStudies";
import ExpertiseSection from "@/components/home/ExpertiseSection";
import Footer from "@/components/home/Footer";
import FooterGlobe from "@/components/home/FooterGlobe";
import HeroSection from "@/components/home/HeroSection";
import SpotLightClients from "@/components/home/SpotLightClients";
import TabletSection from "@/components/home/TabletSection";
import Location from "@/components/home/team/Location";
import SheikhCaseStudiesContainer from "@/components/home/team/PortraitSection";
import TeamSection from "@/components/home/team/TeamSection";
import TopSection from "@/components/home/TopSection";
import TransformGlobe from "@/components/home/TransformGlobe";
import WorkSection from "@/components/home/WorkSection";
import Loader from "@/components/Loader";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Hide loader after 5 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full">
      {/* Main Content */}
      <div className={`transition-opacity duration-700 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <div className="hidden lg:block">
          <HeroSection/>
        </div>
        <TabletSection/>
        <TopSection/>
        <WorkSection/>
        <SpotLightClients/>
        {/* <ExpertiseSection/>     */}
        <SheikhCaseStudiesContainer />
        <TransformGlobe/>    
        <TeamSection/>
        <Location/>
        <FooterGlobe/>
        <Footer/>
      </div>

      {/* Simple Loader */}
      {isLoading && (
        <div className="fixed inset-0 w-full h-full bg-white z-50 flex items-center justify-center">
          <div className="text-center">
            <img 
              src="/logo-black.png" 
              alt="Loading..." 
              className="w-32 h-auto md:w-40 mx-auto mb-6 animate-pulse"
            />
            <p className="text-xl md:text-2xl font-semibold text-gray-800">
              Loading
              <span className="inline-block animate-bounce ml-1">.</span>
              <span className="inline-block animate-bounce ml-0.5" style={{animationDelay: '0.2s'}}>.</span>
              <span className="inline-block animate-bounce ml-0.5" style={{animationDelay: '0.4s'}}>.</span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}