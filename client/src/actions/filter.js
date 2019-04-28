import { getProducts } from './products';
import * as types from '../constants/filterTypes';

export const changeQuery = query => ({
  type: types.CHANGE_QUERY,
  payload: query,
});

export const clearQuery = () => ({
  type: types.CLEAR_QUERY,
});

export const clearQueryAndGetProducts = () => dispatch => {
  dispatch(clearQuery());
  dispatch(getProducts(''));
};
