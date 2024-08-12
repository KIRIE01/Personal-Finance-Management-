// src/components/FilterAndAdd.js
import React from 'react';
import './FilterAndAdd.css';

const FilterAndAdd = () => {
  return (
    <div className="filter-and-add">
      <button className="filter-button">
        <span>Filter</span>
      </button>
      <button className="add-button">
        <span>+ Add</span>
      </button>
    </div>
  );
};

export default FilterAndAdd;
