"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export const Announcement = ({
  items,
  direction = "left",
  speed = "normal",
  pauseOnHover = true,
  className,
}) => {
  const containerRef = React.useRef(null);
  const scrollerRef = React.useRef(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    addAnimation();
  }, []);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      // const scrollerContent = Array.from(scrollerRef.current.children);

      // scrollerContent.forEach((item) => {
      //   const duplicatedItem = item.cloneNode(true);
      //   scrollerRef.current?.appendChild(duplicatedItem);
      // });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (!containerRef.current) return;
    containerRef.current.style.setProperty(
      "--animation-direction",
      direction === "left" || direction === "up" ? "forwards" : "reverse"
    );
  };

  const getSpeed = () => {
    if (!containerRef.current) return;
    const duration =
      speed === "fast" ? "20s" : speed === "normal" ? "70s" : "1000s";
    containerRef.current.style.setProperty("--animation-duration", duration);
  };

  const isVertical = direction === "up" || direction === "down";

  const handleOpenPDF = (file) => {
    // ✅ Make sure this PDF exists in the /public folder
    window.open(`/${file}`, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-[95%] mx-auto overflow-hidden",
        isVertical
          ? "[mask-image:linear-gradient(to_bottom,transparent,white_10%,white_90%,transparent)] max-h-[600px]"
          : "[mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]",
        className
      )}
    >
    <div
  ref={scrollerRef}
  className={cn(
    "shrink-0 gap-4 py-4 flex w-max min-w-full flex-nowrap",
    start && (isVertical ? "animate-scroll-vertical" : "animate-scroll")
  )}
>
  {Array(3).fill(null).map((_, idx) => (
    <button
      key={idx}
      onClick={() => handleOpenPDF("ResultsNexHack1.0OnlineRound.pdf")}
      className="cursor-pointer bg-gradient-to-l from-amber-600 via-purple-600 to-fuchsia-700 rounded-3xl mr-3.5 px-4 py-4 text-white font-semibold text-sm md:text-xl inline-block"
    >
      ⚡ The Wait is Over – NexHack Online Results are Out! |
      <span className="text-stone-50 underline"> Click here</span> to check
      shortlisted teams.
    </button>
  ))}
</div>

    </div>
  );
};
