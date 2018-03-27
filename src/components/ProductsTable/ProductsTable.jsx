import React, { Component } from 'react';
import axios from 'axios';
import './ProductTable.css';
import loadedGif from '../img/loading.gif';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

export default class ProductTable extends Component {

  constructor(props) {
    super(props);

    this.state = {
      products: [],
      loaded: false
    };
  }

  componentDidMount() {
    axios.get('http://alexpl-001-site1.ftempurl.com/api/products/')
      .then(res => {
        this.setState({
          loaded: true,
          products: res.data
        })
      });
  }



  render() {
    console.log('isAdmin = ' + this.props.isAdmin);
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
              <TableHeaderColumn className={!this.state.isAdmin ? 'hidden' : ''}>Управление</TableHeaderColumn>
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
                <TableRowColumn className={!this.state.isAdmin ? 'hidden' : ''}>
                  <button title="Редактировать" className="table-button">E</button>
                  <button title="Удалить" className="table-button">X</button>
                </TableRowColumn>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        : <div className="loading-image"><img alt="" src={loadedGif} /></div>
    );
  }
}