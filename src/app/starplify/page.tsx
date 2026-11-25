import React from 'react';
import StarplifyNavbar from '@/components/starplify/Navbar';
import StarplifyHero from '@/components/starplify/Hero';
import StarplifyFilmStrip from '@/components/starplify/FilmStrip';
import StarplifyDiscovery from '@/components/starplify/Discovery';
import StarplifyTestimonials from '@/components/starplify/Testimonials';
import StarplifyCtaBanner from '@/components/starplify/CtaBanner';
import StarplifyFooter from '@/components/starplify/Footer';

export default function StarplifyPage() {
  return (
    <div className="relative min-h-screen bg-[#080808] text-white overflow-hidden selection:bg-[#8233FF] selection:text-white">
      {/* 1. Fixed Header (Frame 1) */}
      <StarplifyNavbar />

      <main>
        {/* 2. Hero Section + Metrics (Frame 1321319014 & 1321319015) */}
        <StarplifyHero />

        {/* 3. Made for Actors Film Strip Reel (Frame 1321319008) */}
        <StarplifyFilmStrip />

        {/* 4. Talent Discovery & 10,000+ Actors (Frame 1321319007 & Frame 59, 35) */}
        <StarplifyDiscovery />

        {/* 5. What Actors Are Saying Testimonials (Frame 13) */}
        <StarplifyTestimonials />

        {/* 6. Pre-Footer Casting Made Simple CTA (Frame 30) */}
        <StarplifyCtaBanner />
      </main>

      {/* 7. Footer (Frame 15) */}
      <StarplifyFooter />
    </div>
  );
}
