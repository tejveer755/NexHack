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
      src: '/chirag.png',
      designation: 'lorem3 heiew wsb',
      linkedin: '#'
    },
    {
      title: 'Mentor 2',
      src: '/chirag.png',
      designation: 'lorem3 heiew wsb',
      linkedin: '#'
    },
    {
      title: 'Mentor 3',
      src: '/chirag.png',
      designation: 'lorem3 heiew wsb',
      linkedin: '#'
    },
    {
      title: 'Mentor 4',
      src: '/chirag.png',
      designation: 'lorem3 heiew wsb',
      linkedin: '#'
    },
    {
      title: 'Mentor 5',
      src: '/chirag.png',
      designation: 'lorem3 heiew wsb',
      linkedin: '#'
    },
    {
      title: 'Mentor 6',
      src: '/chirag.png',
      designation: 'lorem3 heiew wsb',
      linkedin: '#'
    },
  ];

  return (
    <section className="py-20 px-4 md:px-8 relative lg:px-10 " id='mentors'>
      <motion.h2
        initial={{ backgroundPosition: '0% 50%' }}
        animate={{ backgroundPosition: '100% 50%' }}
        transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
        className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 
        text-transparent bg-clip-text 
        bg-gradient-to-r from-orange-400 via-pink-300 to-cyan-400
        bg-[length:300%_300%] text-center w-fit mx-auto border-b border-zinc-50 pb-3 z-50"
      >
        Meet Our Mentors
      </motion.h2>
      <FocusCards cards={cards} />
    </section>
  );
}

export default Mentors;
