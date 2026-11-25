'use client';

import React from 'react';
import FilmPerforations from './FilmPerforations';
import { UserSearch } from 'lucide-react';

export default function StarplifyCtaBanner() {
  return (
    <section id="for-casting-directors" className="relative isolate scroll-mt-20 bg-[#080808]">
      <div id="cta-banner" className="scroll-mt-24" />

      {/* Background Architectural Grid Lines */}
      <div className="absolute inset-0 pointer-events-none z-[1] max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 divide-y-0 md:divide-x divide-white/[0.06]" aria-hidden="true">
        <div className="border-l border-white/[0.06] h-full" />
        <div className="h-full" />
        <div className="border-r border-white/[0.06] h-full" />
      </div>
      <div className="absolute inset-y-0 left-4 sm:left-8 xl:left-14 w-px bg-white/[0.04] pointer-events-none z-[1]" aria-hidden="true" />
      <div className="absolute inset-y-0 right-4 sm:right-8 xl:right-14 w-px bg-white/[0.04] pointer-events-none z-[1]" aria-hidden="true" />

      {/* Inner Banner Container with Video Background (Exact Reference Design) */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 relative z-10">
        <div className="relative isolate rounded-2xl overflow-hidden border border-white/10 bg-black shadow-2xl min-h-[440px] sm:min-h-[500px] md:min-h-[560px] lg:min-h-[600px] flex flex-col justify-between p-6 sm:p-10 md:p-12 lg:p-14">
          
          {/* Cinematic Behind-the-Scenes Filmmaking Video Background */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
            <video
              autoPlay
              loop
              muted
              playsInline
              poster="/images/cta_video_poster.png"
              className="w-full h-full object-cover object-center opacity-75"
            >
              <source src="/videos/cta_video.mp4" type="video/mp4" />
              <source src="/images/cta_video.mp4" type="video/mp4" />
              <img
                src="/images/cta_video_poster.png"
                alt="Behind the scenes filmmaking set"
                className="w-full h-full object-cover object-center opacity-75"
              />
            </video>
            {/* Dark tint overlay so text and CTA button pop cleanly */}
            <div className="absolute inset-0 bg-black/45" />
          </div>

          {/* Architectural Grid Lines inside the Card */}
          <div className="absolute inset-0 pointer-events-none z-[1] grid grid-cols-1 md:grid-cols-3 divide-y-0 md:divide-x divide-white/[0.08]" aria-hidden="true">
            <div className="h-full" />
            <div className="h-full" />
            <div className="h-full" />
          </div>

          {/* Center Top Content: Headline, Monospace Subtitle & Button */}
          <div className="relative z-10 flex flex-col items-center text-center max-w-2xl mx-auto pt-2 sm:pt-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.65rem] font-bold uppercase text-white tracking-tight leading-[1.12] font-sans">
              CASTING MADE SIMPLE &amp; <br />
              EFFICIENT
            </h2>

            <p className="mt-4 sm:mt-5 text-xs sm:text-sm text-[#D4D4D8] font-mono leading-relaxed max-w-lg mx-auto">
              Discover, evaluate, and connect with actors who match your requirements — all in one streamlined platform.
            </p>

            <div className="mt-7 sm:mt-8">
              <a
                href="#filmstrip"
                className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3 rounded-[6px] bg-white hover:bg-white/95 text-[#8233FF] font-bold text-xs sm:text-sm tracking-wider uppercase transition-all shadow-md active:scale-95 group"
              >
                <span>BROWSE AUDITIONS</span>
                <UserSearch className="w-4 h-4 text-[#8233FF]" />
              </a>
            </div>
          </div>

          {/* Bottom Right Content: CONNECT WITH THE RIGHT TALENT */}
          <div className="relative z-10 self-end text-right mt-14 sm:mt-20">
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-[2.25rem] font-bold uppercase text-white tracking-tight leading-tight font-sans">
              CONNECT WITH THE RIGHT <br />
              TALENT
            </h3>
          </div>

        </div>
      </div>

      {/* Bottom 35mm Film Sprocket Perforation Strip with Circular Black Holes (Exact Reference) */}
      <FilmPerforations count={36} />
    </section>
  );
}
