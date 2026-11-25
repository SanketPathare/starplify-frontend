import type { Metadata, Viewport } from 'next';

export const viewport: Viewport = {
  themeColor: '#080808',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    absolute: 'Starplify - Casting & Audition Platform for Actors & Recruiters',
  },
  description:
    'Because your talent deserves the spotlight. From auditions to final casting — streamline your entire journey with Starplify.',
  keywords: [
    'starplify',
    'acting auditions',
    'casting calls',
    'actor portfolio',
    'talent agency',
    'casting director',
    'film casting',
  ],
};

export default function StarplifyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen bg-[#080808] text-white selection:bg-[#8233FF] selection:text-white font-sans antialiased overflow-x-hidden">
      {children}
    </div>
  );
}
