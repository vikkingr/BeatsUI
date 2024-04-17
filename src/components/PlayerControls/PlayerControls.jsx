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
        updateCurrentTrack({ id: id, isPlaying: !isPlaying });
    }

    return (
        <div className="player-controls">
            <span>PlayerControls</span>
            <PlayPauseButton isPlaying={isPlaying} onClick={onClickPlayPause} />
        </div>
    )
}

export default PlayerControls