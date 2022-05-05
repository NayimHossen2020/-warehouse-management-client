import React from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../Firebase/firebase.init';
import Loading from '../../../Shared/Loading/Loading';
import { sendEmailVerification } from 'firebase/auth';
import { toast } from 'react-toastify';
import './ReqioreAuth.css';

const RequireAuth = ({ children }) => {
    const [user, loading, error] = useAuthState(auth);
    let location = useLocation();
    if (loading) {
        return <Loading />
    }

    if (error) {
        console.log(error.message);
    }

    if (user?.providerData[0]?.providerId === 'password' && !user.emailVerified) {
        return (
            <div className="d-flex justify-content-center align-items-center">
                <div className='shadow-sm verify-style'>
                    <h3 className='text-danger'>Your email is not verified</h3>
                    <h5 className='text-success'>Please verify your email</h5>
                    <button
                        className='btn btn-primary'
                        onClick={async () => {
                            await sendEmailVerification();
                            toast('Verification Email Send');
                        }}
                    >
                        Verification Email Again
                    </button>
                </div>
            </div>
        )
    }

    if (!user) {
        return <Navigate to="/signIn" state={{ from: location }} replace />;
    }

    return children;
}

export default RequireAuth;