import React from "react";
import { Outlet } from "react-router-dom"
import Navigation from "../components/Navigation/Navigation"
import PlayerControls from "../components/PlayerControls/PlayerControls";
import "./Layout.scss";

const Layout = () => {
    return (
        <div className="layout">
            <div className="header">
                <Navigation />
            </div>
            <div className="outlet">
                <Outlet />
            </div>
            <div className="footer">
                <PlayerControls />
            </div>
        </div>
    )
}

export default Layout;