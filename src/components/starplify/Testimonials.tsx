'use client';

import React, { useState } from 'react';
import { Star } from 'lucide-react';

interface ReviewItem {
  name: string;
  role: string;
  rating: number;
  quote: string;
  avatar: string;
}

const COL1_ACTORS: ReviewItem[] = [
  {
    name: 'MEERA DAS',
    role: 'Drama',
    rating: 4,
    quote:
      'I was initially intimidated, but the workshops provided by Starplify were engaging and informative. I now feel equipped to express my unique perspective through film.',
    avatar: '/images/avatar_meera.png',
  },
  {
    name: 'AMIT ROY',
    role: 'Short Film & OTT',
    rating: 4,
    quote:
      'The feedback I received on my compositions was invaluable. Starplify allowed me to collaborate with visionary creators and turn my passion into a viable career.',
    avatar: '/images/avatar_dev.png',
  },
  {
    name: 'ARJUN KAPOOR',
    role: 'Commercial & Theatre',
    rating: 4,
    quote:
      "Through workshops, I've received professional instruction on acting techniques, audition etiquette, and managing my career as an artist.",
    avatar: '/images/avatar_arjun.png',
  },
];

const COL2_ACTORS: ReviewItem[] = [
  {
    name: 'PRIYA SINGH',
    role: 'TV Advertisement',
    rating: 0,
    quote:
      "thought I could have. Now, I'm ready to take on any challenge that comes my way!",
    avatar: '/images/avatar_priya.png',
  },
  {
    name: 'RAVI SHARMA',
    role: 'Drama',
    rating: 4,
    quote:
      'Joining Starplify has been a game-changer for my dance career. The tutorials offered are not only comprehensive but also tailored to suit diverse styles, including classical Indian forms.',
    avatar: '/images/avatar_ravi.png',
  },
  {
    name: 'AISHA RAO',
    role: 'Drama',
    rating: 4,
    quote:
      "The experience at Starplify has been incredibly enriching. I've had the chance to explore various art forms and showcase my talent, integrating traditional Indian crafts with modern techniques.",
    avatar: '/images/avatar_aisha.png',
  },
];

const COL3_ACTORS: ReviewItem[] = [
  {
    name: 'ANIL KUMAR',
    role: 'TV Advertisement',
    rating: 4,
    quote:
      'Joining Starplify transformed my approach to storytelling; I learned how to weave cultural nuances into my narratives, making them richer and more engaging.',
    avatar: '/images/avatar_anil.png',
  },
  {
    name: 'SITA VERMA',
    role: 'Music',
    rating: 4,
    quote:
      'I learned how to incorporate traditional Indian elements into modern performances, enhancing my creativity and expression on stage.',
    avatar: '/images/avatar_sita.png',
  },
  {
    name: 'DEV PATEL',
    role: 'Cinema & Film',
    rating: 4,
    quote:
      'Participating in collaborative projects helped me blend different art styles, and I now create pieces that celebrate cultural diversity.',
    avatar: '/images/avatar_dev.png',
  },
];

const COL1_RECRUITERS: ReviewItem[] = [
  {
    name: 'SANJAY MEHTA',
    role: 'Casting Director, Yash Raj Talent',
    rating: 4,
    quote:
      'Starplify has eliminated weeks of blind casting calls. We found the perfect ensemble cast for our upcoming drama series in under three days.',
    avatar: '/images/avatar_anil.png',
  },
];

const COL2_RECRUITERS: ReviewItem[] = [
  {
    name: 'KAVITA MENON',
    role: 'Production Head, Dharma Digital',
    rating: 4,
    quote:
      'The verified headshots and standardized actor tapes make shortlisting effortless. The talent pool is diverse, professional, and audit-ready.',
    avatar: '/images/avatar_priya.png',
  },
];

const COL3_RECRUITERS: ReviewItem[] = [
  {
    name: 'ROHIT VERMA',
    role: 'Independent Film Director',
    rating: 4,
    quote:
      'Finding bilingual actors with stage experience used to be difficult. Starplify gave us instant access to top-tier audition profiles.',
    avatar: '/images/avatar_dev.png',
  },
];

function ReviewCell({ t, borderBottom = true }: { t: ReviewItem; borderBottom?: boolean }) {
  return (
    <div
      className={`p-6 sm:p-8 flex flex-col justify-between ${
        borderBottom ? 'border-b border-white/[0.08]' : ''
      } hover:bg-white/[0.02] transition-colors`}
    >
      <div>
        {/* Rating Stars (4 Gold Stars from Reference) */}
        {t.rating > 0 && (
          <div className="flex items-center gap-1.5 mb-5 text-[#FFB800]">
            {Array.from({ length: t.rating }).map((_, i) => (
              <Star
                key={i}
                className="w-4 h-4 fill-[#FFB800] text-[#FFB800]"
                aria-hidden="true"
              />
            ))}
          </div>
        )}

        {/* Monospace Review Quote */}
        <p className="text-xs sm:text-sm font-mono text-[#D4D4D8] leading-relaxed mb-6">
          {t.quote}
        </p>
      </div>

      {/* Author Profile */}
      <div className="flex items-center gap-3.5 pt-2">
        <div className="w-9 h-9 rounded-full overflow-hidden border border-white/20 flex-shrink-0 bg-neutral-900">
          <img
            src={t.avatar}
            alt={t.name}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div>
          <h4 className="text-xs font-bold font-mono tracking-wider uppercase text-white">
            {t.name}
          </h4>
          <p className="text-[11px] font-mono text-[#A1A1AA]">
            {t.role}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function StarplifyTestimonials() {
  const [activeTab, setActiveTab] = useState<'ACTOR' | 'RECRUITER'>('ACTOR');

  const col1 = activeTab === 'ACTOR' ? COL1_ACTORS : COL1_RECRUITERS;
  const col2 = activeTab === 'ACTOR' ? COL2_ACTORS : COL2_RECRUITERS;
  const col3 = activeTab === 'ACTOR' ? COL3_ACTORS : COL3_RECRUITERS;

  return (
    <section id="success-stories" className="py-20 sm:py-28 lg:py-32 bg-[#000000] text-white overflow-hidden scroll-mt-20">
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* 3-Column Architectural Grid Layout (Exact Match for Reference) */}
        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-b border-l border-r border-white/[0.08] divide-y md:divide-y-0 md:divide-x divide-white/[0.08] bg-[#000000]">
          
          {/* Column 1: Header + Reviews */}
          <div className="flex flex-col">
            {/* Header Cell with Title, Monospace Paragraph & Toggle */}
            <div className="p-6 sm:p-8 border-b border-white/[0.08] flex flex-col justify-between">
              <div>
                <h2 className="text-2xl sm:text-3xl lg:text-[2rem] font-bold uppercase tracking-tight text-white font-sans leading-tight">
                  WHAT ACTORS ARE SAYING
                </h2>
                <p className="mt-4 text-xs sm:text-sm font-mono text-[#A1A1AA] leading-relaxed">
                  From first auditions to real opportunities — hear how actors are getting discovered and growing their careers with Starplify.
                </p>
              </div>

              {/* Toggle Switch */}
              <div className="mt-8">
                <div className="inline-flex rounded-md bg-[#0e0e14] border border-white/10 p-1">
                  <button
                    onClick={() => setActiveTab('ACTOR')}
                    className={`px-5 py-2 rounded text-xs font-mono font-bold tracking-wider transition-all ${
                      activeTab === 'ACTOR'
                        ? 'text-[#9353FF] bg-black/50'
                        : 'text-[#C4C4CC] hover:text-white'
                    }`}
                  >
                    ACTOR
                  </button>
                  <button
                    onClick={() => setActiveTab('RECRUITER')}
                    className={`px-5 py-2 rounded text-xs font-mono font-bold tracking-wider transition-all ${
                      activeTab === 'RECRUITER'
                        ? 'text-[#9353FF] bg-black/50'
                        : 'text-[#C4C4CC] hover:text-white'
                    }`}
                  >
                    RECRUITER
                  </button>
                </div>
              </div>
            </div>

            {/* Column 1 Reviews */}
            {col1.map((review, idx) => (
              <ReviewCell key={idx} t={review} borderBottom={idx < col1.length - 1} />
            ))}
          </div>

          {/* Column 2: Reviews */}
          <div className="flex flex-col">
            {col2.map((review, idx) => (
              <ReviewCell key={idx} t={review} borderBottom={idx < col2.length - 1} />
            ))}
          </div>

          {/* Column 3: Reviews */}
          <div className="flex flex-col">
            {col3.map((review, idx) => (
              <ReviewCell key={idx} t={review} borderBottom={idx < col3.length - 1} />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
