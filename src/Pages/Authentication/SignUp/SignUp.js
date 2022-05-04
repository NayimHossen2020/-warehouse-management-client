import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaUserAlt } from 'react-icons/fa';
import './SignUp.css';
import SocialLogin from '../SocialLogin/SocialLogin';

const SignUp = () => {
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const ConfirmPasswordRef = useRef();

    const handleSignUp = (event) => {
        event.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const confirmPassword = ConfirmPasswordRef.current.value;
        console.log(name, email, password, confirmPassword);
    }
    return (
        <div className="login-form total-form signIn mb-5 shadow-sm">
            <div className="avatar"><i className="material-icons"><FaUserAlt /></i></div>
            <h4 className="modal-title">Create an account</h4>
            <SocialLogin />
            <form onSubmit={handleSignUp}>
                <div className="form-group">
                    <input ref={nameRef} type="text" name='name' className="form-control" placeholder="Username" required="required" />
                </div>
                <div className="form-group">
                    <input ref={emailRef} type="text" name='email' className="form-control" placeholder="Email" required="required" />
                </div>
                <div className="form-group">
                    <input ref={passwordRef} type="password" name='password' className="form-control" placeholder="Password" required="required" />
                </div>
                <div className="form-group">
                    <input ref={ConfirmPasswordRef} type="password" name='password' className="form-control" placeholder="Password" required="required" />
                </div>
                <input type="submit" className="main-button w-100" value="SIGN UP" />
                <div className="mt-3 small fs-6">Have an account? <Link to="/signIn">Sign In</Link></div>
            </form>
        </div>
    );
};

export default SignUp;