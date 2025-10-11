import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navigation.scss";

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
      <div className="navigation__center">
        <input
          type="text"
          value={searchValue}
          onChange={e => setSearchValue(e.target.value)}
          placeholder="Search beats..."
        />
      </div>
      <div className="navigation__right">
        <Link to="/About">About</Link>
      </div>
    </div>
  );
};

export default Navigation;