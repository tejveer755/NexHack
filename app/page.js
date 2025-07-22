import HeroBackground from "@/components/HeroBackground";
import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import HackathonFeatures from "@/components/HackathonFeatures";
import { HackathonTimeline } from "@/components/HackathonTimeline";
import Mentors from "@/components/Mentors";
import SponsorsSection from "@/components/SponsorsSection";
import PrizeSection from "@/components/PrizeSection";
import OurTeam from "@/components/OurTeam";
import { FaQSection } from "@/components/FaQSection";

function Page() {
  return (
    <div className="relative">
      <Navbar />
      <HeroBackground />
      <HeroSection />
      <HackathonFeatures/>
      <HackathonTimeline/>
      <PrizeSection/>
      <Mentors/>
      <SponsorsSection/>
      <OurTeam/>
      <FaQSection/>
      <div className="flex items-center justify-center h-[100vh]"></div>
    </div>
  );
}

export default Page;
