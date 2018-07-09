import React, { Component } from 'react';
import Table from '../ProductsTable/ProductsTable';
import CircularProgress from 'material-ui/CircularProgress';
import DataService from '../../services/dataService'

export default class Products extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            isError: false,
            products: []
        };
    }

    dataService = new DataService();

    setError = () => {
        this.setState({
            isLoaded: true,
            isError: true
        })
    }

    componentDidMount() {

        this.dataService.getAllProducts()
            .then(res => this.setState({ products: res.data, isLoaded: true }), this.setError);
    }

    render() {
        return <div> {
            this.state.isLoaded ?
                <Table
                    isAdmin={false}
                    products={this.state.products} />
                : <div className="progress-bar">
                    <CircularProgress size={80} thickness={5} />
                </div>
        }
            <div> {this.state.isError ?
                <p className="error-text">Нет соединения с БД. Загружены тестовые данные</p> : <p></p>}
            </div>
        </div>
    }
}