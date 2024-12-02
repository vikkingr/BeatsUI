import React, { useContext, useEffect, useRef, useState } from 'react';
import { BeatsContext } from '../../context/BeatsContext';
import PlayPauseButton from '../../shared/PlayPauseButton/PlayPauseButton';
import clsx from 'clsx';
import ProgressBar from '../../shared/ProgressBar/ProgressBar';
import './PlayerControls.scss';

const PlayerControls = () => {
    const { currentTrack, updateCurrentTrack, audioRef } = useContext(BeatsContext);
    const [timeLineValue, setTimeLineValue] = useState(0);

    if (!currentTrack) {
        return <div>Loading</div>
    };

    const {
        id,
        isPlaying,
        src,
        name,
        contributors,
    } = currentTrack;

    const onClickPlayPause = () => {
        updateCurrentTrack({
            id: id,
            isPlaying: !isPlaying
        });
    }

    const onEndedHandler = (event) => {
        event.preventDefault();

        updateCurrentTrack({
            id: id,
            isPlaying: !isPlaying
        });
    }

    const onTimeUpdate = (event) => {
        event.preventDefault();

        setTimeLineValue((audioRef.current.currentTime / audioRef.current.duration) * 100);
    }

    return (
        <div className={clsx({ 'player-controls': true, 'player-controls--playing': isPlaying })}>
            <div className="player-controls__track-information">
                <span className='track-information__contributors'>{contributors.toString()}</span>
                <span className='track-information__name'>{name}</span>
            </div>
            <ProgressBar value={timeLineValue} />
            <div className='player-controls__track-control'>
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
                    onEnded={onEndedHandler}
                    onTimeUpdate={onTimeUpdate}
                >
                </audio>
            </div>
        </div>
    )
}

export default PlayerControls