import React, { useCallback, useEffect, useRef, useState } from "react";
import trackService from "../services/trackService";
import { BeatsContext } from "./BeatsContext";

const BeatsContextProvider = ({ children }) => {
    const [currentTrack, setCurrentTrack] = useState(undefined);
    const [listOfTracks, setListOfTracks] = useState([]);

    const audioRef = useRef();
    const audioContextRef = useRef(null);
    const audioContextSourceRef = useRef(null);

    useEffect(() => {
        const fetchAndConnect = async () => {
            const track = tracks.at(0);
            const response = await fetch(track.src, { mode: 'cors' });
            const arrayBuffer = await response.arrayBuffer();
            const audioContext = audioContextRef.current;
            const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);

            audioContextSourceRef.current = audioContext.createBufferSource();
            audioContextSourceRef.current.buffer = audioBuffer;
            audioContextSourceRef.current.connect(audioContext.destination);
        }

        const tracks = trackService.listTracks();

        audioContextRef.current = new AudioContext();
        setListOfTracks(tracks);

        if (!currentTrack) {
            fetchAndConnect();
            setCurrentTrack(tracks.at(0));
        }

        return () => {
            audioContextRef.current.close();
        }
    }, []);

    // useEffect(() => {
    //     const tracks = trackService.listTracks();

    //     if (!currentTrack) {
    //         const track = tracks.at(0);

    //         audioRef.current = new Audio(track.src);
    //         setCurrentTrack(tracks.at(0));
    //     }

    //     setListOfTracks(tracks);
    // }, []);

    const updateCurrentTrack = ({ id, isPlaying }) => {
        if (!audioContextRef.current) {
            return;
        }

        const fetchAndPlay = async () => {
            const response = await fetch(newCurrentTrack.src, { mode: 'cors' });
            const arrayBuffer = await response.arrayBuffer();
            const audioContext = audioContextRef.current;
            const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);

            audioContextSourceRef.current = audioContext.createBufferSource();
            audioContextSourceRef.current.buffer = audioBuffer;
            audioContextSourceRef.current.connect(audioContext.destination);
            audioContextSourceRef.current.start(0);
        }

        const listOfTracksToEdit = [...listOfTracks];
        const newCurrentTrackIndex = listOfTracksToEdit.findIndex(track => track.id === id);
        const currentTrackIndex = listOfTracksToEdit.findIndex(track => track.id === currentTrack.id);
        const newCurrentTrack = { ...listOfTracks.at(newCurrentTrackIndex), isPlaying };

        listOfTracksToEdit[currentTrackIndex] = { ...currentTrack, isPlaying: false };
        listOfTracksToEdit[newCurrentTrackIndex] = newCurrentTrack;

        if (newCurrentTrackIndex !== currentTrackIndex) {
            audioContextSourceRef.current.stop()

            fetchAndPlay();
        } else {
            if (isPlaying) {
                fetchAndPlay();
            } else {
                audioContextSourceRef.current.stop()
            }
        }

        setCurrentTrack(newCurrentTrack);
        setListOfTracks(listOfTracksToEdit);
    };

    // const updateCurrentTrack = ({ id, isPlaying }) => {
    //     const listOfTracksToEdit = [...listOfTracks];

    //     const newCurrentTrackIndex = listOfTracksToEdit.findIndex(track => track.id === id);
    //     const currentTrackIndex = listOfTracksToEdit.findIndex(track => track.id === currentTrack.id);        
    //     const newCurrentTrack = { ...listOfTracks.at(newCurrentTrackIndex), isPlaying };

    //     listOfTracksToEdit[currentTrackIndex] = { ...currentTrack, isPlaying: false };
    //     listOfTracksToEdit[newCurrentTrackIndex] = newCurrentTrack;

    //     if (newCurrentTrackIndex !== currentTrackIndex) {
    //         audioRef.current.pause();
    //         audioRef.current = new Audio(newCurrentTrack.src);
    //     }

    //     setCurrentTrack(newCurrentTrack);
    //     setListOfTracks(listOfTracksToEdit);
    // };

    // if (currentTrack && audioContextSourceRef.current) {
    //     currentTrack.isPlaying ? audioContextSourceRef.current.start(0) : audioContextSourceRef.current.stop();
    // }

    // if (currentTrack) {
    //     currentTrack.isPlaying ? audioRef.current.play() : audioRef.current.pause();
    // }

    const value = { currentTrack, listOfTracks, updateCurrentTrack, audioRef };

    return (
        <BeatsContext.Provider value={value}>
            {children}
        </BeatsContext.Provider>
    );
}

export default BeatsContextProvider;