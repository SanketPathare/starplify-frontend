import type { Metadata, Viewport } from 'next';
import { Plus_Jakarta_Sans, Space_Mono, Inter } from 'next/font/google';
import './globals.css';

const sansFont = Plus_Jakarta_Sans({
  variable: '--font-sans',
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
});

const monoFont = Space_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '700'],
});

const bodyFont = Inter({
  variable: '--font-body',
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
      className={`${sansFont.variable} ${monoFont.variable} ${bodyFont.variable} dark antialiased scroll-smooth`}
    >
      <body className="min-h-screen bg-[#080808] text-white selection:bg-[#8233FF] selection:text-white font-sans antialiased relative overflow-x-hidden">
        {/* Architectural vertical grid lines */}
        <div className="architectural-grid" aria-hidden="true">
          <span className="grid-line" />
          <span className="grid-line" />
          <span className="grid-line" />
          <span className="grid-line" />
          <span className="grid-line" />
        </div>

        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
