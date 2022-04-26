import { useContext, useCallback } from 'react';
import Context from './../context/UserContext';
import { attemptLogIn } from '../services/user.service';
import TokenService from '../services/session.service';


export default function useAuth() {

    const { token, setToken } = useContext(Context);

    const login = useCallback((jsonData) => {
        attemptLogIn(jsonData)
            .then(jwt => {
                if(!jwt.token) return;
                TokenService.save('token',jwt.token);
                setToken(jwt.token);
            })
            .catch(err => {
                TokenService.remove('token');
                console.error(err.message);
            });
    }, [setToken]);

    const logout = useCallback( () => {
        TokenService.remove('token');
        setToken(null);
    }, [setToken]);    

    return {
        isLogged: Boolean(token),
        login,
        logout,
        token
    }
}