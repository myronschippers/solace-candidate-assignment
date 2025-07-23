import { type InputHTMLAttributes } from 'react';

export type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  variant?: 'stack' | 'inline';
  label?: string;
};
