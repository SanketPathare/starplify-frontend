'use client';

import React from 'react';
import { Users } from 'lucide-react';

export default function StarplifyHero() {
  return (
    <section id="hero" className="relative isolate pt-36 pb-16 sm:pt-44 sm:pb-24 lg:pt-52 lg:pb-28 overflow-hidden scroll-mt-20">
      
      {/* Cinematic Audition Set Video Background with Fallback Photo (Frame 1) */}
      <div className="absolute inset-0 -z-10 bg-[#080808] pointer-events-none overflow-hidden" aria-hidden="true">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/images/hero_audition_bg.png"
          className="w-full h-full object-cover object-center opacity-40"
        >
          <source src="/videos/hero_video.mp4" type="video/mp4" />
          <source src="/images/hero_video.mp4" type="video/mp4" />
          {/* Fallback Image */}
          <img
            src="/images/hero_audition_bg.png"
            alt="Audition Set Clapperboard & Actress"
            className="w-full h-full object-cover object-center opacity-40"
          />
        </video>
        {/* Soft Vignette Overlay to blend seamlessly into dark background */}
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
        <p className="mt-6 sm:mt-7 text-xs sm:text-sm md:text-base text-[#C4C4CC] max-w-xl mx-auto leading-relaxed font-mono">
          From auditions to final casting — streamline your entire journey with a platform designed for actors and recruiters.
        </p>

        {/* Dual Action CTA Buttons (Exact Figma Frame 1321319014) */}
        <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-sm sm:max-w-none mx-auto w-full">
          {/* Primary CTA: JOIN AS ACTOR */}
          <a
            href="#explore-talent"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-[8px] bg-[#8233FF] hover:bg-[#9353FF] text-white font-bold text-xs sm:text-sm tracking-wider uppercase transition-all shadow-[0_0_25px_rgba(130,51,255,0.45)] group active:scale-95"
          >
            <span>JOIN AS ACTOR</span>
            <span className="w-5 h-5 rounded-full bg-white flex items-center justify-center text-[#8233FF] font-bold text-xs">
              +
            </span>
          </a>

          {/* Secondary CTA: BROWSE AUDITIONS */}
          <a
            href="#filmstrip"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-[8px] bg-white hover:bg-white/90 text-[#8233FF] font-bold text-xs sm:text-sm tracking-wider uppercase transition-all shadow-md active:scale-95"
          >
            <span>BROWSE AUDITIONS</span>
            <Users className="w-4 h-4 text-[#8233FF]" />
          </a>
        </div>

        {/* Metrics Row (Matching Figma Frame 1321319015 & Screenshot Layout) */}
        <div className="mt-20 pt-10 border-t border-white/10 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-white/10 max-w-5xl mx-auto">
          <div className="flex flex-col items-center text-center px-4">
            <div className="text-4xl sm:text-5xl lg:text-[3.25rem] font-bold font-sans tracking-tight text-white mb-2 leading-none">
              10,000+
            </div>
            <div className="text-xs sm:text-sm font-mono tracking-wide text-[#A1A1AA]">
              Actors Building Their Portfolio
            </div>
          </div>

          <div className="flex flex-col items-center text-center px-4 pt-6 md:pt-0">
            <div className="text-4xl sm:text-5xl lg:text-[3.25rem] font-bold font-sans tracking-tight text-white mb-2 leading-none">
              500+
            </div>
            <div className="text-xs sm:text-sm font-mono tracking-wide text-[#A1A1AA]">
              New Roles Every Month
            </div>
          </div>

          <div className="flex flex-col items-center text-center px-4 pt-6 md:pt-0">
            <div className="text-4xl sm:text-5xl lg:text-[3.25rem] font-bold font-sans tracking-tight text-white mb-2 leading-none">
              1,000+
            </div>
            <div className="text-xs sm:text-sm font-mono tracking-wide text-[#A1A1AA]">
              Successful Castings
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
