'use client'
import HeroBackground from "@/components/ui/HeroBackground";
import React, { useEffect, useState } from "react";
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
import Loading from '@/app/rules/loading'


function Page() {
  const [mounted, setMounted] = useState(false)
    const [loading, setLoading] = useState(true)
  
    useEffect(() => {
      setMounted(true)
      const timer = setTimeout(() => {
        setLoading(false)
      }, 2000) // Show loading for 2 seconds
  
      return () => clearTimeout(timer)
    }, [])
  
    if (!mounted) return null
    if (loading) return <Loading />
  return (
    <div className="relative scroll-smooth">
      <Navbar />
      <HeroBackground />
      <HeroSection />
      <HackathonFeatures/>
      <ProblemStatements/>
      <HackathonTimeline/>
      <PrizeSection/>
      <Mentors/>
      <SponsorsSection/>
      <CallToAction/>
      <OurTeam/>
      <FaQSection/>
      <Footer/>
    </div>
  );
}

export default Page;
