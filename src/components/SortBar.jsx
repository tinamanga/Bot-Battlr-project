import React from "react";


function SortBar({ setSortBy }) {
  const handleChange = (e) => {
    setSortBy(e.target.value);
  };

  return (
    <div className="sort-bar">
      <label htmlFor="sort-select">Sort by:</label>
      <select id="sort-select" onChange={handleChange} defaultValue="">
        <option value="">None</option>
        <option value="health">Health 🩺</option>
        <option value="damage">Damage ⚔</option>
        <option value="armor">Armor 🛡</option>
      </select>
    </div>
  );
}

export default SortBar;
