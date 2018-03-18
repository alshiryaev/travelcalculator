import React, { Component } from 'react';
import ProductTable from '../ProductsTable/ProductsTable';
import './Admin.css';

class Admin extends Component {
  render() {
    return (
      <div>
        <p>
          <button>Добавить продукт...</button>
        </p>
        <ProductTable isAdmin="true" />
      </div>
    );
  }
}

export default Admin;
