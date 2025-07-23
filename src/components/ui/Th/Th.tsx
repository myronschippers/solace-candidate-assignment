'use client';

import { type FC } from 'react';

import type { ThProps } from './types';

const Th: FC<ThProps> = ({ children }) => {
  return (
    <th className="border border-slate-300 bg-slate-100 p-2">{children}</th>
  );
};

export default Th;
