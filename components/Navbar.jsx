'use client';

import { useEffect, useState } from "react";
import GlassSurface from "./ui/GlassSurface";
import { Menu } from "lucide-react";
import {
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenu,
} from "./ui/dropdown-menu";
import Link from "next/link";
import { InteractiveHoverButton } from "@/components/magicui/InteractiveHoverButton"; // Make sure this path is correct
import { FaHandPointUp } from "react-icons/fa";
import Image from "next/image";
const Navbar = () => {
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const breakpoint = 1050;

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
    "Judges",
    "Sponsors",
    "Guidelines",
    "FAQ",
  ];

  return (
    <div className="text-white p-4 px-6 sticky top-4 z-50 w-full">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-0 relative">
        {/* Desktop Nav */}
        {!isMobile && (
          <>
            {/* <GlassSurface  width={100}
                height={70}
                blur={20}
                displace={5}
                brightness={80}
                opacity={0.8}
                className="w-fit" > */}
            <div className="w-24 h-auto z-10 text-center">
              <Image
                src="/nexverseiitmlogo.png"
                alt="nexverse-iitm logo"
                width={96} // 24 * 4 = 96px (Tailwind w-24)
                height={48} // Estimated height — adjust if needed
                className="w-full h-auto object-contain"
              />
            </div>

            {/* </GlassSurface> */}

            <div className="flex justify-center lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2">
              <GlassSurface
                width={620}
                height={50}
                blur={20}
                displace={5}
                brightness={80}
                opacity={0.8}
                className="w-fit"
              >
                <ul className="flex items-center space-x-6 px-4 py-2 text-base">
                  {menuItems.map((item) => {
                    const isGuidlinesPage = item.toLowerCase() === "guidelines";
                    const href = isGuidlinesPage ? "/guidelines" : `/#${item.toLowerCase()}`;

                    return (
                      <li key={item} className="cursor-pointer" onClick={() => setMenuOpen(false)}>
                        <Link href={href}>
                          {item}
                        </Link>
                      </li>
                    );
                  })}

                </ul>
              </GlassSurface>
            </div>

            {/* Register Button for Desktop */}
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
              {/* <div className="absolute -left-8 top-1/2 transform -translate-y-1/2 rotate-90 text-2xl animate-bounce"><FaHandPointUp/></div> */}
              <Link href="https://nexhack.devfolio.co/overview" target="_blank">
                <InteractiveHoverButton >
                  <p className="rounded-full w-fit h-full  text-xl sm:text-base">
                    Registrations open!!
                  </p>
                </InteractiveHoverButton>
              </Link>
            </div>
          </>
        )}

        {/* Mobile Nav */}
        {isMobile && (
          <div className="flex flex-row items-center justify-between w-full -mt-4">
            <div className="mt-2 flex w-full flex-row items-center justify-between rounded-2xl border border-white/20 bg-white/5 p-2 backdrop-blur-md ">
              <div className="w-15 h-auto z-10 text-center">
                <img
                  src="/nexverseiitmlogo.png"
                  alt="nexverse-iitm logo"
                  className="w-full h-auto object-contain"
                />
              </div>

              <div className="flex items-center gap-2">
                {/* Register Button for Mobile */}

                <DropdownMenu open={menuOpen} onOpenChange={setMenuOpen} modal={false}>

                  <DropdownMenuTrigger >
                    <Menu className="text-white text-lg" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-transparent border-0 mr-8 mt-6">
                    <div
                      className="border border-white/20 bg-white/5 p-2 backdrop-blur-lg w-72 rounded-2xl"
                    >
                      <ul className="flex flex-col items-center gap-6 px-4 py-3 text-base">
                        {menuItems.map((item) => {
                          const isGuidlinesPage = item.toLowerCase() === "guidelines";
                          const href = isGuidlinesPage ? "/guidelines" : `/#${item.toLowerCase()}`;

                          return (
                            <li key={item} className="cursor-pointer" onClick={() => setMenuOpen(false)}>
                              <Link href={href}>
                                {item}
                              </Link>
                            </li>
                          );
                        })}

                      </ul>
                    </div>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
