import React, { useContext, useEffect, useRef } from 'react';
import { BeatsContext } from '../../context/BeatsContext';
import PlayPauseButton from '../../shared/PlayPauseButton/PlayPauseButton';
import './PlayerControls.scss';

const PlayerControls = () => {
    const { currentTrack, updateCurrentTrack } = useContext(BeatsContext);

    if (!currentTrack) {
        return <div>Loading</div>
    };

    const {
        id,
        isPlaying,
        src,
        name
    } = currentTrack;

    const audioElementRef = useRef(new Audio(src));

    const onClickPlayPause = () => {
        isPlaying ? audioElementRef.current.pause() : audioElementRef.current.play();

        updateCurrentTrack({
            id: id,
            isPlaying: !isPlaying
        });
    }

    // //
    // audioCtxContainer.current = window.AudioContext || window.webkitAudioContext;
    // const audioContext = new AudioContext();
    // const audioElement = document.querySelector('#audio-element');
    // const track = audioContext.createMediaElementSource(audioElement);

    // const playButton = document.querySelector('play-pause-button');

    // // play pause audio
    // playButton.addEventListener('click', function () {

    //     // check if context is in suspended state (autoplay policy)
    //     if (audioContext.state === 'suspended') {
    //         audioCtx.resume();
    //     }

    //     if (this.dataset.playing === 'false') {
    //         audioElement.play();
    //         this.dataset.playing = 'true';
    //         // if track is playing pause it
    //     } else if (this.dataset.playing === 'true') {
    //         audioElement.pause();
    //         this.dataset.playing = 'false';
    //     }

    //     let state = this.getAttribute('aria-checked') === "true" ? true : false;
    //     this.setAttribute('aria-checked', state ? "false" : "true");

    // }, false);

    // // if track ends
    // audioElement.addEventListener('ended', () => {
    //     playButton.dataset.playing = 'false';
    //     playButton.setAttribute("aria-checked", "false");
    // }, false);

    // // connect our graph
    // track.connect(audioContext.destination);

    isPlaying ? audioElementRef.current.play() : audioElementRef.current.pause();

    return (
        <div className="player-controls">
            <span>{name}</span>
            <PlayPauseButton
                id="play-pause-button"
                isPlaying={isPlaying}
                onClick={onClickPlayPause}
            />
            <audio
                ref={audioElementRef}
                id="audio-element"
                src={src}
                crossOrigin='anonymous'
            >
            </audio>
        </div>
    )
}

export default PlayerControls