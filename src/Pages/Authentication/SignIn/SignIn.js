import React, { useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaUserAlt } from 'react-icons/fa';
import './SignIn.css';
import SocialLogin from '../SocialLogin/SocialLogin';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const SignIn = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const emailRef = useRef();
    const passwordRef = useRef();

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

    if (user) {
        navigate(from, { replace: true });
    }

    const handleSignIn = (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password);
    }
    return (
        <div className="login-form total-form signIn mb-5 shadow-sm">
            <div className="avatar"><i><FaUserAlt /></i></div>
            <h4 className="modal-title">Account SignIn</h4>
            <SocialLogin />
            <form onSubmit={handleSignIn}>
                <div className="form-group">
                    <input ref={emailRef} type="text" className="form-control" placeholder="Email" required="required" />
                </div>
                <div className="form-group">
                    <input ref={passwordRef} type="password" className="form-control" placeholder="Password" required="required" />
                </div>
                {showError}
                {showLoading}
                <input type="submit" className="main-button w-100" value="SIGN IN" />
                <div className="form-group small clearfix">
                    <div className="mt-3 fs-6 small">
                        Don't have an account? <Link to="/signUp">Sign up</Link>
                    </div>
                    <div className="fs-6 small">
                        <Link to="#" className="forgot-link">Forgot Password?</Link>
                    </div>
                </div>

            </form>
        </div>
    );
};

export default SignIn;