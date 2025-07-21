'use client';

import { useEffect, useState, useMemo, type ChangeEvent } from 'react';

import type { Advocate } from './types';
import { AdvocatesSearch } from './components/AdvocatesSearch';
import { AdvocatesTable } from './components/AdvocatesTable';

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
    <main style={{ margin: '24px' }}>
      <h1>Solace Advocates</h1>
      <br />
      <br />
      <AdvocatesSearch searchTermCallback={onSearchTermUpdate} />
      <br />
      <br />
      <AdvocatesTable advocates={filteredAdvocates} />
    </main>
  );
}
