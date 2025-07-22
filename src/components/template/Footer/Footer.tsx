'use client';

import { type FC } from 'react';

import type { FooterProps } from './types';

const Footer: FC<FooterProps> = () => {
  return (
    <footer className="flex-shrink-0 bg-layer-tinted text-white text-center p-4">
      <p className="text-sm">&copy; {new Date().getFullYear()}</p>
    </footer>
  );
};

export default Footer;
