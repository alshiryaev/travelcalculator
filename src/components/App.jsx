import React, { Component } from 'react';
import './App.css';
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
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.component}
          />
        ))}
      </div>
    );
  }
}

export default App;
