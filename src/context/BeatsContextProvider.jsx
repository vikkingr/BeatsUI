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
            setCurrentTrack(track);
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

    const playPreviousTrack = () => {
        const listOfTracksToEdit = [...listOfTracks];
        const currentTrackIndex = listOfTracksToEdit.indexOf(currentTrack);

        listOfTracksToEdit[currentTrackIndex] = { ...currentTrack, isPlaying: false };

        if (currentTrackIndex < 1) {
            const lastTrackIndex = listOfTracksToEdit.length - 1;
            const lastTrack = { ...listOfTracksToEdit.at(lastTrackIndex), isPlaying: true };

            listOfTracksToEdit[lastTrackIndex] = lastTrack;

            setCurrentTrack(lastTrack);
            setListOfTracks(listOfTracksToEdit);

            return;
        }

        const previousTrackIndex = currentTrackIndex - 1;
        const previousTrack = { ...listOfTracksToEdit.at(previousTrackIndex), isPlaying: true };

        listOfTracksToEdit[previousTrackIndex] = previousTrack;

        setCurrentTrack(previousTrack);
        setListOfTracks(listOfTracksToEdit);
    }

    const playNextTrack = () => {
        const listOfTracksToEdit = [...listOfTracks];
        const currentTrackIndex = listOfTracksToEdit.indexOf(currentTrack);

        listOfTracksToEdit[currentTrackIndex] = { ...currentTrack, isPlaying: false };

        if (currentTrackIndex === listOfTracksToEdit.length - 1) {
            const firstTrackIndex = 0;
            const firstTrack = { ...listOfTracksToEdit.at(firstTrackIndex), isPlaying: true };

            listOfTracksToEdit[firstTrackIndex] = firstTrack;

            setCurrentTrack(firstTrack);
            setListOfTracks(listOfTracksToEdit);

            return;
        }

        const nextTrackIndex = currentTrackIndex + 1;
        const nextTrack = { ...listOfTracksToEdit.at(nextTrackIndex), isPlaying: true };

        listOfTracksToEdit[nextTrackIndex] = nextTrack;

        setCurrentTrack(nextTrack);
        setListOfTracks(listOfTracksToEdit);
    }

    const value = { currentTrack, listOfTracks, updateCurrentTrack, playPreviousTrack, playNextTrack, audioRef };

    return (
        <BeatsContext.Provider value={value}>
            {children}
        </BeatsContext.Provider>
    );
}

export default BeatsContextProvider;