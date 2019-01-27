import React from 'react';
import { Route, Redirect } from "react-router-dom";
import AuthService from '../../services/authService';

export default function ProtectedRoute({ component: Component, ...rest }) {

    const authService = new AuthService();   

    return (
        <Route {...rest}
            render={props => {
                const isAuth = true;
                if (isAuth) {
                    return <Component {...props} />
                }
                else {
                    return <Redirect to={{ pathname: "/login" }} />
                }
            }
            }
        />
    );
}
