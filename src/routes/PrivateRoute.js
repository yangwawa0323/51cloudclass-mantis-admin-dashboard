/* eslint-disable no-unused-vars */
import * as React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = () => {
    const isLoggedIn = useSelector((state) => state.auth?.isLoggedIn);
    // const isLoggedIn = true;
    return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
