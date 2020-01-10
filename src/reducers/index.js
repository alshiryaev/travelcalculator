import { combineReducers } from 'redux';
import { products } from '../reducers/products';
import { recipes } from './recipes';
import { auth } from './auth';
import { connectRouter } from 'connected-react-router';
import { message } from './message';

export default history =>
  combineReducers({
    router: connectRouter(history),
    products,
    recipes,
    auth,
    message,
  });
