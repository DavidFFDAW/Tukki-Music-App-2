import React from 'react';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import useSong from '../hooks/useSong';

export default function Song({ title, artist, album, uri, duration }){

    const { setPlayingSong } = useSong();

    const handlePlay = event => {
        event.preventDefault();
        console.log(uri);
        if(!uri || !uri.includes('http:')){
            alert('Unable to play this song :(');
            return;
        }
        setPlayingSong(uri);
    }

    return (
        <>
            <div className="song flex flex-space-btw space">
                <span className="width-auto icon" onClick={ handlePlay }><PlayCircleFilledIcon></PlayCircleFilledIcon></span>
                <span>{ title }</span>
                { artist && <span>{ artist }</span> }
                { duration && <span>{ duration }</span> }
                <span>{ uri }</span>
            </div>
        </>
    )
}