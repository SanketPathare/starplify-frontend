'use client';

import React from 'react';
import FilmPerforations from './FilmPerforations';

export default function StarplifyCtaBanner() {
  return (
    <section id="for-casting-directors" className="relative isolate scroll-mt-20 bg-[#080808]">
      <div id="cta-banner" className="scroll-mt-24" />

      {/* Top 35mm Film Sprocket Perforation Strip */}
      <FilmPerforations count={36} />

      {/* Inner Banner Container with Exact Figma Frame 57 Asset */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 relative">
        <div className="relative rounded-2xl overflow-hidden border border-white/15 bg-black shadow-2xl group">
          <img
            src="/images/figma/Frame 57.png"
            alt="Casting Made Simple & Efficient - Connect with the Right Talent"
            className="w-full h-auto object-cover block"
          />

          {/* Interactive Clickable Hotspot directly over the 'BROWSE AUDITIONS' Button */}
          <a
            href="#filmstrip"
            className="absolute top-[49%] sm:top-[51%] md:top-[52%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-44 sm:w-56 md:w-64 h-10 sm:h-12 md:h-14 rounded-lg cursor-pointer transition-all hover:ring-2 hover:ring-[#8233FF]/60 focus:outline-none focus:ring-2 focus:ring-[#8233FF]"
            aria-label="Browse Auditions"
          />
        </div>
      </div>

      {/* Bottom 35mm Film Sprocket Perforation Strip */}
      <FilmPerforations count={36} />
    </section>
  );
}
