import React, { Component } from 'react';
import './App.css';
import { Route, Router, Switch } from 'react-router-dom';
import routes from '../routes';
import history from '../history';
import ProtectedRouterContainer from './ProtectedRouter/ProtectedRouter';
import { connect } from 'react-redux';
import { Header } from './Header/Header';
import { MessageContainer } from '../containers/MessageContainer';

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div className="wrapper">
          <Header />
          <MessageContainer />
          <section className="main-section">
            <Switch>
              {routes.map((route, index) =>
                route.private ? (
                  <ProtectedRouterContainer
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    component={route.component}
                  />
                ) : (
                  <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    component={route.component}
                  />
                )
              )}
            </Switch>
          </section>      
        </div>
      </Router>
    );
  }
}

const AppContainer = connect(
  null,
  null
)(App);
export default AppContainer;
