import React, { Component } from 'react';
import ProductTable from '../ProductsTable/ProductsTable';
import './Admin.css';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

class Admin extends Component {
  render() {
    return (
      <div>
        <p>
          <FloatingActionButton className="add-button" title="Ддобавить новый продукт">
            <ContentAdd />
          </FloatingActionButton>
        </p>
        <ProductTable isAdmin={true} />
      </div>
    );
  }
}

export default Admin;
