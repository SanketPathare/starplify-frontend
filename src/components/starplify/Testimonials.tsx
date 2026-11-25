'use client';

import React, { useState } from 'react';
import { Star } from 'lucide-react';

interface ReviewItem {
  name: string;
  role: string;
  rating: number;
  quote: string;
  avatar?: string;
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
    name: 'ARJUN PATIL',
    role: 'TV Advertisement',
    rating: 4,
    quote:
      'The feedback I received on my compositions was invaluable. Starplify allowed me to collaborate with other musicians, leading to the fusion of traditional Indian music with contemporary genres.',
    avatar: '/images/avatar_arjun_patil.png',
  },
  {
    name: 'KABIR SHARMA',
    role: 'Theatre & Film',
    rating: 4,
    quote:
      'Through workshops focused on performance and expression, I learned how to bring depth to my characters, drawing inspiration from classical Indian storytelling.',
  },
];

const COL2_ACTORS: ReviewItem[] = [
  {
    name: 'PRIYA SINGH',
    role: 'TV Advertisement',
    rating: 4,
    quote:
      "Starplify gave me confidence I never thought I could have. Now, I'm ready to take on any challenge that comes my way!",
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
    name: 'NEHA KAPOOR',
    role: 'Cinema & Film',
    rating: 4,
    quote:
      'Participating in collaborative projects helped me blend different art styles, and I now create pieces that celebrate cultural diversity.',
  },
];

const COL1_RECRUITERS: ReviewItem[] = [
  {
    name: 'SANJAY MEHTA',
    role: 'Casting Director, Yash Raj Talent',
    rating: 4,
    quote:
      'Starplify has eliminated weeks of blind casting calls. We found the perfect ensemble cast for our upcoming drama series in under three days.',
    avatar: '/images/avatar_sanjay.png',
  },
  {
    name: 'ARJUN PATIL',
    role: 'Commercial Producer',
    rating: 4,
    quote:
      'Filter by dialect, screen age, and availability in seconds. Our ad agency now sources 90% of our on-camera talent directly through Starplify.',
    avatar: '/images/avatar_arjun_patil.png',
  },
];

const COL2_RECRUITERS: ReviewItem[] = [
  {
    name: 'KAVITA MENON',
    role: 'Production Head, Dharma Digital',
    rating: 4,
    quote:
      'The verified headshots and standardized actor tapes make shortlisting effortless. The talent pool is diverse, professional, and audition-ready.',
  },
  {
    name: 'NEHA KAPOOR',
    role: 'Lead Talent Scout, OTT Originals',
    rating: 4,
    quote:
      'We discovered three breakthrough leads for our web series from regional theatre backgrounds we would have otherwise missed.',
  },
];

const COL3_RECRUITERS: ReviewItem[] = [
  {
    name: 'ROHIT VERMA',
    role: 'Independent Film Director',
    rating: 4,
    quote:
      'Finding bilingual actors with stage experience used to be difficult. Starplify gave us instant access to top-tier audition profiles.',
  },
  {
    name: 'KABIR SHARMA',
    role: 'Theatre & Casting Associate',
    rating: 4,
    quote:
      'Audition scheduling and callback notes live in one place. It has transformed how our casting team collaborates across cities.',
  },
];

function getInitials(name: string): string {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase();
}

function ReviewCell({ t, borderBottom = true }: { t: ReviewItem; borderBottom?: boolean }) {
  return (
    <div
      className={`p-5 sm:p-8 flex flex-col justify-between ${
        borderBottom ? 'border-b border-white/[0.08]' : ''
      } hover:bg-white/[0.02] transition-colors`}
    >
      <div>
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

        <p className="text-xs sm:text-[13px] font-mono text-[#D4D4D8] leading-relaxed mb-6">
          {t.quote}
        </p>
      </div>

      <div className="flex items-center gap-3.5 pt-1">
        <div className="w-10 h-10 rounded-full overflow-hidden border border-white/15 flex-shrink-0 bg-[#181822] flex items-center justify-center">
          {t.avatar ? (
            <img
              src={t.avatar}
              alt={t.name}
              className="w-full h-full object-cover scale-110"
              loading="lazy"
            />
          ) : (
            <span className="text-xs font-mono font-bold text-[#C4B5FD]">
              {getInitials(t.name)}
            </span>
          )}
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
    <section
      id="success-stories"
      className="relative py-14 sm:py-24 lg:py-28 bg-[#000000] text-white overflow-hidden scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Continuous 3-Column Architectural Vertical Grid Lines */}
        <div
          className="relative border-l border-r border-white/[0.08]"
        >
          <div
            className="pointer-events-none absolute inset-0 grid grid-cols-1 md:grid-cols-3 divide-y-0 md:divide-x divide-white/[0.08]"
            aria-hidden="true"
          >
            <div />
            <div />
            <div />
          </div>

          {/* Top Header Area (Spans across grid, left-aligned) */}
          <div className="relative z-10 px-5 sm:px-8 pt-4 pb-6 sm:pb-10">
            <h2 className="text-2xl sm:text-3xl lg:text-[2rem] font-bold uppercase tracking-tight text-white font-sans leading-tight">
              WHAT ACTORS ARE SAYING
            </h2>
            <p className="mt-3 sm:mt-4 max-w-xl text-xs sm:text-sm font-mono text-[#A1A1AA] leading-relaxed">
              From first auditions to real opportunities — hear how actors are getting discovered and growing their careers with Starplify.
            </p>
          </div>

          {/* 3-Column Staggered Masonry Grid */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3">
            {/* Column 1: Toggle Switch + Reviews */}
            <div className="flex flex-col">
              {/* Toggle Switch Bar */}
              <div className="px-5 sm:px-8 pb-6 sm:pb-8">
                <div className="grid grid-cols-2 rounded bg-[#0c0c10] border border-white/[0.06] p-1">
                  <button
                    type="button"
                    onClick={() => setActiveTab('ACTOR')}
                    className={`py-2.5 rounded-sm text-xs font-mono font-bold tracking-wider uppercase transition-all cursor-pointer ${
                      activeTab === 'ACTOR'
                        ? 'text-[#9353FF] bg-white/[0.03]'
                        : 'text-[#A1A1AA] hover:text-white'
                    }`}
                  >
                    ACTOR
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('RECRUITER')}
                    className={`py-2.5 rounded-sm text-xs font-mono font-bold tracking-wider uppercase transition-all cursor-pointer ${
                      activeTab === 'RECRUITER'
                        ? 'text-[#9353FF] bg-white/[0.03]'
                        : 'text-[#A1A1AA] hover:text-white'
                    }`}
                  >
                    RECRUITER
                  </button>
                </div>
              </div>

              {col1.map((review, idx) => (
                <ReviewCell
                  key={`${activeTab}-col1-${review.name}`}
                  t={review}
                  borderBottom={idx < col1.length - 1}
                />
              ))}
            </div>

            {/* Column 2: Staggered Higher (Starts alongside Toggle) */}
            <div className="flex flex-col border-t md:border-t-0 border-white/[0.08]">
              {col2.map((review, idx) => (
                <ReviewCell
                  key={`${activeTab}-col2-${review.name}`}
                  t={review}
                  borderBottom={idx < col2.length - 1}
                />
              ))}
            </div>

            {/* Column 3: Aligned with Column 1's First Card */}
            <div className="flex flex-col border-t md:border-t-0 border-white/[0.08] md:pt-[74px]">
              {col3.map((review, idx) => (
                <ReviewCell
                  key={`${activeTab}-col3-${review.name}`}
                  t={review}
                  borderBottom={idx < col3.length - 1}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
