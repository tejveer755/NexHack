'use client'
import React from 'react';
import { FocusCards } from './ui/focus-cards';
import { motion } from 'framer-motion';

function Mentors() {
  const cards = [
    {
      title: 'Naman Bakul',
      src: '/mentors/namanbakul.png',
      designation: 'Senior DevOps Engineer',
      company: 'MakeMyTrip',
      linkedin: 'https://www.linkedin.com/in/naman-badkul-2b3a58168'
    },
    {
      title: 'Dheeraj Kumar',
      src: '/mentors/dheerajkumar.png',
      designation: 'Senior Solutions Architect ',
      company: 'MongoDB',
      linkedin: 'https://www.linkedin.com/in/dheerajtechy'
    },
    {
      title: 'Yash Chatrath',
      src: '/mentors/yashchatrath.png',
      designation: 'Data analyst ',
      company: 'Sony',
      linkedin: 'https://www.linkedin.com/in/chatrath-yash'
    },
    {
      title: 'Kashvi Arora',
      src: '/mentors/kashviarora.jpg',
      designation: 'Developer Relations Engineer',
      company: 'QuickBox',
      linkedin: 'https://www.linkedin.com/in/kashvi15'
    },
     {
      title: 'Avanish Kumar Singh',
      src: '/mentors/avanishkumarsingh.png',
      designation: 'Assistant Manager - AI ',
      company: 'Adani Defence & Aerospace',
      linkedin: 'http://linkedin.com/in/avanishh'
    },
     {
      title: 'Bimlesh',
      src: '/mentors/bimlesh.png',
      designation: 'Software Developer Intern',
      company: 'GOI',
      linkedin: 'https://www.linkedin.com/in/bimlesharma'
    },
    {
      title: 'Tushika Rawat',
      src: '/mentors/tushikarawat.png',
      designation: 'Intern',
      company: 'PhysicsWallah',
      linkedin: 'https://www.linkedin.com/in/tushika-rawat'
    },
    {
      title: 'Karan Vaswani',
      src: '/mentors/karanvaswani.png',
      designation: 'Full Stack Developer ',
      company: 'Deployd.io',
      linkedin: 'https://www.linkedin.com/in/karan-v-270102'
    },
    {
      title: 'Ekta Arora',
      src: '/mentors/ektaarora.png',
      designation: 'Ex-SDE intern ',
      company: 'Prodigy InfoTech',
      linkedin: 'http://linkedin.com/in/ektaarora01'
    },
    {
      title: 'Vinit Vijal',
      src: '/mentors/vinitvijal.png',
      designation: 'SDE-1',
      company: 'SBT Inc., Canada',
      linkedin: 'https://www.linkedin.com/in/vinitvijal'
    },
    {
      title: 'Mohammad Jari',
      src: '/mentors/mohammadjari.png',
      designation: 'Data Scientist and Ai Trainer',
      company: ' ',
      linkedin: '#'
    },
    {
      title: 'Nandini Singh ',
      src: '/mentors/nandinisingh.png',
      designation: 'Jr. Associate – Data & Science  ',
      company: 'SoftwareOne',
      linkedin: 'https://www.linkedin.com/in/nandinisingh05'
    },
  ];

  return (
    <section className="py-20 px-4 md:px-8 relative lg:px-10 overflow-hidden" id='judges'>
      <motion.h2
        initial={{ backgroundPosition: '0% 50%' }}
        animate={{ backgroundPosition: '100% 50%' }}
        transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
        className="text-4xl md:text-4xl lg:text-6xl font-bold mb-12 
        text-transparent bg-clip-text 
        bg-gradient-to-r from-orange-400 via-pink-300 to-cyan-400
        bg-[length:300%_300%] text-center w-fit mx-auto border-b border-zinc-50 pb-3 z-50"
      >
        Meet Our Judges & Mentors 
      </motion.h2>

      <FocusCards cards={cards} />
    </section>
  );
}

export default Mentors;
