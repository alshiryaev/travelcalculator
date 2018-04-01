import React, { Component } from 'react';
import ProductTable from '../ProductsTable/ProductsTable';
import './Admin.css';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import axios from 'axios';

class Admin extends Component {

  constructor(props) {
    super(props);

    this.state = {
      open: false,
      newProduct: {
        Name: '',
        Fat: 0,
        Protein: 0,
        Calories: 0,
        Carbohydrates: 0
      }
    };
  }

  addProductDialogHandleOpen = () => {
    this.setState({ open: true })
  };

  addProductDialogHandleClose = () => {
    this.setState({ open: false });
  };

  propertiesChanged = (event) => {
    const newProduct = Object.assign({}, this.state.newProduct);
    newProduct[event.target.name] = event.target.value;
    this.setState({ newProduct });
  };

  addNewProduct = () => {
    axios.post('http://localhost:59638/api/products', this.state.newProduct)
      .then(res => {
        this.addProductDialogHandleClose();
      });
  };

  deleteProduct = (id) => {
    axios.delete('http://localhost:59638/api/products', { params: { id: id } })
      .then(res => {

      });
  };

  render() {

    const actions = [

      <FlatButton
        label="Отмена"
        onClick={this.addProductDialogHandleClose} />,

      <FlatButton
        label="Добавить"
        primary={true}
        onClick={this.addNewProduct} />,
    ];

    return (
      <div>
        <FloatingActionButton
          className="add-button"
          title="Добавить новый продукт"
          onClick={this.addProductDialogHandleOpen}>
          <ContentAdd />
        </FloatingActionButton>
        <ProductTable isAdmin={true} deleteProduct={this.deleteProduct} />
        <Dialog
          title="Добавление нового продукта"
          actions={actions}
          open={this.state.open}
          onRequestClose={this.handleClose} >
          <TextField name="Name" onChange={this.propertiesChanged} fullWidth={true} hintText="Название продукта" />
          <br />
          <TextField name="Protein" onChange={this.propertiesChanged} fullWidth={true} hintText="Белки, г" />
          <br />
          <TextField name="Fat" onChange={this.propertiesChanged} fullWidth={true} hintText="Жиры, г" />
          <br />
          <TextField name="Carbohydrates" onChange={this.propertiesChanged} fullWidth={true} hintText="Углеводы, г" />
          <br />
          <TextField name="Calories" onChange={this.propertiesChanged} fullWidth={true} hintText="Калорийность, ккал" />
        </Dialog>       
      </div>
    );
  }
}

export default Admin;
