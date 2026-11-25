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
    <section
      id="explore-talent"
      className="relative isolate py-20 sm:py-24 lg:py-28 bg-[#000000] overflow-hidden scroll-mt-20"
    >
      {/* Radiant Violet Spotlight Shape (Exact Silhouette Match) */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          preserveAspectRatio="none"
          viewBox="0 0 1440 900"
        >
          <defs>
            <linearGradient id="purpleSpotlightBeam" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#2A0548" stopOpacity="0.45" />
              <stop offset="22%" stopColor="#4C0D78" stopOpacity="0.72" />
              <stop offset="52%" stopColor="#3E0966" stopOpacity="0.68" />
              <stop offset="78%" stopColor="#6B14A8" stopOpacity="0.82" />
              <stop offset="100%" stopColor="#8B1EC4" stopOpacity="0.98" />
            </linearGradient>
            <filter id="beamGaussianBlur" x="-20%" y="-40%" width="140%" height="180%">
              <feGaussianBlur stdDeviation="34" />
            </filter>
          </defs>
          <path
            d="M -60,340 C 120,250 280,235 460,295 C 660,360 820,405 1020,385 C 1200,365 1330,275 1500,195 L 1500,710 C 1330,655 1180,605 980,600 C 760,595 520,625 280,645 C 120,655 0,635 -60,610 Z"
            fill="url(#purpleSpotlightBeam)"
            filter="url(#beamGaussianBlur)"
          />
        </svg>
      </div>

      {/* Architectural 3-Column Vertical Grid Lines (Behind Portraits & Text) */}
      <div
        className="pointer-events-none absolute inset-0 z-[1] max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
        aria-hidden="true"
      >
        <div className="w-full h-full grid grid-cols-1 md:grid-cols-3 border-l border-r border-white/[0.07] divide-y-0 md:divide-x divide-white/[0.07]">
          <div className="h-full" />
          <div className="h-full" />
          <div className="h-full" />
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative min-h-[760px] lg:min-h-[860px] xl:min-h-[900px] flex flex-col justify-center items-center z-10">
        {/* Floating 6 Actor Portraits (Desktop Reference Positions) */}
        <div className="hidden lg:block absolute inset-0 pointer-events-none">
          {/* 1. Top Center: Clapperboard Actress */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-auto w-48 xl:w-56 rounded-lg overflow-hidden border border-white/[0.08] shadow-2xl transition-transform duration-300 hover:scale-105 bg-black">
            <img
              src="/images/actor_clapper_actress.png"
              alt="Actress with Clapperboard"
              className="w-full h-auto object-cover block"
              loading="lazy"
            />
          </div>

          {/* 2. Top Left: Woman in Leather Jacket */}
          <div className="absolute top-[8%] left-6 xl:left-8 pointer-events-auto w-44 xl:w-52 rounded-lg overflow-hidden border border-white/[0.08] shadow-2xl transition-transform duration-300 hover:scale-105 bg-black">
            <img
              src="/images/actor_leather_woman.png"
              alt="Lead Drama Actress"
              className="w-full h-auto object-cover block"
              loading="lazy"
            />
          </div>

          {/* 3. Top Right: Performer in Red Spotlight */}
          <div className="absolute top-[18%] right-6 xl:right-10 pointer-events-auto w-36 xl:w-44 rounded-lg overflow-hidden border border-white/[0.08] shadow-2xl transition-transform duration-300 hover:scale-105 bg-black">
            <img
              src="/images/actor_red_spotlight.png"
              alt="Cinema Lead in Red Spotlight"
              className="w-full h-auto object-cover block"
              loading="lazy"
            />
          </div>

          {/* 4. Bottom Left: Actors in Beige Coat */}
          <div className="absolute bottom-[6%] left-2 xl:left-4 pointer-events-auto w-52 xl:w-60 rounded-lg overflow-hidden border border-white/[0.08] shadow-2xl transition-transform duration-300 hover:scale-105 bg-black">
            <img
              src="/images/actor_beige_man.png"
              alt="Actors in Editorial Coat"
              className="w-full h-auto object-cover block"
              loading="lazy"
            />
          </div>

          {/* 5. Bottom Center: Smiling Actor in Black Jacket */}
          <div className="absolute bottom-[3%] left-[47%] -translate-x-1/2 pointer-events-auto w-60 xl:w-72 rounded-lg overflow-hidden border border-white/[0.08] shadow-2xl transition-transform duration-300 hover:scale-105 bg-black">
            <img
              src="/images/actor_center_man.png"
              alt="Smiling Actor in Black Jacket"
              className="w-full h-auto object-cover block"
              loading="lazy"
            />
          </div>

          {/* 6. Bottom Right: Handsome Actor in Black Suit */}
          <div className="absolute bottom-0 right-4 xl:right-6 pointer-events-auto w-52 xl:w-64 rounded-lg overflow-hidden border border-white/[0.08] shadow-2xl transition-transform duration-300 hover:scale-105 bg-black">
            <img
              src="/images/actor_black_suit.png"
              alt="Feature Film Performer in Black Suit"
              className="w-full h-auto object-cover block"
              loading="lazy"
            />
          </div>
        </div>

        {/* Center Typography & CTA Button */}
        <div className="text-center max-w-2xl mx-auto relative z-20 py-14 sm:py-16 px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.5rem] font-bold uppercase text-white tracking-tight leading-[1.15] font-sans">
            UNLOCK AUDITIONS &amp; DISCOVER <br />
            10,000+ ACTORS TAILORED TO <br />
            YOUR REQUIREMENTS
          </h2>

          <p className="mt-5 text-xs sm:text-[13px] text-[#C4C4CC] font-mono leading-relaxed max-w-lg mx-auto">
            Login to access casting calls, view complete actor portfolios, match audition videos, and shortlist the right talent with ease.
          </p>

          <div className="mt-8 flex justify-center">
            <a
              href="#for-casting-directors"
              className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3 rounded-[4px] bg-white hover:bg-white/95 text-[#8233FF] font-bold text-xs sm:text-sm tracking-wider uppercase transition-all shadow-[0_0_25px_rgba(130,51,255,0.35)] active:scale-95 group"
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
              className="rounded-lg overflow-hidden border border-white/10 aspect-[3/4] shadow-lg relative group bg-neutral-950"
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
