import { combineReducers } from 'redux';
import { products } from '../reducers/products';
import { showLoader } from './showLoader';
import { recipes } from './recipes';

export const rootReducer = combineReducers({
    products,
    showLoader,
    recipes
});

