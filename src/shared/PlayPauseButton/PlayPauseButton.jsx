import React from 'react';
import playButton from '../../assets/play.svg';
import pauseButton from '../../assets/pause.svg';
import './PlayPauseButton.scss';

const PlayPauseButton = ({ isPlaying, onClick }) => {
    return (
        <img onClick={onClick} className="playPauseButton" src={isPlaying ? pauseButton : playButton} alt="A pause button."></img>
    )
}

export default PlayPauseButton;