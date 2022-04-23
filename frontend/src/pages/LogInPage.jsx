import { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { routes } from "../constants/routes";
import "./styles.css";

export function Login () {
    // const [ data, setData ] = useState({});
    // const [ visible, setVisible ] = useState(false);

    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const { login, isLogged } = useAuth();
    const history = useHistory();

    useEffect(() => {
        if (isLogged) {
            const finalRedirectURL = window.sessionStorage.getItem('access-route') || routes.admin;
            history.push(finalRedirectURL);
        }
    }, [ history, isLogged ]);

    const handleSubmit = (ev) => {
        ev.preventDefault();
        login({ username, password });
    }
    // const handleSend = (_) => {
    //     if (!data.email || !data.password) {
    //         return 0;
    //     }
    //     const sendingData = new FormData();
    //     sendingData.append("email", data.email);
    //     sendingData.append("password", data.password);

    //     login(sendingData);
    // }

    return (
        <div className="flex flex-center">

        <div className="box">
            <div className="rounded-box">
                <form className="login-form" onSubmit={handleSubmit}>
                    <div className="inner-box">
                        <div className="flex flex-space-btw">
                            <div className="color-block"><img src="/tukki.png"/></div>
                            <div className="content">
                                <p>Miles de playlists te esperan.<br/>
                                Inicia sesión o crea una cuenta para empezar a disfrutar
                                </p>

                                <div>
                                    <label>Correo o Username:</label>
                                    <input type="text" autoComplete="current-password" onChange={ (ev) => setUsername(ev.target.value) } value={username}/>
                                </div>
                                <div>
                                    <label>Contraseña:</label>
                                    <input type="password" onChange={ (ev) => setPassword(ev.target.value)} value={password}/>
                                </div>
                                <div className="flex flex-space-btw btn-div">
                                    <Link type="button" className="btn btn-transparent" href="/register">Registrarme</Link>
                                    <button type="submit" className="btn btn-primary">Iniciar sesión</button>
                                </div>
                                <div className="flex flex-center">
                                    <a>He olvidado mi contraseña</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            </div>
        </div>
    );
}