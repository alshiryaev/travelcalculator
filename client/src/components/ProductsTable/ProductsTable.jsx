import React from 'react';
import './productTable.css';
// import Table from '@material-ui/core/Table';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
// import td from '@material-ui/core/td';
// import TableBody from '@material-ui/core/TableBody';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Build';

const ProductTable = props => {
  const { isAdmin, products, editProduct = f => f, deleteProduct = f => f } = props;
  return (
    <Paper>
      <table>
        <thead>
          <tr>
            <td>Название продукта</td>
            <td>Белки, г</td>
            <td>Жиры, г</td>
            <td>Углеводы, г</td>
            <td>Калорийность, ккал</td>
            {(isAdmin) ?
              <td class="forAdmin">Управление</td> : <td  class="forAdmin"></td>}

          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => {
            return (
              <tr key={index} >
                <td>{product.name}</td>
                <td>{product.protein}</td>
                <td>{product.fat}</td>
                <td>{product.carbohydrates}</td>
                <td>{product.calories}</td>
                {isAdmin ?
                  <td  class="forAdmin">
                    <IconButton title="Удалить" onClick={() => deleteProduct(product)}>
                      <DeleteIcon/>
                    </IconButton>
                    <IconButton title="Редактировать" onClick={() => editProduct(product)}>
                      <EditIcon/>
                    </IconButton>
                  </td> : <td class="forAdmin"></td>}
              </tr>)
          })}
        </tbody>
      </table>
    </Paper>
  )
}
export default ProductTable;