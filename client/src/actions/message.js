export const SHOW_MESSAGE = 'SHOW_MESSAGE';
export const HIDE_MESSAGE = 'HIDE_MESSAGE';

export const showMessage = message => ({
  type: SHOW_MESSAGE,
  payload: message,
});

export const hideMessage = () => ({
  type: HIDE_MESSAGE,
  payload: '',
});

export const notifyMessage = message => dispatch => {
  dispatch(showMessage(message));
  const id = setTimeout(() => {
    clearTimeout(id);
    return dispatch(hideMessage());
  }, 5000);
};