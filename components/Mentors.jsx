'use client'
import React from 'react';
import { FocusCards } from './ui/focus-cards';
import { motion } from 'framer-motion';
import { ExpandableWrapper } from './ui/ExpandableWrapper';

function Mentors() {
  const cards = [
    {
      title: 'Naman Bakul',
      src: '/namanbakul.png',
      designation: 'Senior DevOps Engineer',
      company: 'MakeMyTrip',
      linkedin: 'https://www.linkedin.com/in/naman-badkul-2b3a58168'
    },
    {
      title: 'Dheeraj Kumar',
      src: '/dheerajkumar.jpg',
      designation: 'Senior Solutions Architect',
      company: 'MongoDB',
      linkedin: 'https://www.linkedin.com/in/dheerajtechy'
    },
    {
      title: 'Yash Chatrath',
      src: '/yashchatrath.png',
      designation: 'Data analyst ',
      company: 'Sony',
      linkedin: 'https://www.linkedin.com/in/chatrath-yash'
    },
    {
      title: 'Kashvi Arora',
      src: '/kashviarora.jpg',
      designation: 'AI\ML Engineer',
      company: 'QuickBox',
      linkedin: 'https://www.linkedin.com/in/kashvi15'
    },
    {
      title: 'Avanish Kumar Singh',
      src: '/avanishkumarsingh.png',
      designation: 'Assistant Manager - AI ',
      company: 'Adani Defence & Aerospace',
      linkedin: 'http://linkedin.com/in/avanishh'
    },
    {
      title: 'Bimlesh',
      src: '/bimlesh.png',
      designation: 'Software Developer Intern',
      company: 'Intern with Govt. of India',
      linkedin: 'https://www.linkedin.com/in/bimlesharma'
    },
    {
      title: 'Tushika Rawat',
      src: '/tushikarawat.png',
      designation: 'Intern',
      company: 'PhysicsWallah',
      linkedin: 'https://www.linkedin.com/in/tushika-rawat'
    },
    {
      title: 'Karan Vaswani',
      src: '/karanvaswani.png',
      designation: 'Full Stack Developer ',
      company: 'Deployd.io',
      linkedin: 'https://www.linkedin.com/in/karan-v-270102'
    },
    {
      title: 'Ekta Arora',
      src: '/ektaarora.png',
      designation: 'Ex-SDE intern ',
      company: 'Prodigy InfoTech',
      linkedin: 'http://linkedin.com/in/ektaarora01'
    },
    {
      title: 'Vinit Vijal',
      src: '/vinitvijal.png',
      designation: 'SDE-1',
      company: 'SBT Inc., Canada',
      linkedin: 'https://www.linkedin.com/in/vinitvijal'
    },
    {
      title: 'Mohammad Jari',
      src: '/mohammadjari.png',
      designation: 'Data Scientist and Ai Trainer',
      company: 'Ikigai school of ai',
      linkedin: 'https://www.linkedin.com/in/mohammadjari'
    },
    {
      title: 'Nandini Singh ',
      src: '/nandinisingh.png',
      designation: 'Jr. Associate - Data & AI',
      company: 'SoftwareOne',
      linkedin: 'https://www.linkedin.com/in/nandinisingh05'
    },
    {
      title: 'Isha Singh ',
      src: '/ishasingh.jpg',
      designation: ' AI enginner ',
      company: 'Fourmeta',
      linkedin: 'https://www.linkedin.com/in/isha-singh-aa26b4273'
    },


    {
      title: 'Mradul Katiyar',
      src: '/mradulkatiyar.png',
      designation: ' Senior Software Engineer ',
      company: 'Mphasis',
      linkedin: 'https://www.linkedin.com/in/mradul-katiyar-b98a18143'
    },
    {
      title: 'Swadesh Kumar',
      src: '/swadeshkumar.png',
      designation: 'Software engineer',
      company: 'Evalueserve',
      linkedin: 'http://linkedin.com/in/swadesh-kumar'
    },
    {
      title: 'Himanshu Shekhar',
      src: '/himanshushekhar.png',
      designation: 'Senior Software Engineer ',
      company: 'Nference',
      linkedin: 'https://www.linkedin.com/in/himanshu-shekhar-025151130'
    },
    {
      title: 'Siddharth Sharma ',
      src: '/siddharthsharma.png',
      designation: 'Co-Founder',
      company: 'Techvansh Innovations',
      linkedin: 'https://www.linkedin.com/in/siddharth-sharma-4866a6121'
    },
    {
      title: "Vishakha Singhal",
      designation: "Junior Software Developer, Co-founder @CodeNexAI",
      company: "Firstsource",
      linkedin: "https://www.linkedin.com/in/vishakha-singhal-18983b1bb",
      src: "vishakhasinghal.png"
    },
    {
      title: "Animesh Singh",
      designation: "AI/ML Full stack developer",
      company: "Techverse Nexus",
      linkedin: "https://www.linkedin.com/in/animeshsingh9693?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      src: "animeshsingh.png"
    },
    {
      title: "Pranav V",
      designation: "Associate Software Engineer",
      company: "Deloitte",
      linkedin: "https://www.linkedin.com/in/jainvpranav",
      src: "pranavv.png"
    },
    {
      title: "Parag Carpenter",
      designation: "Custom Software Engineering Associate Manager",
      company: "Accenture",
      linkedin: "https://www.linkedin.com/in/contact-parag-carpenter",
      src: "paragcarpenter.png"
    },
    {
      title: "Akshit Tiwari",
      designation: "App Developer",
      company: "",
      linkedin: "https://www.linkedin.com/in/akshit-tiwarii?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      src: "akshittiwari.png"
    },
    {
      title: "Vaibhav Jain",
      designation: "Senior Software Engineer",
      company: "Kerol Systems",
      linkedin: "https://www.linkedin.com/in/vaibhav-jain-94327383",
      src: "vaibhavjain.png"
    }
  ];

  return (
    <section className="py-20 px-3  md:px-8 relative lg:px-10 overflow-hidden" id='judges'>
      <ExpandableWrapper className='mb-5' collapsedHeight={1200}>

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
      </ExpandableWrapper>

    </section>
  );
}

export default Mentors;
