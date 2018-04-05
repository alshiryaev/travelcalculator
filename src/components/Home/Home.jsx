import React, { Component } from 'react';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="home-block-title">
          <p className="home-section-title">Рассчёт меню в поход</p>
          <p className="home-section-text">Рассчитаем необходимые в поход продукты, их вес и количество. Предложим меню на каждый день. </p>
        </div>
        <form action="" method="post">
          <div className="block-forms">
            <label for="daysAmount">Количество дней</label><input type="number" name="days" min="1" max="21" placeholder="1" id="daysAmount" />
          </div>
          <div className="block-forms">
            <label for="mansAmount">Количество участников</label><input type="number" name="days" min="1" max="10" placeholder="1" id="mansAmount" />
          </div>
          <div className="block-forms">
            <div className="type-travel">Тип похода</div>
            <div className="type-travel__radio">
              <input type="radio" name="typeTravel" value="mount" />горный <br />
              <input type="radio" name="typeTravel" value="walk" /> пеший <br />
              <input type="radio" name="typeTravel" value="river" /> сплав <br />
            </div>
            <label htmlFor="nz">Нужен ли аварийный запас на 1 дополнительный день</label><input type="checkbox" name="accident" id="nz" /> <br />
            <input type="submit" value="Рассчитать" />
          </div>
        </form>
      </div>
    );
  }
}

export default Home;
