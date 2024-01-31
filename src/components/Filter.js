import React from 'react';

const Filter = ({ onFilterChange }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    onFilterChange(name, value);
  };

  return (
    <div className="filter">
      <input type="text" name="title" placeholder="Filter by title" onChange={handleInputChange} />
      <input type="number" name="rate" placeholder="Filter by rate" onChange={handleInputChange} />
    </div>
  );
};

export default Filter;


