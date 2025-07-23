'use client';

import { useEffect, useState, useMemo } from 'react';

import { AdvocatesSearch } from '@/components/features/AdvocatesSearch';
import { AdvocatesTable } from '@/components/AdvocatesTable';
import { PgTitle } from '@/components/PgTitle';

import type { Advocate } from './types';

export default function Home() {
  const [advocates, setAdvocates] = useState<Advocate[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');

  useEffect(() => {
    console.log('fetching advocates...');
    fetch('/api/advocates').then((response) => {
      response.json().then((jsonResponse) => {
        setAdvocates(jsonResponse.data);
      });
    });
  }, []);

  const filteredAdvocates = useMemo<Advocate[]>(() => {
    if (searchTerm) {
      const cleanedSearchTerm = searchTerm.trim().toLowerCase();
      console.log('filtering advocates...');
      const filteredAdvocates = advocates.filter((advocate) => {
        return (
          advocate.firstName.toLowerCase().includes(cleanedSearchTerm) ||
          advocate.lastName.toLowerCase().includes(cleanedSearchTerm) ||
          advocate.city.toLowerCase().includes(cleanedSearchTerm) ||
          advocate.degree.toLowerCase().includes(cleanedSearchTerm) ||
          advocate.specialties
            .join(' ')
            .toLowerCase()
            .includes(cleanedSearchTerm) ||
          `${advocate.yearsOfExperience}`
            .toLowerCase()
            .includes(cleanedSearchTerm)
        );
      });

      return filteredAdvocates;
    }

    return advocates;
  }, [searchTerm, advocates]);

  const onSearchTermUpdate = (newSearchTerm: string) => {
    setSearchTerm(newSearchTerm);
  };

  return (
    <>
      <PgTitle />
      <br />
      <br />
      <AdvocatesSearch searchTermCallback={onSearchTermUpdate} />
      <br />
      <br />
      <AdvocatesTable advocates={filteredAdvocates} />
    </>
  );
}
