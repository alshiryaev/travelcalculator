import * as m from '../actions/message';

export const message = (state = '', action) => {
  switch (action.type) {
    case m.SHOW_MESSAGE:
      return action.payload;
    case m.HIDE_MESSAGE:
      return '';
    default:
      return state;
  }
};
