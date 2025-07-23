'use client';

import { type FC } from 'react';

import { ContentWrapper } from '@/components/ui/ContentWrapper';

import type { PgTitleProps } from './types';

const PgTitle: FC<PgTitleProps> = () => {
  return (
    <div className="pb-2 pt-20 bg-blue-600">
      <ContentWrapper>
        <h2 className="text-6xl font-extrabold leading-none text-layer-base">
          Solace Advocates
        </h2>
      </ContentWrapper>
    </div>
  );
};

export default PgTitle;
