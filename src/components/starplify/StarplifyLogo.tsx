import React from 'react';
import Link from 'next/link';

interface StarplifyLogoProps {
  className?: string;
  size?: 'sm' | 'default' | 'lg';
}

export default function StarplifyLogo({ className = '', size = 'default' }: StarplifyLogoProps) {
  const heightClass = {
    sm: 'h-8 sm:h-9',
    default: 'h-9 sm:h-10 md:h-11',
    lg: 'h-11 sm:h-12 md:h-14',
  }[size];

  return (
    <Link
      href="/"
      className={`inline-flex items-center group select-none transition-transform duration-200 active:scale-95 ${className}`}
      aria-label="Starplify - amplifying stardom"
    >
      <img
        src="/images/starplify-logo.png"
        alt="Starplify - amplifying stardom"
        className={`${heightClass} w-auto object-contain transition-opacity group-hover:opacity-90`}
        loading="eager"
      />
    </Link>
  );
}
