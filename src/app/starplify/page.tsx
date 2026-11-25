import React from 'react';
import type { Metadata } from 'next';
import StarplifyNavbar from '@/components/starplify/Navbar';
import StarplifyHero from '@/components/starplify/Hero';
import StarplifyFilmStrip from '@/components/starplify/FilmStrip';
import StarplifyDiscovery from '@/components/starplify/Discovery';
import StarplifyTestimonials from '@/components/starplify/Testimonials';
import StarplifyCtaBanner from '@/components/starplify/CtaBanner';
import StarplifyFooter from '@/components/starplify/Footer';

export const metadata: Metadata = {
  title: {
    absolute: 'Starplify - Smart Casting Platform for Actors & Recruiters',
  },
  description:
    'Because your talent deserves the spotlight. From auditions to final casting — streamline your entire journey with Starplify.',
};

export default function StarplifyPage() {
  return (
    <div className="relative min-h-screen bg-[#080808] text-white selection:bg-[#8233FF] selection:text-white font-sans antialiased overflow-x-hidden">
      <StarplifyNavbar />

      <main className="relative z-10">
        <StarplifyHero />
        <StarplifyFilmStrip />
        <StarplifyDiscovery />
        <StarplifyTestimonials />
        <StarplifyCtaBanner />
      </main>

      <div className="relative z-10">
        <StarplifyFooter />
      </div>
    </div>
  );
}
