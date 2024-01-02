import React from 'react';
import {useAuth} from "./context/AuthProvider"
import { Navigate, Outlet } from 'react-router-dom';

function ProtectedRoute(props) {
    const {user, isAuthenticated} = useAuth()

    if(!isAuthenticated) return <Navigate to='/login' replace></Navigate>
    return <Outlet/>
}

export default ProtectedRoute;