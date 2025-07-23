'use client';

import { useEffect, useState, type FC, type ChangeEvent } from 'react';
import { ArrowPathIcon } from '@heroicons/react/24/solid';

import { ContentWrapper } from '@/components/ui/ContentWrapper';
import { InputField } from '@/components/ui/InputField';

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
      <div className="flex flex-col gap-2 bg-white text-blue-950 p-6 rounded-md shadow-md">
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
        <p className="text-italic text-sm">
          Searching for: <span id="search-term">{searchTerm}</span>
        </p>
      </div>
    </div>
  );
};

export default AdvocatesSearch;
