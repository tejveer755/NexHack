'use client'
import React from 'react'
import { ParallaxScroll } from './ui/ParallaxScroll '
import { InfiniteMovingCards } from './ui/infinite-moving-cards'
import { useRouter } from 'next/navigation'

const problemStatements = [
    {
        "id": 1,
        "title": "Healthcare Assistant",
        "description": "Build an AI solution that helps patients monitor their health, schedule appointments, or get preliminary diagnostics through chatbots or wearable data analysis."
    },
    {
        "id": 2,
        "title": "Smart Agriculture Advisor",
        "description": "Create an AI system that analyzes soil, weather, and crop data to provide farmers with actionable insights to increase yield and reduce resource use."
    },
    {
        "id": 3,
        "title": "Personal Finance Manager",
        "description": "Develop an AI tool that helps users track expenses, budget smartly, and get investment advice tailored to their financial goals."
    },
    {
        "id": 4,
        "title": "Disaster Management",
        "description": "Design an AI platform that predicts natural disasters like floods or earthquakes early and suggests evacuation plans or resource allocation."
    },
    {
        "id": 5,
        "title": "Accessibility Tools",
        "description": "Build AI applications that assist people with disabilities — e.g., speech-to-text for the hearing impaired or navigation aids for visually impaired users."
    },
    {
        "id": 6,
        "title": "Waste Management System",
        "description": "Create a solution using AI to optimize waste collection routes, sort recyclables automatically, or reduce landfill waste."
    },
    {
        "id": 7,
        "title": "Mental Health Support",
        "description": "Develop an AI companion that offers mental wellness support through mood tracking, mindfulness exercises, or connecting users to professionals when needed."
    },
    {
        "id": 8,
        "title": "Smart Transportation",
        "description": "Build an AI system that optimizes public transport routes, predicts traffic jams, or enhances ride-sharing efficiency."
    },
    {
        "id": 9,
        "title": "Energy Efficiency",
        "description": "Design AI models to monitor and reduce household or industrial energy consumption by smartly managing appliances and equipment."
    },
    {
        "id": 10,
        "title": "Education",
        "description": "Create personalized learning platforms using AI that adapt content and pace based on individual student performance and learning style."
    }
]

function ProblemStatements() {
    const router = useRouter();
    return (
        <section className="w-full min-h-screen bg-gradient-to-br from-transparent  to-transparent text-white py-16 px-4 md:px-12 lg:px-24">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-purple-400 via-blue-400 to-teal-300  bg-clip-text text-transparent pb-3">
                    Problem Statements
                </h2>
                <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
                    Explore real-world AI challenges that aim to solve societal, environmental, and technological problems.
                </p>
            </div>

            <div className="mx-auto w-full">
                <InfiniteMovingCards
                    items={problemStatements.slice(0, 5)}
                    direction="left"
                    speed="slow"
                />
                <InfiniteMovingCards
                    items={problemStatements.slice(5)}
                    direction="right"
                    speed="slow"
                />
            </div>
            <div className="mt-12 flex justify-center">
  <div className="relative group">
    {/* Gradient Border */}
    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 blur-sm opacity-75 group-hover:opacity-100 transition duration-300"></div>

    {/* Content Capsule */}
    <div className="relative rounded-full px-5 py-2 text-sm md:text-base text-center bg-zinc-900 text-white font-medium shadow-md border border-transparent group-hover:border-zinc-800 transition-all duration-300">
      Open Innovation: Develop an AI solution beyond the listed challenges <br /> anything impactful, creative, and rooted in real-world needs.
    </div>
  </div>
  
</div>
<div className="p-10 flex items-center justify-center">
  <button className="p-[3px] relative" onClick={() => router.push('/guidelines')}>
    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
    <div className="px-8 py-2 bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent">
      Check Rules and Regulations
    </div>
  </button>
</div>


        </section>
    )
}

export default ProblemStatements