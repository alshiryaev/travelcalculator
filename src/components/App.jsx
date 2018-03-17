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
            <nav className="navbar">
            <ul>
                <li><NavLink exact className="nav-link" activeClassName="active" to={"/"}>Главная</NavLink ></li>
                <li><NavLink className="nav-link" activeClassName="active" to={"/calculator"}>Калькулятор</NavLink ></li>
                <li><NavLink className="nav-link" activeClassName="active" to={"/products"}>Продукты</NavLink ></li>
                <li><NavLink className="nav-link" activeClassName="active" to={"/about"}>О нас</NavLink ></li>               
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
            <div className="social">
              <ul>
                <li><a className="href-box" href="https://vk.com/alexpl"> </a><div className="social-links__logo"></div>Alexey Shiryaev</li>
                <li><a className="href-box" href="https://vk.com/id7339163"> </a><div className="social-links__logo"></div>Yuriy Pinegin</li>
              </ul>
            </div>
        </footer>
        </div>
      </div>
    );
  }
}

export default App;
