import React from 'react';

function SortBar({ setSortOrder }) {
  return (
    <div className="sort-bar">
      <h3>Sort by:</h3>
      <button onClick={() => setSortOrder('health')}>Health</button>
      <button onClick={() => setSortOrder('damage')}>Damage</button>
      <button onClick={() => setSortOrder('armor')}>Armor</button>
    </div>
  );
}

export default SortBar;
