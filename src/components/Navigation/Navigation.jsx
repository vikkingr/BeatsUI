import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navigation.scss";
import Search from "./Search";

const Navigation = ({ searchValue, setSearchValue }) => {
  return (
    <div className="navigation">
      <div className="navigation__left">
        <h2>
          <span>
            <Link to="/">BeatHaedz</Link>
          </span>
        </h2>
      </div>
      {/* <div className="navigation__center">
        <Search
          searchValue={searchValue}
          onChange={e => setSearchValue(e.target.value)}
        />
      </div> */}
      <div className="navigation__right">
        {/* <Link to="/About">About</Link> */}
        <Search
          searchValue={searchValue}
          onChange={e => setSearchValue(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Navigation;