import React, { useContext, useEffect, useRef } from "react";
import { BeatsContext } from "../../context/BeatsContext";
import BeatListItem from "./BeatListItem/BeatListItem";
import "./BeatList.scss";

const BeatList = ({ searchValue }) => {
  const { listOfTracks, setListOfTracks, filteredTracks, setFilteredTracks } = useContext(BeatsContext);
  useEffect(() => {
    if (searchValue) {
      setFilteredTracks(listOfTracks.filter(track => track.name.toLowerCase().includes(searchValue.toLowerCase())));
    } else {
      setFilteredTracks(listOfTracks);
    }
  }, [searchValue, listOfTracks, setFilteredTracks]);
  const dragItem = useRef(null);
  const dragOverItem = useRef(null);

  const handleDragStart = (e, index) => {
    dragItem.current = index;
  };

  const handleDragEnter = (e, index) => {
    dragOverItem.current = index;
  };

  const handleSort = () => {
    const listOfTracksCopy = [...listOfTracks];
    const draggedItemContent = listOfTracksCopy.splice(dragItem.current, 1)[0];

    listOfTracksCopy.splice(dragOverItem.current, 0, draggedItemContent);
    dragItem.current = null;
    dragOverItem.current = null;
    setListOfTracks(listOfTracksCopy);
  };

  return (
    <div className="beatList">
      {filteredTracks.map((track, index) => (
        <BeatListItem
          key={index}
          track={track}
          draggableOptions={{
            draggable: true,
            onDragStart: (e) => handleDragStart(e, index),
            onDragEnter: (e) => handleDragEnter(e, index),
            onDragEnd: handleSort,
            onDragOver: (e) => e.preventDefault(),
          }}
        />
      ))}
    </div>
  );
};

export default BeatList;
