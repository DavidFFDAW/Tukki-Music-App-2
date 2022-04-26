import React, { useState, useEffect } from 'react';
import useUser from '../../hooks/useUser';
import routes from '../../constants/routes';
import { useHistory } from 'react-router-dom';
import './Register.css';

export default function Register(){
  const history = useHistory();
  const [ name, setName ] = useState('');
  const [ username, setUsername ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ repeatPassword, setRepeatPassword ] = useState('');
  const { isLogged, register } = useUser();

  useEffect(_ => {
    if(isLogged){
      history.push(routes.home);
    }
  },[isLogged, history])

  const handleSubmit = ev => {
    ev.preventDefault();
    if(password.length >= 6 && repeatPassword.length >= 6){
      register({ name, username, email, password, repeatPassword });
      return;
    }
    alert('Las contraseñas deben ser de 6 caracteres o más')
  };

  return (
      <div className="flex flex-center">
        <div className="box">
            <div className="rounded-box">
                <form className="login-form" onSubmit={ handleSubmit }>
                    <div className="inner-box">
                      <img src={`http://localhost:3000/tukki.png`} className="register-tukki-logo"/>
                      <div>
                        <div className="flex flex-space-btw">
                          <div>
                            <label>Nombre:</label>
                            <input type="text" onChange={ (ev) => setName(ev.target.value) } value={ name } required/>
                          </div>
                          <div>
                            <label>Username:</label>
                            <input type="text" onChange={ (ev) => setUsername(ev.target.value) } value={ username } required/>
                          </div>
                          <div>
                            <label>Correo:</label>
                            <input type="email" onChange={ (ev) => setEmail(ev.target.value) } value={ email } required/>
                          </div>
                        </div>
                        <div className="flex flex-space-btw">
                          <div>
                            <label>Fecha Nacimiento:</label>
                            <input type="text"/>
                          </div>
                          <div>
                            <label>Contraseña:</label>
                            <input type="password" onChange={ (ev) => setPassword(ev.target.value) } value={ password } required/>
                          </div>
                          <div>
                            <label>Repite la Contraseña:</label>
                            <input type="password" onChange={ (ev) => setRepeatPassword(ev.target.value) } value={ repeatPassword } required/>
                          </div>
                        </div>
                        <button type="submit" className="btn btn-transparent width-100 up down">Registrarme</button>
                      </div>
                    </div>
                </form>
            </div>
        </div>
      </div>
  );
}
