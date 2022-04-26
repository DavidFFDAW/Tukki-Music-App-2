import React from 'react';
import { Link } from 'react-router-dom';
import Routes from '../constants/routes';
import checkAuth from "../hooks/useAuth";


export default function ArtistMenu(){
    checkAuth();

    return (
        <>
            <div className="flex flex-center">
                
                <div className="box pad">
                    <div className="flex flex-center up">
                        <Link to={ Routes.artistAlbums } className="btn btn-transparent down width-100">Gestionar Mis Albumes</Link>
                    </div>
                    <div className="flex flex-center up">
                        <Link to={ Routes.artistSongs } className="btn btn-transparent down width-100">Gestionar Mis Canciones</Link>
                    </div>
                </div>
            </div>
        </>
    );
}