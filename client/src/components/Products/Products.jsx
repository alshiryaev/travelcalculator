import React, { Component } from 'react';
import Table from '../ProductsTable/ProductsTable';
import CircularProgress from '@material-ui/core/CircularProgress';
import productService from '../../services/productService'

export default class Products extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            isError: false,
            products: []
        };
    }

    productService = new productService();

    setError = () => {
        this.setState({
            isLoaded: true,
            isError: true
        })
    }

    componentDidMount() {

        this.productService.getAllProducts()
            .then(res => this.setState({ products: res.data, isLoaded: true }), this.setError);
    }

    render() {
        return <div className="tableWrapper"> {
            this.state.isLoaded ?
                <Table
                    isAdmin={false}
                    products={this.state.products} />
                : <div className="progress-bar">
                    <CircularProgress size={80} thickness={5} />
                </div>
        }
            <div> {this.state.isError ?
                <p className="error-text">Нет соединения с БД.</p> : <p></p>}
            </div>
        </div>
    }
}