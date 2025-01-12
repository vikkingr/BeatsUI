import React, { useContext, useState } from 'react';
import { BeatsContext } from '../../../context/BeatsContext';
import './BeatListItem.scss';
import PlayPauseButton from '../../../shared/PlayPauseButton/PlayPauseButton';
import clsx from 'clsx';
import BeatlListItemInformation from './components/BeatListItemInformation/BeatlListItemInformation';

const BeatListItem = ({ track }) => {
  const { id, isPlaying, name, contributors } = track;
  const { updateCurrentTrack } = useContext(BeatsContext);

  const onClickPlayPause = () => {
    updateCurrentTrack({ id: id, isPlaying: !isPlaying });
  }

  return (
    <div className={clsx({ 'beat-list-item': true, 'beat-list-item--playing': isPlaying })}>
      <BeatlListItemInformation name={name} contributors={contributors} />
      <PlayPauseButton
        isPlaying={isPlaying}
        onClick={onClickPlayPause}
      />
    </div>
  )
}

export default BeatListItem