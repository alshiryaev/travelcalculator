import { RECEIVE_PRODUCTS, REQUEST_PRODUCTS } from '../actions';

export const products = (state = [], action) => {
    switch (action.type) {
        case REQUEST_PRODUCTS:
            return state;
        case RECEIVE_PRODUCTS:
            return action.products;
        default:
            return state;
    }
}