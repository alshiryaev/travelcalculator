import AddEditProduct from '../components/Admin/AddEditProduct/AddEditProduct';
import { connect } from 'react-redux';
import { addNewProduct } from '../actions/products';
import { notifyMessage } from '../actions/message';

const mapDispatchToProps = dispatch => ({
  addNewProduct: product => dispatch(addNewProduct(product)),
  showMessage: message => dispatch(notifyMessage(message)),
});

export const AddProductContainer = connect(
  null,
  mapDispatchToProps
)(AddEditProduct);
