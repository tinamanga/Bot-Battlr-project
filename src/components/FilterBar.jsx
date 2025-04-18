import React, { useState } from 'react';

function FilterBar({ setFilters }) {
  const [selectedClasses, setSelectedClasses] = useState([]);

  const handleChange = (event) => {
    const value = event.target.value;
    setSelectedClasses(prev => {
      const newFilters = prev.includes(value) 
        ? prev.filter(item => item !== value) 
        : [...prev, value];
      setFilters(newFilters);
      return newFilters;
    });
  };

  return (
    <div className="filter-bar">
      <h3>Filter by Class</h3>
      <label>
        <input
          type="checkbox"
          value="Support"
          onChange={handleChange}
        />
        Support
      </label>
      <label>
        <input
          type="checkbox"
          value="Medic"
          onChange={handleChange}
        />
        Medic
      </label>
      <label>
        <input
          type="checkbox"
          value="Assault"
          onChange={handleChange}
        />
        Assault
      </label>
      <label>
        <input
          type="checkbox"
          value="Defender"
          onChange={handleChange}
        />
        Defender
      </label>
      <label>
        <input
          type="checkbox"
          value="Captain"
          onChange={handleChange}
        />
        Captain
      </label>
      <label>
        <input
          type="checkbox"
          value="Witch"
          onChange={handleChange}
        />
        Witch
      </label>
    </div>
  );
}

export default FilterBar;
