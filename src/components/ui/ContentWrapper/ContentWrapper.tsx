'use client';

import { useMemo, type FC } from 'react';

import { DEFAULT_WIDTH, DEFAULT_VARIANT } from './constants';
import type { ContentWrapperProps } from './types';

const ContentWrapper: FC<ContentWrapperProps> = ({
  children,
  variant = DEFAULT_VARIANT,
}) => {
  const wrapperWidth = useMemo<string>(() => {
    switch (variant) {
      case 'narrow':
        return '800px';
      case 'wide':
        return '1200px';
      case 'full':
        return '100%';
      case 'full-bleed':
        return '100%';
      case 'regular':
        return DEFAULT_WIDTH;
      default:
        return DEFAULT_WIDTH;
    }
  }, [variant]);

  return (
    <div
      className={`mx-auto ${variant !== 'full-bleed' ? 'px-2' : ''} md:px-0`}
      style={{
        maxWidth: '100%',
        width: wrapperWidth,
      }}
    >
      {children}
    </div>
  );
};

export default ContentWrapper;
