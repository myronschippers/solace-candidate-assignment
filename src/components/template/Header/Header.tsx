'use client';

import { type FC } from 'react';

import { ContentWrapper } from '@/components/ui/ContentWrapper';

import type { HeaderProps } from './types';

const Header: FC<HeaderProps> = () => {
  return (
    <header className="py-2 bg-blue-600">
      <ContentWrapper>
        <div className="bg-blue-100 text-blue-950 px-6 py-2 border-b-2 border-blue-900 rounded-full">
          <h1 className="flex flex-col gap-1">
            <span className="text-lg leading-none">Solace</span>
            <span className="text-sm leading-none text-blue-950">
              Engineering Assignment
            </span>
          </h1>
        </div>
      </ContentWrapper>
    </header>
  );
};

export default Header;
