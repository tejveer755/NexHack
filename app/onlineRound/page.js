"use client";

import { useState, useMemo, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Users, Search, X, FileText, Download, ExternalLink, ChevronUp, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import HeroBackground from "@/components/ui/HeroBackground";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function MentorAssignments() {
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedCards, setExpandedCards] = useState({});
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const filteredMentors = useMemo(() => {
    if (!searchQuery.trim()) return mentorsData;

    const query = searchQuery.toLowerCase().trim();

    return mentorsData
      .filter((mentor) => {
        if (mentor.name.toLowerCase().includes(query)) return true;
        return mentor.teams.some((team) => team.toLowerCase().includes(query));
      })
      .map((mentor) => ({
        ...mentor,
        teams: mentor.teams.filter(
          (team) => team.toLowerCase().includes(query) || mentor.name.toLowerCase().includes(query)
        ),
      }));
  }, [searchQuery]);

  const totalTeams = mentorsData.reduce((sum, mentor) => sum + mentor.teams.length, 0);
  const filteredTeamsCount = filteredMentors.reduce((sum, mentor) => sum + mentor.teams.length, 0);

   const toggleCard = (index) => {
    setExpandedCards((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 },
    hover: { y: -5, scale: 1.02 },
  };

  const contentVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: "auto" },
  };

  const handleDownload = (file) => {
    const link = document.createElement("a");
    link.href = `/${file}`;
    link.download = file;
    link.click();
  };

  return (
    <>
    <div className="min-h-screen relative text-white">
    <Navbar/>
      <div className="absolute inset-0">
        <HeroBackground />
      </div>

      <div className="relative z-10 backdrop-blur-lg py-12">
        <div className="container mx-auto px-6 text-center">
          <Badge className="mb-4 bg-gray-700 text-white">Online Round</Badge>
          <Image
            width={200}
            height={300}
            src="/nexhacklogo.png"
            alt="NexHack logo"
            className="w-[200px] md:w-[300px] mx-auto h-auto"
          />
          <p className="text-gray-400 mb-4">24-Hour Innovation Challenge</p>
          <p className="text-gray-200 max-w-2xl mx-auto mb-8">
            Details for the online round of our hackathon, including our expert mentors list with their assigned teams, online round instructions, and PPT guidelines to help you succeed in this 24-hour innovation challenge.
          </p>

          <div className="flex justify-center gap-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400">{mentorsData.length}</div>
              <div className="text-sm text-gray-300 mt-1">Expert Mentors</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400">{totalTeams}</div>
              <div className="text-sm text-gray-300 mt-1">Competing Teams</div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Download Buttons */}
        <div className="max-w-4xl mx-auto mb-8 flex flex-col sm:flex-row gap-4 justify-center z-20 relative">
          <button
            onClick={() => handleDownload("nexhack-online-round-instructions.pdf")}
            className="flex items-center justify-center gap-3 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <FileText className="w-5 h-5" />
            <span>Online Round Instructions</span>
            <Download className="w-4 h-4" />
          </button>
          <button
            onClick={() => handleDownload("NexHack_PPT_Instructions.pdf")}
            className="flex items-center justify-center gap-3 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <FileText className="w-5 h-5" />
            <span>PPT Instructions</span>
            <Download className="w-4 h-4" />
          </button>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12 relative">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search by team or mentor name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-12 py-4 bg-zinc-950 border border-gray-600 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>
            )}
          </div>
          {searchQuery && (
            <div className="mt-4 text-center text-gray-300">
              Found <span className="text-blue-400 font-semibold">{filteredTeamsCount}</span> teams across{" "}
              <span className="text-purple-400 font-semibold">{filteredMentors.length}</span> mentors
            </div>
          )}
        </div>

        {/* Mentors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMentors.length > 0 ? (
            filteredMentors.map((mentor, index) => {
              const isExpanded = expandedCards[index] || false;
              return (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                  transition={{ delay: index * 0.05, duration: 0.5 }}
                >
                  <div className="overflow-hidden rounded-2xl bg-gradient-to-b from-black via-zinc-950 to-zinc-900/50 border border-blue-300/20">
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-4 flex-1">
                          <Image
                            width={56}
                            height={56}
                            src={mentor.src}
                            alt={mentor.name}
                            className="w-14 h-14 rounded-3xl object-cover"
                          />
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <h3 className="text-xl font-bold">{mentor.name}</h3>
                              {mentor.linkedin && (
                                <a href={mentor.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-400">
                                  <ExternalLink className="w-4 h-4" />
                                </a>
                              )}
                            </div>
                            <p className="text-sm text-blue-300 font-medium">{mentor.designation}</p>
                            <p className="text-xs text-gray-400">{mentor.company}</p>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3 px-3 py-1.5 bg-zinc-800 rounded-lg border border-gray-600">
                          <Users className="w-4 h-4 text-blue-400" />
                          <span className="text-sm font-medium text-gray-200">{mentor.teams.length} teams</span>
                        </div>
                       
                      </div>

                          <motion.div
                            variants={contentVariants}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                          >
                            <div className="space-y-2 pt-2 border-t border-gray-600">
                              {mentor.teams.map((team, i) => (
                                <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}>
                                  <div className="bg-gray-800/50 rounded-xl p-2 text-sm">{team}</div>
                                </motion.div>
                              ))}
                            </div>
                          </motion.div>
                       
                    </div>
                  </div>
                </motion.div>
              );
            })
          ) : (
            <div className="col-span-full text-center py-16 text-gray-400">
              No results found
            </div>
          )}
        </div>
      </div>
    </div>
    <Footer className={'mt-0'} />
    </>
  );
}

const mentorsData = [
  {
    name: "Karan Vaswani",
    src: "/karanvaswani.png",
    designation: "Full Stack Developer ",
    company: "Deployd.io",
    linkedin: "https://www.linkedin.com/in/karan-v-270102",
    teams: [
      "UNIX",
      "TEAM-SRM",
      "Rajendra Nagar Gang",
      "Zeroes and Ones",
      "Enoxers",
      "Hill Town Coders",
      "Ali Baba Aur Kaamchor",
      "Leviathan",
      "LazyBugs",
      "The Decoders",
      "Lumos",
      "Elite Coders",
      "JainwinCoders",
      "Team Basher",
      "one",
      "DeepCoders",
      "TechnoSaviors",
      "TriDev",
      "./(DotSlash)",
    ],
  },
{
    name: "Kashvi Arora",
    src: "/kashviarora.jpg",
    designation: "AIML Engineer",
    company: "QuickBox",
    linkedin: "https://www.linkedin.com/in/kashvi15",
    teams: [
      "Bugburner",
      "Chill Coders 😎💻",
      "teams - RCB",
      "StarX",
      "Black Hammer",
      "The Vanquishers",
      "HuntAI",
      "Homosapien",
      "SangrakshakX",
      "Health Assure",
      "4-bit avengers",
      "Power Rangers",
      "WatchOver",
      "Team batman",
      "WagWise",
      "NEOTEC",
      "Agni Bytes",
      "CodeWavers",
      "CodeForCause",
    ],
  },
  {
    name: "Avanish Kumar Singh",
    src: "/avanishkumarsingh.png",
    designation: "Assistant Manager - AI ",
    company: "Adani Defence & Aerospace",
    linkedin: "http://linkedin.com/in/avanishh",
    teams: [
        "Trinova",
        "ya~tsu",
        "The bug fixers",
        "SHE CODES",
        "Connect Sphere",
        "TechFusion",
        "404 Found Us",
        "A.T.O.M",
        "Inception",
        "Neutix",
        "Solution Seekers",
        "4Arms",
        "Code Blooded",
        "404not found",
        "DivCode",
        "Hack Rnagers",
        "BitBots",
        "Team Linux",
        "Newbiecoder",
    ],
  },
  {
    name: "Bimlesh",
    src: "/bimlesh.png",
    designation: "Software Developer Intern",
    company: "Intern with Govt. of India",
    linkedin: "https://www.linkedin.com/in/bimlesharma",
    teams: [
        "Sentinal_Team",
        "KnightCoders",
        "Byte me the revenge arc",
        "Technocrats",
        "DevCoders",
        "Companios",
        "Neural Network Ninjas",
        "The Algorithm Avengers",
        "Cnff",
        "Code-X",
        "Alpha",
        "kcubes",
        "himanshuvats",
        "HackHawks",
        "BCA_vips",
        "Yellow Duck",
        "VIDYUT",
        "Fresh Wash",
        "XCode",
    ],
  },
  {
    name: "Tushika Rawat",
    src: "/tushikarawat.png",
    designation: "Intern",
    company: "PhysicsWallah",
    linkedin: "https://www.linkedin.com/in/tushika-rawat",
    teams: [
      "Nashh",
      "Games with learner 2.0",
      "Termin8ors",
      "Team SuperNova",
      "Hack Brothers",
      "Elite Coder",
      "Code Wizards",
      "Codexa",
      "Team Companio",
      "RudraX",
      "ShadowBytes",
      "Navsuraksha",
      "VAR",
      "Innov8rs",
      "BYTE-BANDITS",
      "Rahi",
      "Zoro",
      "Team chotu",
      "one 8",
    ],
  },
  {
    name: "Vinit Vijal",
    src: "/vinitvijal.png",
    designation: "SDE-1",
    company: "SBT Inc., Canada",
    linkedin: "https://www.linkedin.com/in/vinitvijal",
    teams: [
        "Nextgencoders",
        "Brain & Heart",
        "Team 404",
        "Code Crafters",
        "CodeExplorers",
        "Rockstar",
        "Decrypt",
        "Byte Me",
        "Fusion Freaks",
        "MOGGERS",
        "INFERNO",
        "CNOK",
        "Sparkers",
        "Reva",
        "Networx",
        "ALT F4",
        "Innovators",
        "OG's",
        "Paradox",
    ],
  },
  {
    name: "Mohammad Jari",
    src: "/mohammadjari.png",
    designation: "Data Scientist and Ai Trainer",
    company: "Ikigai school of ai",
    linkedin: "https://www.linkedin.com/in/mohammadjari",
    teams: [
        "Neuro pals",
        "MANDI X",
        "NodeVoices",
        "Synapse Squad",
        "Snack Overflow",
        "MIKASA",
        "MotionMind",
        "ByteDefenders",
        "CodeCrafters",
        "Smooth Operators",
        "HackHeroes",
        "Eniac",
        "Data hub",
        "Backspace",
        "cps.mugglers",
        "Orbyte",
        "The Else Ifs",
        "CodeSutra",
        "CODX"
    ]
  },
  {
    name: "Nandini Singh ",
    src: "/nandinisingh.png",
    designation: "Jr. Associate - Data & AI",
    company: "SoftwareOne",
    linkedin: "https://www.linkedin.com/in/nandinisingh05",
    teams: [
        "Win.exe",
        "big_boom",
        "Team Sahayaak",
        "Code X",
        "Dil-Se-Developer",
        "EventEase",
        "DevShots",
        "NeuralNinjas",
        "HackOps",
        "OutOfBounds",
        "Team Nikhil",
        "Tuastra",
        "Astitva",
        "Carbon Warriors", 
        "Kairo",
        "on mark",
        "Dev-Girls",
        "TeamCombiners"
    ]
  },
  {
    name: "Isha Singh ",
    src: "/ishasingh.jpg",
    designation: " AI enginner ",
    company: "Fourmeta",
    linkedin: "https://www.linkedin.com/in/isha-singh-aa26b4273",
    teams: [
      "Codex",
      "TeamCodeX404",
      "CODE WARRIORS",
      "Trailblazers",
      "404 Founders",
      "RAW RANGERS",
      "GodLike Tech.",
      "Team-HTML",
      "TEAM LOOP",
      "CodeAlpha",
      "Brewed Brains",
      "HangmanxRooster",
      "RageBit",
      "Hack Budhha",
      "Code&Chaos",
      "EmpowerNet",
      "LionelRolando",
      "DivineDevs",
      "YANTRIK MINDS",
    ],
  },
  {
    name: "Mradul Katiyar",
    src: "/mradulkatiyar.png",
    designation: " Senior Software Engineer ",
    company: "Mphasis",
    linkedin: "https://www.linkedin.com/in/mradul-katiyar-b98a18143",
    teams: [
        "Teapot 201",
        "AGNI",
        "Beyond Touch",
        "Logic Lords",
        "ZenYukti",
        "HeavyCoder",
        "DurDrishti",
        "Tech Titans",
        "Bug Busters",
        "DMK",
        "Future Forge",
        "QUBESIS",
        "Cnf",
        "Team BugSlayers",
        "TeamCyberPunk",
        "Brain Box",
        "Veloc1tyX",
        "OG Tech Titans",
    ],
  },
  {
    name: "Swadesh Kumar",
    src: "/swadeshkumar.png",
    designation: "Software engineer",
    company: "Evalueserve",
    linkedin: "http://linkedin.com/in/swadesh-kumar",
    teams: [
        "The White Singularity",
        "Spartans",
        "Chintu Coders",
        "Geeks",
        "Syntax Squads",
        "INNOVATEX",
        "KineticX",
        ".gitignore",
        "ThreeOfUs",
        "DeBuggers",
        "Coder's Liq",
        "Knight Coders",
        "DataVengers",
        "404 Found",
        "Hackninjaz",
        "HealthCure",
        "EXO-GENIUS",
        "DevHashiras",
    ],
  },
  {
    name: "Himanshu Shekhar",
    src: "/himanshushekhar.png",
    designation: "Senior Software Engineer ",
    company: "Nference",
    linkedin: "https://www.linkedin.com/in/himanshu-shekhar-025151130",
    teams: [
        "ThinkFast",
        "4A",
        "Dewined",
        "CodeX",
        "Hinge hackers",
        "Bullet-In",
        "BUG BUNNIES",
        "High On Code",
        "Code_cuddles",
        "Ether",
        "NovaBytes",
        "SynapsX",
        "Code Freaks",
        "OptiSquad",
        "Fork Experts",
        "404 brain not found",
        "DeepLearner",
        "Dirt Debugger",
    ],
  },
  {
    name: "Siddharth Sharma ",
    src: "/siddharthsharma.png",
    designation: "Co-Founder",
    company: "Techvansh Innovations",
    linkedin: "https://www.linkedin.com/in/siddharth-sharma-4866a6121",
    teams: [
        "Phoenix",
        "Byte Busters",
        "TechTonics",
        "ELECTRO VIBES",
        "veda",
        "Hecfam",
        "Robogyan",
        "FlameX",
        "Hadn't",
        "Obscura 2.0",
        "CODEBYTES",
        "Lab X",
        "NextStepNavigators",
        "Agriscience",
        "JKDebug",
        "Code Cartel",
        "CRYSTOR",
        "ResQTech#06",
    ],
  },
  {
    name: "Vishakha Singhal",
    designation: "Junior Software Developer, Co-founder @CodeNexAI",
    company: "Firstsource",
    linkedin: "https://www.linkedin.com/in/vishakha-singhal-18983b1bb",
    src: "/vishakhasinghal.png",
    teams: [
        "FutureDevians",
        "O(3)",
        "Runtime Terrors",
        "Codess",
        "DA-VINCI",
        "ABC",
        "Byte Me",
        "NeoGaurd",
        "Ctrl+Win+Repeat",
        "BholeChature",
        "DASH-P",
        "VIBE_CODERS",
        "Nadaan Parindey",
        "Immortals",
        "HON$EC",
        "LTF",
        "Cyphers",
        "ExpoHackers",
    ],
  },
  {
    name: "Animesh Singh",
    designation: "AI/ML Full stack developer",
    company: "Techverse Nexus",
    linkedin: "https://www.linkedin.com/in/animeshsingh9693",
    src: "/animeshsingh.png",
    teams: [
        "CODIGGERS",
        "TITANs",
        "GodZ",
        "CipherX",
        "Punishers",
        "VisionX",
        "Neural Nerds",
        "CODEVITALS",
        "The Brawlers",
        "Pallets",
        "Invictus",
        "CURLERS",
        "Future Coders",
        "Coddigers",
        "DataBridge",
        "Code storm",
        "Axora",
        "CodeClaws",
    ],
  },
  {
    name: "Pranav V",
    designation: "Associate Software Engineer",
    company: "Deloitte",
    linkedin: "https://www.linkedin.com/in/jainvpranav",
    src: "/pranavv.png",
    teams: [
        "Hounded-Hogs",
        "EchoBin",
        "FourBitesCrew",
        "Tech-recons",
        "Team NIATRON",
        "Eyezonode",
        "EduVision",
        "BitKratos",
        "king of the new era",
        "WOW(Wizards Of Web)",
        "Aura Seekers",
        "DUO's",
        "FINCADE",
        "Order Of Phoenix",
        "Advitya",
        "protechies",
        "Shadow Code",
        "Peerchat",
    ],
  },
  {
    name: "Parag Carpenter",
    designation: "Custom Software Engineering Associate Manager",
    company: "Accenture",
    linkedin: "https://www.linkedin.com/in/contact-parag-carpenter",
    src: "/paragcarpenter.png",
    teams: [
        "Unplaced Coders",
        "Quad D",
        "Code Warriors",
        "ByteRush",
        "Debug_Dynamos",
        "Web2Win",
        "Team Atharva",
        "DVD - Distant Visionary Developers",
        "BlockBuilders",
        "Error 404",
        "CODECRAFTERS",
        "NEXORA",
        "C0mrade",
        "11:11",
        "TechParrots",
        "S.P.D.",
        "Solution Seekers",
        "Codify",
    ],
  },
  {
    name: "Ayush Ranjan",
    designation: "Engineer",
    company: "Delta6Labs Fintech",
    linkedin: "https://www.linkedin.com/in/ayush-ranjan-131720207",
    src: "/ayushranjan.png",
    teams: [
      "Binary Brigadiers",
      "Rocket",
      "WaterSentinels",
      "Pixel Pixies",
      "Dev Bandits",
      "Auraverse",
      "BUY ONE GET TWO",
      "CodeVertex",
      "Titans",
      "Learnora",
      "Daybreakers",
      "PVR",
      "JalDhaara",
      "QwertyPies",
      "spacebar",
      "THE PROFESSIONALS",
      "Yoddha",
      "Nexus",
      "Titan Coders",
    ],
  },
  {
    name: "Vaibhav Jain",
    designation: "Senior Software Engineer",
    company: "Kerol Systems",
    linkedin: "https://www.linkedin.com/in/vaibhav-jain-94327383",
    src: "/vaibhavjain.png",
    teams: [
        "Synaptech",
        "Tech Tantra",
        "Juggernaut",
        "Mind Bogglers",
        "CodeNerds",
        "code hunters",
        "Commit Rebels",
        "ByteUs",
        "Skyuii Developer's",
        "DuoDevs",
        "ALT+F4",
        "RISINGNEXT",
        "ARTIFICIAL ALLIANCE",
        "8 bit titans",
        "BitBuster",
        "Mnemosyne",
        "Delhi Arena",
        "Rotors"
    ]
  },
];