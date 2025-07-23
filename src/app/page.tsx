'use client';

import { useEffect, useState, useMemo, useCallback } from 'react';
import debounce from 'lodash.debounce';

import { AdvocatesSearch } from '@/components/features/AdvocatesSearch';
import { AdvocatesTable } from '@/components/features/AdvocatesTable';
import { PgTitle } from '@/components/template/PgTitle';

import type { Advocate } from './types';

export default function Home() {
  const [advocates, setAdvocates] = useState<Advocate[]>([]);
  const [searchedAdvocates, setSearchedAdvocates] = useState<Advocate[] | null>(
    null
  );
  const [searchTerm, setSearchTerm] = useState<string>('');

  useEffect(() => {
    fetch('/api/advocates').then((response) => {
      response.json().then((jsonResponse) => {
        setAdvocates(jsonResponse.data);
      });
    });
  }, []);

  useEffect(() => {
    if (!searchTerm) {
      return;
    }

    fetch('/api/advocates/search', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ searchTerm: searchTerm }),
    }).then((response) => {
      response.json().then((jsonResponse) => {
        setSearchedAdvocates(jsonResponse.data);
      });
    });
  }, [searchTerm]);

  const filteredAdvocates = useMemo<Advocate[]>(() => {
    if (!!searchTerm && searchedAdvocates != null) {
      return searchedAdvocates;
    }

    return advocates;
  }, [searchTerm, advocates, searchedAdvocates]);

  const debounceSetSearchTermValue = debounce((newSearchTerm: string) => {
    const cleanedSearchTerm = newSearchTerm.trim();

    setSearchTerm(cleanedSearchTerm);
  }, 600);

  const onSearchTermUpdate = (newSearchTerm: string) => {
    debounceSetSearchTermValue(newSearchTerm);
  };

  return (
    <div className="flex flex-col gap-10">
      <PgTitle />
      <AdvocatesSearch searchTermCallback={onSearchTermUpdate} />
      {/* TOPIC: loading indicator should be used during the fetching of search results and initial load */}
      <AdvocatesTable advocates={filteredAdvocates} />
    </div>
  );
}
