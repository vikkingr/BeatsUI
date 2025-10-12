import React from "react";
import "./Search.scss";

const Search = ({ searchValue, onChange }) => {
  return (
    <input
      className="search"
      type="text"
      value={searchValue}
      onChange={onChange}
      placeholder="Search..."
    />
  );
};

export default Search;
