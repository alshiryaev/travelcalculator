import React, { Component } from 'react';
import axios from 'axios';
import Table from '../ProductsTable/ProductsTable';
import CircularProgress from 'material-ui/CircularProgress';

export default class Products extends Component {

    constructor(props) {
        super(props);
        this.apiUrl = "http://travelcalculator.azurewebsites.net/api/products";
        this.state = {
            isLoaded: false,
            products: []
        };
    }

    componentDidMount() {
        axios.get(this.apiUrl)
            .then(res => {
                this.setState({
                    products: res.data,
                    isLoaded: true
                })
            });
    }

    render() {
        return <div> {this.state.isLoaded ?
            <Table isAdmin={false} products={this.state.products} />
            : <div className="progress-bar">
                <CircularProgress size={80} thickness={5} />
            </div>
        }
        </div>
    }

}