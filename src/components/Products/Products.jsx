import React, { Component } from 'react';
import axios from 'axios';
import Table from '../ProductsTable/ProductsTable';

export default class Products extends Component {

    constructor(props) {
        super(props);        
        this.apiUrl = "http://travelcalculator.azurewebsites.net/api/products";
        this.state = {
            products: []
        };
    }

    componentDidMount() {
        axios.get(this.apiUrl)
            .then(res => {
                this.setState({
                    products: res.data
                })
            });
    }

    render() {
        return <div>
            <Table isAdmin={false} products={this.state.products}/>
        </div>
    }
}