'use client';

import { useEffect, useState, useMemo, type ChangeEvent } from 'react';

type Advocate = {
  city: string;
  createdAt: string;
  degree: string;
  firstName: string;
  id: number;
  lastName: string;
  phoneNumber: number;
  specialties: string[];
  yearsOfExperience: number;
};

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
      const cleanedSearchTerm = searchTerm.trim();
      console.log('filtering advocates...');
      const filteredAdvocates = advocates.filter((advocate) => {
        return (
          advocate.firstName.includes(cleanedSearchTerm) ||
          advocate.lastName.includes(cleanedSearchTerm) ||
          advocate.city.includes(cleanedSearchTerm) ||
          advocate.degree.includes(cleanedSearchTerm) ||
          advocate.specialties.join(' ').includes(cleanedSearchTerm) ||
          `${advocate.yearsOfExperience}`.includes(cleanedSearchTerm)
        );
      });

      return filteredAdvocates;
    }

    return advocates;
  }, [searchTerm, advocates]);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newSearchTerm = e.target.value;
    setSearchTerm(newSearchTerm);
  };

  const onClick = () => {
    console.log(advocates);
    setSearchTerm('');
  };

  return (
    <main style={{ margin: '24px' }}>
      <h1>Solace Advocates</h1>
      <br />
      <br />
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
      <br />
      <br />
      <table>
        <thead>
          <th>First Name</th>
          <th>Last Name</th>
          <th>City</th>
          <th>Degree</th>
          <th>Specialties</th>
          <th>Years of Experience</th>
          <th>Phone Number</th>
        </thead>
        <tbody>
          {filteredAdvocates.map((advocate) => {
            return (
              <tr key={advocate.id}>
                <td>{advocate.firstName}</td>
                <td>{advocate.lastName}</td>
                <td>{advocate.city}</td>
                <td>{advocate.degree}</td>
                <td>
                  {advocate.specialties.map((s, sIndex) => (
                    <div key={sIndex}>{s}</div>
                  ))}
                </td>
                <td>{advocate.yearsOfExperience}</td>
                <td>{advocate.phoneNumber}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
}
