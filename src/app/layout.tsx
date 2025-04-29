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
  title: 'Curso de Metodología de la elaboración de tesis | UNMSM',
  description:
    'Curso de Metodología de la elaboración de tesis para estudiantes de la Universidad Nacional Mayor de San Marcos. Aprende el desarrollo del proyecto de tesis, definiendo el tema, desarrollando si fuera necesario el marco teórico y realizando la investigación del estado del arte del problema de investigación.',
  authors: [{ name: 'Gianmarco Gabriel Lavado Torres y Eder Gustavo Benites Pardave' }],
  keywords: [
    'Metodología de la elaboración de tesis',
    'Tesis',
    'Elaboración de tesis',
    'Metodología de la tesis',
    'Estado del arte de la tesis',
    'UNMSM',
    'universidad',
    'curso',
  ],
  openGraph: {
    type: 'website',
    url: 'https://unmsm-tesis-2025-landing.vercel.app/',
    title: 'Curso de Metodología de la elaboración de tesis | UNMSM',
    description:
      'Aprende el desarrollo del proyecto de tesis, definiendo el tema, desarrollando si fuera necesario el marco teórico y realizando la investigación del estado del arte del problema de investigación.',
    images: ['/guerrabarrasv2.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Curso de Metodología de la elaboración de tesis | UNMSM',
    description:
      'Aprende el desarrollo del proyecto de tesis, definiendo el tema, desarrollando si fuera necesario el marco teórico y realizando la investigación del estado del arte del problema de investigación.',
    images: ['/guerrita.png'],
  },
  icons: {
    icon: '/logounmsm.svg',
    apple: '/logounmsm.svg',
  },
  alternates: {
    canonical: 'https://unmsm-tesis-2025-landing.vercel.app/',
  },
  robots: {
    index: true,
    follow: true,
  },
  creator: 'Gianmarco Gabriel Lavado Torres y Eder Gustavo Benites Pardave',
  publisher: 'Universidad Nacional Mayor de San Marcos',
  metadataBase: new URL('https://unmsm-tesis-2025-landing.vercel.app/'),
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
