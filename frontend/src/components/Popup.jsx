import React,{ useState } from 'react';
import Popup from 'reactjs-popup';
import useMixes from '../hooks/useMixes';
import { updateMix } from '../services/mixes.service';
import './popup.css';

export default function MixUpdatePopup ({ children, name, description, id}){
    const [popupName,setPopupName] = useState(name || '');
    const [popupDescription,setPopupDescription] = useState(description || '');
    const { setMixes } = useMixes();

    const handleMixUpdate = (ev,closeCallback) => {
        ev.preventDefault();
        updateMix({ id: id, name: popupName, description: popupDescription })
            .then(({ playlists }) => {
                setMixes(playlists);
                closeCallback();
            });
    }

    return (
        <Popup
        trigger={ children }
        modal
        >
            {close => (
            <div className="modal">
                <button className="close" onClick={close}>
                &times;
                </button>

                <div className="flex flex-center">
                <form className="login-form " autoComplete="off" onSubmit={ ev => handleMixUpdate(ev,close) }>
                    <div className="inner-box">                                
                        <div>
                            <label>Nombre:</label>
                            <input type="text" autoComplete="off" onChange={ (ev) => setPopupName(ev.target.value) } value={popupName}/>
                        </div>
                        <div>
                            <label>Descripcion:</label>
                            <textarea type="text" onChange={ (ev) => setPopupDescription(ev.target.value)} value={popupDescription}>
                            </textarea>
                        </div>
                        <div className="flex flex-space-btw btn-div">
                            <button type="submit" className="btn btn-primary">Guardar Cambios</button>
                        </div>
                    </div>
                </form>
                </div>
            </div>
            )}
        </Popup>
    );
}