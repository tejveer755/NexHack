"use client";

import { useState, useMemo } from "react";
import { Badge } from "@/components/ui/badge";
import {
  ChevronDown,
  MessageCircle,
  Users,
  Zap,
  Code,
  Smartphone,
  Search,
  X,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import HeroBackground from "@/components/ui/HeroBackground";

export const mentorsData = [
  {
    id: 1,
    name: "Dr. Sarah Chen",
    expertise: "AI/ML & Data Science",
    whatsappGroupLink: "https://chat.whatsapp.com/mentor-sarah-group",
    teams: Array.from({ length: 10 }, (_, i) => ({
      id: 100 + i + 1,
      name: `Team Alpha-${i + 1}`,
      members: [
        `Member A${i + 1}`,
        `Member B${i + 1}`,
        `Member C${i + 1}`,
      ],
    })),
  },
  ...Array.from({ length: 14 }, (_, mentorIndex) => ({
    id: mentorIndex + 2,
    name: `Dr. Mentor ${mentorIndex + 2}`,
    expertise: `Expertise Area ${mentorIndex + 2}`,
    whatsappGroupLink: `https://chat.whatsapp.com/mentor-${mentorIndex + 2}-group`,
    teams: Array.from({ length: 10 }, (_, i) => ({
      id: (mentorIndex + 1) * 1000 + i + 1,
      name: `Team ${mentorIndex + 2}-${i + 1}`,
      members: [
        `Member ${mentorIndex + 2}A${i + 1}`,
        `Member ${mentorIndex + 2}B${i + 1}`,
        `Member ${mentorIndex + 2}C${i + 1}`,
      ],
    })),
  })),
];


export default function MentorAssignments() {
  const [expandedMentors, setExpandedMentors] = useState([]);
  const [expandedTeamMembers, setExpandedTeamMembers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleMentor = (mentorId) => {
    setExpandedMentors((prev) =>
      prev.includes(mentorId)
        ? prev.filter((id) => id !== mentorId)
        : [...prev, mentorId]
    );
  };

  const toggleTeamMembers = (teamId) => {
    setExpandedTeamMembers((prev) =>
      prev.includes(teamId)
        ? prev.filter((id) => id !== teamId)
        : [...prev, teamId]
    );
  };

  const filteredMentors = useMemo(() => {
    if (!searchQuery.trim()) return mentorsData;

    const query = searchQuery.toLowerCase().trim();

    return mentorsData
      .filter((mentor) => {
        if (mentor.name.toLowerCase().includes(query)) return true;

        return mentor.teams.some(
          (team) =>
            team.name.toLowerCase().includes(query) ||
            team.members.some((member) => member.toLowerCase().includes(query))
        );
      })
      .map((mentor) => ({
        ...mentor,
        teams: mentor.teams.filter(
          (team) =>
            team.name.toLowerCase().includes(query) ||
            team.members.some((member) =>
              member.toLowerCase().includes(query)
            ) ||
            mentor.name.toLowerCase().includes(query)
        ),
      }));
  }, [searchQuery]);

  const totalTeams = mentorsData.reduce(
    (sum, mentor) => sum + mentor.teams.length,
    0
  );
  const filteredTeamsCount = filteredMentors.reduce(
    (sum, mentor) => sum + mentor.teams.length,
    0
  );

  const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 },
    hover: { y: -5, scale: 1.02 },
  };

  const contentVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: "auto" },
  };

  const memberVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="min-h-screen relative ">
        <div className="absolute inset-0 rotate-y-180 ">
        <HeroBackground />
        </div>
      <div
        className="relative overflow-hidden"
      >

        <div className=" backdrop-blur-lg text-white py-12">
          <div className="container mx-auto px-6 text-center">
            <Badge className="mb-4 bg-gray-700 text-white">
              Online Round
            </Badge>
            <img
              src="/nexhacklogo.png"
              alt="NexHack logo"
              className="w-[200px] md:w-[300px]  max-w-full h-auto mx-auto"
            />
            <p className="text-gray-400 ">24-Hour Innovation Challenge</p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl text-gray-200 max-w-3xl mx-auto text-pretty mb-8"
            >
              Connect with your assigned mentor and team members. Each mentor
              has a dedicated WhatsApp group for seamless collaboration.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex justify-center gap-12"
            >
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-400">
                  {mentorsData.length}
                </div>
                <div className="text-sm text-gray-300 mt-1">Expert Mentors</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400">
                  {totalTeams}
                </div>
                <div className="text-sm text-gray-300 mt-1">
                  Competing Teams
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 pt-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="max-w-2xl mx-auto mb-12"
        >
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search by team name or member name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-12 py-4 bg-zinc-950 border border-gray-600 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all duration-300"
            />
            {searchQuery && (
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setSearchQuery("")}
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-white transition-colors duration-200"
              >
                <X className="h-5 w-5" />
              </motion.button>
            )}
          </div>

          {searchQuery && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 text-center"
            >
              <span className="text-gray-300">
                Found{" "}
                <span className="text-blue-400 font-semibold">
                  {filteredTeamsCount}
                </span>{" "}
                teams across{" "}
                <span className="text-purple-400 font-semibold">
                  {filteredMentors.length}
                </span>{" "}
                mentors
              </span>
            </motion.div>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredMentors.length > 0 ? (
            filteredMentors.map((mentor, index) => {
              const isExpanded = expandedMentors.includes(mentor.id);

              return (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="group"
                >
                  <div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-black via-zinc-950 to-zinc-900/50 border border-blue-300/20  transition-all duration-500">

                    <div className="relative p-6">
                      <div className="flex items-start justify-between mb-6">
                        <div className="flex items-center gap-4">
                          <motion.div
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            className="w-14 h-14 overflow-hidden rounded-3xl flex items-center justify-center text-white font-bold text-lg shadow-lg"
                          >
                            <Image width={56} height={56} src={'/chirag.png'} alt={mentor.name} className="w-full h-full object-center object-cover" />
                          </motion.div>
                          <div>
                            <h3 className="text-xl font-bold text-white mb-2">
                              {mentor.name}
                            </h3>
                          </div>
                        </div>

                        {/* <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => toggleMentor(mentor.id)}
                          className="p-2 rounded-xl bg-gray-700 hover:bg-gray-600 text-gray-300 hover:text-white transition-all duration-300 border border-gray-600 hover:border-gray-500"
                        >
                          <motion.div
                            animate={{ rotate: isExpanded ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <ChevronDown className="w-5 h-5" />
                          </motion.div>
                        </motion.button> */}
                      </div>

                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="flex items-center gap-2 px-3 py-1.5 bg-zinc rounded-lg border border-gray-600">
                            <Users className="w-4 h-4 text-blue-400" />
                            <span className="text-sm font-medium text-gray-200">
                              {mentor.teams.length} teams
                            </span>
                          </div>
                        </div>

                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() =>
                            window.open(mentor.whatsappGroupLink, "_blank")
                          }
                          className="flex items-center gap-2 px-4 py-2  text-white rounded-xl font-medium transition-all duration-300 shadow-lg shadow-green-400/25 hover:shadow-green-500/25"
                        >
                          <MessageCircle className="w-4 h-4 text-green-500 " />
                          Join Group
                        </motion.button>
                      </div>

                      <AnimatePresence>
                        { 
                        // isExpanded &&
                          (
                          <motion.div
                            variants={contentVariants}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            <div className="space-y-4 pt-4 border-t border-gray-600">
                              {mentor.teams.map((team, teamIndex) => {
                                const isTeamExpanded =
                                  expandedTeamMembers.includes(team.id);

                                return (
                                  <motion.div
                                    key={team.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{
                                      delay: teamIndex * 0.1,
                                      duration: 0.3,
                                    }}
                                    className=" rounded-xl pb-2 transition-all duration-300"
                                  >
                                    <div className="flex items-center justify-between mb-3">
                                      <h4 className="font-bold text-white text-md">
                                        {team.name}
                                      </h4>
                                      <motion.button
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() =>
                                          toggleTeamMembers(team.id)
                                        }
                                        className="flex items-center gap-2 px-3 py-1.5 bg-zinc-900 hover:bg-gray-800 rounded-lg text-gray-200 hover:text-white transition-all duration-300 border border-gray-500"
                                      >
                                        {/* <Smartphone className="w-3 h-3" />
                                        <span className="text-sm font-medium">
                                          {team.members.length}
                                        </span> */}
                                        <motion.div
                                          animate={{
                                            rotate: isTeamExpanded ? 180 : 0,
                                          }}
                                          transition={{ duration: 0.2 }}
                                        >
                                          <ChevronDown className="w-3 h-3" />
                                        </motion.div>
                                      </motion.button>
                                    </div>

                                    <AnimatePresence>
                                      {isTeamExpanded && (
                                        <motion.div
                                          variants={contentVariants}
                                          initial="hidden"
                                          animate="visible"
                                          exit="hidden"
                                          transition={{ duration: 0.3 }}
                                          className="overflow-hidden"
                                        >
                                          <div className="pt-3 border-t border-gray-500">
                                            <div className="grid grid-cols-1 gap-3">
                                              {team.members.map(
                                                (member, memberIndex) => (
                                                  <motion.div
                                                    key={memberIndex}
                                                    variants={memberVariants}
                                                    initial="hidden"
                                                    animate="visible"
                                                    transition={{
                                                      delay: memberIndex * 0.05,
                                                      duration: 0.2,
                                                    }}
                                                    className="flex items-center gap-3 p-2 rounded-lg bg-zinc-800 hover:bg-gray-500 transition-all duration-200"
                                                  >
                                                    <motion.div
                                                      whileHover={{
                                                        scale: 1.1,
                                                      }}
                                                      className="w-8 h-8 bg-gradient-to-br from-gray-500 to-gray-400 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-md"
                                                    >
                                                      {member
                                                        .split(" ")
                                                        .map((n) => n[0])
                                                        .join("")}
                                                    </motion.div>
                                                    <span className="text-white font-medium">
                                                      {member}
                                                    </span>
                                                  </motion.div>
                                                )
                                              )}
                                            </div>
                                          </div>
                                        </motion.div>
                                      )}
                                    </AnimatePresence>
                                  </motion.div>
                                );
                              })}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </motion.div>
              );
            })
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="col-span-full text-center py-16"
            >
              <div className="max-w-md mx-auto">
                <Search className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-300 mb-2">
                  No results found
                </h3>
                <p className="text-gray-400">
                  Try searching for a different team name or member name.
                </p>
              </div>
            </motion.div>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="max-w-2xl mx-auto bg-gray-800 backdrop-blur-xl rounded-2xl p-8 border border-gray-600">
            <h3 className="font-bold text-2xl mb-4 text-white">
              Need Assistance?
            </h3>
            <p className="text-gray-200 leading-relaxed">
              Can't find your team or having trouble accessing the WhatsApp
              group? Reach out to the NexHack organizing team for immediate
              support.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
