'use client';

import { type FC } from 'react';

import type { AdvocatesTableRowProps } from './types';

const AdvocatesTableRow: FC<AdvocatesTableRowProps> = ({ advocate }) => {
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
};

export default AdvocatesTableRow;
