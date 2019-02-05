import { LOGOUT, LOGIN_SUCCESSED, LOGIN_FAILED } from '../actions/auth';

const defaultState = {
    authenticated: false,
    username: null
};

export const auth = (state = defaultState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESSED:
            return true;
        case LOGIN_FAILED:
        case LOGOUT:
            return false;
        default:
            return state;
    }
}