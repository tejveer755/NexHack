'use client';
import React from 'react';
import {
  FaClock,
  FaTrophy,
  FaUserGroup,
  FaLink,
} from 'react-icons/fa6';
import { MagicCard } from '@/components/ui/MagicCard';
// import { Particles } from './Particles';
import { motion } from 'framer-motion';

// --- Feature data ---
const features = [
  {
    id: 1,
    title: "Around The Clock Innovation",
    description:
      "24 hours of pure, caffeinated creation. Go from a spark of an idea to a working prototype. It's a marathon of code, creativity, and conviction.",
    Icon: FaClock,
    className: "lg:col-span-2 lg:row-span-5",
    gradientColor: "#462254",
    gradientFrom: "#1e40af",
    gradientTo: "#3b82f6",
  },
  {
    id: 2,
    title: "Win Big",
    description:
      "Massive prizes, cutting-edge gadgets, and exclusive swag for all participants.",
    Icon: FaTrophy,
    className: "lg:row-span-3 lg:col-start-3",
    gradientFrom: "#a21caf",
    gradientTo: "#e879f9",
  },
  {
    id: 3,
    title: "Team Up",
    description:
      "Meet brilliant minds, form a team, and create something truly epic together.",
    Icon: FaUserGroup,
    className: "lg:col-span-2 lg:row-span-2 lg:col-start-3 lg:row-start-4",
    gradientColor: "#0c4a6e",
    gradientFrom: "#06b6d4",
    gradientTo: "#67e8f9",
  },
  {
    id: 4,
    title: "Meet the Pros",
    description:
      "Network with industry mentors, recruiters, and top-tier tech leaders.",
    Icon: FaLink,
    className: "lg:row-span-3 lg:col-start-4 lg:row-start-1",
    gradientColor: "#4c0519",
    gradientFrom: "#db2777",
    gradientTo: "#f9a8d4",
  },
];

// --- Feature Card Component ---
const FeatureCard = ({ feature }) => {
  const { Icon } = feature;

  return (
    <MagicCard
      gradientColor={feature.gradientColor}
      gradientOpacity={0.2}
      gradientSize={300}
      gradientFrom={feature.gradientFrom}
      gradientTo={feature.gradientTo}
      className={`flex flex-col justify-end p-6 border border-slate-700/40 rounded-2xl 
        transition-all duration-300 ease-in-out
        hover:scale-[1.03] bg-transparent relative ${feature.className}`}
    >
      <Icon className="w-8 h-8 md:w-10 md:h-10 text-white mb-auto" strokeWidth={1.5} />
      <div>
        <h2 className="text-xl md:text-2xl font-bold mt-4 text-white">{feature.title}</h2>
        <p className="text-slate-400 text-sm md:text-base mt-2">
          {feature.description}
        </p>
      </div>
    </MagicCard>
  );
};

// --- Main Section ---
const HackathonFeatures = () => {
  return (
    <section className="relative py-12 sm:py-16 lg:py-20 mt-4 overflow-hidden text-white" id='about'>
      {/* <Particles className="absolute inset-0 -z-10" /> */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold sm:text-4xl lg:text-5xl">
            Why Join Our Hackathon?
          </h2>
          <p className="mt-4 text-lg text-zinc-300 max-w-3xl mx-auto">
            Experience a weekend of intense learning, building, and networking. Here’s what makes our event unmissable.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 lg:grid-rows-5 gap-4 lg:min-h-[60vh]">
          {features.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HackathonFeatures;
