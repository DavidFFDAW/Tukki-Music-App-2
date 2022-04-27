import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { getMyMixes } from '../../services/mixes.service';
import Card from '../Card/Card';
import Spinner from '../Spinner';
import './cards.css';

export default function PlaylistsCards(){

    const [ tukkiMixes, setTukkiMixes ] = useState([]);
    const [ isLoading, setLoading ] = useState(true);
    const history = useHistory();

    useEffect(_ => {
        getMyMixes().then(res => {
            console.log(res);
            setTukkiMixes(res.mixes);
            setLoading(false);
        });
    }, []);

    const handleCreatePlaylist = _ => {
        history.push('/cagajon-de-burra');
    }

    return (
        <>
            <div className="flex flex-center">
                <h3 className="playlists-title">Tus tukki-Mixes</h3>
            </div>
            { isLoading && <Spinner /> }
            {
                tukkiMixes.length === 0 
                ?   <div className="flex flex-center">
                        <div>
                            <h4 className="subtitle"><strong>Ooops... </strong> No tienes Mixes</h4>
                            <button className="btn btn-primary down" onClick={ handleCreatePlaylist }>Crear nuevo Mix</button>
                        </div>
                    </div> 
                :
                    <div className="grid-playlists">
                    {
                        tukkiMixes.map(mix => {
                            return (                          
                                <Card 
                                    key={mix.id} 
                                    id={mix.id} 
                                    title={mix.name} 
                                    content={mix.description || ''}
                                    href="/user/playlist"
                                />
                            )
                        })
                    }
                </div>
            }
        </>
    );
}