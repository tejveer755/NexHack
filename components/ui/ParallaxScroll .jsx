"use client";
import { useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { motion } from "motion/react";

import { cn } from "@/lib/utils";

export const ParallaxScroll = ({
    cards,
    className
}) => {
    const gridRef = useRef(null);
    const { scrollYProgress } = useScroll({
        container: gridRef, // remove this if your container is not fixed height
        offset: ["start start", "end start"], // remove this if your container is not fixed height
    });

    const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
    const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const translateThird = useTransform(scrollYProgress, [0, 1], [0, -200]);

    const third = Math.ceil(cards.length / 3);

    const firstPart = cards.slice(0, third);
    const secondPart = cards.slice(third, 2 * third);
    const thirdPart = cards.slice(2 * third);

    return (
        <div
            className={cn("h-fit items-start overflow-y-auto w-full", className)}
            ref={gridRef}>
            <div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start  max-w-5xl mx-auto gap-10 py-40 px-10"
                ref={gridRef}>
                <div className="grid gap-10">
                    {firstPart.map((el, idx) => (
                        <motion.div
                            // Apply the translateY motion value here
                            style={{ y: translateFirst }}
                            key={"grid-1" + idx}>
                            <div className="relative h-80 w-full max-w-md mx-auto rounded-2xl p-[2px] bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400">
                                <div className="h-full w-full bg-zinc-900 rounded-[inherit] flex flex-col justify-center items-center text-white px-6 py-4">
                                    <h2 className="text-2xl font-semibold mb-2 text-center">{el.title}</h2>
                                    <p className="text-sm text-gray-300 text-center">
                                        {el.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
                <div className="grid gap-10">
                    {secondPart.map((el, idx) => (
                        <motion.div style={{ y: translateSecond }} key={"grid-2" + idx}>
                            <div className="relative h-80 w-full max-w-md mx-auto rounded-2xl p-[2px] bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400">
                                <div className="h-full w-full bg-zinc-900 rounded-[inherit] flex flex-col justify-center items-center text-white px-6 py-4">
                                    <h2 className="text-2xl font-semibold mb-2 text-center">{el.title}</h2>
                                    <p className="text-sm text-gray-300 text-center">
                                        {el.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
                <div className="grid gap-10">
                    {thirdPart.map((el, idx) => (
                        <motion.div style={{ y: translateThird }} key={"grid-3" + idx}>
                            <div className="relative h-80 w-full max-w-md mx-auto rounded-2xl p-[2px] bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400">
                                <div className="h-full w-full bg-zinc-900 rounded-[inherit] flex flex-col justify-center items-center text-white px-6 py-4">
                                    <h2 className="text-2xl font-semibold mb-2 text-center">{el.title}</h2>
                                    <p className="text-sm text-gray-300 text-center">
                                        {el.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};
