import { useContext, useCallback } from 'react';
import Context from './../context/UserContext';
import { attemptLogIn } from '../services/user.service';
import { SessionService } from '../services/session.service';


export default function useAuth() {

    const { token, setToken } = useContext(Context);

    const login = useCallback((jsonData) => {
        attemptLogIn(jsonData)
            .then(jwt => {
                if(!jwt.token) return;
                SessionService.save('token',jwt.token);
                SessionService.save('user',JSON.stringify(jwt.user));
                setToken(jwt.token);
            })
            .catch(err => {
                SessionService.remove('token');
                SessionService.remove('user');
                console.error(err.message);
            });
    }, [setToken]);

    const logout = useCallback( () => {
        SessionService.remove('token');
        SessionService.remove('user');
        setToken(null);
    }, [setToken]);    

    return {
        isLogged: Boolean(token),
        login,
        logout,
        token
    }
}