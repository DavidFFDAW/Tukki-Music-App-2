import HttpService from './http.service';
import { apiURL } from '../constants/config'; 

async function attemptLogIn(json) {
    // console.log('attemptLogIn:', json);
    return await HttpService.post(`${apiURL}/login`, json);
}

async function attempRegistration(json) {
    // console.log('attempRegistration:', json);
    return await HttpService.post(`${apiURL}/register`, json);
}

export {
    attemptLogIn,
    attempRegistration
};