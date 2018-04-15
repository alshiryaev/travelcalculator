import React, { Component } from 'react';
import './Admin.css';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import axios from 'axios';
import Table from '../ProductsTable/ProductsTable';

class Admin extends Component {

  constructor(props) {
    super(props);

    this.state = {
      openAddDialog: false,
      openDeleteDialog: false,
      deletingProduct: null,
      products: [],
      newProduct: {
        Name: '',
        Fat: 0,
        Protein: 0,
        Calories: 0,
        Carbohydrates: 0
      }
    };
  }

  componentDidMount() {
    axios.get('http://travelcalculator20180415094356.azurewebsites.net/api/products')
      .then(res => {
        this.setState({
          products: res.data
        })
      });
  }

  addProductDialogHandleOpenClose = (val) => {
    this.setState({ openAddDialog: val })
  };

  propertiesChanged = (event) => {
    const newProduct = Object.assign({}, this.state.newProduct);
    newProduct[event.target.name] = event.target.value;
    this.setState({ newProduct });
  };

  addNewProduct = () => {
    axios.post('http://travelcalculator20180415094356.azurewebsites.net/api/products', this.state.newProduct)
      .then(res => {
        this.addProductDialogHandleOpenClose();
      });
  };

  openDeleteDialog = (val) => {
    this.setState({ openDeleteDialog: val })
  }

  deleteProductHandle = (product) => {
    this.setState({ deletingProduct: product }, () => {
      this.openDeleteDialog(true);
    })
  };

  deleteProduct = () => {
    this.setState({ openDeleteDialog: false });
    axios.delete('http://travelcalculator20180415094356.azurewebsites.net/api/products', { params: { id: this.state.deletingProduct.id } })
      .then(res => {

      });
  };

  render() {

    const addProductDialogActions = [

      <FlatButton
        label="Отмена"
        onClick={() => this.addProductDialogHandleOpenClose(false)} />,

      <FlatButton
        label="Добавить"
        primary={true}
        onClick={this.addNewProduct} />,
    ];

    const deleteDialogActions = [
      <FlatButton
        label="Отмена"
        primary={true}
        onClick={() => this.openDeleteDialog(false)} />,
      <FlatButton
        label="Да"
        secondary={true}
        onClick={this.deleteProduct} />,
    ];

    return (
      <div>
        <FloatingActionButton
          className="add-button"
          title="Добавить новый продукт"
          onClick={() => this.addProductDialogHandleOpenClose(true)}>
          <ContentAdd />
        </FloatingActionButton>

        <Table isAdmin={true} deleteProduct={this.deleteProductHandle} products={this.state.products} />

        <Dialog
          title="Добавление нового продукта"
          actions={addProductDialogActions}
          open={this.state.openAddDialog} >
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

        <Dialog
          title="Внимание"
          actions={deleteDialogActions}
          modal={true}
          open={this.state.openDeleteDialog}>
          Удалить выбранный продукт?
        </Dialog>
      </div>
    );
  }
}

export default Admin;
