import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation/Navigation";
import PlayerControls from "../components/PlayerControls/PlayerControls";
import "./Layout.scss";

const Layout = () => {
  const [searchValue, setSearchValue] = useState("");
  return (
    <div className="layout">
      <div className="header">
        <Navigation searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
      <div className="outlet">
        <Outlet context={{ searchValue }} />
      </div>
      <div className="footer">
        <PlayerControls />
      </div>
    </div>
  );
};

export default Layout;
