import { connect } from 'react-redux';
import { getProducts } from '../actions/products';
import Products from '../components/Products/Products';
import { Products as AdminProducts } from '../components/Admin/Products/Products';
import { deleteProduct } from '../actions/products';

const mapStateToProps = state => ({
    products: state.products,
    showLoader: state.showLoader
});

const mapDispatchToProps = dispatch => ({
    getProducts: () => dispatch(getProducts()),
    deleteProduct: (id) => dispatch(deleteProduct(id))
});

export const ProductsTab = connect(mapStateToProps, mapDispatchToProps)(Products);
export const AdminProductsTab = connect(mapStateToProps, mapDispatchToProps)(AdminProducts);