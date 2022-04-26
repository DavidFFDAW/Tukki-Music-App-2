import React,{ useState } from 'react';
import TokenService from '../services/session.service';

const Context = React.createContext({});

export function UserContextProvider({ children }){

    const [token, setToken] = useState(
        () => TokenService.get('token')
    );

    return (<Context.Provider value={{ 
        token, setToken,
    }}>
        { children }
    </Context.Provider>);
}

export default Context;