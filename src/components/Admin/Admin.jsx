import React, { Component } from 'react';
import ProductTable from '../ProductsTable/ProductsTable';
import './Admin.css';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

class Admin extends Component {

  constructor(props) {
    super(props);

    this.state = {
      addDialogOpen: false
    };
  }


  addProductHandleOpen = () => {
    this.setState({ open: true })
  };

  addProductHandleClose = () => {
    this.setState({ open: false });
  };

  render() {

    const actions = [
      <FlatButton
        label="Отмена"
        onClick={this.addProductHandleClose}
      />,
      <FlatButton
        label="Добавить"
        primary={true}
        onClick={this.addProductHandleClose}
      />,
    ];

    return (
      <div>
        <p>
          <FloatingActionButton className="add-button" title="Добавить новый продукт" onClick={this.addProductHandleOpen}>
            <ContentAdd />
          </FloatingActionButton>
        </p>
        <ProductTable isAdmin={true} />
        <Dialog
          title="Добавление нового продукта"
          actions={actions}
          open={this.state.open}
          onRequestClose={this.handleClose} >
          <TextField fullWidth={true} hintText="Название продукта" />
          <br />
          <TextField fullWidth={true} hintText="Белки, г" />
          <br />
          <TextField fullWidth={true} hintText="Жиры, г" />
          <br />
          <TextField fullWidth={true} hintText="Углеводы, г" />
          <br />
          <TextField fullWidth={true} hintText="Калорийность, ккал" />
        </Dialog>
      </div>
    );
  }
}

export default Admin;
