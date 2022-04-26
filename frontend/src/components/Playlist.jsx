import React, { useEffect, useState } from 'react';
import Song from './Song';
import MixInfo from './UserInfo/UserInfo';
import { getCurrentMixData, getCurrentTukkiMixSongs } from "../services/mixes.service";
import './playlists.css';

function Playlist ({ id  }) {

    const [mixData, setMixData] = useState({ image: null, name: null, description: null });
    const [content, setContent] = useState([]);

    useEffect(_ => {
        getCurrentMixData(id).then(data => {
            setMixData(data);
        });
        getCurrentTukkiMixSongs(id).then(songs => {
            setContent(songs || []);
        });
    },[]);

    return (
        <>
            <MixInfo img={mixData.image} name={ mixData.name } description={ mixData.description } id={ id }/>
            <div className="playlist-container">
                <div className="flex flex-space-btw space upper">
                    <span className="width-auto">Play</span>
                    <span>Nombre</span>
                    <span>Artista</span>
                    <span>URL</span>
                </div>
                <div className="song-list">
                    {
                        content.map(song => {
                            return <Song key={song.id} title={song.name} artist={song.author} uri={song.uri}></Song>
                        })
                    }
                </div>        
            </div>
        </>
    );
}

export default Playlist;