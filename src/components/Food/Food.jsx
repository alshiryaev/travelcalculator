import React, { Component } from 'react';
import './food.css';

class foodTable extends Component {
  render() {
    return (
      <div className="wrapper_table">
        <p>Приготовим, поедим</p>
        <div className="food__table">
          <div className="food__table_row">
            <div className="food__table_cell cell-0">№ п/п</div>
            <div className="food__table_cell cell-1">Название продукта</div>
            <div className="food__table_cell cell-2">Белки, г</div>
            <div className="food__table_cell cell-2">Жиры, г</div>
            <div className="food__table_cell cell-2">Углеводы, г</div>
            <div className="food__table_cell cell-2">Калорийность, ккал</div>
          </div>
          <div className="food__table_row">
            <div className="food__table_cell cell-0">1</div>
            <div className="food__table_cell cell-1">Говядина тушёная</div>
            <div className="food__table_cell cell-2">24,8</div>
            <div className="food__table_cell cell-2">16,5</div>
            <div className="food__table_cell cell-2">-</div>
            <div className="food__table_cell cell-2">254</div>
          </div>
          <div className="food__table_row">
            <div className="food__table_cell cell-0">2</div>
            <div className="food__table_cell cell-1">Молоко сухое</div>
            <div className="food__table_cell cell-2">33,2</div>
            <div className="food__table_cell cell-2">15,0</div>
            <div className="food__table_cell cell-2">42,8</div>
            <div className="food__table_cell cell-2">440</div>
          </div>
          <div className="food__table_row">
            <div className="food__table_cell cell-0">3</div>
            <div className="food__table_cell cell-1">Свинина мясная</div>
            <div className="food__table_cell cell-2">23,0</div>
            <div className="food__table_cell cell-2">35,0</div>
            <div className="food__table_cell cell-2">-</div>
            <div className="food__table_cell cell-2">400</div>
          </div>
          <div className="food__table_row">
            <div className="food__table_cell cell-0">4</div>
            <div className="food__table_cell cell-1">Ветчина</div>
            <div className="food__table_cell cell-2">14,4</div>
            <div className="food__table_cell cell-2">33,0</div>
            <div className="food__table_cell cell-2">-</div>
            <div className="food__table_cell cell-2">365</div>
          </div>
          <div className="food__table_row">
            <div className="food__table_cell cell-0">5</div>
            <div className="food__table_cell cell-1">Колбаса полукопчёная</div>
            <div className="food__table_cell cell-2">13,5</div>
            <div className="food__table_cell cell-2">35,0</div>
            <div className="food__table_cell cell-2">-</div>
            <div className="food__table_cell cell-2">370</div>
          </div>
          <div className="food__table_row">
            <div className="food__table_cell cell-0">6</div>
            <div className="food__table_cell cell-1">Масло сливочное, шпик</div>
            <div className="food__table_cell cell-2">-</div>
            <div className="food__table_cell cell-2">82,0</div>
            <div className="food__table_cell cell-2">-</div>
            <div className="food__table_cell cell-2">768</div>
          </div>
          <div className="food__table_row">
            <div className="food__table_cell cell-0">7</div>
            <div className="food__table_cell cell-1">Масло растительное</div>
            <div className="food__table_cell cell-2">-</div>
            <div className="food__table_cell cell-2">85,4</div>
            <div className="food__table_cell cell-2">-</div>
            <div className="food__table_cell cell-2">800</div>
          </div>
          <div className="food__table_row">
            <div className="food__table_cell cell-0">8</div>
            <div className="food__table_cell cell-1">Сало перетопленное с луком</div>
            <div className="food__table_cell cell-2">2,5</div>
            <div className="food__table_cell cell-2">47,0</div>
            <div className="food__table_cell cell-2">6,0+3,2</div>
            <div className="food__table_cell cell-2">480</div>
          </div>
          <div className="food__table_row">
            <div className="food__table_cell cell-0">9</div>
            <div className="food__table_cell cell-1">Крупы разные</div>
            <div className="food__table_cell cell-2">10,0</div>
            <div className="food__table_cell cell-2">2,0</div>
            <div className="food__table_cell cell-2">65,0</div>
            <div className="food__table_cell cell-2">330</div>
          </div>
          <div className="food__table_row">
            <div className="food__table_cell cell-0">10</div>
            <div className="food__table_cell cell-1">Макаронные изделия</div>
            <div className="food__table_cell cell-2">9,3</div>
            <div className="food__table_cell cell-2">0,8</div>
            <div className="food__table_cell cell-2">70,9</div>
            <div className="food__table_cell cell-2">336</div>
          </div>
          <div className="food__table_row">
            <div className="food__table_cell cell-0">11</div>
            <div className="food__table_cell cell-1">Сыр российскийи др. разновидности</div>
            <div className="food__table_cell cell-2">21,0</div>
            <div className="food__table_cell cell-2">30,0</div>
            <div className="food__table_cell cell-2">2,5</div>
            <div className="food__table_cell cell-2">380</div>
          </div>
          <div className="food__table_row">
            <div className="food__table_cell cell-0">12</div>
            <div className="food__table_cell cell-1">Сухари чёрные</div>
            <div className="food__table_cell cell-2">8,4</div>
            <div className="food__table_cell cell-2">1,6</div>
            <div className="food__table_cell cell-2">70,0</div>
            <div className="food__table_cell cell-2">330</div>
          </div>
          <div className="food__table_row">
            <div className="food__table_cell cell-0">13</div>
            <div className="food__table_cell cell-1">Сухари белые</div>
            <div className="food__table_cell cell-2">10,6</div>
            <div className="food__table_cell cell-2">1,5</div>
            <div className="food__table_cell cell-2">70,0</div>
            <div className="food__table_cell cell-2">340</div>
          </div>
          <div className="food__table_row">
            <div className="food__table_cell cell-0">14</div>
            <div className="food__table_cell cell-1">Печенье столовое</div>
            <div className="food__table_cell cell-2">12,0</div>
            <div className="food__table_cell cell-2">14,6</div>
            <div className="food__table_cell cell-2">45,0+13,4</div>
            <div className="food__table_cell cell-2">420</div>
          </div>
          <div className="food__table_row">
            <div className="food__table_cell cell-0">15</div>
            <div className="food__table_cell cell-1">Сахар</div>
            <div className="food__table_cell cell-2">-</div>
            <div className="food__table_cell cell-2">-</div>
            <div className="food__table_cell cell-2">95,5</div>
            <div className="food__table_cell cell-2">390</div>
          </div>
          {/* <div className="food__table_row">
            <div className="food__table_cell cell-0">{{ }}</div>
            <div className="food__table_cell cell-1">{{ }}</div>
            <div className="food__table_cell cell-2">{{ }}</div>
            <div className="food__table_cell cell-2">{{ }}</div>
            <div className="food__table_cell cell-2">{{ }}</div>
            <div className="food__table_cell cell-2">{{ }}</div>
          </div> */}
        </div >
      </div >
    );
  }
}

export default foodTable;
