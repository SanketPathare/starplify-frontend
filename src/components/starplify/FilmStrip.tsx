'use client';

import React, { useState } from 'react';
import { X, ChevronRight } from 'lucide-react';

interface CategoryItem {
  id: string;
  title: string;
  imageUrl: string;
  tag: string;
  description: string;
}

const CATEGORIES: CategoryItem[] = [
  {
    id: 'drama',
    title: 'DRAMA',
    imageUrl: '/images/drama.png',
    tag: 'Theater & Classical',
    description: 'Immersive theatre productions, classical stage performances, and dramatic scripted scenes.',
  },
  {
    id: 'film',
    title: 'FILM',
    imageUrl: '/images/film.png',
    tag: 'Feature & Indie',
    description: 'Independent feature films, commercial festival entries, and cinema studio auditions.',
  },
  {
    id: 'web-series',
    title: 'WEB SERIES',
    imageUrl: '/images/web_series.png',
    tag: 'OTT & Digital',
    description: 'Binge-worthy streaming originals, episodic dramas, and digital web entertainment.',
  },
  {
    id: 'music',
    title: 'MUSIC',
    imageUrl: '/images/music.png',
    tag: 'Videos & Musicals',
    description: 'Music video narratives, musical theatre casting, and live touring choreographies.',
  },
];

export default function StarplifyFilmStrip() {
  const [activePreview, setActivePreview] = useState<CategoryItem | null>(null);

  return (
    <section id="about" className="relative py-20 sm:py-28 lg:py-32 bg-[#080808] overflow-hidden scroll-mt-20">
      <div id="how-it-works" className="scroll-mt-24" />
      <div id="filmstrip" className="scroll-mt-24" />

      {/* Architectural Background Vertical Grid Lines */}
      <div className="absolute inset-0 pointer-events-none z-[1] max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 divide-y-0 md:divide-x divide-white/[0.06]" aria-hidden="true">
        <div className="border-l border-white/[0.06] h-full" />
        <div className="h-full" />
        <div className="border-r border-white/[0.06] h-full" />
      </div>
      <div className="absolute inset-y-0 left-4 sm:left-8 xl:left-14 w-px bg-white/[0.04] pointer-events-none z-[1]" aria-hidden="true" />
      <div className="absolute inset-y-0 right-4 sm:right-8 xl:right-14 w-px bg-white/[0.04] pointer-events-none z-[1]" aria-hidden="true" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-14 lg:gap-16 items-center">

          {/* Left Column Narrative (Exact Reference Layout) */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[3.25rem] font-bold uppercase text-white tracking-tight leading-[1.08] font-sans">
              MADE FOR ACTORS WHO WANT TO <br />
              BE SEEN
            </h2>

            <p className="mt-6 sm:mt-7 text-xs sm:text-sm md:text-base text-[#A1A1AA] font-mono leading-relaxed max-w-xl">
              We've created a space where actors can build their presence, showcase their talent, and discover real casting opportunities — all in one place. No more endless searching or missed chances.
            </p>

            <p className="mt-4 sm:mt-5 text-xs sm:text-sm md:text-base text-[#A1A1AA] font-mono leading-relaxed max-w-xl">
              Whether you're a beginner taking your first step or an experienced actor looking for your next big role, Starplify helps you move forward with confidence.
            </p>

            <div className="mt-7 sm:mt-8 w-full sm:w-auto">
              <a
                href="#explore-talent"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3 rounded-[6px] bg-[#8233FF] hover:bg-[#9353FF] text-white font-bold text-xs sm:text-sm tracking-wider uppercase transition-all shadow-[0_0_20px_rgba(130,51,255,0.4)] group active:scale-95"
              >
                <span>JOIN AS ACTOR</span>
                <span className="w-5 h-5 rounded-full bg-white flex items-center justify-center text-[#8233FF] font-bold text-xs">
                  +
                </span>
              </a>
            </div>
          </div>

          {/* Right Column: Vertical 35mm Film Strip Reel (Exact Reference Asset & Layout) */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end w-full">
            <div className="relative bg-[#080808] flex items-stretch w-full max-w-[460px] sm:max-w-[490px] shadow-2xl rounded-none select-none overflow-hidden">

              {/* Left Solid White Vertical Strip with Circular Black Sprocket Holes */}
              <div className="w-5 sm:w-6 bg-white flex flex-col justify-between items-center py-2.5 select-none flex-shrink-0" aria-hidden="true">
                {Array.from({ length: 16 }).map((_, i) => (
                  <div
                    key={i}
                    className="w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full bg-[#080808] my-0.5 sm:my-1"
                  />
                ))}
              </div>

              {/* 2x2 Grid of High-Resolution Genre Cards */}
              <div className="flex-1 grid grid-cols-2 gap-3 sm:gap-4 p-2.5 sm:p-3.5 bg-[#080808]">
                {CATEGORIES.map((cat) => (
                  <div
                    key={cat.id}
                    onClick={() => setActivePreview(cat)}
                    className="group cursor-pointer flex flex-col transition-transform duration-200 active:scale-[0.98]"
                  >
                    {/* High-Resolution Artwork */}
                    <div className="relative aspect-[452/478] w-full overflow-hidden rounded-xl bg-black shadow-md border border-white/5 group-hover:border-[#8233FF]/50 transition-all">
                      <img
                        src={cat.imageUrl}
                        alt={cat.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>

                    {/* Card Title & White Circular Arrow Button (Exact Reference Design) */}
                    <div className="flex items-center justify-between pt-2.5 pb-1 px-1">
                      <span className="font-bold text-xs sm:text-sm tracking-wider uppercase text-white font-sans">
                        {cat.title}
                      </span>
                      <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center text-black font-bold group-hover:bg-[#8233FF] group-hover:text-white transition-colors flex-shrink-0">
                        <ChevronRight className="w-3.5 h-3.5 stroke-[2.5]" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Right Solid White Vertical Strip with Circular Black Sprocket Holes */}
              <div className="w-5 sm:w-6 bg-white flex flex-col justify-between items-center py-2.5 select-none flex-shrink-0" aria-hidden="true">
                {Array.from({ length: 16 }).map((_, i) => (
                  <div
                    key={i}
                    className="w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full bg-[#080808] my-0.5 sm:my-1"
                  />
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Interactive Category Preview Modal */}
      {activePreview && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setActivePreview(null)}
        >
          <div
            className="relative max-w-lg w-full bg-[#121218] border border-white/20 rounded-2xl overflow-hidden shadow-2xl p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActivePreview(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Close Preview"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="aspect-video w-full rounded-xl overflow-hidden mb-5 relative bg-black">
              <img
                src={activePreview.imageUrl}
                alt={activePreview.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                <span className="px-3 py-1 rounded-full bg-[#8233FF] text-white font-mono text-xs font-bold uppercase">
                  {activePreview.tag}
                </span>
              </div>
            </div>

            <h3 className="text-2xl font-bold font-sans uppercase text-white tracking-tight mb-2">
              {activePreview.title} Auditions
            </h3>
            <p className="text-xs sm:text-sm text-[#C4C4CC] font-mono leading-relaxed mb-6">
              {activePreview.description}
            </p>

            <div className="flex items-center gap-3">
              <a
                href="#explore-talent"
                onClick={() => setActivePreview(null)}
                className="flex-1 py-3 px-4 rounded-[6px] bg-[#8233FF] hover:bg-[#9353FF] text-white font-bold text-xs tracking-wider uppercase text-center transition-all shadow-[0_0_20px_rgba(130,51,255,0.4)]"
              >
                BROWSE {activePreview.title} ROLES
              </a>
              <button
                onClick={() => setActivePreview(null)}
                className="py-3 px-4 rounded-[6px] bg-white/10 hover:bg-white/15 text-white font-bold text-xs uppercase transition-colors"
              >
                CLOSE
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
