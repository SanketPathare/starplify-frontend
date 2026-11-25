'use client';

import React from 'react';
import { UserSearch } from 'lucide-react';

export default function StarplifyHero() {
  return (
    <section id="hero" className="relative isolate pt-28 pb-12 sm:pt-36 sm:pb-16 lg:pt-40 lg:pb-16 overflow-hidden scroll-mt-20">
      
      {/* Cinematic Audition Set Video Background with Fallback Photo (Frame 1) */}
      <div className="absolute inset-0 -z-10 bg-[#080808] pointer-events-none overflow-hidden" aria-hidden="true">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/images/hero_audition_bg.png"
          className="w-full h-full object-cover object-center opacity-50"
        >
          <source src="/videos/hero_video.mp4" type="video/mp4" />
          <source src="/images/hero_video.mp4" type="video/mp4" />
          {/* Fallback Image */}
          <img
            src="/images/hero_audition_bg.png"
            alt="Audition Set Clapperboard & Actress"
            className="w-full h-full object-cover object-center opacity-50"
          />
        </video>
        {/* Soft Dark Vignette Tint: clapperboard and studio lights remain crisp and legible */}
        <div className="absolute inset-0 bg-black/55" />
      </div>

      {/* Architectural Background Vertical Grid Lines (Exact alignment with metrics columns) */}
      <div className="absolute inset-0 pointer-events-none z-[1] max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 divide-y-0 md:divide-x divide-white/[0.08]" aria-hidden="true">
        <div className="border-l border-white/[0.08] h-full" />
        <div className="h-full" />
        <div className="border-r border-white/[0.08] h-full" />
      </div>
      {/* Outer edge architectural margin lines */}
      <div className="absolute inset-y-0 left-4 sm:left-8 xl:left-14 w-px bg-white/[0.05] pointer-events-none z-[1]" aria-hidden="true" />
      <div className="absolute inset-y-0 right-4 sm:right-8 xl:right-14 w-px bg-white/[0.05] pointer-events-none z-[1]" aria-hidden="true" />

      {/* Main Content Area */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Main Hero Headline (Frame 1321319014) */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-bold uppercase text-white tracking-tight leading-[1.1] max-w-4xl mx-auto font-sans">
          BECAUSE YOUR TALENT <br className="hidden sm:inline" />
          DESERVES THE SPOTLIGHT.
        </h1>

        {/* Editorial Subheadline (Figma Typewriter Monospace) */}
        <p className="mt-5 sm:mt-6 text-xs sm:text-sm md:text-base text-[#C4C4CC] max-w-xl mx-auto leading-relaxed font-mono">
          From auditions to final casting – streamline your entire journey with a platform designed for actors and recruiters.
        </p>

        {/* Dual Action CTA Buttons (Exact Figma Frame 1321319014) */}
        <div className="mt-8 sm:mt-9 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-sm sm:max-w-none mx-auto w-full">
          {/* Primary CTA: JOIN AS ACTOR */}
          <a
            href="#explore-talent"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3 rounded-[6px] bg-[#8233FF] hover:bg-[#9353FF] text-white font-bold text-xs sm:text-sm tracking-wider uppercase transition-all shadow-[0_0_25px_rgba(130,51,255,0.4)] group active:scale-95"
          >
            <span>JOIN AS ACTOR</span>
            <span className="w-5 h-5 rounded-full bg-white flex items-center justify-center text-[#8233FF] font-bold text-xs">
              +
            </span>
          </a>

          {/* Secondary CTA: BROWSE AUDITIONS */}
          <a
            href="#filmstrip"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3 rounded-[6px] bg-white hover:bg-white/95 text-[#8233FF] font-bold text-xs sm:text-sm tracking-wider uppercase transition-all shadow-md active:scale-95"
          >
            <span>BROWSE AUDITIONS</span>
            <UserSearch className="w-4 h-4 text-[#8233FF]" />
          </a>
        </div>
      </div>

      {/* Full-width Horizontal Divider Line intersecting vertical grid lines */}
      <div className="relative z-10 w-full border-t border-white/10 mt-16 sm:mt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-white/10 pt-8 pb-3">
            <div className="flex flex-col items-center text-center px-4">
              <div className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold font-sans tracking-tight text-white mb-2 leading-none">
                10,000+
              </div>
              <div className="text-xs sm:text-sm font-mono tracking-wide text-[#A1A1AA]">
                Actors Building Their Portfolio
              </div>
            </div>

            <div className="flex flex-col items-center text-center px-4 pt-6 md:pt-0">
              <div className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold font-sans tracking-tight text-white mb-2 leading-none">
                500+
              </div>
              <div className="text-xs sm:text-sm font-mono tracking-wide text-[#A1A1AA]">
                New Roles Every Month
              </div>
            </div>

            <div className="flex flex-col items-center text-center px-4 pt-6 md:pt-0">
              <div className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold font-sans tracking-tight text-white mb-2 leading-none">
                1,000+
              </div>
              <div className="text-xs sm:text-sm font-mono tracking-wide text-[#A1A1AA]">
                Successful Castings
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
