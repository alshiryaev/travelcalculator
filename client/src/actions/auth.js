import AuthService from '../services/authService';
import { push } from 'connected-react-router';
import * as types from '../constants/authTypes';

export const loginSuccess = () => ({
  type: types.LOGIN_SUCCESSED,
});

export const loginError = () => ({
  type: types.LOGIN_ERROR,
});

export const loginFailed = () => ({
  type: types.LOGIN_FAILED,
});

export const logout = () => ({
  type: types.LOGOUT,
});

// Проверка аутентификации на сервере
export const authenticated = () => async dispatch => {
  const authService = new AuthService();
  const { data: isAuth } = await authService.isAuth();
  return isAuth ? dispatch(loginSuccess()) : dispatch(loginFailed());
};

export const login = (username, password) => async dispatch => {
  const authService = new AuthService();
  try {
    const { status } = await authService.login(username, password);
    if (status === 200) {
      dispatch(loginSuccess());
      dispatch(push('/admin'));
    }
  } catch (err) {
    console.error(err);
    dispatch(loginError());
  }
};
