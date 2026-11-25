'use client';

import React from 'react';
import { Users } from 'lucide-react';

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
    <section id="explore-talent" className="relative isolate py-28 sm:py-36 lg:py-48 bg-[#080808] overflow-hidden scroll-mt-20">
      
      {/* Radiant Violet Spotlight Beam in Center (Exact Figma Frame 1321319007) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] sm:w-[1250px] h-[550px] pointer-events-none -z-0">
        <div
          className="w-full h-full opacity-70"
          style={{
            background:
              'radial-gradient(ellipse at center, rgba(130, 51, 255, 0.48) 0%, rgba(130, 51, 255, 0.12) 48%, transparent 72%)',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative min-h-[900px] lg:min-h-[1050px] flex flex-col justify-center items-center z-10">
        
        {/* Floating 6 Actor Portraits (Desktop Exact Figma Ring Layout) */}
        <div className="hidden lg:block absolute inset-0 pointer-events-none">
          
          {/* 1. Top Center: Clapperboard Actress */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 pointer-events-auto w-48 xl:w-56 rounded-2xl overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.85)] border border-white/15 hover:border-[#8233FF]/60 transition-transform duration-300 hover:scale-105 bg-black">
            <img
              src="/images/actor_clapper_actress.png"
              alt="Actress with Clapperboard"
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </div>

          {/* 2. Top Left: Woman in Leather Jacket */}
          <div className="absolute top-[22%] left-4 xl:left-10 pointer-events-auto w-44 xl:w-52 rounded-2xl overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.85)] border border-white/15 hover:border-[#8233FF]/60 transition-transform duration-300 hover:scale-105 bg-black">
            <img
              src="/images/actor_leather_woman.png"
              alt="Lead Drama Actress"
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </div>

          {/* 3. Top Right: Performer in Red Spotlight */}
          <div className="absolute top-[24%] right-4 xl:right-10 pointer-events-auto w-44 xl:w-52 rounded-2xl overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.85)] border border-white/15 hover:border-[#8233FF]/60 transition-transform duration-300 hover:scale-105 bg-black">
            <img
              src="/images/actor_red_spotlight.png"
              alt="Cinema Lead in Red Spotlight"
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </div>

          {/* 4. Bottom Left: Actor in Beige Trench Coat */}
          <div className="absolute bottom-10 left-6 xl:left-16 pointer-events-auto w-48 xl:w-56 rounded-2xl overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.85)] border border-white/15 hover:border-[#8233FF]/60 transition-transform duration-300 hover:scale-105 bg-black">
            <img
              src="/images/actor_beige_man.png"
              alt="Actor in Beige Trench Coat"
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </div>

          {/* 5. Bottom Center: Smiling Actor in Black Jacket */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 pointer-events-auto w-52 xl:w-60 rounded-2xl overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.85)] border border-white/15 hover:border-[#8233FF]/60 transition-transform duration-300 hover:scale-105 bg-black">
            <img
              src="/images/actor_center_man.png"
              alt="Smiling Actor in Black Jacket"
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </div>

          {/* 6. Bottom Right: Handsome Actor in Black Suit */}
          <div className="absolute bottom-10 right-6 xl:right-16 pointer-events-auto w-44 xl:w-52 rounded-2xl overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.85)] border border-white/15 hover:border-[#8233FF]/60 transition-transform duration-300 hover:scale-105 bg-black">
            <img
              src="/images/actor_black_suit.png"
              alt="Feature Film Performer in Black Suit"
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </div>

        </div>

        {/* Center Typography & CTA Button */}
        <div className="text-center max-w-2xl mx-auto relative z-20 py-16 sm:py-24 px-2">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold uppercase text-white tracking-tight leading-[1.12] font-sans">
            UNLOCK AUDITIONS &amp; DISCOVER <br />
            10,000+ ACTORS TAILORED TO <br />
            YOUR REQUIREMENTS
          </h2>

          <p className="mt-6 text-xs sm:text-sm md:text-base text-[#D4D4D8] font-mono leading-relaxed max-w-lg mx-auto">
            Login to access casting calls, view complete actor portfolios, watch audition videos, and shortlist the right talent with ease.
          </p>

          <div className="mt-8 flex justify-center">
            <a
              href="#filmstrip"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-[8px] bg-white hover:bg-white/90 text-[#8233FF] font-bold text-sm tracking-wider uppercase transition-all shadow-[0_0_25px_rgba(255,255,255,0.2)] group active:scale-95"
            >
              <span>BROWSE AUDITIONS</span>
              <Users className="w-4 h-4 text-[#8233FF] transition-transform group-hover:scale-110" />
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
