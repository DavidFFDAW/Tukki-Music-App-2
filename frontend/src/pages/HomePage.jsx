import React from 'react';
import PlaylistSidenav from '../components/SidenavPlaylist/PlaylistSidenav';
import Main from '../components/Main/Main';
import PlaylistsCards from '../components/PlaylistsCards/PlaylistsCards';

export default function HomePage(){

    return(
        <>
            <PlaylistSidenav></PlaylistSidenav>
            <Main>
                <PlaylistsCards></PlaylistsCards>
            </Main>
        </>
    )

}
