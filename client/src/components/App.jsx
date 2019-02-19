import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import routes from '../routes';
import { Router } from 'react-router-dom';
import history from '../history';
import ProtectedRouterContainer from './ProtectedRouter/ProtectedRouter';
import { connect } from 'react-redux';
import { authenticated } from '../actions/auth';
import { Header } from './Header/Header';

class App extends Component {

  componentDidMount() {
    this.props.checkAuth();
  }

  render() {
    return (
      <Router history={history}>
        <div className="wrapper">
          <Header />
          <section className="main-section">
            {routes.map((route, index) =>
              route.private ?
                <ProtectedRouterContainer key={index}
                  path={route.path}
                  exact={route.exact}
                  component={route.component} />
                : <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  component={route.component} />
            )}
          </section>
        </div>

      </Router>
    );
  }
}

const AppContainer = connect(null, dispatch => ({
  checkAuth: () => dispatch(authenticated())
}))(App);
export default AppContainer;


