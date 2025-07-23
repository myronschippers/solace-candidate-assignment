'use client';

import { type FC } from 'react';

import { ContentWrapper } from '@/components/ui/ContentWrapper';
import { Paper } from '@/components/ui/Paper';
import { Td } from '@/components/ui/Td';
import { Th } from '@/components/ui/Th';

import type { AdvocatesTableProps } from './types';

const AdvocatesTable: FC<AdvocatesTableProps> = ({ advocates }) => {
  return (
    <ContentWrapper>
      <Paper>
        <table className="table-auto border-collapse border-spacing-2 border border-slate-500 text-sm align-top w-full">
          <thead>
            <tr>
              <Th>First Name</Th>
              <Th>Last Name</Th>
              <Th>City</Th>
              <Th>Degree</Th>
              <Th>Specialties</Th>
              <Th>Years of Experience</Th>
              <Th>Phone Number</Th>
            </tr>
          </thead>
          <tbody>
            {advocates.map((advocate) => {
              return (
                <tr key={advocate.id}>
                  <Td>{advocate.firstName}</Td>
                  <Td>{advocate.lastName}</Td>
                  <Td>{advocate.city}</Td>
                  <Td>{advocate.degree}</Td>
                  <Td>
                    {advocate.specialties.map((s, sIndex) => (
                      <div key={sIndex}>{s}</div>
                    ))}
                  </Td>
                  <Td>{advocate.yearsOfExperience}</Td>
                  <Td>{advocate.phoneNumber}</Td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Paper>
    </ContentWrapper>
  );
};

export default AdvocatesTable;
