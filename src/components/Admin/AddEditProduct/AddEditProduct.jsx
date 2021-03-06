import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Button} from '../../shared/Button/Button';
import './AddEditProduct.css';

export default class AddEditProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: this.getClearProduct(),
      canAdd: false,
    };
  }

  clearState() {
    this.setState({
      product: this.getClearProduct(),
      canAdd: false,
    });
  }

  getClearProduct = () => ({
    name: '',
    proteins: '',
    carbohydrates: '',
    fats: '',
    calories: '',
  });

  addNewProduct = event => {
    event.preventDefault();
    const { addNewProduct } = this.props;
    const { product } = this.state;
    addNewProduct(product);
    // this.clearState();
    this.props.showMessage('Продукт добавлен!');
  };

  addProductPropertiesChanged = event => {
    const name = event.target.name;
    const value = event.target.value;
    const { product } = this.state;
    this.setState(
      {
        product: { ...product, [name]: value },
      },
      this.validate
    );
  };

  validate() {
    const { product } = this.state;
    const values = Object.values(product);
    const isValid = values.every(k => k !== null && k !== '');
    this.setState({
      canAdd: isValid,
    });
  }

  render() {
    const {
      canAdd,
      product: { name, proteins, carbohydrates, fats, calories },
    } = this.state;
    return (
      <form autoComplete="off" onSubmit={this.addNewProduct}>
        <input
          className="form__input"
          type="text"
          name="name"
          value={name}
          onChange={this.addProductPropertiesChanged}
          placeholder="Название продукта"
        />
        <input
          className="form__input"
          type="number"
          step="0.1"
          value={proteins}
          name="proteins"
          onChange={this.addProductPropertiesChanged}
          placeholder="Белки, г"
        />
        <input
          className="form__input"
          type="number"
          value={fats}
          name="fats"
          step="0.1"
          onChange={this.addProductPropertiesChanged}
          placeholder="Жиры, г"
        />
        <input
          className="form__input"
          type="number"
          step="0.1"
          value={carbohydrates}
          name="carbohydrates"
          onChange={this.addProductPropertiesChanged}
          placeholder="Углеводы, г"
        />
        <input
          className="form__input"
          type="number"
          name="calories"
          step="0.1"
          value={calories}
          onChange={this.addProductPropertiesChanged}
          placeholder="Калорийность, ккал"
        />
        <div className="form__action">
          <Link to={`/admin/`} className="btn">
            Назад{' '}
          </Link>
          {canAdd ? (
            <Button className="btn" type="submit">
              Добавить
            </Button>
          ) : (
            ''
          )}
        </div>
      </form>
    );
  }
}
