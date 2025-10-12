import React from "react";
import BeatList from "../BeatList/BeatList";
import { useOutletContext } from "react-router-dom";
import "./Home.scss";

const Home = () => {
    const { searchValue } = useOutletContext();
    return (
        <div className="home">
            <BeatList searchValue={searchValue} />
        </div>
    )
}

export default Home;