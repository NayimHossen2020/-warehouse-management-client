import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaUserAlt } from 'react-icons/fa';
import './SignIn.css';

const SignIn = () => {
    const emailRef = useRef();
    const passwordRef = useRef();

    const handleSignIn = (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        console.log(email, password);
    }
    return (
        <div onSubmit={handleSignIn} className="login-form signIn mb-5">
            <form className='shadow-sm'>
                <div className="avatar"><i><FaUserAlt /></i></div>
                <h4 className="modal-title">Account SignIn</h4>
                <div className="form-group">
                    <input ref={emailRef} type="text" className="form-control" placeholder="Email" required="required" />
                </div>
                <div className="form-group">
                    <input ref={passwordRef} type="password" className="form-control" placeholder="Password" required="required" />
                </div>
                <div className="form-group small clearfix">
                    <Link to="#" className="forgot-link">Forgot Password?</Link>
                </div>
                <input type="submit" className="main-button w-100" value="SIGN IN" />
            </form>
            <div className="text-center fs-6 small">Don't have an account? <Link to="/signUp">Sign up</Link></div>
        </div>
    );
};

export default SignIn;