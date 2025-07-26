"use client";
import React, { useEffect, useState } from "react";
import HeroBackground from "@/components/ui/HeroBackground";
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
import CallToAction from "@/components/CallToAction";
import ProblemStatements from "@/components/ProblemStatements";
import Loading from "@/components/loading";

function Page() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem("hasVisited");

    if (hasVisited) {
      // Skip loading screen if visited before
      setLoading(false);
    } else {
      // Show loading only on first visit
      const timer = setTimeout(() => {
        setLoading(false);
        sessionStorage.setItem("hasVisited", "true");
      }, 2000); // Show loading for 2 seconds
      return () => clearTimeout(timer);
    }
  }, []);

  if (loading) return <Loading />;

  return (
    <div className="relative scroll-smooth">
      <Navbar />
      <HeroBackground />
      <HeroSection />
      <HackathonFeatures />
      <ProblemStatements />
      <HackathonTimeline />
      <PrizeSection />
      <Mentors />
      <SponsorsSection />
      <CallToAction />
      <OurTeam />
      <FaQSection />
      <Footer />
    </div>
  );
}

export default Page;
