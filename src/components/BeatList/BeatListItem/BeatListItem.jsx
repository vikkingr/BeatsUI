import React, { useContext, useState } from "react";
import { BeatsContext } from "../../../context/BeatsContext";
import "./BeatListItem.scss";
import PlayPauseButton from "../../../shared/PlayPauseButton/PlayPauseButton";
import clsx from "clsx";
import BeatListItemInformation from "./components/BeatListItemInformation/BeatListItemInformation";

const BeatListItem = ({ track, draggableOptions }) => {
  const { id, isPlaying, name, contributors } = track;
  const { updateCurrentTrack } = useContext(BeatsContext);

  const onClickPlayPause = () => {
    updateCurrentTrack({ id: id, isPlaying: !isPlaying });
  };

  const { draggable, onDragStart, onDragEnter, onDragEnd, onDragOver } =
    draggableOptions;

  return (
    <div
      className={clsx({
        "beat-list-item": true,
        "beat-list-item--playing": isPlaying,
      })}
      draggable={draggable}
      onDragStart={onDragStart}
      onDragEnter={onDragEnter}
      onDragEnd={onDragEnd}
      onDragOver={onDragOver}
    >
      <BeatListItemInformation name={name} contributors={contributors} />
      <PlayPauseButton isPlaying={isPlaying} onClick={onClickPlayPause} />
    </div>
  );
};

export default BeatListItem;
