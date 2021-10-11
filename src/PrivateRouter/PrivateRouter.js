import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../Context/useAuth';

const PrivateRouter = ({children, ...rest}) => {
    const {user} = useAuth()
    return (
        <Route
        {...rest}
        render = {({location}) => user.email ? children :
        <Redirect
            to={{
                pathname : "/register",
                state: {form: location}
            }}
        ></Redirect>}
        >

        </Route>
    );
};

export default PrivateRouter;