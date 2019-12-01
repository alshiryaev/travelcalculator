import { Filter } from '../components/Filter/Filter';
import { connect } from 'react-redux';
import { changeQuery, clearQueryAndGetProducts } from '../actions/filter';
import { getProducts } from '../actions/products';

const mapStateToProps = state => ({
  filter: state.products.filter,
});

const mapDispatchToProps = dispatch => ({
  queryChangeHandler: query => dispatch(changeQuery(query)),
  queryClearHandler: () => dispatch(clearQueryAndGetProducts()),
  queryApplyHandler: filter => dispatch(getProducts(filter)),
});

export const ProductFilterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Filter);
