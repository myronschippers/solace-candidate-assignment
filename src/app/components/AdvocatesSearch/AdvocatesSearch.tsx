'use client';

import { useEffect, useState, type FC, type ChangeEvent } from 'react';

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
    <div>
      <p>Search</p>
      <p>
        Searching for: <span id="search-term"></span>
      </p>
      <input
        style={{ border: '1px solid black' }}
        value={searchTerm}
        onChange={onChange}
      />
      <button onClick={onClick}>Reset Search</button>
    </div>
  );
};

export default AdvocatesSearch;
