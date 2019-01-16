import React, { Component } from 'react';
import Table from '../../Table/Table';
import CircularProgress from '@material-ui/core/CircularProgress';
import ProductService from '../../../services/productService';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Link } from 'react-router-dom';

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
            isLoaded: false
        };
    }



    _isUnmount = false;
    dataService = new ProductService();

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
        //history.push(`/admin/editproduct/${id}`);
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
        const {products} = this.state;
        return (
            <div>              
                {this.state.isLoaded ?
                    <div>
                        <Link className="control-button" to={`/admin/addproduct`} > Добавить </Link>
                        <Table
                            headers={['Название продукта', 'Белки, г', 'Жиры, г', 'Углеводы, г', 'Калорийность, ккал']}
                            items={['name', 'protein', 'fat', 'carbohydrates', 'calories']}
                            isAdmin={true}
                            editHandle={this.editProductHandle}
                            deleteHandle={this.deleteProductHandle}
                            source={products} />                     

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
