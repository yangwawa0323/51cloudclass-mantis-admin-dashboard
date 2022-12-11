/* eslint-disable no-unused-vars */
import * as React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PublicRoute = () => {
    const isLoggedIn = useSelector((state) => state.auth?.isLoggedIn);
    const isAuthenticted = isLoggedIn && localStorage.getItem('token');

    return isAuthenticted ? <Navigate to="/dashboard/default" /> : <Outlet />;
};

export default PublicRoute;
