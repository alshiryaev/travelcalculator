import productService from '../services/productService';

export const REQUEST_PRODUCTS = 'REQUEST_PRODUCTS';
export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS';
export const ERROR_RECEIVE_PRODUCTS = 'ERROR_RECEIVE_PRODUCTS';

const requestProducts = () => ({
    type: REQUEST_PRODUCTS
});

const receiveProducts = (products) => ({
    type: RECEIVE_PRODUCTS,
    products
});

function shouldLoadProducts(state) {
    return state.products.length > 0;
}

export const getProducts = () => async (dispatch, getState) => {

    if (shouldLoadProducts(getState())) {
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
}
