import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserAlt } from 'react-icons/fa';
import './SignUp.css';

const SignUp = () => {
    return (
        <div className="login-form signIn mb-5">
            <form className='shadow-sm'>
                <div className="avatar"><i className="material-icons"><FaUserAlt /></i></div>
                <h4 className="modal-title">Create an account</h4>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Username" required="required" />
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Email" required="required" />
                </div>
                <div className="form-group">
                    <input type="password" className="form-control" placeholder="Password" required="required" />
                </div>
                <input type="submit" className="main-button w-100" value="SIGN UP" />
            </form>
            <div className="text-center small fs-6">Have an account? <Link to="/signIn">Sign In</Link></div>
        </div>
    );
};

export default SignUp;