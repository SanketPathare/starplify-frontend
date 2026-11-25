'use client';

import React, { useState } from 'react';

const REVIEWS_ACTORS = [
  {
    name: 'PRIYA SINGH',
    role: 'TV Advertisement',
    rating: 4,
    quote:
      "Joining Starplify opened doors to audition pipelines I never thought I could have. Now, I'm ready to take on any challenge that comes my way!",
    avatar: '/images/figma/avatar_priya.png',
  },
  {
    name: 'AMIT ROY',
    role: 'Short Film & OTT',
    rating: 4,
    quote:
      'I was initially intimidated, but the workshops provided by Starplify were engaging and informative. I gained the skills and confidence to pursue roles I thought were out of reach!',
    avatar: '/images/figma/avatar_aisha.png',
  },
  {
    name: 'MEERA IYER',
    role: 'Commercial Model',
    rating: 4,
    quote:
      'Finding quality auditions used to take weeks of networking. With Starplify, casting directors reach out directly with roles that match my profile.',
    avatar: '/images/figma/avatar_dev.png',
  },
  {
    name: 'ANIL KUMAR',
    role: 'TV Advertisement',
    rating: 4,
    quote:
      'Joining Starplify transformed my approach to storytelling; I learned how to weave cultural nuances into my narratives, making them richer and more engaging.',
    avatar: '/images/figma/avatar_anil.png',
  },
  {
    name: 'RAVI SHARMA',
    role: 'Drama',
    rating: 4,
    quote:
      'Joining Starplify has been a game-changer for my dance career. The tutorials offered are not only comprehensive but also tailored to suit diverse styles, including classical Indian forms.',
    avatar: '/images/figma/avatar_ravi.png',
  },
  {
    name: 'AISHA RAO',
    role: 'Drama',
    rating: 4,
    quote:
      "The experience at Starplify has been incredibly enriching. I've had the chance to explore various art forms and showcase my talent, integrating traditional Indian crafts with modern techniques.",
    avatar: '/images/figma/avatar_aisha.png',
  },
  {
    name: 'SITA VERMA',
    role: 'Music',
    rating: 4,
    quote:
      'I learned how to incorporate traditional Indian elements into modern performances, enhancing my creativity and expression on stage.',
    avatar: '/images/figma/avatar_sita.png',
  },
  {
    name: 'DEV PATEL',
    role: 'Cinema & Film',
    rating: 4,
    quote:
      'Participating in collaborative projects helped me blend different art styles, and I now create pieces that celebrate cultural diversity.',
    avatar: '/images/figma/avatar_dev.png',
  },
  {
    name: 'KABIR DEOL',
    role: 'Web Series & Theatre',
    rating: 4,
    quote:
      'Starplify makes audition preparation intuitive. The casting breakdowns are precise, and direct feedback from casting directors has been invaluable.',
    avatar: '/images/figma/avatar_anil.png',
  },
];

const REVIEWS_RECRUITERS = [
  {
    name: 'SANJAY MEHTA',
    role: 'Casting Director, Yash Raj Talent',
    rating: 4,
    quote:
      'Starplify has eliminated weeks of blind casting calls. We found the perfect ensemble cast for our upcoming drama series in under three days.',
    avatar: '/images/figma/avatar_anil.png',
  },
  {
    name: 'KAVITA MENON',
    role: 'Production Head, Dharma Digital',
    rating: 4,
    quote:
      'The verified headshots and standardized actor tapes make shortlisting effortless. The talent pool is diverse, professional, and audit-ready.',
    avatar: '/images/figma/avatar_priya.png',
  },
  {
    name: 'ROHIT VERMA',
    role: 'Independent Film Director',
    rating: 4,
    quote:
      'Finding bilingual actors with stage experience used to be difficult. Starplify gave us instant access to top-tier audition profiles.',
    avatar: '/images/figma/avatar_dev.png',
  },
];

function ReviewCard({ t }: { t: typeof REVIEWS_ACTORS[0] }) {
  return (
    <div className="bg-[#0e0e11]/85 border border-white/10 rounded-2xl p-6 sm:p-7 flex flex-col justify-between hover:border-[#8233FF]/50 transition-all duration-300 shadow-xl backdrop-blur-md">
      <div>
        {/* Rating Stars (4 Gold Stars from Figma Frame 13) */}
        <div className="flex items-center gap-1.5 mb-4 text-[#FFB800]">
          {Array.from({ length: t.rating }).map((_, i) => (
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

        {/* Monospace Review Quote */}
        <p className="text-xs sm:text-sm font-mono text-[#E4E4E7] leading-relaxed mb-6">
          "{t.quote}"
        </p>
      </div>

      {/* Author Profile */}
      <div className="flex items-center gap-3 pt-3 border-t border-white/10">
        <div className="w-10 h-10 rounded-full overflow-hidden border border-white/20 flex-shrink-0 bg-neutral-800">
          <img
            src={t.avatar}
            alt={t.name}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div>
          <h4 className="text-xs sm:text-sm font-bold font-sans tracking-wider uppercase text-white">
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

  const currentReviews = activeTab === 'ACTOR' ? REVIEWS_ACTORS : REVIEWS_RECRUITERS;

  return (
    <section id="success-stories" className="py-24 sm:py-36 bg-[#080808] text-white overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (Frame 13) */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight font-sans">
            WHAT ACTORS ARE SAYING
          </h2>
          <p className="mt-4 text-xs sm:text-sm md:text-base font-mono text-[#A1A1AA] max-w-2xl mx-auto leading-relaxed">
            From first auditions to real opportunities — hear how actors are getting discovered and growing their careers with Starplify.
          </p>
        </div>

        {/* Filter Toggle Tabs (Figma Frame 13: ACTOR & RECRUITER) */}
        <div className="flex items-center justify-center mb-14">
          <div className="inline-flex p-1.5 rounded-full bg-[#111116] border border-white/10 shadow-inner">
            <button
              onClick={() => setActiveTab('ACTOR')}
              className={`px-7 py-2.5 rounded-full text-xs font-bold font-mono tracking-wider transition-all duration-200 ${
                activeTab === 'ACTOR'
                  ? 'bg-[#8233FF] text-white shadow-[0_0_20px_rgba(130,51,255,0.5)]'
                  : 'text-[#A1A1AA] hover:text-white'
              }`}
            >
              ACTOR
            </button>
            <button
              onClick={() => setActiveTab('RECRUITER')}
              className={`px-7 py-2.5 rounded-full text-xs font-bold font-mono tracking-wider transition-all duration-200 ${
                activeTab === 'RECRUITER'
                  ? 'bg-[#8233FF] text-white shadow-[0_0_20px_rgba(130,51,255,0.5)]'
                  : 'text-[#A1A1AA] hover:text-white'
              }`}
            >
              RECRUITER
            </button>
          </div>
        </div>

        {/* Testimonials 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentReviews.map((review, idx) => (
            <ReviewCard key={idx} t={review} />
          ))}
        </div>

      </div>
    </section>
  );
}
