'use client'
import React from "react";
import { motion } from "framer-motion";
import CountUp from "./ui/CountUp";

// Card component
const boxClasses =
  "flex flex-col items-start justify-center p-6 shadow-lg transition-transform duration-300";

export function PrizeCard({
  title,
  amount,
  extra,
  description,
  className = "",
  gradient = "bg-gradient-to-tr from-purple-700 via-indigo-800 to-blue-700", // dark-only gradients
  textSize = "text-5xl md:text-6xl"
}) {
  return (
    <motion.div className={`${boxClasses} ${className}`}>
      <h3 className="text-2xl font-semibold text-white mb-2">{title}</h3>
      {amount ? (
        <p className={`${gradient} bg-clip-text text-transparent ${textSize} font-bold`}>
          ₹<CountUp
            from={0}
            to={amount}
            direction="up"
            delay={.6}
            duration={1}
          />k
          {extra && <span className="text-xl md:text-2xl text-white"> {extra}</span>}
        </p>
      ) : (
        <p className="text-neutral-400">{description}</p>
      )}
    </motion.div>
  );
}

// Section component
export default function PrizeSection() {
  return (
    <div className="max-w-5xl min-h-screen mx-auto py-32 px-6 md:px-20 text-white">
      <h2 className="text-5xl md:text-6xl text-center font-extrabold mb-32 bg-gradient-to-tr from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent border-b border-zinc-700 w-fit pb-3 mx-auto">
        Hackathon Prizes
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-5 gap-4 md:gap-0">
        <PrizeCard
          title="1st Prize"
          amount={15}
          extra="+ Goodies"
          textSize="text-6xl md:text-8xl"
          gradient="bg-gradient-to-tr from-yellow-400 via-yellow-500 to-orange-400"
          className="md:col-span-2 md:row-span-3 md:border-b md:border-r border-zinc-700"
        />
        <PrizeCard
          title="2nd Prize"
          amount={10}
          extra="+ Goodies"
          textSize="text-4xl md:text-6xl"
          gradient="bg-gradient-to-tr from-gray-400 via-gray-500 to-gray-600"
          className="md:col-span-2 md:row-span-2 md:col-start-3 md:border-b border-zinc-700"
        />
        <PrizeCard
          title="3rd Prize"
          amount={5}
          extra="+ Goodies"
          textSize="text-3xl md:text-4xl"
          gradient="bg-gradient-to-tr from-orange-300 via-pink-400 to-red-500"
          className="md:col-span-2 md:row-span-2 md:col-start-3 md:row-start-3 md:border-l border-zinc-700"
        />
        <PrizeCard
          title="For All Participants"
          description="Certificates for all team members"
          gradient="bg-gradient-to-tr from-green-400 via-teal-400 to-emerald-500"
          className="md:col-span-2 md:row-span-2 md:row-start-4 md:border-r border-zinc-700"
        />
      </div>
    </div>
  );
}
