import React, { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { getMyMixes } from '../../services/mixes.service';
import './sidenav.css';

function PlaylistSidenav () {

    const history = useHistory();
    const [ tukkiMixes, setTukkiMixes ] = useState([]);
    
    useEffect(_ => {


        getMyMixes().then(res => {
            console.log(res);
            setTukkiMixes(res.mixes);
            // setLoading(false);
        });
    }, []);

    const handleClick = ev => {
        console.log(ev.target.id);
        history.push(`/user/playlist/${ ev.target.id }`);
    }

    
    return (
        <div className="show-sidenav">

            <div className="sidenav">
                <div className="sidenav-img-container">
                    <img src="/tukki.png" alt="app logo"></img>
                    <div className="flex flex-center down sidenav-create-mix">
                        <Link className="btn btn-primary" to={ '/mix/create' }>Crear un nuevo Mix</Link>
                    </div>
                </div>
                
                <div className="sidenav-playlists-container">
                {
                    tukkiMixes.map(mix => {
                        return (
                            <div className="playlist" key={ mix.id } id={ mix.id } onClick={ handleClick }><span className="quicksand">{ mix.name }</span></div>
                        );
                    })
                }
                </div>
            </div>
        </div>
    )
}

export default React.memo(PlaylistSidenav);