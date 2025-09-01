"use client";

import { cn } from "@/lib/utils"
import React, { useEffect, useState } from "react"

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
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
        containerRef.current.style.setProperty("--animation-duration", "80s")
      }
    }
  }

  const isVertical = direction === "up" || direction === "down"

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl mx-auto overflow-hidden",
        isVertical
          ? "[mask-image:linear-gradient(to_bottom,transparent,white_10%,white_90%,transparent)] max-h-[600px]"
          : "[mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]",
        className,
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "shrink-0 gap-4 py-4",
          isVertical ? "flex flex-col h-max min-h-full" : "flex w-max min-w-full flex-nowrap",
          start && (isVertical ? "animate-scroll-vertical" : "animate-scroll"),
          pauseOnHover && "hover:[animation-play-state:paused]",
        )}
      >
        {items.map((item, idx) => (
          <li
            className="relative w-[350px] max-w-full shrink-0 rounded-2xl border border-b-0 px-8 py-6 md:w-[450px] border-zinc-700 bg-[linear-gradient(180deg,#27272a,#20202070)]"
            key={idx}
          >
            <div className="flex flex-col-reverse gap-4 items-start justify-between">
              <span className="relative z-20 text-sm leading-[1.6] font-normal text-gray-100">{item.description}</span>
              <div className="relative z-20 mt-6 flex flex-row items-start">
                <span className="text-xl leading-[1.6] font-normal text-gray-400">{item.title}</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
