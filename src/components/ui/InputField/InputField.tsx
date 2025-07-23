'use client';

import { useMemo, type FC } from 'react';

import type { InputFieldProps } from './types';

const InputField: FC<InputFieldProps> = ({
  variant = 'stack',
  label,
  ...inputProps
}) => {
  const flexLayout = useMemo(() => {
    const baseLayout = 'flex gap-2 items-center justify-center';
    const defaultLayout = `${baseLayout} flex-col`;

    switch (variant) {
      case 'stack':
        return defaultLayout;
      case 'inline':
        return `${baseLayout} flex-row`;
      default:
        return defaultLayout;
    }
  }, [variant]);

  return (
    <label className={flexLayout}>
      {label && <span>{label}</span>}
      <input
        className="border-2 border-slate-600 rounded-lg p-2"
        style={{ border: '1px solid black' }}
        {...inputProps}
      />
    </label>
  );
};

export default InputField;
