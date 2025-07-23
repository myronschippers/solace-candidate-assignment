'use client';

import { type FC } from 'react';

import type { PaperProps } from './types';

const Paper: FC<PaperProps> = ({ className, children }) => {
  return (
    <div className={`${className ?? ''} bg-white p-6 rounded-md shadow-md`}>
      {children}
    </div>
  );
};

export default Paper;
