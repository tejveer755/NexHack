"use client";
import React from "react";
import { useRef, useEffect } from 'react';

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 w-full z-[-1] min-h-screen bg-black text-white font-sans overflow-hidden">
      <div className="absolute inset-0  bg-gradient-to-br from-[#f29af8] via-30% via-[#6320e8] to-[#121294] [mask-image:radial-gradient(900px_circle_at_0%_10%,white,transparent)]"></div>
      <div className="absolute inset-0   bg-gradient-to-br from-[#ab2aec]  via-transparent  to-[#184598] [mask-image:radial-gradient(670px_circle_at_60%_5%,white,transparent)]"></div>
      <div className="absolute inset-0  top-[10%] bg-gradient-to-br from-[#289b9b2a]  via-[#ec922438] to-[#3274f03a] [mask-image:radial-gradient(670px_circle_at_70%_35%,white,transparent)]"></div>
      <div className="
   bg-[radial-gradient(circle_at_30%_140%,bg-black,transparent_37%),radial-gradient(circle_at_50%_310%,#0400ff26,#a2a68700_78%),linear-gradient(transparent,#0d0a195e),radial-gradient(circle_at_50%_-30%,#a85c5c33,#67454500),radial-gradient(90%_10%_at_50%_0,#a85c5c0d,#67454500_90%)] absolute inset-0 top-[20%]"></div>
    <Noise patternAlpha={2} patternSize={100} patternScaleY={0} />
    </div>
  );
}
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
