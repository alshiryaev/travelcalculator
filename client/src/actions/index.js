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

export const getProducts = () => async (dispatch) => {
    dispatch(requestProducts());
    const pSerive = new productService();
    try {
        const { data: products } = await pSerive.getAllProducts();
        dispatch(receiveProducts(products));
    }
    catch (error) {
        console.log(error);
        dispatch({ type: ERROR_RECEIVE_PRODUCTS});
    }
}
