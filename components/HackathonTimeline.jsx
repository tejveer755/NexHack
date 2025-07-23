import React from "react";
import { Timeline } from "@/components/ui/timeline"; // Assuming this component exists

export function HackathonTimeline() {
  const data = [
    {
      title: "Registrations",
      date: "August 20, 2025 -September 8, 2025 ",
      content: (
        <p className="text-sm font-normal  md:text-base text-neutral-300">
          Official registrations are now open! Form your dream team and sign up to be part of the ultimate tech challenge.
        </p>
      ),
    },
    {
      title: "Team Confirmation Phase",
      date: "September 9 – 13, 2025",
      content: (
        <p className="text-sm font-normal text-neutral-700 md:text-base dark:text-neutral-300">
          Teams will be confirmed via Devfolio and email. Make sure to keep an eye on your inbox!
        </p>
      ),
    },
    {
      title: "Round 1: Online",
      date: "September 14, 2025",
      content: (
        <div className="text-sm  md:text-base text-neutral-300">
          <p className="mb-4">The virtual battle begins! All activities will be conducted online via Google Meet.</p>
          <ul className="list-disc space-y-2 pl-4">
            <li><span className="font-semibold">10:00 AM:</span> Kick-off & Problem Statement Release</li>
            <li><span className="font-semibold">10:00 AM – 4:00 PM:</span> Development Phase</li>
            <li><span className="font-semibold">4:00 PM – 6:00 PM:</span> Submission Window</li>
            <li><span className="font-semibold">6:00 PM – 10:00 PM:</span> Judging & Evaluation</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Shortlisted Teams Announced",
      date: "September 15, 2025",
      content: (
        <p className="text-sm font-normal  md:text-base text-neutral-300">
          Congrats to the top teams who made it to the grand offline finale! Start packing your gear for an intense campus showdown.
        </p>
      ),
    },
    {
      title: "Offline Hackathon (Day 1)",
      date: "September 19, 2025",
      content: (
        <div className="text-sm  md:text-base text-neutral-300">
          <p className="mb-4">Welcome to the final arena at IIITM, Janakpuri. Let the battle of brains begin!</p>
          <ul className="list-disc space-y-2 pl-4">
            <li><span className="font-semibold">9:00 AM – 10:00 AM:</span> Team Check-in & Welcome</li>
            <li><span className="font-semibold">10:00 AM – 11:00 AM:</span> Opening Ceremony & Problem Statement Release</li>
            <li><span className="font-semibold">11:00 AM – 8:00 PM:</span> Coding Phase</li>
            <li><span className="font-semibold">8:00 PM – 9:00 PM:</span> Dinner</li>
            <li><span className="font-semibold">9:00 PM onwards:</span> Overnight Hacking Continues</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Offline Hackathon (Day 2) + Grand Finale",
      date: "September 20, 2025",
      content: (
        <div className="text-sm  md:text-base text-neutral-300">
          <p className="mb-4">Final sprint, final pitch – everything leads to this moment.</p>
          <ul className="list-disc space-y-2 pl-4">
            <li><span className="font-semibold">8:00 AM – 9:00 AM:</span> Breakfast</li>
            <li><span className="font-semibold">9:00 AM – 11:00 AM:</span> Final Touches & Code Freeze</li>
            <li><span className="font-semibold">11:00 AM – 2:00 PM:</span> Project Presentations & Judging</li>
            <li><span className="font-semibold">2:00 PM – 3:00 PM:</span> Lunch</li>
            <li><span className="font-semibold">3:00 PM – 4:00 PM:</span> Closing Ceremony & Prize Distribution</li>
            <li><span className="font-semibold">4:00 PM – 5:00 PM:</span> Networking & Certificates</li>
          </ul>
        </div>
      ),
    },
  ];

  return (
    <div className="relative w-full overflow-clip" id="schedule">
      <Timeline data={data} />
    </div>
  );
}
