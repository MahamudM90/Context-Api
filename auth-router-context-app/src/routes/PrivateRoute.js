import React from 'react';
import { Navigate } from 'react-router-dom';
import UserContext from '../context/UserContext';
import { AuthContext } from '../context/UserContext';

const PrivateRoute = ({children}) => {
    const {user, loading} = UserContext(AuthContext)
    if (loading) {
        return <div>Loading...</div>
    }
    if(user && user.uid) {
        return children;
    }
    return <Navigate to='/login'></Navigate>
};

export default PrivateRoute;