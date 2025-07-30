"use client";

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
  

  return (
    <div className="relative w-full ">


      
      <div className="hidden lg:block">
        <HeroSection/>
      </div>

      
      <TabletSection/> 

      <TopSection/> 
      <WorkSection/>
      <SpotLightClients/> 
      <ExpertiseSection/>     
      <SheikhCaseStudiesContainer />
      <TransformGlobe/>    
      <TeamSection/>
      <Location/>
      
      <FooterGlobe/>
      
      <Footer/>
    </div>
  );
}