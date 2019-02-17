import productService from '../services/productService';

export const REQUEST_PRODUCTS = 'REQUEST_PRODUCTS';
export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS';
export const ERROR_RECEIVE_PRODUCTS = 'ERROR_RECEIVE_PRODUCTS';
export const DELETE_PRODUCT_START = 'DELETE_PRODUCT_START';
export const DELETE_PRODUCT_FINISH = 'DELETE_PRODUCT_FINISH';
export const DELETE_PRODUCT_ERROR = 'DELETE_PRODUCT_ERROR';

const requestProducts = () => ({
    type: REQUEST_PRODUCTS
});

const receiveProducts = (products) => ({
    type: RECEIVE_PRODUCTS,
    products
});

const shouldLoadProducts = state => state.products.length > 0;

export const getProducts = (filter = '') => async (dispatch, getState) => {

    if (shouldLoadProducts(getState()) && !filter.length) {
        const { products } = getState();
        dispatch(receiveProducts(products));
    }
    else {
        dispatch(requestProducts());
        const pService = new productService();
        try {
            const { data: products } = await pService.getAllProducts();
            return dispatch(receiveProducts(products));
        }
        catch (error) {
            console.log(error);
            return dispatch({ type: ERROR_RECEIVE_PRODUCTS });
        }
    }
};

export const deleteProduct = id => async (dispatch, getState) => {
    const pService = new productService();
    await pService.deleteProduct(id);
    const { products } = getState();
    return dispatch(receiveProducts(products.filter(p => p.id !== id)));
};

