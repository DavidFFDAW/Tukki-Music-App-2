import React, { useState, useRef } from 'react';
import { BsPlayCircleFill, BsFillSkipForwardFill, BsSkipForwardFill, BsPauseCircleFill } from 'react-icons/bs';
import './musicplayer.css';

export default function MusicPlayer({ width }){
    const audio = useRef(null);
    const progressBar = useRef(null);
    // const { getPlayingSong, setPlayingSong } = useSong();

    const style = { width: width || 'calc( 100% - 250px )' };
    const [isPlaying, setPlaying] = useState(false);

    const handleProgressBarClick = ev => {
        if(!audio.current.paused){
            audio.current.pause();
        }
        const x = ev.pageX - progressBar.current.offsetLeft;
        const clickedValue = x * progressBar.current.max / progressBar.current.offsetWidth;
        audio.current.currentTime = clickedValue;
        console.log(clickedValue);
        progressBar.current.value = clickedValue;
        audio.current.play();
    }

    const handleAudioCanPlay = ev => {
        progressBar.current.max = audio.current.duration;
    }

    const handleTimeUpdate = ev => {
        progressBar.current.value = audio.current.currentTime;
    }

    const handlePlay = ev => {
        audio.current.play();
        setPlaying(true);
    }

    const handleStop = _ => {
        audio.current.pause();
        setPlaying(false);
    }

    /* const handleSongSkipped = _ => {
            audio.current.pause();
            setPlaying(false);
            audio.current.dataset.current = +audio.current.dataset.current + 1;
            const nextSong = +audio.current.dataset.current + 1;
            audio.current.src = getPlayingSong()[nextSong];
    } */

    const handleAudioEnded = _ => {
        setPlaying(false);
        audio.current.currentTime = 0;
    }

    const handleAudioLoad = _ => {
        progressBar.current.max = audio.current.duration;
        audio.current.play();
        setPlaying(true);
    }


    return (
        <div className="player" style={style}>
            <div className="flex flex-center controls">
                <BsSkipForwardFill/>
                { isPlaying ? <BsPauseCircleFill onClick={handleStop}/> : <BsPlayCircleFill onClick={ handlePlay }/> }
                <BsFillSkipForwardFill onClick={ handleSongSkipped }/>
            </div>
            <div className="flex flex-center">
                <progress value="0" max="0" ref={progressBar} onClick={ handleProgressBarClick }></progress>
            </div>
            <audio className="disp:none" preload="true" autoPlay onLoad={ handleAudioLoad } onEnded={ handleAudioEnded } src={ '' } data-current="0" ref={ audio } onTimeUpdate={ handleTimeUpdate } onCanPlay={ handleAudioCanPlay }></audio>
        </div>
    );

};