"use client"

import { useEffect, useState } from "react"
import { motion, useAnimation } from "framer-motion"
import CountUp from "./ui/CountUp"

export default function Loading() {
  const [progress, setProgress] = useState(0)
  const controls = useAnimation()

  useEffect(() => {
    const duration = 12 // Total duration in seconds (increased from 6 to 18 for 3x slower)
    const interval = 50 // Update interval in milliseconds

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + 100 / ((duration * 500) / interval)
        if (next >= 100) {
          clearInterval(timer)
          return 100
        }
        return next
      })
    }, interval)

    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    controls.start({ width: `${progress}%` })
  }, [progress, controls])

  return (
    <div className="fixed inset-0 bg-black z-50 flex flex-col items-center justify-center">

      <div className=" text-white py-12">
        <div className="container mx-auto px-6 text-center">
          <img
            src="/nexhacklogo.png"
            alt="NexHack logo"
            className="w-[200px] md:w-[300px]  max-w-full h-auto mx-auto"
          />
          <p className="text-gray-400 mt-2">24-Hour Innovation Challenge</p>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <CountUp
          from={0}
          to={101}
          duration={3.8}
          className="text-7xl  font-bold"
        />%
      </div>
    </div>
  )
}
