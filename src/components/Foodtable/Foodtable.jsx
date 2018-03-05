import React, { Component } from 'react';
import './foodtable.css';

class foodTable extends Component {
  render() {
    return (
      <div>
        <div className="wrapper_table">
          <p>Приготовим, поедим</p>
          <div className="food__table">
            <div className="food__table_row">
              <div className="food__table_cell cell-1">Название продукта</div>
              <div className="food__table_cell cell-2">Масса/объём</div>
            </div>
            <div className="food__table_row">Завтрак 1 день</div>
            <div className="food__table_row">
              
            </div>
            <div className="food__table_row">
              
            </div>
            <div className="food__table_row">
              
            </div>
            <div className="food__table_row">
              
            </div>
            <div className="food__table_row">
              
            </div>
            <div className="food__table_row">
              
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default foodTable;
