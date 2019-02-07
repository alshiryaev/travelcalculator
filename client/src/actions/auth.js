import AuthService from '../services/authService';
import { push } from 'connected-react-router';

export const LOGIN_FAILED = 'LOGIN_FAILED';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const LOGIN_SUCCESSED = 'LOGIN_SUCCESSED';
export const LOGOUT = 'LOGOUT';

export const loginSuccess = () => ({
    type: LOGIN_SUCCESSED
});

export const loginError = (message) => ({
    type: LOGIN_ERROR,
    message
});

export const loginFailed = () => ({
    type: LOGIN_FAILED
});

export const logout = () => ({
    type: LOGOUT
});

// Проверка аутентификации на сервере
export const authenticated = () => async (dispatch) => {
    const authService = new AuthService();
    const { data: isAuth } = await authService.isAuth();
    return isAuth ? dispatch(loginSuccess()) : dispatch(loginFailed());
}

export const login = (username, password) => async (dispatch) => {
    const authService = new AuthService();
    try {
        const { status } = await authService.login(username, password);
        if (status === 200) {
            dispatch(loginSuccess());
            return dispatch(push('/admin'));
        }
    }
    catch (err) {
        console.error(err);
        return dispatch(loginError('Неверное имя пользователя или пароль'));
    }

}