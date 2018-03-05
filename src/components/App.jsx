import React, { Component } from 'react';
import './css/normalize.css';
import './css/App.css';
import { Route, NavLink } from 'react-router-dom';
import routes from '../routes';

class App extends Component {
  render() {
    return (
      <div>
        <div className="wrapper">
          <header>
            <nav>
            <ul>
                <li><NavLink exact className="nav-link" activeClassName="active" to="/">Главная</NavLink ></li>
                <li><NavLink className="nav-link" activeClassName="active" to="/Calculator">Калькулятор</NavLink ></li>
                <li><NavLink className="nav-link" activeClassName="active" to="/About">О нас</NavLink ></li>
                <li><NavLink className="nav-link" activeClassName="active" to="/Foodtable">Таблица раскладки</NavLink ></li>
            </ul>
            </nav>
          </header>

          {/* Здесь вставляется основной контент на каждой странице */}
          <section>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={route.component}
            />
          ))}
          </section>
          {/* Основной контент заканчивается */}

          <footer>
            &copy; Yuretc & Alex Perm 2018
        </footer>
        </div>
      </div>
    );
  }
}

export default App;
