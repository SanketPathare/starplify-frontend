import React from 'react';

interface FilmPerforationsProps {
  className?: string;
  count?: number;
}

export default function FilmPerforations({ className = '', count = 36 }: FilmPerforationsProps) {
  return (
    <div
      className={`w-full overflow-hidden bg-[#060608] border-y border-white/[0.08] py-2.5 sm:py-3 flex items-center justify-between select-none ${className}`}
      aria-hidden="true"
    >
      <div className="flex w-full justify-between items-center px-4 gap-2 sm:gap-3.5 overflow-hidden">
        {Array.from({ length: count }).map((_, i) => (
          <div
            key={i}
            className="w-3.5 h-2.5 sm:w-4 sm:h-3 rounded-[3px] bg-[#0d0d14] border border-white/25 shrink-0 shadow-[inset_0_1px_3px_rgba(0,0,0,0.8)]"
          />
        ))}
      </div>
    </div>
  );
}
