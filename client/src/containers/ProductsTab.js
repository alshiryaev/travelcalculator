import { connect } from 'react-redux';
import { getProducts} from '../actions';
import Products from '../components/Products/Products';

const mapStateToProps = state => ({
    products: state.products,
    isLoaded: state.isLoaded
});

const mapDispatchToProps = dispatch => ({
    getProducts: () => dispatch(getProducts())
});

const ProductsTab = connect(mapStateToProps, mapDispatchToProps)(Products);
export default ProductsTab;