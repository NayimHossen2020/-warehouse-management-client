import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaUserAlt } from 'react-icons/fa';
import './SignUp.css';

const SignUp = () => {
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();

    const handleSignUp = (event) => {
        event.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        console.log(name, email, password);
    }
    return (
        <div onSubmit={handleSignUp} className="login-form signIn mb-5">
            <form className='shadow-sm'>
                <div className="avatar"><i className="material-icons"><FaUserAlt /></i></div>
                <h4 className="modal-title">Create an account</h4>
                <div className="form-group">
                    <input ref={nameRef} type="text" className="form-control" placeholder="Username" required="required" />
                </div>
                <div className="form-group">
                    <input ref={emailRef} type="text" className="form-control" placeholder="Email" required="required" />
                </div>
                <div className="form-group">
                    <input ref={passwordRef} type="password" className="form-control" placeholder="Password" required="required" />
                </div>
                <input type="submit" className="main-button w-100" value="SIGN UP" />
            </form>
            <div className="text-center small fs-6">Have an account? <Link to="/signIn">Sign In</Link></div>
        </div>
    );
};

export default SignUp;