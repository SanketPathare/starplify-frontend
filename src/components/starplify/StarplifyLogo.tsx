import React from 'react';
import Link from 'next/link';

interface StarplifyLogoProps {
  className?: string;
  size?: 'sm' | 'default' | 'lg';
}

const SIZE_CLASSES: Record<NonNullable<StarplifyLogoProps['size']>, string> = {
  sm: 'h-10 sm:h-11 w-auto',
  default: 'h-12 sm:h-16 w-auto',
  lg: 'h-16 sm:h-20 w-auto',
};

export default function StarplifyLogo({ className = '', size = 'default' }: StarplifyLogoProps) {
  return (
    <Link
      href="/"
      className={`inline-flex items-center group select-none transition-transform duration-200 active:scale-95 ${className}`}
      aria-label="Starplify - amplifying stardom"
    >
      <img
        src="/images/starplify-logo.png"
        alt="Starplify - amplifying stardom"
        className={`${SIZE_CLASSES[size]} object-contain transition-opacity group-hover:opacity-90`}
        loading="eager"
      />
    </Link>
  );  
}
