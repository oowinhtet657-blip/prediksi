import type { Metadata } from 'next';
import { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3001'
  ),
  title: 'Kalender Prediksi Togel Hari Ini - Prediksi Akurat HK SGP Sydney',
  description: 'Kalender prediksi togel terlengkap dengan data historis dan analisis statistik untuk Hongkong, Singapore, Sydney, dan 5 pasaran lainnya. Update setiap hari.',
  keywords: ['prediksi togel', 'togel hongkong', 'togel singapore', 'togel sydney', 'kalender togel', 'angka main togel', 'prediksi angka togel hari ini'],
  viewport: 'width=device-width, initial-scale=1',
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3001',
    siteName: 'Kalender Prediksi Togel',
    title: 'Kalender Prediksi Togel - Analisis Statistik Angka Terlengkap',
    description: 'Platform prediksi togel terpercaya dengan data 8 pasaran: Hongkong, Singapore, Sydney, Taiping, Malaysia, Etawah, Hongkong Malam, dan Totowuhan.',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Kalender Prediksi Togel',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kalender Prediksi Togel Hari Ini',
    description: 'Prediksi togel akurat dengan analisis statistik dan data historis.',
    images: ['/og-image.svg'],
  },
  icons: {
    icon: '/favicon.svg',
    apple: '/apple-icon.svg',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3001',
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="id">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Kalender Prediksi Togel',
              url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3001',
              description: 'Platform prediksi togel dengan analisis statistik dan data historis',
              logo: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3001'}/logo.png`,
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3001',
              name: 'Kalender Prediksi Togel',
              potentialAction: {
                '@type': 'SearchAction',
                target: {
                  '@type': 'EntryPoint',
                  urlTemplate: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3001'}?q={search_term_string}`,
                },
                'query-input': 'required name=search_term_string',
              },
            }),
          }}
        />
        {process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION && (
          <meta name="google-site-verification" content={process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION} />
        )}
        {process.env.NEXT_PUBLIC_BING_VERIFICATION && (
          <meta name="msvalidate.01" content={process.env.NEXT_PUBLIC_BING_VERIFICATION} />
        )}
      </head>
      <body className="min-h-screen" style={{ background: 'linear-gradient(135deg, #000814 0%, #001a47 50%, #000f2e 100%)' }}>
        {children}
      </body>
    </html>
  );
}
