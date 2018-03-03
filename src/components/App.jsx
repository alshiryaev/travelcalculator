import React, { Component } from 'react';
import './css/normalize.css';
import './css/App.css';
import {Route, Link } from 'react-router-dom';
import routes from '../routes';

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <ul>
            <li><Link to="/">Главная</Link></li>
            <li><Link to="/Calculator">Калькулятор</Link></li>
            <li><Link to="/About">О нас</Link></li>
          </ul>
        </header>

        {/* Здесь вставляется основной контент на каждой странице */}

        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.component}
          />
        ))}

        {/* Основной контент заканчивается */}

        <footer>
          &copy; Yuretc & Alex Perm 2018
        </footer>

      </div>
    );
  }
}

export default App;
