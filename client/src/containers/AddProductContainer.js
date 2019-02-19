import AddProduct from '../components/Admin/AddProduct/AddProduct';
import {connect} from 'react-redux';
import { addNewProduct } from '../actions/products';

const mapDispatchToProps = dispatch => ({
    addNewProduct: (product) => dispatch(addNewProduct(product))
})

export const AddProductContainer = connect(null, mapDispatchToProps)(AddProduct);