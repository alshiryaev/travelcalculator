import React, { Component } from 'react';
import Table from '../../ProductsTable/ProductsTable';
import CircularProgress from '@material-ui/core/CircularProgress';
import ProductService from '../../../services/productService';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default class Product extends Component {

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
            },
            tabValue: 0
        };
    }

    _isUnmount = false;
    dataService = new ProductService();

    tabValueChange = (event, tabValue) => {
        this.setState({ tabValue });
    };

    setError = () => {
        this.setState({
            isLoaded: true,
            isError: true
        })
    }

    componentDidMount() {
        this.dataService.getAllProducts()
            .then(res => {
                if (this._isUnmount === false)
                    this.setState({ products: res.data, isLoaded: true })
            }, this.setError);
    }

    componentWillUnmount() {
        console.log('unmount');
        this._isUnmount = true;
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
        const editProduct = { ...this.state.editingProduct, ...edit };
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
        let { id } = this.state.deletingProduct;
        this.dataService.deleteProduct(id)
            .then(() =>
                this.setState(prevState => ({
                    products: prevState.products.filter(item => item.id !== this.state.deletingProduct.id)
                }))
            );
    };

    render() {
        return (
            <div>
                {this.state.isLoaded ?
                    <div>
                        <button onClick={() => this.addProductDialogHandleOpenClose(true)}  className="control-button">
                            Добавить
                        </button>
                        <Table
                            isAdmin={true}
                            editProduct={this.editProductHandle}
                            deleteProduct={this.deleteProductHandle}
                            products={this.state.products} />
                        <Dialog open={this.state.openAddDialog}>
                            <DialogTitle>Добавление нового продукта</DialogTitle>
                            <DialogContent>
                                <TextField
                                    name="name"
                                    onChange={this.addProductPropertiesChanged}
                                    fullWidth
                                    placeholder="Название продукта" />
                                <br />
                                <TextField
                                    name="protein"
                                    onChange={this.addProductPropertiesChanged}
                                    fullWidth
                                    placeholder="Белки, г" />
                                <br />
                                <TextField
                                    name="fat"
                                    onChange={this.addProductPropertiesChanged}
                                    fullWidth
                                    placeholder="Жиры, г" />
                                <br />
                                <TextField
                                    name="carbohydrates"
                                    onChange={this.addProductPropertiesChanged}
                                    fullWidth
                                    placeholder="Углеводы, г" />
                                <br />
                                <TextField
                                    name="calories"
                                    onChange={this.addProductPropertiesChanged}
                                    fullWidth
                                    placeholder="Калорийность, ккал" />
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={() => this.addProductDialogHandleOpenClose(false)}>Отмена</Button>
                                <Button onClick={this.addNewProduct} >Добавить</Button>
                            </DialogActions>
                        </Dialog>


                        <Dialog open={this.state.openEditDialog} >
                            <DialogContentText>Редактирование</DialogContentText>
                            <DialogContent>
                                <TextField
                                    name="name"
                                    onChange={this.editProductPropertiesChanged}
                                    value={this.state.editingProduct.name}
                                    fullWidth
                                    placeholder="Название продукта" />
                                <br />
                                <TextField
                                    name="protein"
                                    onChange={this.editProductPropertiesChanged}
                                    value={this.state.editingProduct.protein}
                                    fullWidth
                                    placeholder="Белки, г" />
                                <br />
                                <TextField
                                    name="fat"
                                    onChange={this.editProductPropertiesChanged}
                                    value={this.state.editingProduct.fat}
                                    fullWidth
                                    placeholder="Жиры, г" />
                                <br />
                                <TextField
                                    name="carbohydrates"
                                    onChange={this.editProductPropertiesChanged}
                                    value={this.state.editingProduct.carbohydrates}
                                    fullWidth
                                    placeholder="Углеводы, г" />
                                <br />
                                <TextField
                                    name="calories"
                                    value={this.state.editingProduct.calories}
                                    onChange={this.editProductPropertiesChanged}
                                    fullWidth
                                    placeholder="Калорийность, ккал" />
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={() => this.openEditingDialog(false)}>Отмена</Button>
                                <Button onClick={this.editProduct}>Сохранить</Button>
                            </DialogActions>
                        </Dialog>

                        <Dialog open={this.state.openDeleteDialog}>
                            <DialogTitle>Внимание</DialogTitle>
                            <DialogContent>
                                <DialogContentText>Удалить данный продукт?</DialogContentText>
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={() => this.openDeleteDialog(false)} >
                                    Отмена
                                </Button>
                                <Button onClick={this.deleteProduct}> Да</Button>
                            </DialogActions>

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
