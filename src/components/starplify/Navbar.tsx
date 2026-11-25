'use client';

import React, { useState, useEffect } from 'react';
import StarplifyLogo from './StarplifyLogo';
import { Menu, X, User, Plus } from 'lucide-react';

const NAV_LINKS = [
  { name: 'HOME', href: '#hero' },
  { name: 'ABOUT', href: '#about' },
  { name: 'EXPLORE TALENT', href: '#explore-talent' },
  { name: 'HOW IT WORKS', href: '#how-it-works' },
  { name: 'SUCCESS STORIES', href: '#success-stories' },
  { name: 'FOR CASTING DIRECTORS', href: '#for-casting-directors' },
];

export default function StarplifyNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('HOME');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        mobileMenuOpen
          ? 'bg-black/90 backdrop-blur-lg py-2.5 sm:py-3'
          : isScrolled
            ? 'bg-black/5 backdrop-blur-lg py-2.5 sm:py-3'
            : 'bg-transparent py-3 sm:py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo (Frame 1) */}
          <StarplifyLogo />

          {/* Desktop Navigation Links (Matching Screenshot & Figma Frame 1) */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {NAV_LINKS.map((link) => {
              const isCurrent = activeSection === link.name;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setActiveSection(link.name)}
                  className={`text-sm font-mono tracking-[0.08em] font-medium transition-all px-1.5 py-1 whitespace-nowrap ${
                    isCurrent
                      ? 'text-[#9353FF] font-bold'
                      : 'text-white/90 hover:text-white'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Header Action: User Profile Avatar with solid white background (Exact Reference) */}
          <div className="flex items-center gap-3">
            <a
              href="#profile"
              aria-label="User Account"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white flex items-center justify-center text-black hover:opacity-90 transition-opacity shadow-sm"
            >
              <User className="w-5 h-5 text-black" strokeWidth={2.5} />
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-lg bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 p-4 bg-[#0e0e14]/95 border border-white/10 rounded-2xl shadow-2xl backdrop-blur-2xl flex flex-col gap-1.5">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => {
                  setActiveSection(link.name);
                  setMobileMenuOpen(false);
                }}
                className={`text-sm font-mono tracking-wider font-bold px-4 py-3 rounded-xl transition-all ${
                  activeSection === link.name
                    ? 'bg-[#8233FF] text-white shadow-md'
                    : 'text-[#C4C4CC] hover:bg-white/5 hover:text-white'
                }`}
              >
                {link.name}
              </a>
            ))}

            <div className="pt-3 border-t border-white/10 flex flex-col gap-2 mt-1">
              <a
                href="#explore-talent"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#8233FF] text-white font-bold text-sm tracking-wider uppercase"
              >
                <span>JOIN AS ACTOR</span>
                <span className="w-4 h-4 rounded-full bg-white flex items-center justify-center text-[#8233FF]">
                  <Plus className="w-3 h-3 text-[#8233FF] stroke-[3]" />
                </span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
