import React, { Component } from 'react';
import './Home.css';

import logo from '../../logo.svg';

class Home extends Component {
  render() {
    return (
      <div className="hello-words">
        <h2>Добро пожаловать! Сайт находится в процессе разработки :)</h2>
        <i>А пока можете заглянуть в таблицу БЖУ</i>
        <img src={logo} className="App-logo" alt="logo" />
      </div>);
  }
}

export default Home;
