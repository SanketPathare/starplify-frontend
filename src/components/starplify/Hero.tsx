'use client';

import React from 'react';
import { Users } from 'lucide-react';

export default function StarplifyHero() {
  return (
    <section id="hero" className="relative isolate pt-36 pb-16 sm:pt-44 sm:pb-24 lg:pt-52 lg:pb-32 overflow-hidden scroll-mt-20">
      
      {/* Pristine 4K Audition Set Clapperboard Background Photo */}
      <div className="absolute inset-0 -z-10 bg-[#080808] pointer-events-none overflow-hidden" aria-hidden="true">
        <img
          src="/images/figma/hero_audition_bg.png"
          alt="Audition Set Clapperboard & Actress"
          className="w-full h-full object-cover object-center opacity-45"
        />
        {/* Soft Vignette Overlay to blend seamlessly into base */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#080808]/75 via-[#080808]/40 to-[#080808]" />
      </div>

      {/* Dramatic Purple Spotlight Glow Cone */}
      <div
        className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[950px] h-[750px] pointer-events-none -z-10"
        style={{
          background:
            'radial-gradient(ellipse 70% 60% at 50% 0%, rgba(130, 51, 255, 0.45) 0%, rgba(130, 51, 255, 0.12) 45%, transparent 75%)',
        }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Main Hero Headline (Frame 1321319014) */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5rem] font-bold uppercase text-white tracking-tight leading-[1.05] max-w-5xl mx-auto font-sans">
          BECAUSE YOUR TALENT <br className="hidden sm:inline" />
          DESERVES THE SPOTLIGHT.
        </h1>

        {/* Editorial Subheadline (Figma Typewriter Monospace) */}
        <p className="mt-6 sm:mt-7 text-sm sm:text-base md:text-lg text-[#C4C4CC] max-w-2xl mx-auto leading-relaxed font-mono">
          From auditions to final casting — streamline your entire journey with a platform designed for actors and recruiters.
        </p>

        {/* Dual Action CTA Buttons (Exact Figma Frame 1321319014) */}
        <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-sm sm:max-w-none mx-auto w-full">
          {/* Primary CTA: JOIN AS ACTOR */}
          <a
            href="#explore-talent"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-[8px] bg-[#8233FF] hover:bg-[#9353FF] text-white font-bold text-sm tracking-wider uppercase transition-all shadow-[0_0_25px_rgba(130,51,255,0.45)] group active:scale-95"
          >
            <span>JOIN AS ACTOR</span>
            <span className="w-5 h-5 rounded-full bg-white flex items-center justify-center text-[#8233FF] font-bold text-xs">
              +
            </span>
          </a>

          {/* Secondary CTA: BROWSE AUDITIONS */}
          <a
            href="#filmstrip"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-[8px] bg-white hover:bg-white/90 text-[#8233FF] font-bold text-sm tracking-wider uppercase transition-all shadow-md active:scale-95"
          >
            <span>BROWSE AUDITIONS</span>
            <Users className="w-4 h-4 text-[#8233FF]" />
          </a>
        </div>

        {/* Metrics Row (Clean, Open 3-Column Display matching Figma Frame 1321319015) */}
        <div className="mt-20 pt-10 grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 max-w-5xl mx-auto">
          <div className="flex flex-col items-center text-center px-4">
            <div className="text-4xl sm:text-5xl lg:text-6xl font-bold font-sans tracking-tight text-white mb-2">
              10,000+
            </div>
            <div className="text-xs sm:text-sm font-mono tracking-wider text-[#A1A1AA] uppercase">
              Actors Building Their Portfolio
            </div>
          </div>

          <div className="flex flex-col items-center text-center px-4">
            <div className="text-4xl sm:text-5xl lg:text-6xl font-bold font-sans tracking-tight text-white mb-2">
              500+
            </div>
            <div className="text-xs sm:text-sm font-mono tracking-wider text-[#A1A1AA] uppercase">
              New Roles Every Month
            </div>
          </div>

          <div className="flex flex-col items-center text-center px-4">
            <div className="text-4xl sm:text-5xl lg:text-6xl font-bold font-sans tracking-tight text-white mb-2">
              1,000+
            </div>
            <div className="text-xs sm:text-sm font-mono tracking-wider text-[#A1A1AA] uppercase">
              Successful Castings
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
