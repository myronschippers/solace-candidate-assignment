'use client';

import { type FC } from 'react';

import type { TdProps } from './types';

const Td: FC<TdProps> = ({ children }) => {
  return <td className="border border-slate-300 p-2">{children}</td>;
};

export default Td;
