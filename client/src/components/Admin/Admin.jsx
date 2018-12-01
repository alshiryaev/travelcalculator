import React, { Component } from 'react';
import './Admin.css';
import routes from './routes';
import { Route } from 'react-router-dom';

class Admin extends Component {

  render() {
    return (
      <section className="main-section">

        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.component} />
        ))}
      </section>
    );
  }
}

export default Admin;
