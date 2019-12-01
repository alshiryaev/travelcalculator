import * as p from '../actions/products';
import * as filter from '../constants/filterTypes';

const defaultState = {
  items: [],
  filter: '',
};

export const products = (state = defaultState, action) => {
  switch (action.type) {
    case p.REQUEST_PRODUCTS:
      return state;
    case p.RECEIVE_PRODUCTS:
      return {
        ...state,
        items: action.payload,
      };
    case filter.CHANGE_QUERY:
      return {
        ...state,
        filter: action.payload,
      };
    case filter.CLEAR_QUERY:
      return {
        ...state,
        filter: '',
      };
    case p.ADD_PRODUCT:
      const items = state.items.concat(action.payload);
      return {
        ...state,
        items,
      };
    default:
      return state;
  }
};
