'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { MagicCard } from './ui/MagicCard';

export default function CallToAction() {
  return (
    <section className="relative py-20 px-6 md:px-16 my-6 bg-transparent flex items-center justify-center overflow-hidden">
      {/* Soft background glow */}
      <div className="absolute inset-0 top-[15%] flex items-center justify-center pointer-events-none z-0">
        <div className="w-[500px] h-[500px] bg-gradient-to-br from-purple-600/20 via-amber-400/40 to-blue-500/20 blur-3xl rounded-full"></div>
      </div>
      <MagicCard 
        gradientColor={' oklch(82.8% 0.189 84.429)'}
      gradientOpacity={0.2}
      gradientSize={300}
      gradientFrom={'#ee8a18'}
      gradientTo={'#ee7a18'}
      className={`flex flex-col justify-end p-6 border border-slate-700/40 rounded-2xl 
        transition-all duration-300 ease-in-out
        hover:scale-[1.03]  relative !bg-black/40 backdrop-blur-lg  `}
      >

        <div
          className="relative z-10 w-full max-w-3xl bg-gradient-to-rf from-transparent to-stone-500  px-6 py-10 md:px-10 text-center  space-y-6"
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-white">
            Ready to Code. Create. Connect.
          </h2>
          <p className="text-gray-300 text-sm md:text-base">
            Join hundreds of college innovators for 24 hours of coding, chaos, creativity — and maybe caffeine. Build something awesome with your friends and win exciting prizes!
          </p>
          <a
            href="#"
            className="inline-block mt-4 px-6 py-3 rounded-full bg-white text-black text-sm md:text-base font-medium hover:bg-gray-200 transition"
          >
            Register Your Squad 🚀
          </a>
        </div>
      </MagicCard>
    </section>
  );
}
