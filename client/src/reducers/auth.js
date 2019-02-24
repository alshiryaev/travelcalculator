import {
  LOGOUT,
  LOGIN_SUCCESSED,
  LOGIN_FAILED,
  LOGIN_ERROR,
} from '../actions/auth';

export const auth = (state = false, action) => {
  switch (action.type) {
    case LOGIN_SUCCESSED:
      return true;
    case LOGIN_FAILED:
    case LOGIN_ERROR:
    case LOGOUT:
      return false;
    default:
      return state;
  }
};
