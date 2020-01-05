import React, { Component } from 'react';
import Table from '../../Table/Table';
import CircularProgress from '@material-ui/core/CircularProgress';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { ProductFilterContainer } from '../../../containers/ProductFilterContainer';

export class Products extends Component {

    constructor(props) {
        super(props);
        this.state = {
            openModal: false,
            deletingProduct: null
        };
    }

    componentDidMount() {
        this.props.getProducts();
    }

    addProductHandle = () => this.props.addProduct();

    deleteProductHandle = product =>
        this.setState({
            openModal: true,
            deletingProduct: product
        });

    editProductHandle = product => {
        this.props.editProduct(product.id);
    };

    closeDeleteDialog = flag => {
        if (flag === true) {
            this.props.deleteProduct(this.state.deletingProduct.id);
        }
        this.setState({
            openModal: false,
            deletingProduct: null
        });
    }

    render() {
        const { openModal, deletingProduct } = this.state;
        const { showLoader, products } = this.props;
        return (
            <div>
                {showLoader ?
                    <div className="progress-bar">
                        <CircularProgress size={80} thickness={5} />
                    </div> :
                    <div>
                        <button className="control-button" onClick={this.addProductHandle} > Добавить </button>
                        <ProductFilterContainer />
                        <Table
                            headers={['Название продукта', 'Белки, г', 'Жиры, г', 'Углеводы, г', 'Калорийность, ккал']}
                            items={['name', 'proteins', 'fats', 'carbohydrates', 'calories']}
                            isAdmin={true}
                            editHandle={this.editProductHandle}
                            deleteHandle={this.deleteProductHandle}
                            source={products} />

                        <Dialog open={openModal}>
                            <DialogTitle>Внимание</DialogTitle>
                            <DialogContent>
                                <DialogContentText>{deletingProduct ? `Удалить ${deletingProduct.name} ?` : ''}</DialogContentText>
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={() => this.closeDeleteDialog(false)} >
                                    Отмена
                                </Button>
                                <Button onClick={() => this.closeDeleteDialog(true)}> Да</Button>
                            </DialogActions>
                        </Dialog>
                    </div>
                }
            </div>
        );
    }
}
