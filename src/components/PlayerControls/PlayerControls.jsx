import React, { useContext, useEffect, useRef, useState } from 'react';
import { BeatsContext } from '../../context/BeatsContext';
import PlayPauseButton from '../../shared/PlayPauseButton/PlayPauseButton';
import clsx from 'clsx';
import ProgressBar from '../../shared/ProgressBar/ProgressBar';
import './PlayerControls.scss';
import TrackInformation from '../../shared/TrackInformation/TrackInformation';
import PreviousTrackButton from './components/PreviousTrackButton/PreviousTrackButton';
import NextTrackButton from './components/NextTrackButton/NextTrackButton';

const PlayerControls = () => {
    const { currentTrack, updateCurrentTrack, playPreviousTrack, playNextTrack, audioRef } = useContext(BeatsContext);
    const [currentTrackTime, setCurrentTrackTime] = useState(0);
    const [currentTrackDuration, setCurrentTrackDuration] = useState(1);

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
        setCurrentTrackTime(event.currentTarget.currentTime);
    }

    const onDurationChange = event => {
        setCurrentTrackDuration(event.currentTarget.duration);
    }

    const handleProgressBarChange = (event) => {
        audioRef.current.currentTime = (event.target.value / 100) * currentTrackDuration;
    }

    if (currentTrack && audioRef.current) {
        currentTrack.isPlaying ? audioRef.current.play() : audioRef.current.pause();
    }

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60).toString().padStart(2, '0');
        return `${minutes}:${seconds}`;
    };

    const timeElapsed = `${formatTime(currentTrackTime)} - ${formatTime(currentTrackDuration)}`;
    const timeLineValue = (currentTrackTime / currentTrackDuration) * 100;

    return (
        <div className={clsx({ 'player-controls': true, 'player-controls--playing': isPlaying })}>
            <ProgressBar value={timeLineValue} handleProgressBarChange={handleProgressBarChange} />
            <TrackInformation name={name} contributors={contributors} timeElapsed={timeElapsed} />
            <div className='player-controls__track-control'>
                <PreviousTrackButton onClick={playPreviousTrack}></PreviousTrackButton>
                <PlayPauseButton
                    id="play-pause-button"
                    isPlaying={isPlaying}
                    onClick={onClickPlayPause}
                />
                <NextTrackButton onClick={playNextTrack}></NextTrackButton>
                <audio
                    ref={audioRef}
                    id="audio-element"
                    src={src}
                    crossOrigin='anonymous'
                    onDurationChange={onDurationChange}
                    onEnded={onEndedHandler}
                    onTimeUpdate={onTimeUpdate}
                >
                </audio>
            </div>
        </div>
    )
}

export default PlayerControls