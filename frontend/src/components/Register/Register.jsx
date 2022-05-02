import React, { useState, useEffect } from 'react';
import useAuth from '../../hooks/useAuth';
import {routes} from '../../constants/routes';
import { useHistory } from 'react-router-dom';
import { validateEmail, validatePassword } from '../../services/validator.service';
import './Register.css';
// import '../LogIn/styles.css';

export default function Register(){
  const history = useHistory();
  const [ name, setName ] = useState({ value: '', error: '' });
  const [ username, setUsername ] = useState({ value: '', error: '' });
  const [ email, setEmail ] = useState({ value: '', error: '' });
  const [ password, setPassword ] = useState({ value: '', error: '' });
  const [ repeatPassword, setRepeatPassword ] = useState({ value: '', error: '' });
  const [ errors, setErrors ] = useState({ name: '', username: '', email: '', password: '', repeatPassword: '' });
  const { isLogged, register } = useAuth();

  useEffect(_ => {
    if(isLogged){
      history.push(routes.home);
    }
  },[isLogged, history])

  const handleSubmit = ev => {
    ev.preventDefault();
    
    if (password.value !== repeatPassword.value) {
      window.alert('Las dos contraseñas deben ser iguales');
      return 1;
    }
    
    if (password.value.length >= 6 && repeatPassword.value.length >= 6) {
      register({ name, username, email, password, repeatPassword })
        .then(resp => {
          if (!resp.error) {
            history.push(routes.login);
          }
        })
        .catch(console.error);
      return 0;
    }
    window.alert('Las contraseñas deben ser de 6 caracteres o más')
  };

  const handleSetter = (ev, setterCallback, validatorPipe = null) => {
    const inp = ev.target.value;
    // validatorPipe returns an object { error: true, message: '' }
    const response = validatorPipe ? validatorPipe(inp) : { error: false };
    const { error, message } = response;
    const errorObj = error ? { value: inp, error: message } : { value: inp, error: '' };

    setterCallback(errorObj);
  }


  return (
      <div className="flex flex-center">
        <div className="box">
            <div className="rounded-box">
                <form className="login-form" onSubmit={ handleSubmit }>
                    <div className="inner-box">
                      <img alt="Tukki Music App Logo" src={`/tukki.png`} className="register-tukki-logo"/>
                      <div>
                        <div className="flex flex-space-btw">
                          <div>
                            <label>Nombre:</label>
                            <input type="text" className={ name.error ? 'inpt-error' : '' } onChange={ (ev) => handleSetter(ev,setName) } value={ name.value } required/>
                            { name.error && <p className='form-error'>{ name.error }</p> }
                          </div>
                          <div>
                            <label>Username:</label>
                            <input type="text" className={ username.error ? 'inpt-error' : '' } onChange={ (ev) => handleSetter(ev,setUsername) } value={ username.value } required/>
                            { username.error && <p className='form-error'>{ username.error }</p> }
                          </div>
                          <div>
                            <label>Correo:</label>
                            <input type="email" className={ email.error ? 'inpt-error' : '' } onChange={ (ev) => handleSetter(ev, setEmail, validateEmail) } value={ email.value } required/>
                            { email.error && <p className='form-error'>{ email.error }</p> }                            
                          </div>
                        </div>
                        <div className="flex flex-space-btw">
                          <div>
                            <label>Fecha Nacimiento:</label>
                            <input type="text"/>
                          </div>
                          <div>
                            <label>Contraseña:</label>
                            <input type="password" className={ password.error ? 'inpt-error' : '' } onChange={ (ev) => handleSetter(ev,setPassword,validatePassword) } value={ password.value } required/>
                            { password.error && <p className='form-error'>{ password.error }</p> }                            
                          </div>
                          <div>
                            <label>Repite la Contraseña:</label>
                            <input type="password" className={ repeatPassword.error ? 'inpt-error' : '' } onChange={ (ev) => handleSetter(ev, setRepeatPassword,validatePassword) } value={ repeatPassword.value } required/>
                            { repeatPassword.error && <p className='form-error'>{ repeatPassword.error }</p> }                            
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
