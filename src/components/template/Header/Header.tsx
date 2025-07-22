'use client';

import { type FC } from 'react';

import { ContentWrapper } from '@/components/ui/ContentWrapper';

import type { HeaderProps } from './types';

const Header: FC<HeaderProps> = () => {
  return (
    <header className="pt-2">
      <ContentWrapper>
        <div className="bg-blue-700 text-white px-6 py-4 border-b-2 border-layer-tinted rounded-full">
          <h1>Solace Engineering Assignment</h1>
        </div>
      </ContentWrapper>
    </header>
  );
};

export default Header;
