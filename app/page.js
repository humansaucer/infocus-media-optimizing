"use client";
import { useEffect, useState } from "react";
import Lenis from "@studio-freight/lenis";
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
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.5, // feel free to tweak for more smoothness
      easing: (t) => (t), // default ease
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <div className="relative w-full">
      <div
        className={`transition-opacity duration-700 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
      >
        <div className="hidden lg:block">
          <HeroSection />
        </div>
        <TabletSection />
        {/* <TopSection /> */}
        <WorkSection />
        <SpotLightClients />
        {/* <ExpertiseSection />     */}
        <SheikhCaseStudiesContainer />
        <TransformGlobe />
        <TeamSection />
        <Location />
        <FooterGlobe />
        <Footer />
      </div>

      {/* Loader */}
      {isLoading && (
        <div className="fixed inset-0 w-full h-full bg-white z-50 flex items-center justify-center">
          <Loader />
        </div>
      )}
    </div>
  );
}
