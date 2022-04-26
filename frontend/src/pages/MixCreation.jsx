import React, { useState } from "react";
import { createNewMix } from "../services/mixes.service";
import { useHistory } from "react-router-dom";
import routes from '../constants/routes';
import checkAuth from "../hooks/useAuth";
import useMixes from "../hooks/useMixes";

export default function MixCreation(){
    checkAuth();
    const history = useHistory();

    const { setMixes } = useMixes();

    // const [image,setImage] = useState('');
    const [name,setName] = useState('');
    const [description,setDescription] = useState('');

    const handleSubmit = ev => {
        ev.preventDefault();
        if(name !== '' || description === ''){
            createNewMix({ name: name, description: description })
            .then(allMyMixes => {
                console.log(allMyMixes);
                setMixes(allMyMixes);
                history.push(routes.home)
            });
        }

    }

    /* const handleImageChange = ev => {
        const imageInput = ev.target;
        const image = imageInput.parentElement.previousElementSibling;

        //if()

        const fileReader = new FileReader();

        fileReader.readAsDataURL();
        
    } */

    return (
        <div className="flex flex-center">

        <div className="box pad-top pad-down-160">
            <div className="rounded-box">
                <form className="login-form" encType="form" onSubmit={handleSubmit}>
                    <div className="inner-box">
                        <div className="flex flex-space-btw relative">
                            <div className="color-block">
                                <img src="http://localhost:3000/tukki.png"/>
                                {/* <button className="btn btn-primary relative">Añadir Imagen
                                    <input type="file" onChange={ handleImageChange } className="file-inside-btn"></input>
                                </button> */}
                            </div>
                            <div className="content">                                
                                <div>
                                    <label>Nombre:</label>
                                    <input type="text" autoComplete="off" onChange={ (ev) => setName(ev.target.value) } value={name}/>
                                </div>
                                <div>
                                    <label>Descripcion:</label>
                                    <textarea type="text" onChange={ (ev) => setDescription(ev.target.value)} value={description}>
                                    </textarea>
                                </div>
                                <div className="flex flex-space-btw btn-div">
                                    <button type="submit" className="btn btn-primary">Crear Mix</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            </div>
        </div>
    )

}