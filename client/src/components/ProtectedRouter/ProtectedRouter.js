import React from 'react';
import { Route, Redirect, withRouter } from "react-router-dom";
import { connect } from 'react-redux';

function ProtectedRoute({ component: Component, isAuth, ...rest }) {
    return (
        <Route {...rest} render={props => isAuth ? (<Component {...props} />) : (<Redirect to={{ pathname: "/login" }} />)} />
    );
}

const ProtectedRouterContainer = withRouter(connect(state => ({
    isAuth: state.auth.isAuthenticated
}))(ProtectedRoute));
export default ProtectedRouterContainer;