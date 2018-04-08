import React, { Component } from 'react';
import './css/normalize.css';
import './css/App.css';
import './css/likely.css';
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

            {/* Здесь вставляется основной контент на каждой странице */}
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
            {/* Основной контент заканчивается */}

            <footer className="first-footer">
              <div className="likely">
                <div className="twitter">Твитнуть</div>
                <div className="facebook">Поделиться</div>
                <div className="vkontakte">Поделиться</div>
                <div className="telegram">Отправить</div>
              </div>
            </footer>
            <section className="second-section">

            </section>
          </div>

        </HashRouter>
      </MuiThemeProvider>
    );
  }
}


export default App;
