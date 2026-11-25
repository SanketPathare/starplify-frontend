'use client';

import React from 'react';
import { UserSearch } from 'lucide-react';

const ACTOR_PORTRAITS = [
  {
    name: 'Clapperboard Actress',
    src: '/images/actor_clapper_actress.png',
    role: 'Lead Cinema Actress',
  },
  {
    name: 'Leather Jacket Actress',
    src: '/images/actor_leather_woman.png',
    role: 'Drama & OTT Performer',
  },
  {
    name: 'Red Spotlight Actor',
    src: '/images/actor_red_spotlight.png',
    role: 'Stage & Musical Theatre',
  },
  {
    name: 'Beige Trench Coat Actor',
    src: '/images/actor_beige_man.png',
    role: 'Commercial & Editorial',
  },
  {
    name: 'Smiling Bomber Jacket Actor',
    src: '/images/actor_center_man.png',
    role: 'Method Actor & OTT',
  },
  {
    name: 'Black Suit Actor',
    src: '/images/actor_black_suit.png',
    role: 'Feature Film Lead',
  },
];

export default function StarplifyDiscovery() {
  return (
    <section id="explore-talent" className="relative isolate py-20 sm:py-28 lg:py-36 bg-[#080808] overflow-hidden scroll-mt-20">
      
      {/* Background Architectural Grid Lines */}
      <div className="absolute inset-0 pointer-events-none z-[1] max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 divide-y-0 md:divide-x divide-white/[0.06]" aria-hidden="true">
        <div className="border-l border-white/[0.06] h-full" />
        <div className="h-full" />
        <div className="border-r border-white/[0.06] h-full" />
      </div>
      <div className="absolute inset-y-0 left-4 sm:left-8 xl:left-14 w-px bg-white/[0.04] pointer-events-none z-[1]" aria-hidden="true" />
      <div className="absolute inset-y-0 right-4 sm:right-8 xl:right-14 w-px bg-white/[0.04] pointer-events-none z-[1]" aria-hidden="true" />

      {/* Radiant Violet Horizontal Spotlight Ribbon with Right Flare (Exact Reference Asset) */}
      <div className="absolute inset-0 pointer-events-none -z-0 overflow-hidden" aria-hidden="true">
        {/* Central horizontal purple glow beam */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl h-[400px] pointer-events-none opacity-50"
          style={{
            background:
              'radial-gradient(ellipse 65% 50% at 50% 50%, rgba(130, 51, 255, 0.35) 0%, rgba(130, 51, 255, 0.1) 50%, transparent 80%)',
          }}
        />
        {/* Soft left purple accent glow */}
        <div
          className="absolute top-[40%] left-[-40px] -translate-y-1/2 w-[400px] h-[350px] pointer-events-none opacity-40"
          style={{
            background:
              'radial-gradient(ellipse at 15% 50%, rgba(130, 51, 255, 0.4) 0%, transparent 65%)',
          }}
        />
        {/* Dramatic Right Flare (Exact Match for Reference) */}
        <div
          className="absolute top-[45%] right-[-100px] -translate-y-1/2 w-[550px] h-[500px] pointer-events-none opacity-85"
          style={{
            background:
              'radial-gradient(ellipse 75% 65% at 95% 50%, rgba(130, 51, 255, 0.75) 0%, rgba(130, 51, 255, 0.3) 45%, transparent 75%)',
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative min-h-[750px] lg:min-h-[860px] xl:min-h-[920px] flex flex-col justify-center items-center z-10">
        
        {/* Floating 6 Actor Portraits (Desktop Exact Reference Positions) */}
        <div className="hidden lg:block absolute inset-0 pointer-events-none">
          
          {/* 1. Top Center: Clapperboard Actress */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-auto w-52 xl:w-60 rounded-2xl overflow-hidden shadow-2xl transition-transform duration-300 hover:scale-105 bg-black">
            <img
              src="/images/actor_clapper_actress.png"
              alt="Actress with Clapperboard"
              className="w-full h-auto object-cover block"
              loading="lazy"
            />
          </div>

          {/* 2. Top Left: Woman in Leather Jacket */}
          <div className="absolute top-[7%] left-2 xl:left-4 pointer-events-auto w-48 xl:w-56 rounded-2xl overflow-hidden shadow-2xl transition-transform duration-300 hover:scale-105 bg-black">
            <img
              src="/images/actor_leather_woman.png"
              alt="Lead Drama Actress"
              className="w-full h-auto object-cover block"
              loading="lazy"
            />
          </div>

          {/* 3. Top Right: Performer in Red Spotlight */}
          <div className="absolute top-[15%] right-6 xl:right-10 pointer-events-auto w-44 xl:w-52 rounded-2xl overflow-hidden shadow-2xl transition-transform duration-300 hover:scale-105 bg-black">
            <img
              src="/images/actor_red_spotlight.png"
              alt="Cinema Lead in Red Spotlight"
              className="w-full h-auto object-cover block"
              loading="lazy"
            />
          </div>

          {/* 4. Bottom Left: Actors in Beige Coat */}
          <div className="absolute bottom-[4%] left-0 xl:left-2 pointer-events-auto w-52 xl:w-60 rounded-2xl overflow-hidden shadow-2xl transition-transform duration-300 hover:scale-105 bg-black">
            <img
              src="/images/actor_beige_man.png"
              alt="Actors in Editorial Coat"
              className="w-full h-auto object-cover block"
              loading="lazy"
            />
          </div>

          {/* 5. Bottom Center: Smiling Actor in Black Jacket */}
          <div className="absolute bottom-[2%] left-[45%] -translate-x-1/2 pointer-events-auto w-64 xl:w-72 rounded-2xl overflow-hidden shadow-2xl transition-transform duration-300 hover:scale-105 bg-black">
            <img
              src="/images/actor_center_man.png"
              alt="Smiling Actor in Black Jacket"
              className="w-full h-auto object-cover block"
              loading="lazy"
            />
          </div>

          {/* 6. Bottom Right: Handsome Actor in Black Suit */}
          <div className="absolute bottom-0 right-4 xl:right-8 pointer-events-auto w-52 xl:w-64 rounded-2xl overflow-hidden shadow-2xl transition-transform duration-300 hover:scale-105 bg-black">
            <img
              src="/images/actor_black_suit.png"
              alt="Feature Film Performer in Black Suit"
              className="w-full h-auto object-cover block"
              loading="lazy"
            />
          </div>

        </div>

        {/* Center Typography & CTA Button */}
        <div className="text-center max-w-2xl mx-auto relative z-20 py-12 sm:py-16 px-2">
          <h2 className="text-3xl sm:text-4xl md:text-4xl  xl:text-[3.15rem] font-bold uppercase text-white tracking-tight leading-[1.12] font-sans">
            UNLOCK AUDITIONS &amp; DISCOVER <br />
            10,000+ ACTORS TAILORED TO <br />
            YOUR REQUIREMENTS
          </h2>

          <p className="mt-5 text-xs sm:text-sm text-[#A1A1AA] font-mono leading-relaxed max-w-lg mx-auto">
            Login to access casting calls, view complete actor portfolios, watch audition videos, and shortlist the right talent with ease.
          </p>

          <div className="mt-8 flex justify-center">
            <a
              href="#filmstrip"
              className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3 rounded-[6px] bg-white hover:bg-white/95 text-[#8233FF] font-bold text-xs sm:text-sm tracking-wider uppercase transition-all shadow-md active:scale-95 group"
            >
              <span>BROWSE AUDITIONS</span>
              <UserSearch className="w-4 h-4 text-[#8233FF]" />
            </a>
          </div>
        </div>

        {/* Mobile/Tablet Gallery Grid (Showing All 6 Actors Cleanly) */}
        <div className="lg:hidden mt-8 grid grid-cols-2 sm:grid-cols-3 gap-3.5 sm:gap-4 w-full max-w-3xl mx-auto z-10 px-2">
          {ACTOR_PORTRAITS.map((actor, idx) => (
            <div
              key={idx}
              className="rounded-xl overflow-hidden border border-white/10 aspect-[3/4] shadow-lg relative group bg-neutral-950"
            >
              <img
                src={actor.src}
                alt={actor.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-2 left-2 right-2 text-left">
                <span className="text-[10px] font-mono text-white/80 block truncate">
                  {actor.role}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
