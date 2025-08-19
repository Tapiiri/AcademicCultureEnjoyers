import Header from '@/components/Header';
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
    'scholarly community',
    'research tools',
    'study tips',
  ],
  openGraph: {
    title: 'Academic Culture Enjoyers',
    description,
    url: 'https://academiccultureenjoyers.org',
    siteName: 'Academic Culture Enjoyers',
    images: [
      {
        url: 'https://ik.imagekit.io/tapiiri/ace/AcademicCultureEnjoyers/nuremberg.jpg?tr=w-1200,h-630,c-at_max',
        width: 1200,
        height: 630,
        alt: 'City of Nürnberg',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Academic Culture Enjoyers',
    description,
    images: [
      'https://ik.imagekit.io/tapiiri/ace/AcademicCultureEnjoyers/nuremberg.jpg?tr=w-1200,h-630,c-at_max',
    ],
  },
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col bg-gradient-to-b from-white to-blue-50 antialiased dark:from-gray-900 dark:to-gray-950">
        <Header />
        <main id="content" className="flex-1">
          {children}
        </main>
        <footer className="border-t bg-white/60 p-4 text-center text-sm text-gray-600 backdrop-blur dark:bg-gray-900/60 dark:text-gray-400">
          <a href="/privacy" className="hover:underline">
            Privacy Policy
          </a>
        </footer>
      </body>
    </html>
  );
}
