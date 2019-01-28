import AuthService from '../services/authService';

export const LOGIN_REQUESTED = 'LOGIN_REQUESTED';
export const LOGIN_FAILED = 'LOGIN_FAILED';
export const LOGIN_SUCCESSED = 'LOGIN_SUCCESSED';
export const LOGOUT = 'LOGOUT';

export const loginRequested = () => ({
    type: LOGIN_REQUESTED
});

export const loginSuccess = (username) => ({
    type: LOGIN_SUCCESSED,
    username
});

export const loginFailed = () => ({
    type: LOGIN_FAILED
});

export const logout = () => ({
    type: LOGOUT
});

export const authenticated = () => async (dispatch) => {
    const authService = new AuthService();
    dispatch(loginRequested());
    const { data: isAuth } = await authService.isAuth();
    console.log('isAuth', isAuth);
    if (isAuth)
        return dispatch(loginSuccess('admin'));
    else
        return dispatch(loginFailed());
}

export const login = (username, password, callback = callback => callback) => async (dispatch) => {
    const authService = new AuthService();
    dispatch(loginRequested());
    try {
        const {status} = await authService.login(username, password);
        if (status === 200){
            callback();
            return dispatch(loginSuccess('admin'));          
        }
    }
    catch (err){
        console.error(err);
        return dispatch(loginFailed());
    }
   
}