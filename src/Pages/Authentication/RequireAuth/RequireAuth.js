import React from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loading from '../../../Shared/Loading/Loading';

const RequireAuth = ({ children }) => {
    const [user, loading, error] = useAuthState(auth);
    let location = useLocation();
    if (loading) {
        return <Loading />
    }

    if (error) {
        console.log(error.message);
    }

    if (!user) {
        return <Navigate to="/signIn" state={{ from: location }} replace />;
    }

    return children;
}

export default RequireAuth;