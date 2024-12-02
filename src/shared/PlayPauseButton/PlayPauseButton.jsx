import React from 'react';
import playButton from '../../assets/svg/play.svg';
import pauseButton from '../../assets/svg/pause.svg';
import clsx from 'clsx';
import './PlayPauseButton.scss';

const PlayPauseButton = ({ isPlaying, onClick }) => {
    return (
        <img 
            onClick={onClick} 
            className={clsx({ 
                "play-pause-button": true, 
                "play-pause-button--playing": isPlaying,
                "play-pause-button--paused": !isPlaying 
            })} 
            src={isPlaying ? pauseButton : playButton} 
            alt="A pause button."
        />
    )
}

export default PlayPauseButton;