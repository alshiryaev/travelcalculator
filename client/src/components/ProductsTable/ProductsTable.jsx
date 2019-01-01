import React from 'react';
import './productTable.css';
import Paper from '@material-ui/core/Paper';

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
            <td style={isAdmin ? { borderTopRightRadius: '0' } : { borderTopRightRadius: '5px' }}>Калорийность, ккал</td>

            <td style={isAdmin ? { display: 'table-cell' } : { display: 'none' }}>Управление</td>

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

                <td style={isAdmin ? { display: 'block' } : { display: 'none' }}>
                  <button className="delete-button" onClick={() => deleteProduct(product)}>X</button>
                  <button className="edit-button" onClick={() => editProduct(product)}>E</button>
                </td>
              </tr>)
          })}
        </tbody>
      </table>
    </Paper>
  )
}
export default ProductTable;