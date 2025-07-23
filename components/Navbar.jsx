"use client";

import { useEffect, useState } from "react";
import GlassSurface from "./ui/GlassSurface";
import { Menu } from "lucide-react";
import {
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenu,
} from "./ui/dropdown-menu";
import Link from "next/link";

const Navbar = () => {
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const breakpoint = 850;

  useEffect(() => {
    setMounted(true);
    const handleResize = () => setIsMobile(window.innerWidth < breakpoint);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const menuItems = [
    "Home",
    "About",
    "Schedule",
    "Prizes",
    "Mentors",
    "Team",
    "Sponsors",
    "FAQ",
  ];

  return (
    <div className="text-white p-4 px-6 sticky top-4 z-50 w-full ">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-0 relative">
        {/* Desktop Nav */}
        {!isMobile && (
          <>
            <h1 className="text-2xl font-bold z-10 text-center md:text-left">
              NexverseIITM
            </h1>
            <div className="flex justify-center lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2">
              <GlassSurface
                width={600}
                height={50}
                blur={20}
                displace={1}
                brightness={60}
                opacity={0.8}
                className="w-fit"
              >
                <ul className="flex items-center space-x-6 px-4 py-2 text-base">
                  {menuItems.map((item) => (
                    <li key={item} className="cursor-pointer">
                      <Link href={`/#${item.toLowerCase()}`}>
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </GlassSurface>
            </div>
          </>
        )}

        {/* Mobile Nav */}
        {isMobile && (
          <div className="flex flex-row items-center justify-between w-full mt-2">
            <h1 className="text-2xl font-bold z-10 text-center md:text-left">
              NexverseIITM
            </h1>

            <DropdownMenu>
              <DropdownMenuTrigger>
                <Menu className="text-white text-lg" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-transparent border-0">
                <GlassSurface
                  width={300}
                  height={menuItems.length * 50}
                  blur={20}
                  displace={10}
                  brightness={60}
                  opacity={0.9}
                  className="w-fit"
                >
                  <ul className="flex flex-col items-center gap-6 px-4 py-3 text-base">
                    {menuItems.map((item) => (
                      <li key={item} className="cursor-pointer">
                        <Link href={`/#${item.toLowerCase()}`}>
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </GlassSurface>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
