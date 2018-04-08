import React, { Component } from 'react';
import axios from 'axios';
import './ProductTable.css';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import CircularProgress from 'material-ui/CircularProgress';


export default class ProductTable extends Component {

  constructor(props) {
    super(props);

    this.state = {
      products: [],
      loaded: false
    };
  }

  componentDidMount() {
    axios.get('http://alexpl-001-site1.ftempurl.com/api/products')
      .then(res => {
        this.setState({
          loaded: true,
          products: res.data
        })
      });
  }


  deleteProduct = (product) => {
    this.props.deleteProduct(product);
  };
 

  render() {
    return (
      this.state.loaded ?
        <Table
          fixedHeader={true}>
          <TableHeader
            adjustForCheckbox={false}
            displaySelectAll={false}>
            <TableRow>
              <TableHeaderColumn style={{ width: "30%" }}>Название продукта</TableHeaderColumn>
              <TableHeaderColumn>Белки, г</TableHeaderColumn>
              <TableHeaderColumn>Жиры, г</TableHeaderColumn>
              <TableHeaderColumn>Углеводы, г</TableHeaderColumn>
              <TableHeaderColumn>Калорийность, ккал</TableHeaderColumn>
              <TableHeaderColumn className={this.props.isAdmin ? '' : 'hidden'}>Управление</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody
            displayRowCheckbox={false}
            showRowHover={true}>
            {this.state.products.map((product, index) => (
              <TableRow key={index} >
                <TableRowColumn style={{ width: "30%" }}>{product.name}</TableRowColumn>
                <TableRowColumn>{product.protein}</TableRowColumn>
                <TableRowColumn>{product.fat}</TableRowColumn>
                <TableRowColumn>{product.carbohydrates}</TableRowColumn>
                <TableRowColumn>{product.calories}</TableRowColumn>
                <TableRowColumn className={this.props.isAdmin ? '' : 'hidden'}>
                  <button title="Редактировать" className="table-button edit">E</button>
                  <button title="Удалить" onClick={() => this.deleteProduct(product)} className="table-button delete">X</button>
                </TableRowColumn>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        : <div className="loading-image"><CircularProgress size={60} thickness={7} /></div>
    );
  }
}