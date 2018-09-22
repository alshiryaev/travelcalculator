import React, { Component } from 'react';
import './Admin.css';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import Table from '../ProductsTable/ProductsTable';
import CircularProgress from 'material-ui/CircularProgress';
import DataService from '../../services/dataService';

class Admin extends Component {
  // todo вынести диалог подтверждения в отдельный компонент

  constructor(props) {
    super(props);
    this.state = {
      openAddDialog: false,
      openDeleteDialog: false,
      openEditDialog: false,
      deletingProduct: null,
      editingProduct: {},
      products: [],
      isLoaded: false,
      newProduct: {
        name: '',
        fat: 0,
        protein: 0,
        calories: 0,
        carbohydrates: 0
      }
    };
  }

  dataService = new DataService();

  setError = () => {
    this.setState({
      isLoaded: true,
      isError: true
    })
  }

  componentDidMount() {
    this.dataService.getAllProducts()
      .then(res => this.setState({ products: res.data, isLoaded: true }), this.setError);
  }

  addProductDialogHandleOpenClose = (val) => {
    this.setState({ openAddDialog: val })
  };

  addProductPropertiesChanged = (event) => {
    let edit = Object.create(null);
    edit[event.target.name] = event.target.value;
    const newProduct = { ...this.state.newProduct, ...edit };
    this.setState({ newProduct: newProduct });
  };

  editProductPropertiesChanged = (event) => {
    let edit = Object.create(null);
    edit[event.target.name] = event.target.value;
    const editProduct = {...this.state.editingProduct,...edit};
    this.setState({ editingProduct: editProduct });
  };

  addNewProduct = () => {
    this.dataService.addNewProduct(this.state.newProduct)
      .then(res => {
        this.addProductDialogHandleOpenClose(false);
        this.setState(prevState => ({
          products: prevState.products.concat(res.data)
        }))
      });
  };

  openDeleteDialog = (val) => this.setState({ openDeleteDialog: val });

  openEditingDialog = (val) => this.setState({ openEditDialog: val });

  deleteProductHandle = (product) => {
    this.setState({ deletingProduct: product }, () => {
      this.openDeleteDialog(true);
    })
  };

  editProductHandle = (product) => {
    this.setState({ editingProduct: product }, () => {
      this.openEditingDialog(true);
    })
  };

  editProduct = () => {
    this.openEditingDialog(false);
    this.dataService.editProduct(this.state.editingProduct).then(response => {
      // Здесь нужно сделать обновление выбранной записи     
    });
  };

  deleteProduct = () => {
    this.setState({ openDeleteDialog: false });
    let {id} = this.state.deletingProduct;
    this.dataService.deleteProduct(id)
      .then(res =>
        this.setState(prevState => ({
          products: prevState.products.filter(item => item.id !== this.state.deletingProduct.id)
        }))
      );
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

    const editDialogActions = [
      <FlatButton
        label="Отмена"
        primary={true}
        onClick={() => this.openEditingDialog(false)} />,
      <FlatButton
        label="Сохранить"
        secondary={true}
        onClick={this.editProduct} />,
    ];

    return (
      <div>
        {this.state.isLoaded ?
          <div>
            <FloatingActionButton
              className="add-button"
              title="Добавить новый продукт"
              onClick={() => this.addProductDialogHandleOpenClose(true)}>
              <ContentAdd />
            </FloatingActionButton>

            <Table
              isAdmin={true}
              editProduct={this.editProductHandle}
              deleteProduct={this.deleteProductHandle}
              products={this.state.products} />

            <Dialog
              title="Добавление нового продукта"
              actions={addProductDialogActions}
              open={this.state.openAddDialog} >
              <TextField
                name="name"
                onChange={this.addProductPropertiesChanged}
                fullWidth={true}
                hintText="Название продукта" />
              <br />
              <TextField
                name="protein"
                onChange={this.addProductPropertiesChanged}
                fullWidth={true}
                hintText="Белки, г" />
              <br />
              <TextField
                name="fat"
                onChange={this.addProductPropertiesChanged}
                fullWidth={true}
                hintText="Жиры, г" />
              <br />
              <TextField
                name="carbohydrates"
                onChange={this.addProductPropertiesChanged}
                fullWidth={true}
                hintText="Углеводы, г" />
              <br />
              <TextField
                name="calories"
                onChange={this.addProductPropertiesChanged}
                fullWidth={true}
                hintText="Калорийность, ккал" />
            </Dialog>


            <Dialog
              title="Редактирование"
              actions={editDialogActions}
              open={this.state.openEditDialog} >
              <TextField
                name="name"
                onChange={this.editProductPropertiesChanged}
                value={this.state.editingProduct.name}
                fullWidth={true}
                hintText="Название продукта" />
              <br />
              <TextField
                name="protein"
                onChange={this.editProductPropertiesChanged}
                value={this.state.editingProduct.protein}
                fullWidth={true}
                hintText="Белки, г" />
              <br />
              <TextField
                name="fat"
                onChange={this.editProductPropertiesChanged}
                value={this.state.editingProduct.fat}
                fullWidth={true}
                hintText="Жиры, г" />
              <br />
              <TextField
                name="carbohydrates"
                onChange={this.editProductPropertiesChanged}
                value={this.state.editingProduct.carbohydrates}
                fullWidth={true}
                hintText="Углеводы, г" />
              <br />
              <TextField
                name="calories"
                value={this.state.editingProduct.calories}
                onChange={this.editProductPropertiesChanged}
                fullWidth={true}
                hintText="Калорийность, ккал" />
            </Dialog>

            <Dialog
              title="Внимание"
              actions={deleteDialogActions}
              modal={true}
              open={this.state.openDeleteDialog}>
              Удалить продукт?
        </Dialog>
          </div> :
          <div className="progress-bar">
            <CircularProgress size={80} thickness={5} />
          </div>
        }
      </div>
    );
  }
}

export default Admin;