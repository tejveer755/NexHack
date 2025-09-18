"use client";

import { cn } from "@/lib/utils"
import Link from "next/link";
import React, { useEffect, useState } from "react"

export const Announcement = ({
  items,
  direction = "left",
  speed = "slow",
  pauseOnHover = true,
  className,
}) => {
  const containerRef = React.useRef(null)
  const scrollerRef = React.useRef(null)

  useEffect(() => {
    addAnimation()
  }, [])

  const [start, setStart] = useState(false)

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children)

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true)
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem)
        }
      })

      getDirection()
      getSpeed()
      setStart(true)
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left" || direction === "up") {
        containerRef.current.style.setProperty("--animation-direction", "forwards")
      } else {
        containerRef.current.style.setProperty("--animation-direction", "reverse")
      }
    }
  }

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s")
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s")
      } else {
        containerRef.current.style.setProperty("--animation-duration", "100s")
      }
    }
  }

  const isVertical = direction === "up" || direction === "down"

  return (
   <div
  ref={containerRef}
  className={cn(
    "scroller relative z-20 max-w-[95%] mx-auto overflow-hidden",
    isVertical
      ? "[mask-image:linear-gradient(to_bottom,transparent,white_10%,white_90%,transparent)] max-h-[600px]"
      : "[mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]",
    className,
  )}
>
  <div
    ref={scrollerRef}
    className={cn(
      "shrink-0 gap-4 py-4",
      "flex w-max min-w-full flex-nowrap",
      start && (isVertical ? "animate-scroll-vertical" : "animate-scroll"),
    )}
  >
    <Link
      href="/onlineRound"
      className="bg-gradient-to-r from-amber-600 via-purple-600 to-fuchsia-700 rounded-3xl mr-3.5 px-4 py-4 text-white font-semibold text-sm md:text-xl inline-block"
    >
      🚀 Online Round Update: Teams & assigned mentors list is out!(20th September)| Online Round Instructions <span className="text-stone-50 underline">Click here</span>
    </Link>

    <Link
      href="/onlineRound"
      className="bg-gradient-to-r from-amber-600 via-purple-600 to-fuchsia-700 rounded-3xl mr-3.5 px-4 py-4 text-white font-semibold text-sm md:text-xl inline-block"
    >
     🚀 Online Round Update: Teams & assigned mentors list is out!(20th September)| Online Round Instructions <span className="text-stone-50 underline">Click here</span>
    </Link>
  </div>
</div>

  )
}
