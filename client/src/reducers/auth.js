import { LOGOUT, LOGIN_SUCCESSED, LOGIN_FAILED } from '../actions/auth';

const defaultState = {
    authenticated: false,
    username: null
};

export const auth = (state = defaultState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESSED:
            return {
                authenticated: true,
                username: action.username
            }
        case LOGIN_FAILED:
        case LOGOUT:
            return {
                authenticated: false,
                username: null
            }
        default:
            return state;
    }
}