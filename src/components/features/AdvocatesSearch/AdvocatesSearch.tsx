'use client';

import { useEffect, useState, type FC, type ChangeEvent } from 'react';
import { ArrowPathIcon } from '@heroicons/react/24/solid';

import { InputField } from '@/components/ui/InputField';
import { Paper } from '@/components/ui/Paper';

import type { AdvocatesSearchProps } from './types';

const AdvocatesSearch: FC<AdvocatesSearchProps> = ({ searchTermCallback }) => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  useEffect(() => {
    searchTermCallback(searchTerm);
  }, [searchTerm, searchTermCallback]);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newSearchTerm = e.target.value;
    setSearchTerm(newSearchTerm);
  };

  const onClick = () => {
    setSearchTerm('');
  };

  return (
    <div className="w-full flex flex-row justify-center">
      <Paper className="flex flex-col gap-2 text-blue-950">
        <div className="flex flex-row gap-2 items-center">
          <InputField
            variant="inline"
            label="Search"
            value={searchTerm}
            onChange={onChange}
          />
          <button
            className="rounded-full button bg-pink-600 p-2 border-0 text-white hover:bg-pink-700"
            onClick={onClick}
            aria-label="Reset Search"
          >
            <ArrowPathIcon className="size-5 text-white" />
          </button>
        </div>
      </Paper>
    </div>
  );
};

export default AdvocatesSearch;
