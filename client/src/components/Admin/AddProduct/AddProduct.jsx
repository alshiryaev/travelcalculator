import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './AddProduct.css';

import ProductService from '../../../services/productService';

export default class AddProduct extends Component {
    constructor(props) {
        super(props)
        this.state = {
            product: {}
        }
    }

    productService = new ProductService();

    addNewProduct = async (event) => {
        event.preventDefault();
        const { product } = this.state;
        await this.productService.addNewProduct(product)
    }

    addProductPropertiesChanged = (event) => {
        const { product } = this.state;
        this.setState({
            product: { ...product, [event.target.name]: event.target.value }
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
                        name="protein"
                        onChange={this.addProductPropertiesChanged}
                        placeholder="Белки, г" />
                    <input
                        className="form__input"
                        type="number"
                        name="fat"
                        onChange={this.addProductPropertiesChanged}
                        placeholder="Жиры, г" />
                    <input
                        className="form__input"
                        type="number"
                        name="carbohydrates"
                        onChange={this.addProductPropertiesChanged}
                        placeholder="Углеводы, г" />
                    <br />
                    <input
                        className="form__input"
                        type="number"
                        name="calories"
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
