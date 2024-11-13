import React, { useContext, useState } from 'react';
import { BeatsContext } from '../../../context/BeatsContext';
import './BeatListItem.scss';
import PlayPauseButton from '../../../shared/PlayPauseButton/PlayPauseButton';
import clsx from 'clsx';

const BeatListItem = ({ track }) => {
  const { id, isPlaying, name } = track;
  const { updateCurrentTrack } = useContext(BeatsContext);

  const onClickPlayPause = () => {
    updateCurrentTrack({ id: id, isPlaying: !isPlaying });
  }

  const className = clsx({ 'beat-list-item': true, 'beat-list-item--playing': isPlaying });

  return (
    <div className={className}>
      <span>{name}</span>
      <PlayPauseButton
        isPlaying={isPlaying}
        onClick={onClickPlayPause}
      />
    </div>
  )
}

export default BeatListItem