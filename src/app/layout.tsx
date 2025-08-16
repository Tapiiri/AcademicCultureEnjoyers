import type { Metadata } from 'next';
import './globals.css';

const description =
  'Community of students and alumni celebrating academic traditions across Europe.';

export const metadata: Metadata = {
  metadataBase: new URL('https://academiccultureenjoyers.org'),
  title: {
    default: 'Academic Culture Enjoyers',
    template: '%s | Academic Culture Enjoyers',
  },
  description,
  keywords: [
    'academic culture',
    'student traditions',
    'sitsit',
    'kommers',
    'fraternities',
    'events',
  ],
  openGraph: {
    title: 'Academic Culture Enjoyers',
    description,
    url: 'https://academiccultureenjoyers.org',
    siteName: 'Academic Culture Enjoyers',
    images: [
      {
        url: '/globe.svg',
        width: 1200,
        height: 630,
        alt: 'Academic Culture Enjoyers globe logo',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Academic Culture Enjoyers',
    description,
    images: ['/globe.svg'],
  },
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
  },
  keywords: [
    'academic culture',
    'scholarly community',
    'research tools',
    'study tips',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
