"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import GlassSurface from "./ui/GlassSurface"; // Assuming this is a custom component

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="text-black dark:text-white p-4 px-6 sticky top-4 z-50 w-full">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-0 relative">
        {/* Logo / Title */}
        <h1 className="text-2xl font-bold z-10 text-center md:text-left">
          NexverseIITM
        </h1>

        {/* Nav Links - Centered on desktop */}
        <div className="flex justify-center md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
          <GlassSurface
            width={600}
            height={50}
            blur={20}
            displace={1}
            brightness={60}
            opacity={0.8}
            className="w-fit"
          >
            <ul className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 px-4 py-2 md:py-0 text-sm md:text-base">
              <li className="cursor-pointer">Home</li>
              <li className="cursor-pointer">About</li>
              <li className="cursor-pointer">Timeine</li>
              <li className="cursor-pointer">Prizes</li>
              <li className="cursor-pointer">Mentors</li>
              <li className="cursor-pointer">Team</li>
              <li className="cursor-pointer">Sponsors</li>
              <li className="cursor-pointer">FaQ</li>
            </ul>
          </GlassSurface>
        </div>

        {/* Theme Toggle - Right side */}
        {/* {mounted && (
          <div className="flex justify-end">
            <GlassSurface
              width={60}
              height={50}
              blur={20}
              displace={1}
              brightness={60}
              opacity={0.8}
              className="cursor-pointer"
            >
              <button
                onClick={toggleTheme}
                className="w-full h-full flex items-center justify-center cursor-pointer text-sm"
              >
                {theme === "dark" ? "Light" : "Dark"}
              </button>
            </GlassSurface>
          </div>
        )} */}
      </div>
    </div>
  );
};

export default Navbar;
