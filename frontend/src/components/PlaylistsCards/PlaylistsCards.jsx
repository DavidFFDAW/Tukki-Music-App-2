import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Card from '../Card/Card';
import Spinner from '../Spinner';
import './cards.css';

export default function PlaylistsCards(){

    const [ tukkiMixes, setMixes ] = useState([
        { id: 1, name: 'Tukki Mix 1', title: 'Tukki Mix 1', description: 'Tukki Mix 1 description', image: 'https://i.ytimg.com/vi/QH2-TGUlwu4/hqdefault.jpg' },
        { id: 2, name: 'Tukki Mix 1', title: 'Tukki Mix 1', description: 'Tukki Mix 1 description', image: 'https://i.ytimg.com/vi/QH2-TGUlwu4/hqdefault.jpg' },
        { id: 3, name: 'Tukki Mix 1', title: 'Tukki Mix 1', description: 'Tukki Mix 1 description', image: 'https://i.ytimg.com/vi/QH2-TGUlwu4/hqdefault.jpg' },
        { id: 4, name: 'Tukki Mix 1', title: 'Tukki Mix 1', description: 'Tukki Mix 1 description', image: 'https://i.ytimg.com/vi/QH2-TGUlwu4/hqdefault.jpg' },
        { id: 5, name: 'Tukki Mix 1', title: 'Tukki Mix 1', description: 'Tukki Mix 1 description', image: 'https://i.ytimg.com/vi/QH2-TGUlwu4/hqdefault.jpg' },
    ]);
    // const [ isLoading, setLoading ] = useState(false);
    const history = useHistory();

    // useEffect(_ => {
    //     getMyMixes();
    // },[]);

    const handleCreatePlaylist = _ => {
        history.push('/cagajon-de-burra');
    }

    return (
        <>
            <div className="flex flex-center">
                <h3 className="playlists-title">Tus tukki-Mixes</h3>
            </div>
                {/* { isLoading && <Spinner /> } */}
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