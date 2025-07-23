import HeroBackground from "@/components/ui/HeroBackground";
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
import Footer from "@/components/Footer";

function Page() {
  return (
    <div className="relative scroll-smooth">
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
      <Footer/>
    </div>
  );
}

export default Page;
