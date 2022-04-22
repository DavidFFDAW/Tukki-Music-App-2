import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { routes } from "../constants/routes";

export function Login () {
    const [ data, setData ] = useState({});
    const [ visible, setVisible ] = useState(false);
    const { login, isLogged } = useAuth();
    const history = useHistory();

    useEffect(() => {
        if (isLogged) {
            const finalRedirectURL = window.sessionStorage.getItem('access-route') || routes.admin;
            history.push(finalRedirectURL);
        }
    }, [ history, isLogged ]);

    const handleSend = (_) => {
        if (!data.email || !data.password) {
            return 0;
        }
        const sendingData = new FormData();
        sendingData.append("email", data.email);
        sendingData.append("password", data.password);

        login(sendingData);
    }

    return (
        <div className="">
            <div className="">
                <h1 className="">Panel de LogIn</h1>
                    
                <div className="">
                    <div className="">
                        <div>
                            <div>
                                <label className="">Email</label>
                                <input type="text" className="" placeholder="Email de acceso" onChange={ ev => {
                                    setData({ ...data, email: ev.target.value });
                                }} required />                                    
                            </div>
                            <div className="">
                                <label className="">Password</label>
                                <div className="">
                                    <input type={ visible ? 'text' : 'password' } className="" placeholder="****" onChange={ ev => {
                                        setData({ ...data, password: ev.target.value });
                                    }} required />
                                    <button className="" onClick={ _ => setVisible(!visible) }>{ visible ? 'Ocultar' : 'Ver' }</button>                                   
                                </div>
                            </div>

                            <div className="">
                                <button type="submit" className="" onClick={ handleSend }>Iniciar Sesión</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}