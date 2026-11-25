import React from 'react';
import Link from 'next/link';

interface StarplifyLogoProps {
  className?: string;
  size?: 'sm' | 'default' | 'lg';
}

const SIZE_CLASSES: Record<NonNullable<StarplifyLogoProps['size']>, string> = {
  sm: 'h-9 w-auto',
  default: 'h-11 sm:h-12 w-auto',
  lg: 'h-14 sm:h-16 w-auto',
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
