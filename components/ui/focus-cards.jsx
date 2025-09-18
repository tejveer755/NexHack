"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import Image from "next/image";

export const Card = React.memo(
  ({ card, index, hovered, setHovered }) => (
    <div
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "rounded-lg relative bg-gray-100 dark:bg-neutral-900 overflow-hidden w-full transition-all duration-300 ease-out flex flex-col",
        hovered !== null && hovered !== index && "blur-xs scale-[0.98]"
      )}
    >
      {/* Optimized Next.js Image */}
      <div className="relative w-full aspect-[1/1.5] md:aspect-[3/4]">
        <Image
          src={card.src}
          alt={card.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover rounded-lg"
        />
      </div>

      {/* Details Section */}
      <div
        className={cn(
          // mobile: static below image | desktop: overlay
          "w-full px-3 py-3 flex flex-col justify-end  text-white",
          "md:absolute md:inset-0 md:flex md:items-end md:py-4 md:px-4 md:transition-opacity md:duration-300",
          // hovered === index ? "opacity-100" : "md:opacity-0"
        )}
      >
        <div className="w-full min-h-[90px] md:min-h-[120px] bg-zinc-900/20 backdrop-blur-lg rounded-lg px-3 py-2 ">
          <h3 className="text-lg md:text-2xl font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200 truncate">
            {card.title}
          </h3>
          <div className="flex md:flex-row flex-col items-start mt-2 justify-between gap-2">
            <div className="text-xs md:text-sm text-wrap text-gray-200 space-y-1">
              <p className="truncate overflow-hidden text-wrap">{card.designation}</p>
              <p className="font-semibold truncate">@{card.company}</p>
            </div>
            <Link href={card.linkedin} target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-lg text-white hover:text-blue-400 transition" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
);

Card.displayName = "Card";

export function FocusCards({ cards }) {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 lg:gap-10 max-w-7xl mx-auto px-0 md:px-8 w-full">
      {cards.map((card, index) => (
        <Card
          key={card.title}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
        />
      ))}
    </div>
  );
}
