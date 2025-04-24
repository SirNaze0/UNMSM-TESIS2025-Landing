import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import AOSProvider from '../components/AOSProvider';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Curso de IA | UNMSM',
  description:
    'Curso de Inteligencia Artificial para estudiantes de la Universidad Nacional Mayor de San Marcos. Aprende fundamentos teóricos y prácticos para diseñar, implementar y evaluar soluciones inteligentes.',
  authors: [{ name: 'Eder Gustavo Benites Pardave' }],
  keywords: [
    'inteligencia artificial',
    'IA',
    'machine learning',
    'deep learning',
    'IA generativa',
    'UNMSM',
    'universidad',
    'curso',
  ],
  openGraph: {
    type: 'website',
    url: 'https://unmsm-ia-2025-landing.vercel.app/',
    title: 'Curso de Inteligencia Artificial | UNMSM',
    description:
      'Descubre los fundamentos teóricos y prácticos que te prepararán para diseñar, implementar y evaluar soluciones inteligentes en distintos ámbitos.',
    images: ['/guerrabarrasv2.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Curso de Inteligencia Artificial | UNMSM',
    description:
      'Curso completo de IA: desde fundamentos básicos hasta técnicas avanzadas de Deep Learning e IA Generativa.',
    images: ['/guerrabarrasv2.png'],
  },
  icons: {
    icon: '/logounmsm.svg',
    apple: '/logounmsm.svg',
  },
  alternates: {
    canonical: 'https://unmsm-ia-2025-landing.vercel.app/',
  },
  robots: {
    index: true,
    follow: true,
  },
  creator: 'Eder Gustavo Benites Pardave',
  publisher: 'Universidad Nacional Mayor de San Marcos',
  metadataBase: new URL('https://unmsm-ia-2025-landing.vercel.app/'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="custom-scrollbar">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AOSProvider>{children}</AOSProvider>
      </body>
    </html>
  );
}
