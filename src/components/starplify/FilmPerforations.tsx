import React from 'react';

interface FilmPerforationsProps {
  className?: string;
  count?: number;
}

export default function FilmPerforations({ className = '', count = 36 }: FilmPerforationsProps) {
  return (
    <div
      className={`w-full overflow-hidden bg-white py-2 sm:py-2.5 flex items-center justify-between select-none ${className}`}
      aria-hidden="true"
    >
      <div className="flex w-full justify-between items-center px-3 sm:px-4 gap-2 sm:gap-3 overflow-hidden">
        {Array.from({ length: count }).map((_, i) => (
          <div
            key={i}
            className="w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full bg-[#080808] shrink-0"
          />
        ))}
      </div>
    </div>
  );
}
