import axios from 'axios';
const cancelToken = axios.CancelToken;
const source = cancelToken.source();

export default class AuthService {

    _isAuth = false;

    constructor() {
        this.isAuth().then(res => this._isAuth = res.data);
    }

    loginUrl = process.env.REACT_APP_API_URL + "/login";
    isAuthUrl = process.env.REACT_APP_API_URL + "/isAuth";

    async login(username, password) {
        return axios.post(this.loginUrl, { username, password }, {
            cancelToken: source.token
        });
    }

    isAuth = () => axios.get(this.isAuthUrl, {
        cancelToken: source.token
    });

    getAuth() {
        return this._isAuth;
    }

}