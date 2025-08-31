import React from "react";
import "./Backlog.scss";

const Backlog = () => {
  return (
    <div className="backlog">
      <div>
        <h2>List of ideas that I might do</h2>
      </div>
      <div className="backlog__suggestions">
        <span>
          Custom tags so you can create any tag you want, attach it to a beat and then perform aggregations like filtering, sorting and searching!
        </span>
        <span>
          Add drag and drop feature to be able to re order beats by preference?
        </span>
        <span>Make the player controls vertical?</span>
        <span>How about a vertical progress bar for the song?</span>
        <span>Vertical play/pause and seek/unseek buttons?</span>
      </div>
    </div>
  );
};

export default Backlog;
