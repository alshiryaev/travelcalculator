import React, { Component } from 'react';
import './css/App.css';
import { Route, NavLink } from 'react-router-dom';
import routes from '../routes';
import { HashRouter } from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
        <HashRouter>
          <div className="wrapper">
            <header className="header">
              <nav>
                <ul className="nav-menu">
                  <li className="nav-menu__item"><NavLink exact className="menu-link" activeClassName="menu-link_active" to={"/"}>Главная</NavLink ></li>
                  <li className="nav-menu__item"><NavLink className="menu-link" activeClassName="menu-link_active" to={"/calculator"}>Калькулятор</NavLink ></li>
                  <li className="nav-menu__item"><NavLink className="menu-link" activeClassName="menu-link_active" to={"/products"}>Таблица БЖУ</NavLink ></li>
                  <li className="nav-menu__item"><NavLink className="menu-link" activeClassName="menu-link_active" to={"/recipes"}>Рецепты</NavLink ></li>
                  <li className="nav-menu__item"><NavLink className="menu-link" activeClassName="menu-link_active" to={"/about"}>О нас</NavLink ></li>
                </ul>
              </nav>
            </header>
            
            <section className="main-section">
              {routes.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  component={route.component} />
              ))}
            </section>

            <footer>
            </footer>
          </div>

        </HashRouter>
    );
  }
}