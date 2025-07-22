'use client'
import React from 'react';
import { FaClock, FaTrophy, FaUserGroup, FaLink } from 'react-icons/fa6'; // Using Fa6 for more modern icons
import { MagicCard } from '@/components/ui/MagicCard'; // Assuming MagicCard component exists
import { useTheme } from 'next-themes'; // Assuming next-themes is set up
// import { Particles } from './Particles'; // Assuming Particles component exists
import {motion} from 'framer-motion'
// --- Data for the feature cards with per-card gradient customization ---
const features = [
  {
    id: 1,
    title: "Around The Clock Innovation",
    description: "24 hours of pure, caffeinated creation. Go from a spark of an idea to a working prototype. It's a marathon of code, creativity, and conviction.",
    Icon: FaClock,
    className: "lg:col-span-2 lg:row-span-5", // Grid classes for large screens
    gradientColor: "#462254", // dark blue
    gradientFrom: "#1e40af",
    gradientTo: "#3b82f6",
  },
  {
    id: 2,
    title: "Win Big",
    description: "Massive prizes, cutting-edge gadgets, and exclusive swag for all participants.",
    Icon: FaTrophy,
    className: "lg:row-span-3 lg:col-start-3", // Grid classes for large screens
    // gradientColor: "#4a044e", // dark purple
    gradientFrom: "#a21caf",
    gradientTo: "#e879f9",
  },
  {
    id: 3,
    title: "Team Up",
    description: "Meet brilliant minds, form a team, and create something truly epic together.",
    Icon: FaUserGroup,
    className: "lg:col-span-2 lg:row-span-2 lg:col-start-3 lg:row-start-4", // Grid classes for large screens
    gradientColor: "#0c4a6e", // dark cyan
    gradientFrom: "#06b6d4",
    gradientTo: "#67e8f9",
  },
  {
    id: 4,
    title: "Meet the Pros",
    description: "Network with industry mentors, recruiters, and top-tier tech leaders.",
    Icon: FaLink,
    className: "lg:row-span-3 lg:col-start-4 lg:row-start-1", // Grid classes for large screens
    gradientColor: "#4c0519", // dark pink
    gradientFrom: "#db2777",
    gradientTo: "#f9a8d4",
  },
];

// --- The Feature Card Component ---
// It now reads gradient colors from the feature prop.
const FeatureCard = ({ feature }) => {
  // useTheme hook is preserved as in your original code
  const { theme } = useTheme(); 
  const { Icon } = feature;

  return (
      <MagicCard
        gradientColor={theme === 'dark' ? feature.gradientColor : '#ffffff'}
        gradientOpacity={0.2}
        gradientSize={300}
        gradientFrom={feature.gradientFrom}
        gradientTo={feature.gradientTo}
        className={`flex flex-col justify-end p-6 border border-slate-700/40 rounded-2xl 
          transition-all duration-300 ease-in-out
          hover:scale-[1.03] bg-transparent relative ${feature.className}`}
      >
        <Icon className="w-8 h-8 md:w-10 md:h-10 text-white dark:text-white mb-auto" strokeWidth={1.5} />
        <div>
          <h2 className="text-xl md:text-2xl font-bold mt-4 text-black dark:text-white">
            {feature.title}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base mt-2">
            {feature.description}
          </p>
        </div>
      </MagicCard>
  );
};


// --- The Main Exported Component ---
const HackathonFeatures = () => {
  return (
    <section className="relative py-12 sm:py-16 lg:py-20 mt-4 overflow-hidden">
      {/* Optional: You can place your Particles component here for a background effect */}
      {/* <Particles className="absolute inset-0 -z-10" /> */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
            Why Join Our Hackathon?
          </h2>
          <p className="mt-4 text-lg text-slate-400 max-w-3xl mx-auto">
            Experience a weekend of intense learning, building, and networking. Here’s what makes our event unmissable.
          </p>
        </div>

        {/* --- Responsive Grid Container ---
          - Default: A single column for mobile devices.
          - lg breakpoint: Switches to the 4-column, 5-row grid for desktops.
          - The `lg:min-h-[60vh]` is preserved for desktop layout sizing.
        */}
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
