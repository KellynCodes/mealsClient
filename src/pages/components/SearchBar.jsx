import React from "react";

const SearchBar = () => {
  return (
    <div className="search_bar">
      <label htmlFor="instantOrder">Instant Order</label>
      <div className="search">
        <i className="bi bi-search"></i>
        <input type="search" placeholder="Search For Meals" />
      </div>
    </div>
  );
};

export default SearchBar;
