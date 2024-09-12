import React, { useContext, useRef } from 'react';
import { BeatsContext } from '../../context/BeatsContext';
import PlayPauseButton from '../../shared/PlayPauseButton/PlayPauseButton';
import './PlayerControls.scss';

const PlayerControls = () => {
    const { currentTrack, updateCurrentTrack } = useContext(BeatsContext);
    const audioCtxContainer = useRef();

    if (!currentTrack) {
        return <div>Loading</div>
    }

    const { 
        id, 
        isPlaying,
        src,
        name 
    } = currentTrack;

    const onClickPlayPause = () => {
        updateCurrentTrack({ 
            id: id, 
            isPlaying: !isPlaying });
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

    return (
        <div className="player-controls">
            <span>{name}</span>
            <PlayPauseButton 
                id="play-pause-button" 
                isPlaying={isPlaying} 
                onClick={onClickPlayPause} />
            <audio 
                ref={audioCtxContainer}
                id="audio-element" 
                src={src} controls 
                crossOrigin='anonymous'></audio>
        </div>
    )
}

export default PlayerControls