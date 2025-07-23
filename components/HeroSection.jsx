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
import { BoxReveal } from "@/components/magicui/box-reveal";
import { InteractiveHoverButton } from "./magicui/InteractiveHoverButton";

function HeroSection() {
    return (
        <div className="relative px-6">
            <div className="flex flex-col lg:flex-row items-center justify-between min-h-[90vh] mt-16 lg:mt-0 gap-12">
                {/* Left Content */}
                <div className="w-full lg:w-1/2 pl-7 flex flex-col justify-start gap-3">
                    <BoxReveal boxColor={"#EA2F14"} duration={0.5}>
                        <h2 className="bg-gradient-to-l from-blue-800 via-orange-300 to-amber-600 bg-clip-text text-transparent font-bold text-7xl border-b-4 mb-3 border-zinc-400 pb-12 rounded-b-[40%] lg:text-9xl text-start">
                            Nexhack
                        </h2>
                    </BoxReveal>

                    <BoxReveal boxColor={"#E6521F"} duration={0.6}>
                        <h2 className="dark:text-white text-black font-semibold text-lg md:text-xl">
                            Build. Collaborate. Compete.
                            <br />
                            <span className=" font-bold">Nexhack</span> is a 24-hour hackathon by{" "}
                            <span className="text-cyan-400 font-semibold">Nexverse</span>, IITM’s tech society —
                            where students from all over come together to create something amazing.
                        </h2>
                    </BoxReveal>

                    <BoxReveal boxColor={"#E6521F"} duration={0.65}>
                        <h2 className="dark:text-white text-black font-semibold text-md    leading-relaxed">
                            🗓{" "}Registrations Starts
                            <span className="font-bold"> 20th Aug</span>
                            <br />
                            💻 Online Round: <span className="font-bold">14 Sep</span>
                            <br />
                            📍 Hack @ IITM: <span className="font-bold">26–27 Sep</span>
                        </h2>
                    </BoxReveal>

                    <BoxReveal boxColor={"#E6521F"} duration={0.7}>
                        <h2 className="dark:text-white text-black font-semibold text-lg sm:text-xl md:text-2xl leading-relaxed">
                            Meals, stay, swags,{" "}
                            <span className=" font-semibold">certificates</span> &{" "}
                            <span className=" font-semibold">prizes</span> for all!
                        </h2>
                    </BoxReveal>

                    <BoxReveal boxColor={"#E6521F"} duration={0.75}>
                        <InteractiveHoverButton>
                            <p className="rounded-full w-fit text-xl sm:text-base">
                                Register Now
                            </p>
                        </InteractiveHoverButton>
                    </BoxReveal>
                </div>


                {/* Orbiting Tech Icons */}
                <div className="relative h-[400px] sm:h-[500px] w-full lg:w-1/2 flex items-center justify-center overflow-visible">
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
    );
}

export default HeroSection;
