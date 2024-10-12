import React, { useContext, useEffect, useRef } from 'react';
import { BeatsContext } from '../../context/BeatsContext';
import PlayPauseButton from '../../shared/PlayPauseButton/PlayPauseButton';
import './PlayerControls.scss';

const PlayerControls = () => {
    const { currentTrack, updateCurrentTrack, audioRef } = useContext(BeatsContext);

    if (!currentTrack ) {
        return <div>Loading</div>
    };

    const {
        id,
        isPlaying,
        src,
        name
    } = currentTrack;

    const onClickPlayPause = () => {
        updateCurrentTrack({
            id: id,
            isPlaying: !isPlaying
        });
    }

    return (
        <div className="player-controls">
            <span>{name}</span>
            <PlayPauseButton
                id="play-pause-button"
                isPlaying={isPlaying}
                onClick={onClickPlayPause}
            />
            <audio
                ref={audioRef}
                id="audio-element"
                src={src}
                crossOrigin='anonymous'
            >
            </audio>
        </div>
    )
}

export default PlayerControls