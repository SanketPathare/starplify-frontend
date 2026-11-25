import type { Metadata, Viewport } from 'next';
import { Space_Grotesk } from 'next/font/google';
import './globals.css';

const spaceGrotesk = Space_Grotesk({
  variable: '--font-sans',
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
});

export const viewport: Viewport = {
  themeColor: '#080808',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: 'Starplify - Casting & Audition Platform for Actors & Recruiters',
    template: '%s | Starplify',
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
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/icon.png', type: 'image/png' },
    ],
    apple: '/apple-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} dark antialiased scroll-smooth`}
    >
      <body className="min-h-screen bg-[#080808] text-white selection:bg-[#8233FF] selection:text-white font-sans antialiased relative overflow-x-hidden">
        {/* Architectural vertical grid lines */}
        <div className="architectural-grid" aria-hidden="true">
          <div className="architectural-grid-inner">
            <div className="architectural-grid-col" />
            <div className="architectural-grid-col" />
            <div className="architectural-grid-col" />
          </div>
        </div>

        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
