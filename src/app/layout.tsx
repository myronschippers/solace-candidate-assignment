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
      <body className={`${inter.className} bg-layer-base`}>
        <div className="flex flex-col w-[100%] gap-2">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
