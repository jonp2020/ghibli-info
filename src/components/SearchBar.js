import React from "react";

const SearchBar = () => {
  return (
    <div className="search-bar">
      <label htmlFor="search-films"></label>
      <input type="text" id="search-films" placeholder="Search" />
    </div>
  );
};

export default SearchBar;
