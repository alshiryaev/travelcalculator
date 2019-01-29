import React from 'react';
import { Route, Redirect } from "react-router-dom";
import { connect } from 'react-redux';

function ProtectedRoute({ component: Component, isAuth, ...rest }) {
    return (
        <Route {...rest}
            render={props => {
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

const ProtectedRouterContainer = connect(state => ({
    isAuth: state.auth.authenticated
}))(ProtectedRoute);
export default ProtectedRouterContainer;