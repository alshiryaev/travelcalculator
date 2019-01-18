import { RECEIVE_PRODUCTS, REQUEST_PRODUCTS, ERROR_RECEIVE_PRODUCTS } from '../actions/products';
import { RECEIVE_RECIPES, REQUEST_RECIPES } from '../actions/recipes';

export const showLoader = (state = false, action) => {
    switch (action.type) {
        case REQUEST_PRODUCTS:
        case REQUEST_RECIPES:
            return true;
        case ERROR_RECEIVE_PRODUCTS:
        case RECEIVE_PRODUCTS:
        case RECEIVE_RECIPES:
            return false;
        default:
            return state;
    }
}