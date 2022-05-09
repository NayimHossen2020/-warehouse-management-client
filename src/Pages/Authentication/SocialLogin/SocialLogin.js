import React from 'react';
import './SocialLogin.css';
import { FcGoogle } from 'react-icons/fc';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../Firebase/firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';
import useToken from '../../../Hooks/useToken';
const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const [token] = useToken(user);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    let showLoading;
    if (loading) {
        showLoading = <p>Loading...</p>;
    }

    let showError;
    if (error) {
        showError = <p className='text-danger'>Error: {error.message}</p>
    }

    if (token) {
        navigate(from, { replace: true });
    }

    return (
        <div>
            <div>
                {showLoading}
                {showError}
                <button onClick={() => signInWithGoogle()} className='w-100 social-button p-2 fw-bold'><FcGoogle className='me-2' />Google signIn</button>
            </div>
            <div className='d-flex align-items-center'>
                <div className='or-style'></div>
                <p className='mt-2 m-2'>OR</p>
                <div className='or-style'></div>
            </div>
        </div>
    );
};

export default SocialLogin;