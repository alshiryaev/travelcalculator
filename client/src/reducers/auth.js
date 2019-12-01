import * as types from '../constants/authTypes';

export const auth = (state = false, action) => {
  switch (action.type) {
    case types.LOGIN_SUCCESSED:
      return true;
    case types.LOGIN_FAILED:
    case types.LOGIN_ERROR:
    case types.LOGOUT:
      return false;
    default:
      return state;
  }
};
