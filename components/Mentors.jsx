'use client'
import React from 'react';
import { FocusCards } from './ui/focus-cards'; // Ensure this component exists
import { motion } from 'framer-motion';
import { Particles } from './ui/Particles';
import { MagicCard } from './ui/MagicCard';

function Mentors() {
  const cards = [
    {
      title: 'Mentor ',
      src: '/coming_soon.png',
      designation: 'lorem3 heiew wsb',
      linkedin: '#'
    }
  ];

  return (
    <section className="py-20 px-4 md:px-8 relative lg:px-10 " id='judges'>
      {/* <div className="absolute inset-0 h-1/2  ">
        <Particles ease={300} staticity={50} vx={-0.8} vy={-.3}/>
    </div> */}
      <motion.h2
        initial={{ backgroundPosition: '0% 50%' }}
        animate={{ backgroundPosition: '100% 50%' }}
        transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
        className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 
        text-transparent bg-clip-text 
        bg-gradient-to-r from-orange-400 via-pink-300 to-cyan-400
        bg-[length:300%_300%] text-center w-fit mx-auto border-b border-zinc-50 pb-3 z-50"
      >
        Meet Our Mentors & Judges
      </motion.h2>
      {/* <FocusCards cards={cards} /> */}
      <div className="relative">
        {/* Background glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 blur-3xl " />
        <div className="relative z-10 flex items-center justify-center">
          <img src="/coming_soon.png" alt="Coming Soon" className="w-auto max-w-xs md:max-w-md" />
        </div>

      </div>
    </section>
  );
}

export default Mentors;
