import { OrbitingCircles } from "./ui/OrbitingCircles";
import {
    FaReact,
    FaNodeJs,
    FaHtml5,
    FaJs,
    FaPython,
    FaDocker,
    FaAws,
    FaDiscord,
    FaWhatsapp,
    FaJava,
} from "react-icons/fa";
import {
    SiMongodb,
    SiFirebase,
    SiTensorflow,
    SiOpencv,
    SiVercel,
    SiPostgresql,
} from "react-icons/si";
import { BoxReveal } from "@/components/magicui/box-reveal";
import { InteractiveHoverButton } from "./magicui/InteractiveHoverButton";
import { Orbitron } from 'next/font/google'
import Link from "next/link";
import Image from "next/image";
const orbitron = Orbitron({
    // variable: "--font-orbintron",
    subsets: ["latin"],
})
function HeroSection() {
    return (
        <div className="relative px-6 border-[#d900ff] text-white overflow-hidden" id="home">
            <div className="flex flex-col lg:flex-row items-center justify-between min-h-[90vh] mt-16 lg:mt-0 gap-12">
                {/* Left Content */}
                <div className="w-full lg:w-1/2 lg:pl-7 flex flex-col justify-start gap-3">
                    <BoxReveal boxColor={"#d900ff"} duration={0.5}>

                        <Image
                            src="/nexhacklogo.png"
                            alt="NexHack logo"
                            width={750}
                            height={400}
                            className="w-[400px] sm:w-[500px] md:w-[590px] lg:w-[750px] xl:w-[600px] max-w-full h-auto mx-auto"
                        />
                    </BoxReveal>


                    <BoxReveal boxColor={"#d900ff"} duration={0.67}>
                        <h2 className="text-white font-semibold text-md md:text-xl">
                            Hack the track of AI impact
                            <br />
                            <span className="font-bold">Nexhack</span> is a 24-hour hackathon by{" "}
                            <span className="text-amber-400 font-semibold">Nexverse-IITM</span>,
                            where students from all over India come together to create something amazing.
                        </h2>
                    </BoxReveal>

                    <BoxReveal boxColor={"#d900ff"} duration={0.85}>
                        <h2 className="text-white font-semibold text-md leading-relaxed mt-4">
                            💻 Online Round: <span className="font-bold">20 Sep</span>
                            <br />
                            📍 Hack @ IITM: <span className="font-bold">26–27 Sep</span>
                        </h2>
                        
                    </BoxReveal>

                    <BoxReveal boxColor={"#d900ff"} duration={0.7}>
                        <h2 className="text-white font-semibold text-lg sm:text-xl md:text-2xl leading-relaxed">
                            Meals, stay, swags,{" "}
                            <span className="font-semibold">certificates</span> &{" "}
                            <span className="font-semibold">prizes</span> for all!
                        </h2>

                        <div className="inline-block bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold px-4 py-2 rounded-full shadow-lg text-sm md:text-base">
                            ⏳ Registration Deadline Extended till{" "}
                            <span className="font-bold text-yellow-300">7th September</span> 🎉
                        </div>
                    </BoxReveal>

                    <BoxReveal boxColor={"#d900ff"} duration={0.75}>
                        <div className="flex md:flex-row flex-col gap-2.5 md:items-center items-start  justify-between">
                            <Link href={'https://nexhack.devfolio.co/overview'} target="_blank" className="rounded-full w-fit text-xl sm:text-base">
                                <InteractiveHoverButton className={' bg-gradient-to-tr from-pink-500 to-orange-300'}>
                                    Register Now On Devfolio
                                </InteractiveHoverButton>
                            </Link>
                        </div>
                    </BoxReveal>
                </div>

                {/* Orbiting Tech Icons */}
                <div className="relative h-[400px] sm:h-[500px] w-full lg:w-1/2 flex items-center justify-center overflow-visible">
                    <OrbitingCircles radius={200} iconSize={40}>
                        <FaReact className="text-cyan-400 text-4xl sm:text-5xl" />
                        <FaNodeJs className="text-green-600 text-4xl sm:text-5xl" />
                        <SiMongodb className="text-green-500 text-4xl sm:text-5xl" />
                        <FaJava className="text-orange-400 text-4xl sm:text-5xl" />
                        <FaDocker className="text-blue-500 text-4xl sm:text-5xl" />
                        <FaJs className="text-yellow-500 text-4xl sm:text-5xl" />
                    </OrbitingCircles>

                    <OrbitingCircles radius={110} reverse iconSize={40}>
                        <SiFirebase className="text-yellow-400 text-4xl sm:text-5xl" />
                        <FaPython className="text-blue-500 text-4xl sm:text-5xl" />
                        <SiTensorflow className="text-orange-500 text-4xl sm:text-5xl" />
                        <SiOpencv className="text-blue-300 text-4xl sm:text-5xl" />
                        <FaAws className="text-orange-400 text-4xl sm:text-5xl" />
                        <SiVercel className="text-white text-4xl sm:text-5xl" />
                        <SiPostgresql className="text-sky-700 text-4xl sm:text-5xl" />
                    </OrbitingCircles>
                </div>
            </div>
        </div>
    );
}

export default HeroSection;
