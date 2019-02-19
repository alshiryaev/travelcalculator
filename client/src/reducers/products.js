import * as p from '../actions/products';
import * as filter from '../actions/filter';

const defaultState = {
    items: [],
    filter: ''
};

export const products = (state = defaultState, action) => {
    switch (action.type) {
        case p.REQUEST_PRODUCTS:
            return state;
        case p.RECEIVE_PRODUCTS:
            return {
                ...state,
                items: action.products
            }
        case filter.CHANGE_QUERY:
            return {
                ...state,
                filter: action.query
            }
        case filter.CLEAR_QUERY:
            return {
                ...state,
                filter: ''
            }
        case p.ADD_PRODUCT:
            const items = state.items.concat(action.product)
            return {
                ...state,
                items
            }
        default:
            return state;
    }
}