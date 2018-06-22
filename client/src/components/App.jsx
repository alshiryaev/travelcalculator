import React, { Component } from 'react';
import './css/normalize.css';
import './css/App.css';
import { Route, NavLink } from 'react-router-dom';
import routes from '../routes';
import { HashRouter } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <HashRouter>
          <div className="wrapper">
            <header>
              <nav className="navbar">
                <ul>
                  <li><NavLink exact className="nav-link" activeClassName="active" to={"/"}>Главная</NavLink ></li>
                  <li><NavLink className="nav-link" activeClassName="active" to={"/calculator"}>Калькулятор меню</NavLink ></li>
                  <li><NavLink className="nav-link" activeClassName="active" to={"/products"}>Таблица БЖУ</NavLink ></li>
                  <li><NavLink className="nav-link" activeClassName="active" to={"/recipes"}>Рецепты</NavLink ></li>
                  <li><NavLink className="nav-link" activeClassName="active" to={"/about"}>О нас</NavLink ></li>
                </ul>
              </nav>
            </header>


            <section className="main-section">
              {routes.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  component={route.component}
                />
              ))}
            </section>

            <footer className="first-footer">
            </footer>          </div>

        </HashRouter>
      </MuiThemeProvider>
    );
  }
}


export default App;
