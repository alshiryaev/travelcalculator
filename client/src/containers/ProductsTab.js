import { connect } from 'react-redux';
import { getProducts } from '../actions/products';
import Products from '../components/Products/Products';
import { Products as AdminProducts } from '../components/Admin/Products/Products';
import { deleteProduct } from '../actions/products';
import { push } from 'connected-react-router';

const mapStateToProps = state => ({
  products: state.products.items,
  showLoader: state.showLoader,
});

const mapDispatchToProps = dispatch => ({
  getProducts: () => dispatch(getProducts()),
  deleteProduct: id => dispatch(deleteProduct(id)),
  editProduct: id => dispatch(push(`/admin/editproduct/${id}`)),
  addProduct: () => dispatch(push('/admin/addproduct')),
});

export const ProductsTab = connect(
  mapStateToProps,
  mapDispatchToProps
)(Products);
export const AdminProductsTab = connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminProducts);
