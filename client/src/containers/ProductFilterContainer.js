import { Filter } from '../components/Filter/Filter';
import { connect } from 'react-redux';
import { changeQuery } from '../actions/filter';
import { CLEAR_QUERY } from '../actions/filter';
import { getProducts } from '../actions/products';

const mapStateToProps = state => ({
    filter: state.products.filter
});

const mapDispatchToProps = (dispatch) => ({
    queryChangeHandler: query => dispatch(changeQuery(query)),
    queryClearHandler: () => dispatch({ type:CLEAR_QUERY }),
    queryApplyHandler: (filter) => dispatch(getProducts(filter))
});

export const ProductFilterContainer =
    connect(mapStateToProps, mapDispatchToProps)(Filter);