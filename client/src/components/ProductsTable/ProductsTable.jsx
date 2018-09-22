import React from 'react';
import './productTable.css';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Build';

const ProductTable = props => {
  const { isAdmin, products, editProduct = f => f, deleteProduct = f => f } = props;
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
            {(isAdmin) ?
              <TableCell>Управление</TableCell> : <TableCell></TableCell>}

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
                {isAdmin ?
                  <TableCell>
                    <IconButton title="Удалить" onClick={() => deleteProduct(product)}>
                      <DeleteIcon/>
                    </IconButton>
                    <IconButton title="Редактировать" onClick={() => editProduct(product)}>
                      <EditIcon/>
                    </IconButton>
                  </TableCell> : <TableCell></TableCell>}
              </TableRow>)
          })}
        </TableBody>
      </Table>
    </Paper>
  )
}
export default ProductTable;