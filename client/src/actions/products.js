import productService from '../services/productService';
import { notifyMessage } from '../actions/message';

export const REQUEST_PRODUCTS = 'REQUEST_PRODUCTS';
export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS';
export const ERROR_RECEIVE_PRODUCTS = 'ERROR_RECEIVE_PRODUCTS';
export const DELETE_PRODUCT_START = 'DELETE_PRODUCT_START';
export const DELETE_PRODUCT_FINISH = 'DELETE_PRODUCT_FINISH';
export const DELETE_PRODUCT_ERROR = 'DELETE_PRODUCT_ERROR';
export const ADD_PRODUCT = 'ADD_PRODUCT';

const requestProducts = () => ({
  type: REQUEST_PRODUCTS,
});

const receiveProducts = products => ({
  type: RECEIVE_PRODUCTS,
  payload: products,
});

const addProduct = product => ({
  type: ADD_PRODUCT,
  payload: product,
});

const shouldLoadProducts = state => state.products.length > 0;

export const getProducts = (filter = '') => async (dispatch, getState) => {
  if (shouldLoadProducts(getState()) && !filter.length) {
    const { products } = getState();
    dispatch(receiveProducts(products));
  } else {
    dispatch(requestProducts());
    const pService = new productService();
    try {
      const { data: products } = await pService.getAllProducts(filter);
      dispatch(receiveProducts(products));
    } catch (error) {
      console.log(error);
      dispatch({ type: ERROR_RECEIVE_PRODUCTS });
    }
  }
};

export const deleteProduct = id => async (dispatch, getState) => {
  const pService = new productService();
  await pService.deleteProduct(id);
  dispatch(notifyMessage('Продукт успешно удален'));
  const {
    products: { items },
  } = getState();
  dispatch(receiveProducts(items.filter(p => p.id !== id)));
};

export const addNewProduct = product => async dispatch => {
  const pService = new productService();
  await pService.addNewProduct(product);
  dispatch(addProduct(product));
};
