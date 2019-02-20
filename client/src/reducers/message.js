import * as m from '../actions/message';

export const message = (state = '', action) => {
    switch (action.type) {
        case m.SHOW_MESSAGE:
            return action.message;
        case m.HIDE_MESSAGE:
            return '';
        default:
            return state;
    }
}