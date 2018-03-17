import React, { Component } from 'react';
import axios from 'axios';
import './productTable.css';
import loadedGif from '../img/loading.gif';

export default class ProductTable extends Component {

  constructor(props) {
    super(props);

    this.state = {
      products: [],
      loaded: false
    };
  }

  componentDidMount() {
    axios.get('http://alexpl-001-site1.ftempurl.com/api/products/')
      .then(res => {
        this.setState({
          loaded: true,
          products: res.data
        })
      });
  }

  render() {
    return (
      this.state.loaded ?
        <div className="wrapper_table">
          <div className="food__table">
            <div className="food__table_row">
              <div className="food__table_cell cell-1">Название продукта</div>
              <div className="food__table_cell cell-2">Белки, г</div>
              <div className="food__table_cell cell-2">Жиры, г</div>
              <div className="food__table_cell cell-2">Углеводы, г</div>
              <div className="food__table_cell cell-2">Калорийность, ккал</div>
            </div>
            {this.state.products.map((product, index) => (
              <div key={index} className="food__table_row">
                <div className="food__table_cell cell-1">{product.name}</div>
                <div className="food__table_cell cell-2">{product.protein}</div>
                <div className="food__table_cell cell-2">{product.fat}</div>
                <div className="food__table_cell cell-2">{product.carbohydrates}</div>
                <div className="food__table_cell cell-2">{product.calories}</div>
              </div>
            ))}
          </div >
        </div >
        : <div className="loading-image"><img alt="" src={loadedGif} /></div>
    );
  }
}