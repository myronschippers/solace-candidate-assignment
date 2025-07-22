'use client';

import { type FC } from 'react';

import { ContentWrapper } from '@/components/ui/ContentWrapper';

import type { HeaderProps } from './types';

const Header: FC<HeaderProps> = () => {
  return (
    <header>
      <ContentWrapper>
        <div className="bg-blue-700 text-white px-2 py-4 border-b-2 border-blue-900">
          <h1>Solace Engineering Assignment</h1>
        </div>
      </ContentWrapper>
    </header>
  );
};

export default Header;
