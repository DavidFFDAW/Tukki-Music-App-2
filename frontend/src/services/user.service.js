import HttpService from './http.service';
import { apiURL } from '../constants/config'; 

async function attemptLogIn(json) {
    // console.log('attemptLogIn:', json);
    return await HttpService.post(`${apiURL}/login`, json);
}

export {
    attemptLogIn,
};