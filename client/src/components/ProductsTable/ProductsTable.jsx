import React from 'react';
import './productTable.css';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import Paper from '@material-ui/core/Paper';

const ProductTable = (props) => {
  const { isAdmin, products, editProduct, deleteProduct } = props;
  return (
    <Paper>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Название продукта</TableCell>
            <TableCell>Белки, г</TableCell>
            <TableCell>Жиры, г</TableCell>
            <TableCell>Углеводы, г</TableCell>
            <TableCell>Калорийность, ккал</TableCell>
            <TableCell className={isAdmin ? '' : 'hidden'}>Управление</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product, index) => {
            return (
              <TableRow key={index} >
                <TableCell>{product.name}</TableCell>
                <TableCell>{product.protein}</TableCell>
                <TableCell>{product.fat}</TableCell>
                <TableCell>{product.carbohydrates}</TableCell>
                <TableCell>{product.calories}</TableCell>
                <TableCell className={isAdmin ? '' : 'hidden'}>
                  <button title="Редактировать" onClick={() => editProduct(product)} className="table-button edit">E</button>
                  <button title="Удалить" onClick={() => deleteProduct(product)} className="table-button delete">X</button>
                </TableCell>
              </TableRow>)
          })}
        </TableBody>
      </Table>
    </Paper>
  )
}
export default ProductTable;