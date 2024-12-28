import React, { useEffect, useState } from 'react';
import "./ProgressBar.scss"

const OldProgressBar = ({ value }) => {
  return (
    <div className="progress-bar">
      <div className="progress-bar-filler" style={{ width: `${value}%` }}></div>
      <div className='progress-bar-filler__thumb'></div>
    </div>
  );
};

const ProgressBar = ({ value, handleProgressBarChange }) => {
  return (
    <input className='slider' step="0.01" type='range' value={value} onChange={handleProgressBarChange} />
  );
};

export default ProgressBar;