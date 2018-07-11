import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import {MainNavbar} from './MainNavbar';
export const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        localStorage.getItem('user')
           
        ?     <div><MainNavbar/><Component {...props} /></div>
            : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
    )} />
)