'use client';

import React from 'react';
import StarplifyLogo from './StarplifyLogo';
import FilmPerforations from './FilmPerforations';
import { FaFacebookF, FaInstagram, FaXTwitter, FaYoutube } from 'react-icons/fa6';

const FOOTER_LINKS = {
  company: [
    { name: 'ABOUT US', href: '#about' },
    { name: 'CAREERS', href: '#careers' },
    { name: 'LEGAL PAGE', href: '#terms' },
  ],
  recruiters: [
    { name: 'POST', href: '#for-casting-directors' },
    { name: 'TALENT SEARCH', href: '#explore-talent' },
  ],
  applicants: [
    { name: 'BROWSE AUDITIONS', href: '#filmstrip' },
    { name: 'HELP', href: '#help' },
  ],
};

const SOCIALS = [
  {
    name: 'Facebook',
    href: 'https://facebook.com',
    icon: FaFacebookF,
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com',
    icon: FaInstagram,
  },
  {
    name: 'Twitter / X',
    href: 'https://twitter.com',
    icon: FaXTwitter,
  },
  {
    name: 'YouTube',
    href: 'https://youtube.com',
    icon: FaYoutube,
  },
];

export default function StarplifyFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="colophon" className="relative bg-[#000000] text-[#A1A1AA] pt-12 overflow-hidden border-t border-white/[0.08]">
      
      {/* Centered Content Container (Exact Figma Frame 15) */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          
          {/* Brand Info & Mission (Col 1-5) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <StarplifyLogo />
              <p className="mt-5 text-xs sm:text-sm text-[#A1A1AA] font-mono leading-relaxed max-w-sm">
                Don't miss out on the latest opportunities and updates. Follow us on social media, subscribe to our newsletter, and reach out anytime. We're here to help you succeed in your casting journey.
              </p>
            </div>

            {/* Social Icons at Bottom-Left */}
            <div className="mt-6 flex items-center gap-3 text-white">
              {SOCIALS.map((soc) => {
                const IconComponent = soc.icon;
                return (
                  <a
                    key={soc.name}
                    href={soc.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={soc.name}
                    className="w-8 h-8 rounded-full bg-white/[0.05] border border-white/10 flex items-center justify-center text-white/80 hover:text-white hover:bg-[#8233FF] hover:border-[#8233FF] transition-all"
                  >
                    <IconComponent className="w-3.5 h-3.5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links Columns (Col 6-12) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-8">
            
            {/* Column 1: COMPANY */}
            <div>
              <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-white mb-4">
                COMPANY
              </h4>
              <ul className="space-y-3 text-xs font-mono">
                {FOOTER_LINKS.company.map((item) => (
                  <li key={item.name}>
                    <a href={item.href} className="hover:text-white transition-colors flex items-center gap-2">
                      <span className="text-white text-base leading-none">•</span>
                      <span>{item.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: FOR RECRUITERS */}
            <div>
              <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-white mb-4">
                FOR RECRUITERS
              </h4>
              <ul className="space-y-3 text-xs font-mono">
                {FOOTER_LINKS.recruiters.map((item) => (
                  <li key={item.name}>
                    <a href={item.href} className="hover:text-white transition-colors flex items-center gap-2">
                      <span className="text-white text-base leading-none">•</span>
                      <span>{item.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: FOR APPLICANTS */}
            <div>
              <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-white mb-4">
                FOR APPLICANTS
              </h4>
              <ul className="space-y-3 text-xs font-mono">
                {FOOTER_LINKS.applicants.map((item) => (
                  <li key={item.name}>
                    <a href={item.href} className="hover:text-white transition-colors flex items-center gap-2">
                      <span className="text-white text-base leading-none">•</span>
                      <span>{item.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>

        {/* Footer Bottom Bar: Copyright & Legal */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#71717A] pt-8 border-t border-white/[0.08] mt-10">
          <div className="copyright-text text-center sm:text-left">
            &copy; {currentYear} STARPLIFY INC. ALL RIGHTS RESERVED.
          </div>

          <div className="flex items-center gap-3">
            <a href="#terms" className="hover:text-white transition-colors">
              TERMS &amp; CONDITIONS
            </a>
            <span>|</span>
            <a href="#privacy" className="hover:text-white transition-colors">
              POLICY
            </a>
          </div>
        </div>

      </div>

      {/* Bottom 35mm Film Sprocket Perforation Strip at Very Bottom of Page (Exact Reference) */}
      <div className="relative z-10 w-full">
        <FilmPerforations count={48} />
      </div>

    </footer>
  );
}
