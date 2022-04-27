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
    const [isLight, setIsLight] = useState(localStorage.getItem('themePreference') === 'light');
    const { login, isLogged } = useAuth();
    const history = useHistory();

    useEffect(() => {
        if (isLogged) {
            const finalRedirectURL = window.sessionStorage.getItem('access-route') || routes.home;
            history.push(finalRedirectURL);
        }
    }, [ history, isLogged ]);

    const handleSubmit = (ev) => {
        ev.preventDefault();
        login({ email: username, password });
        history.push(routes.home);
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
    const saveThemePreference = _ => {
        const savedPreference = localStorage.getItem('themePreference');
        const themePreference = savedPreference === 'dark' ? 'light' : 'dark';
        setIsLight(savedPreference === 'light');
        // console.log(isLight);
        localStorage.setItem('themePreference', themePreference);
    }

    const handleColorChange = _ => {
        document.body.classList.toggle('dark');
        saveThemePreference();
    }   

    return (
        <div className="flex flex-center">
            <div style={{ position: 'absolute', top: 25,  right: 25 }}>
                <button className="btn btn-primary" onClick={ handleColorChange }>{ isLight ? 'Claro' : 'Oscuro' }</button>
            </div>

            <div className="box" style={{ paddingTop: 230 }}>
                <div className="rounded-box">
                    <form className="login-form" onSubmit={handleSubmit}>
                        <div className="inner-box">
                            <div className="flex flex-space-btw">
                                <div className="color-block"><img alt="app logo" src="/tukki.png"/></div>
                                <div className="content">
                                    <p>Miles de playlists te esperan.<br/>
                                    Inicia sesión o crea una cuenta para empezar a disfrutar
                                    </p>

                                    <div>
                                        <label>Correo Eléctronico:</label>
                                        <input type="text" onChange={ (ev) => setUsername(ev.target.value) } value={username}/>
                                    </div>
                                    <div>
                                        <label>Contraseña:</label>
                                        <input type="password" onChange={ (ev) => setPassword(ev.target.value)} value={password}/>
                                    </div>
                                    <div className="flex flex-space-btw btn-div">
                                        <Link type="button" className="btn btn-transparent" to="/register">Registrarme</Link>
                                        <button type="submit" className="btn btn-primary">Iniciar sesión</button>
                                    </div>
                                    <div className="flex flex-center">
                                        {/* <a href="#">He olvidado mi contraseña</a> */}
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