import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import './sidenav.css';

function PlaylistSidenav () {

    const history = useHistory();
    const [ tukkiMixes ] = useState([
        { id: 1, name: 'Tukki Mix 1', title: 'Tukki Mix 1', description: 'Tukki Mix 1 description', image: 'https://i.ytimg.com/vi/QH2-TGUlwu4/hqdefault.jpg' },
        { id: 2, name: 'Tukki Mix 1', title: 'Tukki Mix 1', description: 'Tukki Mix 1 description', image: 'https://i.ytimg.com/vi/QH2-TGUlwu4/hqdefault.jpg' },
        { id: 3, name: 'Tukki Mix 1', title: 'Tukki Mix 1', description: 'Tukki Mix 1 description', image: 'https://i.ytimg.com/vi/QH2-TGUlwu4/hqdefault.jpg' },
        { id: 4, name: 'Tukki Mix 1', title: 'Tukki Mix 1', description: 'Tukki Mix 1 description', image: 'https://i.ytimg.com/vi/QH2-TGUlwu4/hqdefault.jpg' },
        { id: 5, name: 'Tukki Mix 1', title: 'Tukki Mix 1', description: 'Tukki Mix 1 description', image: 'https://i.ytimg.com/vi/QH2-TGUlwu4/hqdefault.jpg' },
    ]);
    
    console.log(tukkiMixes);

    // useEffect(() => {
    //     getMyMixes();
    // },[]);

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