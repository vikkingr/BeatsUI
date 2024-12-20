import React, { useState } from 'react';
import "./ProgressBar.scss"

const ProgressBar = ({ value }) => {

  return (
    <div className="progress-bar">
      <div className="progress-bar-filler" style={{ width: `${value}%` }}></div>
    </div>
  );
};

export default ProgressBar;