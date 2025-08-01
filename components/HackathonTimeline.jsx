"use client";

import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { useRouter } from "next/navigation";
import Link from "next/link";
export function HackathonTimeline() {
  const router = useRouter();

  const data = [
    {
      title: "Round 1: Online & Shortlisting",
      date: "September 20, 2025",
      content: (
        <div className="text-xs sm:text-sm md:text-base text-neutral-300">
          <p className="mb-3">
            The first round of NexHack 1.0 will be conducted online to evaluate initial ideas and shortlist teams for the offline hackathon. All registered teams  will participate in this virtual round.
          </p>
          <ul className="list-disc space-y-1.5 pl-4">
            <li><span className="font-semibold">10:00 AM – 4:00 PM:</span> Idea Presentation Sessions (Google Meet)</li>
            <li><span className="font-semibold">4:00 PM – 6:00 PM:</span> Submission Window</li>
            <li><span className="font-semibold">6:00 PM – 10:00 PM:</span> Preliminary Evaluation by Mentors</li>
            <li><span className="font-semibold">By 10:00 PM:</span> Announcement of Shortlisted Teams </li>
          </ul>
          <p className="mt-3">
            Selected teams will move forward to the offline round at IITM Janakpuri for the main hackathon event.
          </p>
        </div>
      ),
    },
    {
      title: "Offline Hackathon (Day 1)",
      date: "September 26, 2025",
      content: (
        <div className="text-xs sm:text-sm md:text-base text-neutral-300">
          <p className="mb-3">
            The 24-hour offline hackathon begins! The shortlisted teams will arrive on campus and start working on their AI-powered solutions.
          </p>
          <ul className="list-disc space-y-1.5 pl-4">
            <li><span className="font-semibold">9:00 AM – 10:00 AM:</span> Team Check-in & Welcome Briefing</li>
            <li><span className="font-semibold">10:00 AM – 11:00 AM:</span> Opening Ceremony</li>
            <li><span className="font-semibold">11:00 AM – 8:00 PM:</span> Hackathon Begins – Coding Phase I</li>
            <li><span className="font-semibold">8:00 PM – 9:00 PM:</span> Dinner Break</li>
            <li><span className="font-semibold">9:00 PM onwards:</span> Overnight Hacking Continues</li>
          </ul>
          <p className="mt-3">
            Teams are expected to make significant progress on their projects overnight in preparation for evaluations the next day.
          </p>
        </div>
      ),
    },
    {
      title: "Offline Hackathon (Day 2) + Grand Finale",
      date: "September 27, 2025",
      content: (
        <div className="text-xs sm:text-sm md:text-base text-neutral-300">
          <p className="mb-3">
            The final day includes evaluations, project presentations, and the announcement of the top 3 winning teams.
          </p>
          <ul className="list-disc space-y-1.5 pl-4">
            <li><span className="font-semibold">8:00 AM – 9:00 AM:</span> Breakfast</li>
            <li>
              <span className="font-semibold">9:00 AM – 11:00 AM:</span>{" "}
              <span className="text-fuchsia-400">Evaluation Phase I</span> by Mentors (Total: 50 points)
              <ul className="list-disc pl-5 mt-1 space-y-1 text-sm">
                <li>Innovation & Creativity , Technical Execution, Real-World Relevance– 15 pts for each</li>
                <li>Teamwork & Engagement – 5 pts</li>
              </ul>
              <p className="mt-1">Top 10 teams will be shortlisted for the final judging round.</p>
            </li>
            <li>
              <span className="font-semibold">11:00 AM – 2:00 PM:</span>{" "}
              <span className="text-orange-400">Evaluation Phase II</span> by Judges (Total: 100 points)
              <ul className="list-disc pl-5 mt-1 space-y-1 text-sm">
                <li>Innovation & Creativity , Technical Execution, Real-World Relevance– 25 pts for each</li>
                <li>Presentation & Demo – 25 pts</li>
              </ul>
            </li>
            <li><span className="font-semibold">2:00 PM – 3:00 PM:</span> Lunch Break</li>
            <li><span className="font-semibold">3:00 PM – 4:00 PM:</span> Closing Ceremony & Prize Distribution</li>
            <li><span className="font-semibold">4:00 PM – 5:00 PM:</span> Networking & Certificates</li>
          </ul>
          <p className="mt-4">
            <span className="font-semibold">Final Score Breakdown:</span> Total of 150 points (50 from Phase I + 100 from Phase II). Winners will be selected based on combined scores.
          </p>
        </div>
      ),
    }
  ]


  return (
    <div className="relative w-full overflow-clip px-4 py-12" id="schedule">

      <div className="absolute inset-0  top-[10%] bg-gradient-to-br from-[#289b9b2a]  via-[#a343bd55] to-[#3274f03a] [mask-image:radial-gradient(470px_circle_at_20%_45%,white,transparent)]"></div>

      <Timeline data={data} />

      <div className="mt-10 flex justify-center">
        <div className="relative group w-fit">
          {/* Gradient Border */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 blur-sm opacity-75 group-hover:opacity-100 transition duration-300"></div>

          {/* Capsule Button */}
          <div
            className="relative cursor-pointer rounded-full px-6 py-3 text-sm md:text-base text-center bg-zinc-900 text-white font-medium shadow-md border border-transparent group-hover:border-zinc-800 transition-all duration-300"
          >
            <Link href={'/guidelines'} className='w-full h-full'>Refer to the official guidelines for clear and reliable instructions</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
