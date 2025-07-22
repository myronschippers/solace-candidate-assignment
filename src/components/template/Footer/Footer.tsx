'use client';

import { type FC } from 'react';

import type { FooterProps } from './types';

const Footer: FC<FooterProps> = () => {
  return (
    <footer className="flex-shrink-0">
      <p className="font-size-sm">&copy; {new Date().getFullYear()}</p>
    </footer>
  );
};

export default Footer;
