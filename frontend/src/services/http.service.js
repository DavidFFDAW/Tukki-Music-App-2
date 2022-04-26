import TokenService from "./session.service";

export default class HttpService {   
    static get = endpoint => this._makeFetchRequest(endpoint,'GET');
    static put = (endpoint,data) => this._makeFetchRequest(endpoint,'PUT',data);
    static post = (endpoint,data) => this._makeFetchRequest(endpoint,'POST', data);
    static delete = endpoint => this._makeFetchRequest(endpoint,'DELETE');

    static _makeFetchRequest(url, method, data){
        const token = TokenService.get('token');
        console.log('token:', token);

        const options = {
            method: method,
            mode: 'cors',
            headers: {
               'Content-Type': 'application/json',
               'Accept': 'application/json',
            },
        };
        if(token){
           options.headers = {...options.headers, 'Authorization': 'Bearer ' + token };
        }
        if(data){
            options.body = JSON.stringify(data);
        }
        console.log(options.body);
        
        return fetch(url, options).then(response => response.json());
    }

}