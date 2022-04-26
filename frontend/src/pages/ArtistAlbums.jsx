import Card from "../components/Card/Card";
import Album from "../components/Album/Album";
import checkAuth from "../hooks/useAuth";



export default function ArtistAlbumList(){
    checkAuth();
    return (
        <>
            <div className="flex flex-center pad-top">
                <h3 className="playlists-title">Tus Albumes</h3>
            </div>
            <div className="grid-playlists pad-down">
                <Card
                    id="1"
                    title={ 'AlbumTitle' || 'TituloPorDefecto' }
                    content={ 'Description' }
                    href="/user/album"
                />
            
            </div>
        </>
    );
}