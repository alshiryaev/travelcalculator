import { combineReducers } from 'redux';
import { products } from '../reducers/products';
import { showLoader } from './showLoader';

export const rootReducer = combineReducers({
    products,
    showLoader
});

