import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.scss";

const Navigation = () => {
  return (
    <div className="navigation">
      <div className="navigation__left">
        <h2>
          <span>
            <Link to="/">My Beats</Link>
          </span>
        </h2>
      </div>
      <div className="navigation__right">
        <Link to="Backlog">Backlog</Link>
        <Link to="About">About</Link>
      </div>
    </div>
  );
};

export default Navigation;
