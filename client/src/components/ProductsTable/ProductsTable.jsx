import React from 'react';
import './productTable.css';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';

const ProductTable = (props) => {
  const { isAdmin, products, editProduct, deleteProduct} = props;
  return <Table
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
        <TableHeaderColumn className={isAdmin ? '' : 'hidden'}>Управление</TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody
      displayRowCheckbox={false}
      showRowHover={true}>
      {products.map((product, index) => 
        <TableRow key={index} >
          <TableRowColumn style={{ width: "30%" }}>{product.name}</TableRowColumn>
          <TableRowColumn>{product.protein}</TableRowColumn>
          <TableRowColumn>{product.fat}</TableRowColumn>
          <TableRowColumn>{product.carbohydrates}</TableRowColumn>
          <TableRowColumn>{product.calories}</TableRowColumn>
          <TableRowColumn className={isAdmin ? '' : 'hidden'}>
            <button title="Редактировать" onClick={() => editProduct(product)} className="table-button edit">E</button>
            <button title="Удалить" onClick={() => deleteProduct(product)} className="table-button delete">X</button>
          </TableRowColumn>
        </TableRow>
      )}
    </TableBody>
  </Table>
}
export default ProductTable;