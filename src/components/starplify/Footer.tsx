'use client';

import React from 'react';
import StarplifyLogo from './StarplifyLogo';
import FilmPerforations from './FilmPerforations';

const FOOTER_LINKS = {
  company: [
    { name: 'ABOUT US', href: '#about' },
    { name: 'CAREERS', href: '#careers' },
    { name: 'LEGAL PAGE', href: '#terms' },
  ],
  resources: [
    { name: 'BLOG', href: '#blog' },
    { name: 'TALENT SEARCH', href: '#explore-talent' },
  ],
  applicants: [
    { name: 'SEARCH PROJECTS', href: '#filmstrip' },
    { name: 'FAQS', href: '#faq' },
  ],
};

const SOCIALS = [
  {
    name: 'Facebook',
    href: 'https://facebook.com',
    svg: (
      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com',
    svg: (
      <svg className="w-3.5 h-3.5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    name: 'Twitter / X',
    href: 'https://twitter.com',
    svg: (
      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: 'YouTube',
    href: 'https://youtube.com',
    svg: (
      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
];

export default function StarplifyFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="colophon" className="relative bg-[#000000] text-[#A1A1AA] pt-12 overflow-hidden border-t border-white/[0.08]">
      
      {/* Background Architectural Grid Lines */}
      <div className="absolute inset-0 pointer-events-none z-[1] max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 divide-y-0 md:divide-x divide-white/[0.06]" aria-hidden="true">
        <div className="border-l border-white/[0.06] h-full" />
        <div className="h-full" />
        <div className="border-r border-white/[0.06] h-full" />
      </div>
      <div className="absolute inset-y-0 left-4 sm:left-8 xl:left-14 w-px bg-white/[0.04] pointer-events-none z-[1]" aria-hidden="true" />
      <div className="absolute inset-y-0 right-4 sm:right-8 xl:right-14 w-px bg-white/[0.04] pointer-events-none z-[1]" aria-hidden="true" />

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
              {SOCIALS.map((soc) => (
                <a
                  key={soc.name}
                  href={soc.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={soc.name}
                  className="w-8 h-8 rounded-full bg-white/[0.05] border border-white/10 flex items-center justify-center text-white/80 hover:text-white hover:bg-[#8233FF] hover:border-[#8233FF] transition-all"
                >
                  {soc.svg}
                </a>
              ))}
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

            {/* Column 2: FOR RESOURCES */}
            <div>
              <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-white mb-4">
                FOR RESOURCES
              </h4>
              <ul className="space-y-3 text-xs font-mono">
                {FOOTER_LINKS.resources.map((item) => (
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
        <FilmPerforations count={36} />
      </div>

    </footer>
  );
}
