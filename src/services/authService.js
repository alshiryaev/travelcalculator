import axios from 'axios';
const cancelToken = axios.CancelToken;
const source = cancelToken.source();

export default class AuthService {
  loginUrl = process.env.REACT_APP_API_URL + '/login';

  async login(username, password) {
    return axios.post(this.loginUrl, null, {
      cancelToken: source.token,
      data: { username, password },
    });
  }
}
