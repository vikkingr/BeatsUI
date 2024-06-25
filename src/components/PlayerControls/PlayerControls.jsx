import React, { useContext } from 'react';
import { BeatsContext } from '../../context/BeatsContext';
import PlayPauseButton from '../../shared/PlayPauseButton/PlayPauseButton';
import './PlayerControls.scss';

const PlayerControls = () => {
    const { currentTrack, updateCurrentTrack } = useContext(BeatsContext);

    if (!currentTrack) {
        return <div>Loading</div>
    }

    const { id, isPlaying } = currentTrack;

    const onClickPlayPause = () => {
        const audioElement = document.getElementById("audio-element");
        isPlaying ? audioElement.pause() : audioElement.play();
        updateCurrentTrack({ id: id, isPlaying: !isPlaying });
    }

    return (
        <div className="player-controls">
            <span>PlayerControls</span>
            <PlayPauseButton isPlaying={isPlaying} onClick={onClickPlayPause} />
            <audio id="audio-element" controls>
                <source src="../../assets/audio/newBurger.aif" />
            </audio>
        </div>
    )
}

export default PlayerControls