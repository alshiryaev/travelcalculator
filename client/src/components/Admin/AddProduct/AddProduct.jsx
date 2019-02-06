import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './AddProduct.css';

import ProductService from '../../../services/productService';

export default class AddProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: {}
        }
    }

    productService = new ProductService();

    addNewProduct = async (event) => {
        event.preventDefault();
        const { product } = this.state;
        await this.productService.addNewProduct(product);
        this.props.history.push('/admin');
    }

    addProductPropertiesChanged = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        const { product } = this.state;
        this.setState({
            product: { ...product, [name]: value }
        })
    }

    render() {
        return (
            <div>
                <form autoComplete="off" onSubmit={this.addNewProduct}>
                    <input
                        className="form__input"
                        type="text"
                        name="name"
                        onChange={this.addProductPropertiesChanged}
                        placeholder="Название продукта" />
                    <input
                        className="form__input"
                        type="number"
                        step="0.1"
                        name="protein"
                        onChange={this.addProductPropertiesChanged}
                        placeholder="Белки, г" />
                    <input
                        className="form__input"
                        type="number"
                        name="fat"
                        step="0.1"
                        onChange={this.addProductPropertiesChanged}
                        placeholder="Жиры, г" />
                    <input
                        className="form__input"
                        type="number"
                        step="0.1"
                        name="carbohydrates"
                        onChange={this.addProductPropertiesChanged}
                        placeholder="Углеводы, г" />
                    <input
                        className="form__input"
                        type="number"
                        name="calories"
                        step="0.1"
                        onChange={this.addProductPropertiesChanged}
                        placeholder="Калорийность, ккал" />
                    <div className="form__action">
                        <Link to={`/admin/`} className="control-button">Назад </Link>
                        <button className="control-button" type="submit" >Добавить</button>
                    </div>
                </form>
            </div>
        )
    }
}
