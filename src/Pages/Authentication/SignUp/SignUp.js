import React, { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaUserAlt } from 'react-icons/fa';
import './SignUp.css';
import SocialLogin from '../SocialLogin/SocialLogin';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { toast } from 'react-toastify';

const SignUp = () => {
    const [agree, setAgree] = useState(false);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const [updateProfile, updating, UpdateError] = useUpdateProfile(auth);

    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const ConfirmPasswordRef = useRef();
    const navigate = useNavigate();


    let showLoading;
    if (loading || updating) {
        showLoading = <p>Loading...</p>;
    }

    let showError;
    if (error || UpdateError) {
        showError = <p className='text-danger'>Error: {error?.message}</p>
    }

    if (user) {
        toast('Your account created successful');
        navigate('/home');
    }

    const handleSignUp = async (event) => {
        event.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const confirmPassword = ConfirmPasswordRef.current.value;

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
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
                    <input ref={emailRef} type="email" name='email' className="form-control" placeholder="Email" required />
                </div>
                <div className="form-group">
                    <input ref={passwordRef} type="password" name='password' className="form-control" placeholder="Password" required />
                </div>
                <div className="form-group">
                    <input ref={ConfirmPasswordRef} type="password" name='password' className="form-control" placeholder="Confirm Password" required />
                </div>
                <div className='mb-2'>
                    <input onClick={() => setAgree(!agree)} type="checkbox" name="trams" id="trams" />
                    <label className={`ps-2 ${agree ? "" : 'text-danger'}`} htmlFor="trams">Accept our trams and condition</label>
                </div>
                {showError}
                {showLoading}
                <input type="submit" disabled={!agree} className="main-button w-100" value="SIGN UP" />
                <div className="mt-3 small fs-6">Have an account? <Link to="/signIn">Sign In</Link></div>
            </form>
        </div>
    );
};

export default SignUp;