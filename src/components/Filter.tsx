import React, { useState } from 'react';

interface FilterProps {
  councils: string[];
  onFilterChange: (selectedCouncil: string) => void;
}

export const Filter: React.FC<FilterProps> = ({ councils, onFilterChange }) => {
  const [selectedCouncil, setSelectedCouncil] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCouncil(event.target.value);
    onFilterChange(event.target.value);
  };

  return (
    <div>
      <label htmlFor="council-filter">Filter by Council:</label>
      <select id="council-filter" value={selectedCouncil} onChange={handleChange}>
        <option value="">--Please choose a council--</option>
        {councils?.map((council) => (
          <option key={council} value={council}>
            {council}
          </option>
        ))}
      </select>
    </div>
  );
};
