import React, { Component } from 'react';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className="home-block-title">
        <p className="home-section-title">Рассчёт меню в поход</p>
        <p className="home-section-text">Рассчитаем необходимые в поход продукты, их вес и количество. Предложим меню на каждый день. </p>
      </div>
    );
  }
}

export default Home;
