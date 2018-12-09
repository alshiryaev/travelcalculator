import React, { Component } from 'react';
import './App.css';
import { Route, NavLink } from 'react-router-dom';
import routes from '../routes';
import { Router } from 'react-router-dom';
import history from '../history';

export default class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div className="wrapper">
          <header className="header">            
            <div className="logo">
              <NavLink className="logo__link" to={"/"}>TRAVELCALCULATOR</NavLink >
            </div>
            <input className="hamburger__checkbox" type="checkbox" hidden id="__hamb__button"/>     
            <label className="hamburger hamburger_clickable" htmlFor="__hamb__button">                      
                 <div className="hamburger__button"></div>
            </label>
            <ul className="nav-menu">
              <li className="nav-menu__item"><NavLink className="menu-link" activeClassName="menu-link_active" to={"/calculator"}>Калькулятор</NavLink ></li>
              <li className="nav-menu__item"><NavLink className="menu-link" activeClassName="menu-link_active" to={"/products"}>Продукты</NavLink ></li>
              <li className="nav-menu__item"><NavLink className="menu-link" activeClassName="menu-link_active" to={"/recipes"}>Рецепты</NavLink ></li>
              <li className="nav-menu__item"><NavLink className="menu-link" activeClassName="menu-link_active" to={"/about"}>О нас</NavLink ></li>
            </ul>
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

      </Router>
    );
  }
}