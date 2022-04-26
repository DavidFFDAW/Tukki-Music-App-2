import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Main from "../components/Main/Main";
import Playlist from "../components/Playlist";
import PlaylistSidenav from "../components/SidenavPlaylist/PlaylistSidenav";
import checkAuth from "../hooks/useAuth";

export default function PlaylistPage(){
    checkAuth();

    let { id } = useParams();

    return (
        <>
            <PlaylistSidenav/>
            <Main>
               <Playlist id={ id }></Playlist>
            </Main>
        </>
    );
}