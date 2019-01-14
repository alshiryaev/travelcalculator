import { RECEIVE_PRODUCTS, REQUEST_PRODUCTS, ERROR_RECEIVE_PRODUCTS } from '../actions';

export const showLoader = (state = false, action) => {
    switch (action.type) {
        case REQUEST_PRODUCTS:
            return true;
        case ERROR_RECEIVE_PRODUCTS:
        case RECEIVE_PRODUCTS:
            return false;
        default:
            return state;
    }
}