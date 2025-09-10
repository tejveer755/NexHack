'use client';
import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { ExpandableWrapper } from "./ui/ExpandableWrapper";
import Image from "next/image";
import Link from "next/link";

const OurTeam = () => {
  const teamMembers = [
    {
      name: "Amaani Arora",
      title: "President",
      socials: [
        {
          name: "linkedin",
          icon: <FaLinkedin className="w-5 h-5 text-gray-400 hover:text-white" />,
          link: "https://www.linkedin.com/in/amaani-arora-65028a263/",
        },
      ],
      image: "/amaanii.png",
    },
    {
      name: "Chirag Jain",
      title: "Vice President",
      socials: [
        {
          name: "linkedin",
          icon: <FaLinkedin className="w-5 h-5 text-gray-400 hover:text-white" />,
          link: "https://www.linkedin.com/in/chirag-jain-6574902a0/",
        },
      ],
      featured: true,
      image: "/chirag.png",
    },
    {
      name: "Stuti Sharma",
      title: "General Secretary",
      socials: [
        {
          name: "linkedin",
          icon: <FaLinkedin className="w-5 h-5 text-gray-400 hover:text-white" />,
          link: "https://www.linkedin.com/in/stuti-sharma240506/",
        },
      ],
      image: "/stuti.jpg",
    },
    {
      name: "Tushar Sharma",
      title: "Web Development Head",
      socials: [
        {
          name: "linkedin",
          icon: <FaLinkedin className="w-5 h-5 text-gray-400 hover:text-white" />,
          link: "https://www.linkedin.com/in/tushar-sharma-6a037a281/",
        },
      ],
      image: "/tushar.png",
    },
    {
      name: "Tejveer Singh",
      title: "Web Devlopment Co-Head",
      socials: [
        {
          name: "linkedin",
          icon: <FaLinkedin className="w-5 h-5 text-gray-400 hover:text-white" />,
          link: "https://www.linkedin.com/in/tejveer-singh-3133a7323/",
        },
      ],
      image: "/tejveer.jpg",
    },
    {
      name: "Akshat Jain",
      title: "Graphic Designing Head",
      socials: [
        {
          name: "linkedin",
          icon: <FaLinkedin className="w-5 h-5 text-gray-400 hover:text-white" />,
          link: "https://www.linkedin.com/in/akshat-jain-b733b81b6",
        },
      ],
      image: "/akshat.jpg",
    },
    {
      name: "Ayush Kumar",
      title: "PR and Sponsorship Head",
      socials: [
        {
          name: "linkedin",
          icon: <FaLinkedin className="w-5 h-5 text-gray-400 hover:text-white" />,
          link: "#",
        },
      ],
      image: "/ayushkumar.jpg",
    },
    {
      name: "Tanya Gusain",
      title: "Event Management Head",
      socials: [
        {
          name: "linkedin",
          icon: <FaLinkedin className="w-5 h-5 text-gray-400 hover:text-white" />,
          link: "https://www.linkedin.com/in/taniyagusain/",
        },
      ],
      image: "/taniya.png",
    },
    {
      name: "Hrishabh Raj",
      title: "Event Management Co-Head",
      socials: [
        {
          name: "linkedin",
          icon: <FaLinkedin className="w-5 h-5 text-gray-400 hover:text-white" />,
          link: "https://www.linkedin.com/in/hrishabhraj05/",
        },
      ],
      image: "/hrishabh.jpg",
    },
    {
      name: "Sakshi Sharma",
      title: "Publicity Head",
      socials: [
        {
          name: "linkedin",
          icon: <FaLinkedin className="w-5 h-5 text-gray-400 hover:text-white" />,
          link: "https://www.linkedin.com/in/sakshi-sharma-69b371314/",
        },
      ],
      image: "/sakshi.png",
    },
    {
      name: "Kunjal Kharb",
      title: "Publicity Co-Head",
      socials: [
        {
          name: "linkedin",
          icon: <FaLinkedin className="w-5 h-5 text-gray-400 hover:text-white" />,
          link: "https://www.linkedin.com/in/kunjal-kharb-463986316/",
        },
      ],
      image: "/kunjal.jpg",
    },
  ];

  return (
    <ExpandableWrapper className="mb-36">

      <div className="py-24 px-6 md:px-16 relative text-white" id="team">
        <div className="absolute inset-0  top-[0%] bg-gradient-to-br from-[#289b9b2a]  via-[#29b6b238] to-[#3274f0a6] [mask-image:radial-gradient(670px_circle_at_40%_50%,white,transparent)]"></div>

        {/* Header */}
        <h2 className="text-4xl md:text-6xl font-extrabold text-center mb-12 bg-gradient-to-tr from-white via-zinc-300 to-gray-400 bg-clip-text text-transparent border-b border-zinc-50 pb-3 w-fit mx-auto">
          Our Core Team
        </h2>

        {/* Grid Layout */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* import Image from 'next/image'; */}

          {teamMembers.map((member, idx) => (
            <div
              key={idx}
              className="rounded-lg p-4 border border-white/10 backdrop-blur-sm hover:scale-105 transition-transform duration-300 flex flex-col items-center justify-between overflow-hidden"
            >
              {/* Image */}
              <div className="w-full max-w-xs mx-auto mb-4 aspect-square relative">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover rounded-full border-4 border-white/20 shadow-md"
                />
              </div>

              {/* Name + Title */}
              <div className="text-center space-y-1">
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-sm text-gray-300">{member.title}</p>
              </div>

              {/* Socials */}
              <div className="flex justify-center gap-3 mt-3">
                {member.socials.map((social, index) => (
                  <Link
                    href={social.link}
                    key={index}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {social.icon}
                  </Link>
                ))}
              </div>
            </div>

          ))}

        </div>
      </div>
    </ExpandableWrapper>

  );
};

export default OurTeam;
