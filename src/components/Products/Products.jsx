import React, { Component } from 'react';
import axios from 'axios';
import Table from '../ProductsTable/ProductsTable';
import CircularProgress from 'material-ui/CircularProgress';

export default class Products extends Component {

    constructor(props) {
        super(props);
        this.apiUrl = "http://localhost:59638/api/products";
        this.state = {
            isLoaded: false,
            isError: false,
            products: []
        };
    }

    setError() {
        this.setState({
            isLoaded: true,
            isError: true
        })
    }

    componentDidMount() {
        axios.get(this.apiUrl)
            .then(res => {
                this.setState({
                    products: res.data,
                    isLoaded: true
                })
            }, () => this.setError());
    }

    render() {
        return <div> {
            this.state.isLoaded ?
                <Table isAdmin={false} products={this.state.products} />
                : <div className="progress-bar">
                    <CircularProgress size={80} thickness={5} />
                </div>
        }
            <div> {this.state.isError ?
                <p className="error-text">При загрузке данных произошла ошибка. Мы решаем эту проблему. Приносим свои извенения :(</p> : <p></p>}
            </div>
        </div>
    }

}