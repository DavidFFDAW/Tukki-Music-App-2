import HttpService from './http.service';
import { apiURL } from '../constants/config'; 

async function getMyMixes() {
    return await HttpService.get(`${apiURL}/mixes`);
}

export {
    getMyMixes,
};