import axios from 'axios';
const cancelToken = axios.CancelToken;
const source = cancelToken.source();

export default class AuthService {

    url = process.env.REACT_APP_API_URL + "/login";
   
    login = (username, password) => axios.post(this.url, {username, password}, {
        cancelToken: source.token
    });   
}