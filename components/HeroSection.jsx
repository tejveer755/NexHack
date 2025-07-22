import React from 'react'
import HeroBackground from "./HeroBackground";
import { OrbitingCircles } from "./ui/OrbitingCircles";
import {
    FaReact,
    FaNodeJs,
    FaHtml5,
    FaJs,
    FaPython,
    FaDocker,
    FaAws,
} from "react-icons/fa";
import {
    SiMongodb,
    SiFirebase,
    SiTensorflow,
    SiOpencv,
    SiVercel,
    SiPostgresql,
} from "react-icons/si";
function HeroSection() {
    return (
        <div className="relative">
            {/* Hero Section */}
            <div className="flex flex-col lg:flex-row items-center justify-center min-h-[80vh] px-6 gap-12">
                {/* Left Content */}
                <div className="w-full lg:w-1/2 flex flex-col justify-start gap-6">
                    <h1 className="dark:text-white text-black font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-start">
                       Nexhack
                    </h1>

                    <h2 className="dark:text-white text-black font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique,
                        libero. Lorem ipsum dolor sit amet consectetur adipisicing.
                    </h2>

                    <button className="bg-white text-black px-6 py-3 rounded-full max-w-fit mt-4 hover:bg-gray-200 transition text-sm sm:text-base">
                        Register Now
                    </button>
                </div>

                {/* Orbiting Tech Icons */}
                <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] w-full lg:w-1/2 flex items-center justify-center overflow-visible">
                    <OrbitingCircles radius={200} iconSize={40}>
                        <FaReact className="text-cyan-400 text-4xl sm:text-5xl" />
                        <FaNodeJs className="text-green-600 text-4xl sm:text-5xl" />
                        <SiMongodb className="text-green-500 text-4xl sm:text-5xl" />
                        <FaHtml5 className="text-orange-500 text-4xl sm:text-5xl" />
                        <FaDocker className="text-blue-500 text-4xl sm:text-5xl" />
                        <FaJs className="text-yellow-500 text-4xl sm:text-5xl" />
                    </OrbitingCircles>

                    <OrbitingCircles radius={110} reverse iconSize={40}>
                        <SiFirebase className="text-yellow-400 text-4xl sm:text-5xl" />
                        <FaPython className="text-blue-500 text-4xl sm:text-5xl" />
                        <SiTensorflow className="text-orange-500 text-4xl sm:text-5xl" />
                        <SiOpencv className="text-blue-300 text-4xl sm:text-5xl" />
                        <FaAws className="text-orange-400 text-4xl sm:text-5xl" />
                        <SiVercel className="text-black text-4xl sm:text-5xl" />
                        <SiPostgresql className="text-sky-700 text-4xl sm:text-5xl" />
                    </OrbitingCircles>
                </div>
            </div>
        </div>

    )
}

export default HeroSection