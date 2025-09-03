'use client';

import { useEffect, useState } from "react";
import GlassSurface from "./ui/GlassSurface";
import { Menu, X } from "lucide-react";
import {
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenu,
} from "./ui/dropdown-menu";
import Link from "next/link";
import { InteractiveHoverButton } from "@/components/magicui/InteractiveHoverButton";
import Image from "next/image";
import Guidelines from "./Guidelines";

const Navbar = () => {
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openGuidelines, setOpenGuidelines] = useState(false);
  const breakpoint = 1050;

  useEffect(() => {
    setMounted(true);
    const handleResize = () => setIsMobile(window.innerWidth < breakpoint);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (openGuidelines) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [openGuidelines]);

  const menuItems = [
    "Home",
    "About",
    "Schedule",
    "Prizes",
    "Judges",
    "Sponsors",
    "FAQ",
  ];

  const handleCloseModal = () => {
    setOpenGuidelines(false);
  };

  const handleOpenGuidelines = () => {
    setOpenGuidelines(true);
    setMenuOpen(false); // Close mobile menu when opening guidelines
  };

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
                      <li key={item} className="cursor-pointer" >
                        <Link href={href}>
                          {item}
                        </Link>
                      </li>
                    );
                  })}
                  <button className="cursor-pointer" onClick={handleOpenGuidelines}>
                    Guidelines
                  </button>
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

        {/* Guidelines Modal */}
        {openGuidelines && (
          <div className="fixed w-full h-full z-50 inset-0 bg-black/30 backdrop-blur-lg">
            <div className="h-full overflow-y-auto p-0 md:p-10">
              <div className="relative max-w-7xl mx-auto">
                {/* Close Button */}
                <button
                  onClick={handleCloseModal}
                  className="fixed top-6 right-6 z-60 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 rounded-full p-2 transition-all duration-200"
                  aria-label="Close Guidelines"
                >
                  <X className="w-6 h-6 text-white" />
                </button>
                
                <div className="rounded-3xl">
                  <Guidelines />
                </div>
              </div>
            </div>
          </div>
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
                    <div className="border border-white/20 bg-white/5 p-2 backdrop-blur-lg w-72 rounded-2xl">
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
                        
                        {/* Guidelines Button for Mobile */}
                        <li className="cursor-pointer" onClick={handleOpenGuidelines}>
                          <button>Guidelines</button>
                        </li>
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