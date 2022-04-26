// import { formatDate } from '../../utils/formatDate';
import './Album.css';

export default function Album({ name, description, albumImg, creationDate }){
    return (
        <>
            <div className="album container">
                <div className="flex flex-space-btw">
                    <div className="image">
                        <img src={ albumImg || 'http://localhost:3500/user.png' } alt="album logo" />
                    </div>

                    <div className="content">
                        <span className="title block">{ name || 'Por Defecto' }</span>
                        <p className="description">{ description || 'Lorem ipsum dolor sit amet sit amet n dolor Lorem ipsum bla bla bla' }</p>
                    </div>

                </div>
            </div>
        </>
    );
}