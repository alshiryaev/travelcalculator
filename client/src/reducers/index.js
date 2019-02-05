import { combineReducers } from 'redux';
import { products } from '../reducers/products';
import { showLoader } from './showLoader';
import { recipes } from './recipes';
import { auth } from './auth';
import { connectRouter } from 'connected-react-router';

export default (history) => combineReducers({
    router: connectRouter(history),
    products,
    showLoader,
    recipes,
    auth
});

