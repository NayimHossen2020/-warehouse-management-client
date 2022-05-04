import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaUserAlt } from 'react-icons/fa';
import './SignUp.css';
import SocialLogin from '../SocialLogin/SocialLogin';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const SignUp = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const ConfirmPasswordRef = useRef();
    const navigate = useNavigate();


    let showLoading;
    if (loading) {
        showLoading = <p>Loading...</p>;
    }

    let showError;
    if (error) {
        showError = <p className='text-danger'>Error: {error.message}</p>
    }

    if (user) {
        navigate('/home')
    }

    const handleSignUp = (event) => {
        event.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const confirmPassword = ConfirmPasswordRef.current.value;

        createUserWithEmailAndPassword(email, password);
    }
    return (
        <div className="login-form total-form signIn mb-5 shadow-sm">
            <div className="avatar"><i className="material-icons"><FaUserAlt /></i></div>
            <h4 className="modal-title">Create an account</h4>
            <SocialLogin />
            <form onSubmit={handleSignUp}>
                <div className="form-group">
                    <input ref={nameRef} type="text" name='name' className="form-control" placeholder="Username" />
                </div>
                <div className="form-group">
                    <input ref={emailRef} type="text" name='email' className="form-control" placeholder="Email" required />
                </div>
                <div className="form-group">
                    <input ref={passwordRef} type="password" name='password' className="form-control" placeholder="Password" required />
                </div>
                <div className="form-group">
                    <input ref={ConfirmPasswordRef} type="password" name='password' className="form-control" placeholder="Password" required />
                </div>
                {showError}
                {showLoading}
                <input type="submit" className="main-button w-100" value="SIGN UP" />
                <div className="mt-3 small fs-6">Have an account? <Link to="/signIn">Sign In</Link></div>
            </form>
        </div>
    );
};

export default SignUp;