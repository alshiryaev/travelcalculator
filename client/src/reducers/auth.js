import { LOGOUT, LOGIN_SUCCESSED, LOGIN_FAILED, LOGIN_ERROR } from '../actions/auth';

const defaultState = {
    isAuthenticated: false,
    message: ''
}

export const auth = (state = defaultState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESSED:
            return {
                message: '',
                isAuthenticated: true
            }
        case LOGIN_FAILED:
            return {
                message: 'Ошибка при попытке аутентификации',
                isAuthenticated: false
            }
        case LOGIN_ERROR:
            return {
                message: action.message,
                isAuthenticated: false
            }
        case LOGOUT:
            return {
                message: 'Выполнен выход',
                isAuthenticated: false
            }
        default:
            return state;
    }
}