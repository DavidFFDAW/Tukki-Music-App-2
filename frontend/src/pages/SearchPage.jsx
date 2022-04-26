import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Song from '../components/Song';
import Card from '../components/Card/Card';
import PlaylistSidenav from '../components/SidenavPlaylist/PlaylistSidenav';
import Main from '../components/Main/Main';
import { searchSongsAndUserByTerm } from '../services/search.service';
import checkAuth from '../hooks/useAuth';

export default function SearchPage() {
    checkAuth();

    const { search } = useParams();
    
    const [ searchedSongs, setSearchedSongs ] = useState([]);
    const [ searchedUsers, setSearchedUsers ] = useState([]);

    useEffect(_ => {
        searchSongsAndUserByTerm(search)
            .then(({ songs, users }) => {
                setSearchedSongs(songs || []);
                setSearchedUsers(users || []);
            },[search]);
    })

    return (
        <>
            <PlaylistSidenav/>
            <Main>
                <div className="flex flex-center">
                    <h3 className="playlists-title">Canciones con { search }</h3>
                </div>
                
                {searchedSongs.length === 0  
                    ? <div className="flex flex-center">
                        <div>
                            <h4 className="subtitle"><strong>Ooops... </strong> No se encontraron canciones!</h4>
                        </div>
                      </div> 
                    :
                    <div className="song-list">
                    { searchedSongs.length > 0 && searchedSongs.map( song => {
                            return <Song key={song.id} id={song.id} title={song.name} artist={song.artist} uri={ song.uri }></Song>
                        })
                    }
                    </div>
                }

                <div className="flex flex-center">
                    <h3 className="playlists-title">Usuarios con { search }</h3>
                </div>
            
                <div className="grid-playlists">
                    {searchedUsers.length === 0 
                        ? <div className="flex flex-center">
                            <div>
                                <h4 className="subtitle"><strong>Ooops... </strong> No se encontraron usuarios!</h4>
                            </div>
                            </div> 
                        :
                        searchedUsers.length > 0 && searchedUsers.map(user => {
                            return <Card key={user.id} id={user.id} title={user.name}></Card>
                        })
                    }                
                </div>                
            </Main>
        </>
    );

}