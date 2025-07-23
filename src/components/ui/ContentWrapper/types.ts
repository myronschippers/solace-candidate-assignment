import type { ReactNode } from 'react';

export type ContentWrapperProps = {
  children: ReactNode;
  variant?: 'regular' | 'narrow' | 'wide' | 'full' | 'full-bleed';
};
