import React from "react";
import "./Backlog.scss";

const Backlog = () => {
  return (
    <div>
      <div>
        <h2>
          <span>List of ideas that I might do</span>
        </h2>
      </div>
      <div className="backlog__suggestions">
        <span>Make the player controls vertical?</span>
        <span>How about a vertical progress bar for the song.</span>
        <span>Vertical play/pause and seek/unseek buttons.</span>
      </div>
    </div>
  );
};

export default Backlog;
