import React from "react"

const classes = ["Support", "Medic", "Assault", "Defender", "Captain", "Witch"];

function FilterBar({ selectedFilters, setSelectedFilters }) {
  const toggleFilter = (botClass) => {
    if (selectedFilters.includes(botClass)) {
      setSelectedFilters(selectedFilters.filter(c => c !== botClass));
    } else {
      setSelectedFilters([...selectedFilters, botClass]);
    }
  };

  return (
    <div className="filter-bar">
      <p>Filter by Class:</p>
      <div className="filter-buttons">
        {classes.map(botClass => (
          <button
            key={botClass}
            className={selectedFilters.includes(botClass) ? "active" : ""}
            onClick={() => toggleFilter(botClass)}
          >
            {botClass}
          </button>
        ))}
      </div>
    </div>
  );
}

export default FilterBar;
