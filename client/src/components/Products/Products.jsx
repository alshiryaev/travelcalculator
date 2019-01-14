import React, { Component } from 'react';
import Table from '../ProductsTable/ProductsTable';
import CircularProgress from '@material-ui/core/CircularProgress';

export default class Products extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getProducts();
    }

    render() {
        const { showLoader, products, isError } = this.props;
        return <div className="tableWrapper"> {
            showLoader ?
                <div className="progress-bar">
                    <CircularProgress size={80} thickness={5} />
                </div> :
                <Table
                    isAdmin={false}
                    products={products} />
        }
            <div> {isError ?
                <p className="error-text">Нет соединения с БД.</p> : <p></p>}
            </div>
        </div>
    }
}