import HttpService from './http.service';
import { apiURL } from '../constants/config'; 

async function attemptLogIn (json){
    return await HttpService.post(`${apiURL}login.php`, json);
}

export {
    attemptLogIn,
};