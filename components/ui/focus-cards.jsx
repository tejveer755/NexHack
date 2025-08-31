"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";

export const Card = React.memo(
  ({
    card,
    index,
    hovered,
    setHovered,
  }) => (
    <div
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "rounded-lg relative bg-gray-100 dark:bg-neutral-900 overflow-hidden aspect-[1/1.5] md:aspect-[3/4]  w-full transition-all duration-300 ease-out",
        hovered !== null && hovered !== index && "blur-xs scale-[0.98]"
      )}
    >
      <img
        src={card.src}
        alt={card.title}
        className="object-cover h-full w-full absolute inset-0"
      />
      <div
        className={cn(
          "absolute inset-0  flex items-end py-4 px-4 transition-opacity duration-300",
          // hovered === index ? "opacity-100" : "opacity-0"
        )}
      >
        <div className="w-full rounded-lg px-3 py-2  bg-zinc-900/30 backdrop-blur-2xl">
          <h3 className="text-xl md:text-2xl font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200">
            {card.title}
          </h3>
          <div className="flex items-center mt-2 justify-between">
            <div className="text-sm text-gray-200 space-y-1">
              <p>{card.designation}</p>
              <p className="font-semibold">{card.company}</p>
            </div>
            <Link href={card.linkedin}><FaLinkedin className="text-lg tetx-white" /></Link>
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
    <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 lg:gap-10 max-w-7xl mx-auto md:px-8 w-full">
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
