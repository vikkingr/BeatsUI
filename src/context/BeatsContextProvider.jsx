import React, { useCallback, useEffect, useRef, useState } from "react";
import trackService from "../services/trackService";
import { BeatsContext } from "./BeatsContext";

const BeatsContextProvider = ({ children }) => {
    const [currentTrack, setCurrentTrack] = useState(undefined);
    const [listOfTracks, setListOfTracks] = useState([]);
    const audioRef = useRef();

    useEffect(() => {
        const tracks = trackService.listTracks();

        if (!currentTrack) {
            const track = tracks.at(0);

            //audioRef.current = new Audio(track.src);
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

        // if (newCurrentTrackIndex !== currentTrackIndex) {
        //     audioRef.current.pause();
        //     audioRef.current = new Audio(newCurrentTrack.src);
        // }

        setCurrentTrack(newCurrentTrack);
        setListOfTracks(listOfTracksToEdit);
    };
    
    const value = { currentTrack, listOfTracks, updateCurrentTrack, audioRef };

    return (
        <BeatsContext.Provider value={value}>
            {children}
        </BeatsContext.Provider>
    );
}

export default BeatsContextProvider;