'use client';

import React, { useState } from 'react';
import { ArrowRight, X, Play } from 'lucide-react';

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
    imageUrl: '/images/figma/drama.png',
    tag: 'Theater & Classical',
    description: 'Immersive theatre productions, classical stage performances, and dramatic scripted scenes.',
  },
  {
    id: 'film',
    title: 'FILM',
    imageUrl: '/images/figma/film.png',
    tag: 'Feature & Indie',
    description: 'Independent feature films, commercial festival entries, and cinema studio auditions.',
  },
  {
    id: 'web-series',
    title: 'WEB SERIES',
    imageUrl: '/images/figma/web_series.png',
    tag: 'OTT & Digital',
    description: 'Binge-worthy streaming originals, episodic dramas, and digital web entertainment.',
  },
  {
    id: 'music',
    title: 'MUSIC',
    imageUrl: '/images/figma/music.png',
    tag: 'Videos & Musicals',
    description: 'Music video narratives, musical theatre casting, and live touring choreographies.',
  },
];

export default function StarplifyFilmStrip() {
  const [activePreview, setActivePreview] = useState<CategoryItem | null>(null);

  return (
    <section id="about" className="relative py-24 sm:py-32 bg-[#080808] overflow-hidden scroll-mt-20">
      <div id="how-it-works" className="scroll-mt-24" />
      <div id="filmstrip" className="scroll-mt-24" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-14 lg:gap-16 items-center">
          
          {/* Left Column Narrative (Exact Figma Layout) */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold uppercase text-white tracking-tight leading-[1.08] font-sans">
              MADE FOR ACTORS WHO WANT TO <br />
              BE SEEN
            </h2>

            <p className="mt-6 sm:mt-8 text-xs sm:text-sm md:text-base text-[#A1A1AA] font-mono leading-relaxed max-w-xl">
              We've created a space where actors can build their presence, showcase their talent, and discover real casting opportunities — all in one place. No more endless searching or missed chances.
            </p>

            <p className="mt-4 sm:mt-5 text-xs sm:text-sm md:text-base text-[#A1A1AA] font-mono leading-relaxed max-w-xl">
              Whether you're a beginner taking your first step or an experienced actor looking for your next big role, Starplify helps you move forward with confidence.
            </p>

            <div className="mt-7 sm:mt-9 w-full sm:w-auto">
              <a
                href="#explore-talent"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-[8px] bg-[#8233FF] hover:bg-[#9353FF] text-white font-bold text-xs sm:text-sm tracking-wider uppercase transition-all shadow-[0_0_20px_rgba(130,51,255,0.4)] group active:scale-95"
              >
                <span>JOIN AS ACTOR</span>
                <span className="w-5 h-5 rounded-full bg-white flex items-center justify-center text-[#8233FF] font-bold text-xs">
                  +
                </span>
              </a>
            </div>
          </div>

          {/* Right Column: Vertical 35mm Film Strip Reel */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end w-full">
            <div className="relative rounded-2xl bg-[#0c0c10] border border-white/10 p-2 sm:p-3 shadow-2xl flex items-stretch w-full max-w-[440px] sm:max-w-[480px]">
              
              {/* Left Column of White Rectangular Sprocket Holes */}
              <div className="flex flex-col justify-between items-center py-3 px-1.5 sm:px-2 select-none" aria-hidden="true">
                {Array.from({ length: 12 }).map((_, i) => (
                  <div
                    key={i}
                    className="w-2.5 h-3.5 sm:w-3 sm:h-4 rounded-[2px] bg-white shadow-sm my-0.5 sm:my-1"
                  />
                ))}
              </div>

              {/* Inside 2x2 Grid of Genre Cards */}
              <div className="grid grid-cols-2 gap-2.5 sm:gap-4 p-1.5 sm:p-2.5 bg-black rounded-xl flex-1">
                {CATEGORIES.map((cat) => (
                  <div
                    key={cat.id}
                    onClick={() => setActivePreview(cat)}
                    className="group relative rounded-xl overflow-hidden bg-[#121218] border border-white/10 hover:border-[#8233FF] transition-all cursor-pointer flex flex-col"
                  >
                    {/* Media Thumbnail */}
                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-black">
                      <img
                        src={cat.imageUrl}
                        alt={cat.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      
                      {/* Play Icon on Hover */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/30 backdrop-blur-[2px]">
                        <div className="w-9 h-9 rounded-full bg-[#8233FF] text-white flex items-center justify-center shadow-lg">
                          <Play className="w-4 h-4 fill-white ml-0.5" />
                        </div>
                      </div>
                    </div>

                    {/* Card Title & Arrow Icon (Figma Frame 59) */}
                    <div className="p-2 sm:p-3 flex items-center justify-between bg-[#0e0e14]">
                      <div>
                        <span className="font-bold text-xs sm:text-sm tracking-wider uppercase text-white font-sans block">
                          {cat.title}
                        </span>
                        <span className="text-[10px] text-[#A1A1AA] font-mono hidden sm:inline">
                          {cat.tag}
                        </span>
                      </div>
                      <div className="w-6 h-6 rounded-full bg-white/5 border border-white/15 flex items-center justify-center text-white/70 group-hover:text-white group-hover:bg-[#8233FF] group-hover:border-[#8233FF] transition-colors flex-shrink-0">
                        <ArrowRight className="w-3 h-3" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Right Column of White Rectangular Sprocket Holes */}
              <div className="flex flex-col justify-between items-center py-3 px-1.5 sm:px-2 select-none" aria-hidden="true">
                {Array.from({ length: 12 }).map((_, i) => (
                  <div
                    key={i}
                    className="w-2.5 h-3.5 sm:w-3 sm:h-4 rounded-[2px] bg-white shadow-sm my-0.5 sm:my-1"
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
                className="flex-1 py-3 px-4 rounded-[8px] bg-[#8233FF] hover:bg-[#9353FF] text-white font-bold text-xs tracking-wider uppercase text-center transition-all shadow-[0_0_20px_rgba(130,51,255,0.4)]"
              >
                BROWSE {activePreview.title} ROLES
              </a>
              <button
                onClick={() => setActivePreview(null)}
                className="py-3 px-4 rounded-[8px] bg-white/10 hover:bg-white/15 text-white font-bold text-xs uppercase transition-colors"
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
