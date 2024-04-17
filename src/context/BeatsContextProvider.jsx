import React, { useCallback, useEffect, useState } from "react";
import trackService from "../services/trackService";
import { BeatsContext } from "./BeatsContext";

const BeatsContextProvider = ({ children }) => {
    const [currentTrack, setCurrentTrack] = useState(undefined);
    const [listOfTracks, setListOfTracks] = useState([]);

    useEffect(() => {
        const tracks = trackService.listTracks();

        if (!currentTrack) {
            setCurrentTrack(tracks.at(0));
        }

        setListOfTracks(tracks);
    }, []);

    const updateCurrentTrack = ({ id, isPlaying }) => {
        const listOfTracksToEdit = [...listOfTracks];

        const newCurrentTrackIndex = listOfTracksToEdit.findIndex(track => track.id === id);
        const currentTrackIndex = listOfTracksToEdit.findIndex(track => track.id === currentTrack.id);
        const newCurrentTrack = { ...listOfTracks.at(newCurrentTrackIndex), isPlaying };
        
        listOfTracksToEdit[currentTrackIndex] = { ...currentTrack, isPlaying: false };
        listOfTracksToEdit[newCurrentTrackIndex] = newCurrentTrack;

        setCurrentTrack(newCurrentTrack);
        setListOfTracks(listOfTracksToEdit);
    };

    const value = { currentTrack, listOfTracks, updateCurrentTrack, };

    return (
        <BeatsContext.Provider value={value}>
            {children}
        </BeatsContext.Provider>
    );
}

export default BeatsContextProvider;