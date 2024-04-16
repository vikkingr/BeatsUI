import React, { useContext, useState } from 'react';
import { BeatsContext } from '../../../context/BeatsContext';
import './BeatListItem.scss';
import PlayPauseButton from '../../../shared/PlayPauseButton/PlayPauseButton';

const BeatListItem = ({ track }) => {
  const { id, isPlaying, name } = track; 
  const { updateCurrentTrack } = useContext(BeatsContext);

  const onClickPlayPause = () => {
    updateCurrentTrack({ id: id, isPlaying: !isPlaying });
  }

  return (
    <div className='beatListItem'>
      <span>{name}</span>
      <PlayPauseButton
        isPlaying={isPlaying}
        onClick={onClickPlayPause}
      />
    </div>
  )
}

export default BeatListItem