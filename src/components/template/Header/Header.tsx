'use client';

import { type FC } from 'react';

import { ContentWrapper } from '@/components/ui/ContentWrapper';

import type { HeaderProps } from './types';

const Header: FC<HeaderProps> = () => {
  return (
    <header className="py-2 bg-blue-600">
      <ContentWrapper>
        <div className="bg-blue-400 text-white px-6 py-2 rounded-full shadow-md">
          <h1 className="flex flex-col gap-1">
            <span className="text-lg leading-none">Solace</span>
            <span className="text-sm leading-none">Engineering Assignment</span>
          </h1>
        </div>
      </ContentWrapper>
    </header>
  );
};

export default Header;
