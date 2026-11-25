'use client';

import React, { useState } from 'react';

interface ReviewItem {
  name: string;
  role: string;
  rating?: number;
  quote: string;
  avatar: string;
}

const ACTOR_REVIEWS = {
  col1: [
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
      avatar: '/images/avatar_arjun.png',
    },
  ],
  col2: [
    {
      name: 'PRIYA SINGH',
      role: 'TV Advertisement',
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
      name: 'KABIR DEOL',
      role: 'Short Film',
      rating: 4,
      quote:
        "The experience at Starplify has been incredibly enriching. I've had the chance to explore various art forms and showcase my talent, integrating traditional Indian crafts with modern techniques.",
      avatar: '/images/avatar_anil.png',
    },
  ],
  col3: [
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
  ],
};

const RECRUITER_REVIEWS = {
  col1: [
    {
      name: 'SANJAY MEHTA',
      role: 'Casting Director, YRF',
      rating: 4,
      quote:
        'Starplify has eliminated weeks of blind casting calls. We found the perfect ensemble cast for our upcoming drama series in under three days.',
      avatar: '/images/avatar_anil.png',
    },
    {
      name: 'ROHIT VERMA',
      role: 'Independent Producer',
      rating: 4,
      quote:
        'Finding bilingual actors with stage experience used to be difficult. Starplify gave us instant access to top-tier audition profiles.',
      avatar: '/images/avatar_arjun.png',
    },
  ],
  col2: [
    {
      name: 'KAVITA MENON',
      role: 'Production Head, Dharma Digital',
      rating: 4,
      quote:
        'The verified headshots and standardized actor tapes make shortlisting effortless. The talent pool is diverse, professional, and audit-ready.',
      avatar: '/images/avatar_priya.png',
    },
    {
      name: 'VIKRAM MALHOTRA',
      role: 'Talent Acquisition',
      rating: 4,
      quote:
        'The streamlined submission workflow saves our team dozens of hours per production cycle.',
      avatar: '/images/avatar_ravi.png',
    },
  ],
  col3: [
    {
      name: 'ANANYA SEN',
      role: 'Commercial Film Director',
      rating: 4,
      quote:
        'We booked three lead actors for our national TV campaign through Starplify within 48 hours of posting the brief.',
      avatar: '/images/avatar_sita.png',
    },
  ],
};

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-1.5 text-[#FFB800]">
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          className="w-4 h-4 fill-current"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function ReviewCell({ review }: { review: ReviewItem }) {
  return (
    <div className="p-6 sm:p-8 flex flex-col justify-between hover:bg-white/[0.02] transition-colors duration-200">
      <div>
        {review.rating ? <StarRating count={review.rating} /> : null}
        <p className={`${review.rating ? 'mt-4' : 'mt-1'} mb-6 text-xs sm:text-sm font-mono text-[#D4D4D8] leading-relaxed`}>
          {review.quote}
        </p>
      </div>
      <div className="flex items-center gap-3 pt-2">
        <div className="w-10 h-10 rounded-full overflow-hidden border border-white/20 flex-shrink-0 bg-neutral-800">
          <img
            src={review.avatar}
            alt={review.name}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div>
          <h4 className="text-xs sm:text-sm font-bold font-sans tracking-wider uppercase text-white">
            {review.name}
          </h4>
          <p className="text-[11px] font-mono text-[#A1A1AA]">
            {review.role}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function StarplifyTestimonials() {
  const [activeTab, setActiveTab] = useState<'ACTOR' | 'RECRUITER'>('ACTOR');
  const reviews = activeTab === 'ACTOR' ? ACTOR_REVIEWS : RECRUITER_REVIEWS;

  return (
    <section id="success-stories" className="relative py-20 sm:py-28 lg:py-36 bg-[#000000] text-white overflow-hidden scroll-mt-20">
      
      {/* Background Architectural Grid Lines */}
      <div className="absolute inset-0 pointer-events-none z-[1] max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 divide-y-0 md:divide-x divide-white/[0.05]" aria-hidden="true">
        <div className="border-l border-white/[0.05] h-full" />
        <div className="h-full" />
        <div className="border-r border-white/[0.05] h-full" />
      </div>
      <div className="absolute inset-y-0 left-4 sm:left-8 xl:left-14 w-px bg-white/[0.04] pointer-events-none z-[1]" aria-hidden="true" />
      <div className="absolute inset-y-0 right-4 sm:right-8 xl:right-14 w-px bg-white/[0.04] pointer-events-none z-[1]" aria-hidden="true" />

      {/* Main Container - 3 Column Architectural Grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="border border-white/10 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10 bg-[#000000]">
          
          {/* Column 1: Header + Meera + Arjun */}
          <div className="flex flex-col divide-y divide-white/10">
            {/* Top Cell: Section Header & Switcher */}
            <div className="p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <h2 className="text-2xl sm:text-3xl lg:text-[2rem] font-bold uppercase tracking-tight text-white font-sans leading-tight">
                  WHAT ACTORS ARE SAYING
                </h2>
                <p className="mt-4 text-xs sm:text-sm font-mono text-[#A1A1AA] leading-relaxed">
                  From first auditions to real opportunities — hear how actors are getting discovered and growing their careers with Starplify.
                </p>
              </div>

              {/* Toggle Switcher */}
              <div className="mt-6 sm:mt-8">
                <div className="inline-flex rounded-md bg-[#0e0e14] border border-white/10 p-1 shadow-inner">
                  <button
                    onClick={() => setActiveTab('ACTOR')}
                    className={`px-5 py-2 rounded text-xs font-bold font-mono tracking-wider uppercase transition-all duration-200 cursor-pointer ${
                      activeTab === 'ACTOR'
                        ? 'text-[#8233FF] bg-black/40'
                        : 'text-white hover:text-white/80'
                    }`}
                  >
                    ACTOR
                  </button>
                  <button
                    onClick={() => setActiveTab('RECRUITER')}
                    className={`px-5 py-2 rounded text-xs font-bold font-mono tracking-wider uppercase transition-all duration-200 cursor-pointer ${
                      activeTab === 'RECRUITER'
                        ? 'text-[#8233FF] bg-black/40'
                        : 'text-white hover:text-white/80'
                    }`}
                  >
                    RECRUITER
                  </button>
                </div>
              </div>
            </div>

            {/* Column 1 Reviews */}
            {reviews.col1.map((rev, i) => (
              <ReviewCell key={i} review={rev} />
            ))}
          </div>

          {/* Column 2: Priya + Ravi + Third Review */}
          <div className="flex flex-col divide-y divide-white/10">
            {reviews.col2.map((rev, i) => (
              <ReviewCell key={i} review={rev} />
            ))}
          </div>

          {/* Column 3: Anil + Sita */}
          <div className="flex flex-col divide-y divide-white/10">
            {reviews.col3.map((rev, i) => (
              <ReviewCell key={i} review={rev} />
            ))}
          </div>

        </div>
      </div>

    </section>
  );
}
