import React from 'react';
import { Route } from 'react-router-dom';
import routes from './routes';
import ProtectedRouterContainer from '../ProtectedRouter/ProtectedRouter';

const Admin = () =>
    <div>
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
    </div>

export default Admin;