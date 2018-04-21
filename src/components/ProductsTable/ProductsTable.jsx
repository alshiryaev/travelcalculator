import React, { Component } from 'react';
import './ProductTable.css';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';


export default class ProductTable extends Component {
  render() {
    return (
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
          {this.props.products.map((product, index) => (
            <TableRow key={index} >
              <TableRowColumn style={{ width: "30%" }}>{product.name}</TableRowColumn>
              <TableRowColumn>{product.protein}</TableRowColumn>
              <TableRowColumn>{product.fat}</TableRowColumn>
              <TableRowColumn>{product.carbohydrates}</TableRowColumn>
              <TableRowColumn>{product.calories}</TableRowColumn>
              <TableRowColumn className={this.props.isAdmin ? '' : 'hidden'}>
                <button title="Редактировать" onClick={() => this.props.editProduct(product)} className="table-button edit">E</button>
                <button title="Удалить" onClick={() => this.props.deleteProduct(product)} className="table-button delete">X</button>
              </TableRowColumn>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  }
}