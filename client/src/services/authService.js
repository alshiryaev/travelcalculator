import axios from 'axios';
const cancelToken = axios.CancelToken;
const source = cancelToken.source();

export default class AuthService {
  _isAuth = false;

  loginUrl = process.env.REACT_APP_API_URL + '/login';
  isAuthUrl = process.env.REACT_APP_API_URL + '/isAuth';

  async login(username, password) {
    return axios.post(this.loginUrl, null, {
      cancelToken: source.token,
      data: { username, password },
    });
  }
}
