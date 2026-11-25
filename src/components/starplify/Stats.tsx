'use client';

import React from 'react';

const STATS = [
  {
    number: '10,000+',
    label: 'ACTORS BUILDING THEIR PORTFOLIO',
    description: 'Active performers across theater, film, and digital web series',
  },
  {
    number: '500+',
    label: 'NEW ROLES EVERY MONTH',
    description: 'Direct audition notices posted by certified casting houses',
  },
  {
    number: '1,000+',
    label: 'SUCCESSFUL CASTINGS',
    description: 'Verified contracts signed through our talent network',
  },
];

export default function StarplifyStats() {
  return (
    <section id="metrics" className="relative py-12 sm:py-16 border-y border-white/10 bg-[#0c0c12]/60 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-white/10">
          {STATS.map((stat, idx) => (
            <div
              key={idx}
              className={`flex flex-col items-center text-center px-4 sm:px-8 ${
                idx > 0 ? 'pt-8 md:pt-0' : ''
              }`}
            >
              <div className="text-4xl sm:text-5xl lg:text-6xl font-black font-sans tracking-tight text-white mb-2 text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-[#C084FC] drop-shadow-[0_2px_12px_rgba(130,51,255,0.3)]">
                {stat.number}
              </div>
              <div className="text-xs sm:text-sm font-bold font-mono tracking-wider text-[#E4E4E7] uppercase mb-1">
                {stat.label}
              </div>
              <p className="text-xs text-[#71717A] max-w-xs">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
