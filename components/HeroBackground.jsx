"use client";
import React from "react";
import { useRef, useEffect } from 'react';

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 w-full z-[-1] min-h-screen dark:bg-black bg-white text-white font-sans overflow-hidden">
      <div className="absolute inset-0  bg-gradient-to-br from-[#c88f4e] via-30% via-[#6320e8] to-[#121294] [mask-image:radial-gradient(900px_circle_at_0%_10%,white,transparent)]"></div>
      <div className="absolute inset-0   bg-gradient-to-br from-[#ee8a18]  via-transparent  to-[#184598] [mask-image:radial-gradient(670px_circle_at_60%_5%,white,transparent)]"></div>
      <div className="absolute inset-0  top-[10%] bg-gradient-to-br from-[#289b9b2a]  via-[#ec922438] to-[#3274f03a] [mask-image:radial-gradient(670px_circle_at_70%_35%,white,transparent)]"></div>
      {/* <div className="absolute inset-0  top-[40%]  bg-gradient-to-br from-[#289b9b2a]  via-[#ab00ab4f] to-[#3274f03a] [mask-image:radial-gradient(670px_circle_at_5%_50%,white,transparent)]"></div> */}
      <div className="
   bg-[radial-gradient(circle_at_30%_140%,bg-black,transparent_37%),radial-gradient(circle_at_50%_310%,#0400ff26,#a2a68700_78%),linear-gradient(transparent,#0d0a195e),radial-gradient(circle_at_50%_-30%,#a85c5c33,#67454500),radial-gradient(90%_10%_at_50%_0,#a85c5c0d,#67454500_90%)] absolute inset-0 top-[20%]"></div>

    </div>
  );
}
// const FeatureSection = () => {
//   return (
//     <main className="min-h-screen z-50 relative mx-auto text-white font-sans p-10 ">
//       <div className="absolute inset-0 z-[-1] bg-gradient-to-tl from-[#7846ddda] to-25% via-transparent to-transparent [mask-image:radial-gradient(670px_circle_at_70%_5%,white,transparent)] "></div>

//       <div className="w-[60%] mx-auto  grid grid-cols-1 gap-6 md:grid-cols-2">

//         <FeatureCard
//           title="Build multi-step agents calling custom tools"
//           subtitle="Create agentic systems on a single screen. Integrate any LLM into your workflows as fast as you can drag-n-drop."
//           className="
//       bg-[radial-gradient(circle_at_30%_140%,rgba(217,126,75,0.3),transparent_37%),radial-gradient(circle_at_50%_310%,#0400ff26,#a2a68700_78%),linear-gradient(transparent,#0d0a195e),radial-gradient(circle_at_50%_-30%,#a85c5c33,#67454500),radial-gradient(90%_10%_at_50%_0,#a85c5c0d,#67454500_90%)]"
//         >
//           <button className="mt-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-md text-sm font-semibold hover:opacity-90 transition">
//             Explore AI →
//           </button>
//         </FeatureCard>

//         <FeatureCard
//           title="Chat with your own data"
//           subtitle="Use Slack, Teams, SMS, voice, or embedded chat interface to get accurate answers from your data."
//           className={" bg-[radial-gradient(circle_at_30%_140%,rgba(217,126,75,0.3),transparent_37%),radial-gradient(circle_at_50%_310%,#0400ff26,#a2a68700_78%),linear-gradient(transparent,#0d0a195e),radial-gradient(circle_at_50%_-30%,#a85c5c33,#67454500),radial-gradient(90%_10%_at_50%_0,#a85c5c0d,#67454500_90%)]"}
//         >
//           <div className="space-y-2 text-sm text-gray-300">
//             <div className="bg-white/10 p-2 rounded-md">Who held meetings with SpaceX last week?</div>
//             <div className="bg-white/5 p-2 rounded-md text-xs">On Wednesday, Joe updated the status to "won"...</div>
//             <div className="bg-white/5 p-2 rounded-md text-xs">On Thursday, Sue provided on-site setup...</div>
//           </div>
//         </FeatureCard>

//         <FeatureCard
//           title="Self-host everything – including AI models"
//           subtitle="Protect your data by deploying on-prem."
//           className="md:col-span-2  bg-[radial-gradient(circle_at_30%_140%,rgba(217,126,75,0.3),transparent_37%),radial-gradient(circle_at_50%_310%,#0400ff26,#a2a68700_78%),linear-gradient(transparent,#0d0a195e),radial-gradient(90%_10%_at_50%_0,#a85c5c0d,#67454500_90%),radial-gradient(circle_at_50%_-30%,#a85c5c33,#67454500)]"
//         >
//           <ul className="list-disc pl-5 text-sm text-gray-300 space-y-1">
//             <li>Deploy with Docker</li>
//             <li>Access the entire source code on GitHub</li>
//             <li>Hosted version also available</li>
//           </ul>
//         </FeatureCard>
//       </div>
//     </main>
//   )
// }
// const FeatureCard = ({ title, subtitle, children, className }) => {
//   return (
//     <div className={`rounded-2xl p-6 bg-gradient-to-br from-[#1f1c2c] to-[#2c3e50] border border-white/10 backdrop-blur-md shadow-xl text-white ${className}`}>

//       <h2 className="text-xl font-bold mb-2">{title}</h2>
//       <p className="text-sm text-gray-300 mb-4">{subtitle}</p>
//       {children}
//     </div>
//   );
// };

const Noise = ({
  patternSize = 200,
  patternScaleX = 1,
  patternScaleY = 1,
  patternRefreshInterval = 2,
  patternAlpha = 7,
}) => {
  const grainRef = useRef(null);

  useEffect(() => {
    const canvas = grainRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let frame = 0;
    let animationId;
    const canvasSize = 1024;

    const resize = () => {
      if (!canvas) return;
      canvas.width = canvasSize;
      canvas.height = canvasSize;

      canvas.style.width = '100vw';
      canvas.style.height = '100%';
    };

    const drawGrain = () => {
      const imageData = ctx.createImageData(canvasSize, canvasSize);
      const data = imageData.data;

      for (let i = 0; i < data.length; i += 4) {
        const value = Math.random() * 255;
        data[i] = value;
        data[i + 1] = value;
        data[i + 2] = value;
        data[i + 3] = patternAlpha;
      }

      ctx.putImageData(imageData, 0, 0);
    };

    const loop = () => {
      if (frame % patternRefreshInterval === 0) {
        drawGrain();
      }
      frame++;
      animationId = window.requestAnimationFrame(loop);
    };

    window.addEventListener('resize', resize);
    resize();
    loop();

    return () => {
      window.removeEventListener('resize', resize);
      window.cancelAnimationFrame(animationId);
    };
  }, [patternSize, patternScaleX, patternScaleY, patternRefreshInterval, patternAlpha]);

  return <canvas className="pointer-events-none absolute  inset-0 w-full h-full " ref={grainRef} style={{ imageRendering: 'pixelated' }} />;
};
