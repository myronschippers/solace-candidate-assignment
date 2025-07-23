import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { Footer } from '@/components/template/Footer';
import { Header } from '@/components/template/Header';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Solace Candidate Assignment',
  description: 'Show us what you got',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-layer-base flex flex-col w-[100%]`}
      >
        <Header />
        <main className="flex-[1_0_auto]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
