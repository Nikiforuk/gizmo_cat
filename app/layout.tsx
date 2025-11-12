import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';

import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import SubNavigation from './components/layout/SubNavigation';

import './globals.css';

const roboto = Roboto({
  variable: '--font-roboto',
  weight: ['300', '400', '500', '600', '800'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Gizmo - Cat',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable}`}>
        <Header />
        <SubNavigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
